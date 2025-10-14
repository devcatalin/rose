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
- Image: docker-ce (Ubuntu 24.04 with Docker & Docker Compose pre-installed)
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
- Platform directory: `/srv/rose/platform`
- Traefik certs: `/var/lib/traefik/acme/acme.json` (persisted)
- Deploy key: `/home/deploy/.ssh/id_ed25519`

**SSH Access:**

```bash
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245
```

**Provisioning Architecture:**

The provisioning process is split into three clear stages:

1. **`platform/cloud-init.yaml`**: System-level setup only

   - Runs automatically on VPS first boot via Hetzner's user-data mechanism
   - Configures: firewall, users, packages, directories, SSH setup
   - Does NOT clone repo or start services (no deploy key available yet)
   - Logs completion to `/var/log/cloud-init-completion.log`

2. **`platform/scripts/bootstrap.sh`**: Application setup

   - Copied to VPS by `create_vps.sh` after cloud-init completes
   - Clones the repository using deploy key
   - Starts docker compose services
   - Idempotent - can be re-run safely

3. **`platform/scripts/create_vps.sh`**: Orchestration
   - Creates VPS with cloud-init.yaml as user-data
   - Waits for cloud-init to complete
   - Copies deploy key + bootstrap.sh to VPS
   - Runs bootstrap.sh to clone repo and start services
   - Configures floating IP networking

**Key Insight:** Cloud-init cannot clone the repo because the deploy key (`~/.ssh/rose_repo_deploy`) only exists on the local machine and must be copied by the provisioning script. This is why application setup is separated into `bootstrap.sh`.

**Cloud-Init Templating:**

- Uses Hetzner's `docker-ce` app image with Docker pre-installed
- Passed via `--user-data-from-file` flag in `hcloud server create`
- No Docker installation needed - comes ready in the image

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
- Docker comes pre-installed (no installation retries needed)
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
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "cd /srv/rose/platform && docker compose ps"
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
# Full output log (shows all cloud-init execution including errors)
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "sudo cat /var/log/cloud-init-output.log"

# Check if cloud-init completed successfully
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "cat /var/log/cloud-init-completion.log"
# Should show: "✅ Cloud-init complete at [timestamp]"

# Status summary
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "sudo cloud-init status --long"

# Check what cloud-init actually received as user-data
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "sudo cat /var/lib/cloud/instance/user-data.txt"
```

### Test Bootstrap Script

```bash
# Copy and run bootstrap script manually
scp -i ~/.ssh/deploy_vps_key platform/scripts/bootstrap.sh deploy@49.12.112.245:/tmp/test-bootstrap.sh
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "chmod +x /tmp/test-bootstrap.sh && /tmp/test-bootstrap.sh"
```

### Check Network Config

```bash
# Verify floating IP is bound
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "ip addr show eth0 | grep inet"
# Should show both main IP and 49.12.112.245/32

# Check systemd-networkd config
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "cat /etc/systemd/network/60-floating-ip.network"
```

## 🤖 AI Agent Workflow

**CRITICAL: Always test changes manually on VPS before reprovisioning!**

Reprovisioning takes 2-3 minutes and destroys the current VPS. Always validate your changes work by running commands directly on the VPS first.

### Workflow for Making Infrastructure Changes

1. **Make changes locally** to config files (`cloud-init.yaml`, `docker-compose.yml`, etc.)

2. **Test changes manually on VPS** by running the equivalent commands:

   ```bash
   # Example: Testing a docker compose change
   ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "cd /srv/rose/platform && docker compose up -d new-service"

   # Example: Testing a firewall rule
   ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "sudo ufw allow 8080/tcp"

   # Example: Testing a file change
   ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "cat > /tmp/test-config.yml << 'EOF'
   # your config here
   EOF"
   ```

3. **Verify the changes work** by checking logs, testing endpoints, etc.

4. **Only then ask the user to reprovision** with the validated changes

5. **After user confirms reprovisioning**, verify the automated setup works:
   ```bash
   # Check services came up correctly
   ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "docker ps"
   ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "docker logs <service> --tail 20"
   ```

### Essential VPS Commands

```bash
# Run any command on VPS
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "<command>"

# Check running containers
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "docker ps"

# View service logs
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "docker logs <service> --tail 50"

# Check service status
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "cd /srv/rose/platform && docker compose ps"

# Restart a service
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "cd /srv/rose/platform && docker compose restart <service>"

# Apply docker compose changes
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "cd /srv/rose/platform && docker compose up -d"

# Check cloud-init status
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "sudo cloud-init status --long"

# View cloud-init logs
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "sudo cat /var/log/cloud-init-output.log"

# Check system resources
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "df -h"
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "free -h"

# Check network connectivity
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "ip addr show eth0"
ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "curl -I https://hub.devcatalin.com"
```
