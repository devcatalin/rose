# Agent Context: Rose Platform

Essential non-obvious context for working with this infrastructure. File contents and code can be read directly from the repository.

## 🌐 Infrastructure Setup

**DNS Configuration:**

- Wildcard DNS: `*.devcatalin.com` → 49.12.112.245
- Apex domain: `devcatalin.com` → 49.12.112.245
- All subdomains automatically route to the floating IP

**Floating IP:**

- Address: `49.12.112.245`
- Hetzner name: `hub-ip`
- Persistent across VPS reprovisioning
- Must be configured at OS level via systemd-networkd

**Hetzner VPS:**

- Server name: `hub`
- Type: CPX11 (2 vCPU, 2GB RAM)
- Location: fsn1 (Falkenstein, Germany)
- Image: ubuntu-24.04
- Main IP: Changes on each reprovision (obtained from hcloud API)
- SSH key name in Hetzner: `default`

**Local Machine Requirements:**

- `hcloud` CLI installed with token at `~/.config/hcloud_token`
- `jq` for JSON parsing
- SSH key for VPS access: `~/.ssh/deploy_vps_key`
- SSH key for repo access: `~/.ssh/rose_repo_deploy` (added as GitHub deploy key)

**VPS User:**

- Username: `deploy`
- Groups: `docker`
- Sudo: Only `cloud-init` command (passwordless)
- SSH: Key-based only, password auth disabled
- Root SSH: Disabled

**Key File Locations on VPS:**

- Repository: `/srv/rose`
- Platform symlink: `/srv/platform` → `/srv/rose/platform`
- Traefik certs: `/var/lib/traefik/acme/acme.json` (persisted)
- Deploy key: `/home/deploy/.ssh/id_ed25519`

**SSH Access:**

```bash
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245
```

**Cloud-Init Templating:**

- `platform/cloud-init.yaml` contains `__FLOATING_IP__` placeholder
- `create_vps.sh` renders it with actual floating IP before server creation
- Docker installed from official repository with 5-attempt retry logic
- Logs retries to `/var/log/cloud-init-rose.log`

**GitHub Secrets Required:**

- `VPS_HOST`: 49.12.112.245 (use floating IP)
- `VPS_USER`: `deploy`
- `VPS_SSH_KEY`: Private key content from `~/.ssh/deploy_vps_key`

## 🧪 Testing & Validation

### Provision Fresh VPS

```bash
cd /Users/catalin/Projects/rose
./platform/scripts/create_vps.sh
```

Expected:

- Completes in ~2-3 minutes
- May show cloud-init warnings if Docker install required retries
- Ends with "✅ Done: hub is up"
- Services live at `https://hub.devcatalin.com`

### Verify Services

```bash
# Running containers
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "docker ps"

# Traefik logs
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "docker logs traefik --tail 50"

# Dashy logs
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "docker logs dashy --tail 50"

# Service status
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "cd /srv/platform && docker compose ps"
```

### Test HTTPS

```bash
# Dashy dashboard
curl -I https://hub.devcatalin.com
# Expect: HTTP/2 200

# HTTP redirect
curl -I http://hub.devcatalin.com
# Expect: HTTP/1.1 301 → https

# Any subdomain (wildcard)
curl -I https://test.devcatalin.com
# Will hit Traefik (404 if no service configured)
```

### Test CD Pipeline

```bash
# Make change and push
git commit -am "Test deployment"
git push origin main

# Watch: https://github.com/devcatalin/rose/actions
# Wait ~30s, then verify
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "git -C /srv/rose log -1"
```

### Validate Config Locally

```bash
cd /Users/catalin/Projects/rose/platform
docker compose config  # Should output valid YAML
```

### Debug Cloud-Init

```bash
# Full output log
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "sudo cat /var/log/cloud-init-output.log"

# Status summary
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "sudo cloud-init status --long"

# Retry log (if Docker install had issues)
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "cat /var/log/cloud-init-rose.log"
```

### Check Network Config

```bash
# Verify floating IP is bound
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "ip addr show eth0 | grep inet"
# Should show both main IP and 49.12.112.245/32

# Check systemd-networkd config
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "cat /etc/systemd/network/60-floating-ip.network"
```

## 🔥 Common Issues & Solutions

### Docker Not Available

**Symptom:** `docker: command not found` when `create_vps.sh` runs

**Cause:** Cloud-init package installation failed or timed out

**Solution:**

```bash
# Check cloud-init status
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "sudo cloud-init status --long"

# Check retry log
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "cat /var/log/cloud-init-rose.log"

# Manually install Docker from official repo (then fix cloud-init.yaml)
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "sudo apt-get update && sudo apt-get install -y docker-ce docker-compose-plugin"
```

### Floating IP Not Reachable

**Symptom:** SSH works on main IP but not 49.12.112.245

**Cause:** systemd-networkd hasn't bound the floating IP to eth0

**Solution:**

```bash
# Get main IP from Hetzner or create_vps.sh output
MAIN_IP="168.119.152.6"  # example

# Check interface config
ssh -i ~/.ssh/deploy_vps_key deploy@$MAIN_IP "ip addr show eth0"

# Verify systemd-networkd file exists
ssh -i ~/.ssh/deploy_vps_key deploy@$MAIN_IP "cat /etc/systemd/network/60-floating-ip.network"

# Restart network if needed
ssh -i ~/.ssh/deploy_vps_key deploy@$MAIN_IP "sudo systemctl restart systemd-networkd"
```

### Let's Encrypt Fails

**Symptom:** HTTPS not working, Traefik shows ACME errors

**Cause:** DNS not resolving to 49.12.112.245, or ports blocked

**Solution:**

```bash
# Verify DNS
dig +short hub.devcatalin.com
# Must return: 49.12.112.245

# Check Traefik ACME logs
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "docker logs traefik 2>&1 | grep -i acme"

# Test from outside (should not timeout)
curl -I http://hub.devcatalin.com
```

### GitHub Actions Fails

**Symptom:** CI can't pull repo or run docker commands

**Cause:** Deploy key missing or wrong permissions

**Solution:**

```bash
# Verify deploy key
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "ls -la ~/.ssh/id_ed25519"

# Test GitHub SSH
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "ssh -T git@github.com"
# Should say: "Hi devcatalin/rose! You've successfully authenticated"

# Re-copy if needed
scp -i ~/.ssh/deploy_vps_key ~/.ssh/rose_repo_deploy deploy@49.12.112.245:~/.ssh/id_ed25519
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "chmod 600 ~/.ssh/id_ed25519"
```

## 🚀 Making Changes

### Add Service to Compose

1. Update `platform/docker-compose.yml` with new service + Traefik labels
2. No DNS change needed (wildcard covers all subdomains)
3. Commit and push—GitHub Actions deploys automatically
4. Verify: `curl -I https://newservice.devcatalin.com`

### Update Image Version

1. Change tag in `platform/docker-compose.yml`
2. Push—CI pulls new image and recreates container

### Change Cloud-Init

1. Edit `platform/cloud-init.yaml`
2. **Reprovision required:** `./platform/scripts/create_vps.sh`
3. Cloud-init only runs on first boot

## 📝 Best Practices

- **Pinned tags only** - Never `:latest`
- **Validate first** - `docker compose config` before push
- **Monitor deploys** - Watch GitHub Actions + logs
- **Reprovision often** - Keeps setup reproducible

## � Security Notes

- `deploy` user: minimal sudo (cloud-init only), no password
- Root SSH: disabled
- UFW: only 22, 80, 443 open
- TLS: auto-renewed by Traefik
- Docker socket: read-only mount to Traefik

## �📚 Reference

- Hetzner Cloud: https://docs.hetzner.com/cloud/
- Cloud-Init: https://cloudinit.readthedocs.io/
- Traefik: https://doc.traefik.io/traefik/
- Let's Encrypt rate limits: https://letsencrypt.org/docs/rate-limits/
