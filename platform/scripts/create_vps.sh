#!/usr/bin/env bash
# platform/scripts/create_vps.sh
# Recreate a Hetzner VPS (CPX11) with platform/cloud-init.yaml
# Assign the floating IP "hub-ipecho ""
echo "✅ Done: $NAME is up and has floating IP $FIP_ADDR"
echo ""
echo "📋 Server Details:"
echo "   • Server ID: $SERVER_ID"
echo "   • Main IP: $MAIN_IP"
echo "   • Floating IP: $FIP_ADDR"
echo ""
echo "🔗 Access:"
echo "   • Deploy user: ssh -i $VPS_SSH_KEY deploy@$FIP_ADDR"
echo "   • Root user:   ssh -i $VPS_SSH_KEY root@$FIP_ADDR"
echo "   • Or via main IP: ssh -i $VPS_SSH_KEY deploy@$MAIN_IP"
echo ""
echo "🐳 Docker Services:"
ssh -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no "deploy@$MAIN_IP" \
  "docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'" 2>/dev/null || echo "   (Could not retrieve container status)"utput for reliability.

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

# Remove old SSH host keys (in case IPs are reused)
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

echo -n "==> Waiting for server ($SERVER_ID) to start..."
for i in {1..30}; do
  STATUS="$(hcloud server describe "$SERVER_ID" -o json | jq -r '.status')"
  [[ "$STATUS" == "running" ]] && { echo " ✓"; break; }
  echo -n "."
  sleep 2
done

echo "==> Assigning floating IP '$FLOATING_IP_NAME' → '$NAME'..."
hcloud floating-ip assign "$FLOATING_IP_NAME" "$SERVER_ID" >/dev/null

# Get the server's main IP for initial connection
MAIN_IP="$(echo "$CREATE_JSON" | jq -r '.server.public_net.ipv4.ip')"
echo "==> Server main IP: $MAIN_IP, floating IP: $FIP_ADDR"

# Remove the main IP's old SSH key too
ssh-keygen -R "$MAIN_IP" >/dev/null 2>&1 || true

echo -n "==> Waiting for SSH to become available"
for i in {1..60}; do
  if ssh -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no -o ConnectTimeout=2 "deploy@$MAIN_IP" exit 2>/dev/null; then
    echo " ✓ (${i}s)"
    break
  fi
  [[ $i -eq 60 ]] && { echo " ❌ SSH not available after 60 attempts"; exit 1; }
  echo -n "."
  sleep 1
done

echo -n "==> Waiting for cloud-init to complete"
ssh -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no "deploy@$MAIN_IP" \
  'while [ "$(sudo cloud-init status 2>/dev/null | grep -oP "status: \K\w+")" != "done" ]; do echo -n "."; sleep 2; done' 2>/dev/null || true
CLOUD_INIT_STATUS=$(ssh -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no "deploy@$MAIN_IP" 'sudo cloud-init status 2>/dev/null | grep -oP "status: \K\w+"' || echo "unknown")
if [[ "$CLOUD_INIT_STATUS" == "done" ]]; then
  echo " ✓"
else
  echo " ⚠️  (status: $CLOUD_INIT_STATUS)"
  echo "==> Checking cloud-init logs for errors..."
  ssh -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no "deploy@$MAIN_IP" \
    'sudo tail -50 /var/log/cloud-init-output.log'
fi

echo -n "==> Configuring floating IP on network interface"
ssh -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no "deploy@$MAIN_IP" \
  "sudo ip addr add $FIP_ADDR/32 dev eth0 2>/dev/null || true && \
   sudo ip route add $FIP_ADDR dev eth0 2>/dev/null || true" && echo -n "."

# Persist the floating IP configuration for reboots
ssh -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no "deploy@$MAIN_IP" \
  "sudo tee /etc/systemd/network/60-floating-ip.network > /dev/null <<EOF
[Match]
Name=eth0

[Network]
Address=$FIP_ADDR/32
EOF
" && echo -n "."

ssh -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no "deploy@$MAIN_IP" \
  "sudo systemctl restart systemd-networkd" && echo " ✓"

echo -n "==> Copying repo deploy key to VPS"
scp -q -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no \
  "$REPO_DEPLOY_KEY" "deploy@$MAIN_IP:/home/deploy/.ssh/id_ed25519" && echo -n "."

ssh -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no "deploy@$MAIN_IP" \
  "chmod 600 /home/deploy/.ssh/id_ed25519" && echo " ✓"

echo -n "==> Cloning repository"
ssh -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no "deploy@$MAIN_IP" \
  "cd /srv/rose && git clone git@github.com:devcatalin/rose.git . 2>&1 | grep -v 'Cloning into' || true" && echo " ✓"

echo -n "==> Starting docker services"
ssh -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no "deploy@$MAIN_IP" \
  "cd /srv/platform && docker compose up -d 2>&1" > /tmp/docker_compose_output.log && echo " ✓" || {
    echo " ⚠️"
    echo "Docker compose output:"
    cat /tmp/docker_compose_output.log
  }

echo -n "==> Testing floating IP connectivity"
for i in {1..10}; do
  if ssh -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no -o ConnectTimeout=2 "deploy@$FIP_ADDR" exit 2>/dev/null; then
    echo " ✓ (${i}s)"
    break
  fi
  [[ $i -eq 10 ]] && { echo " ⚠️  (floating IP may not be fully active yet)"; }
  echo -n "."
  sleep 1
done

echo ""
echo "✅ Done: $NAME is up and has floating IP $FIP_ADDR"
echo ""
echo "� Server Details:"
echo "   • Server ID: $SERVER_ID"
echo "   • Main IP: $MAIN_IP"
echo "   • Floating IP: $FIP_ADDR"
echo ""
echo "🔗 Access:"
echo "   • Deploy user: ssh -i $VPS_SSH_KEY deploy@$FIP_ADDR"
echo "   • Root user:   ssh -i $VPS_SSH_KEY root@$FIP_ADDR"
echo ""
echo "🐳 Docker Services:"
ssh -i "$VPS_SSH_KEY" -o StrictHostKeyChecking=no "deploy@$FIP_ADDR" \
  "docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'" 2>/dev/null || echo "   (Could not retrieve container status)"
