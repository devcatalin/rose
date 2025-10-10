#!/usr/bin/env bash
# platform/scripts/create_vps.sh
# Recreate a Hetzner VPS (CPX11) with platform/cloud-init.yaml
# Assign the floating IP "hub-ip", using JSON output for reliability.

set -euo pipefail
trap 'echo "❌ Error on line $LINENO" >&2' ERR

# === Config (edit me) ===
NAME="hub"                          # Server name
TYPE="cpx11"                        # Plan
IMAGE="ubuntu-24.04"                # Base image
LOCATION="fsn1"                     # fsn1 | hel1 | nbg1
SSH_KEY_NAME="default"              # Name of SSH key in Hetzner project
CLOUD_INIT_FILE="platform/cloud-init.yaml"
HCLOUD_TOKEN_FILE="$HOME/.config/hcloud_token"
FLOATING_IP_NAME="hub-ip"           # Existing floating IP in Hetzner Cloud
REPO_DEPLOY_KEY="$HOME/.ssh/rose_repo_deploy"  # Private key for git clone
VPS_SSH_KEY="$HOME/.ssh/deploy_vps_key"        # SSH key to connect to VPS
# ========================

command -v hcloud >/dev/null 2>&1 || { echo "❌ Missing 'hcloud' CLI"; exit 1; }
command -v jq >/dev/null 2>&1      || { echo "❌ Missing 'jq'"; exit 1; }

[[ -f "$HCLOUD_TOKEN_FILE" ]] || { echo "❌ Missing token file: $HCLOUD_TOKEN_FILE"; exit 1; }
export HCLOUD_TOKEN="$(<"$HCLOUD_TOKEN_FILE")"

[[ -f "$CLOUD_INIT_FILE" ]] || { echo "❌ Missing $CLOUD_INIT_FILE"; exit 1; }

echo "==> Checking floating IP '$FLOATING_IP_NAME'..."
FIP_JSON="$(hcloud floating-ip describe "$FLOATING_IP_NAME" -o json)"
FIP_ADDR="$(echo "$FIP_JSON" | jq -r '.ip')"
[[ -n "$FIP_ADDR" && "$FIP_ADDR" != "null" ]] || { echo "❌ Floating IP has no address"; exit 1; }

# Remove old SSH host key for this floating IP (in case IP is reused)
ssh-keygen -R "$FIP_ADDR" >/dev/null 2>&1 || true

# Delete old server if it exists
if hcloud server describe "$NAME" >/dev/null 2>&1; then
  echo "==> Deleting old server '$NAME'..."
  hcloud server delete "$NAME"
  sleep 3
fi

echo "==> Creating new server '$NAME' ($TYPE, $IMAGE, $LOCATION)..."
CREATE_JSON="$(hcloud server create \
  --name "$NAME" \
  --type "$TYPE" \
  --image "$IMAGE" \
  --location "$LOCATION" \
  --ssh-key "$SSH_KEY_NAME" \
  --user-data-from-file "$CLOUD_INIT_FILE" \
  --start-after-create \
  -o json)"

SERVER_ID="$(echo "$CREATE_JSON" | jq -r '.server.id')"

echo "==> Waiting for server ($SERVER_ID) to start..."
for _ in {1..30}; do
  STATUS="$(hcloud server describe "$SERVER_ID" -o json | jq -r '.status')"
  [[ "$STATUS" == "running" ]] && break
  sleep 2
done

echo "==> Assigning floating IP '$FLOATING_IP_NAME' → '$NAME'..."
hcloud floating-ip assign "$FLOATING_IP_NAME" "$SERVER_ID" >/dev/null

# Get the server's main IP for initial connection
MAIN_IP="$(echo "$CREATE_JSON" | jq -r '.server.public_net.ipv4.ip')"
echo "==> Server main IP: $MAIN_IP, floating IP: $FIP_ADDR"

echo "==> Waiting for cloud-init to complete (60s)..."
sleep 60

echo "==> Configuring floating IP on network interface..."
ssh -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no "root@$MAIN_IP" \
  "ip addr add $FIP_ADDR/32 dev eth0 2>/dev/null || true && \
   ip route add $FIP_ADDR dev eth0 2>/dev/null || true"

# Persist the floating IP configuration for reboots
ssh -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no "root@$MAIN_IP" \
  "cat > /etc/systemd/network/60-floating-ip.network <<EOF
[Match]
Name=eth0

[Network]
Address=$FIP_ADDR/32
EOF
systemctl restart systemd-networkd"

echo "==> Waiting for floating IP to become active (5s)..."
sleep 5

echo "==> Copying repo deploy key to VPS..."
scp -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no \
  "$REPO_DEPLOY_KEY" "deploy@$FIP_ADDR:/home/deploy/.ssh/id_ed25519"

echo "==> Setting permissions on deploy key..."
ssh -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no "deploy@$FIP_ADDR" \
  "chmod 600 /home/deploy/.ssh/id_ed25519"

echo "✅ Done: $NAME is up and has floating IP $FIP_ADDR"
echo "👉 SSH with: ssh -i $VPS_SSH_KEY deploy@$FIP_ADDR"
