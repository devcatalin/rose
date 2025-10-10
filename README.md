# Rose - GitOps Hub Platform

A GitOps-driven platform for hosting development tools and services with automated deployment, TLS certificates, and zero-downtime updates.

## 🎯 Overview

This repository contains the infrastructure-as-code for **hub.devcatalin.com**, featuring:

- **Traefik** reverse proxy with automatic Let's Encrypt TLS certificates
- **Dashy** dashboard for service organization
- **GitHub Actions** for continuous deployment to VPS
- **Docker Compose** for service orchestration

## 🚀 Quick Start

### Initial Setup

1. **Generate Deploy Key:**

   ```bash
   ssh-keygen -t ed25519 -f ~/.ssh/rose_repo_deploy -C "rose-repo-deploy" -N ""
   ```

   Add the public key (`~/.ssh/rose_repo_deploy.pub`) as a read-only Deploy Key in GitHub.

2. **Configure Secrets:**
   Set these in your GitHub repository settings:

   - `VPS_HOST` - Your VPS floating IP (e.g., `168.119.152.6`)
   - `VPS_USER` - SSH username (e.g., `deploy`)
   - `VPS_SSH_KEY` - Private SSH key for VPS access

3. **DNS Configuration:**
   Point `hub.devcatalin.com` A/AAAA records to your VPS floating IP

### Provisioning a New VPS

Use the included script to create and configure a fresh VPS:

```bash
cd platform/scripts
./create_vps.sh
```

This script:

- Creates a Hetzner VPS with cloud-init configuration
- Installs Docker, configures firewall, creates the `deploy` user
- Copies the repo deploy key to the VPS
- Clones this repository and starts all services automatically

The VPS is fully operational within ~2 minutes of creation.

### Continuous Deployment

Simply push to the `main` branch - GitHub Actions will automatically:

1. Pull the latest code on the VPS via git
2. Pull updated Docker images
3. Deploy services with zero-downtime
4. Verify the deployment

First deployment typically takes 1-2 minutes for Let's Encrypt certificate issuance.

## 📁 Repository Structure

```
.github/workflows/deploy.yml      # CI/CD workflow
platform/
  cloud-init.yaml                 # VPS provisioning configuration
  docker-compose.yml              # Service definitions
  scripts/create_vps.sh           # VPS creation script
  traefik/dynamic/                # Dynamic Traefik config (optional)
  services/dashy/conf.yml         # Dashy dashboard configuration
```

## 🔧 Local Testing

To test the configuration locally:

```bash
cd platform
docker compose config  # Validate syntax
docker compose up -d   # Start services
docker compose logs -f # View logs
```

**Note:** Local testing will fail ACME challenges without proper DNS and public IP.

## 🔐 Security

- TLS certificates automatically issued and renewed by Let's Encrypt
- Certificates persist at `/var/lib/traefik/acme/acme.json` on the VPS
- No secrets or certificates committed to Git
- All HTTP traffic redirected to HTTPS

## 🔄 Rollback

To rollback to a previous version:

```bash
git revert HEAD          # Revert last commit
git push origin main     # Trigger redeployment
```

## 📊 Service Management

All services are configured with:

- Automatic restart (`unless-stopped`)
- Health checks
- Log rotation (10MB × 3 files)
- Orphan container cleanup on deploy

## 📝 Adding New Services

1. Add service definition to `platform/docker-compose.yml`
2. Connect to `web` network
3. Add Traefik labels for routing and TLS
4. Push to `main` - automatic deployment

Example:

```yaml
myservice:
  image: myapp:1.0.0
  networks:
    - web
  labels:
    - "traefik.enable=true"
    - "traefik.http.routers.myservice.rule=Host(`myservice.devcatalin.com`)"
    - "traefik.http.routers.myservice.entrypoints=websecure"
    - "traefik.http.routers.myservice.tls.certresolver=myresolver"
```

## 🐛 Troubleshooting

Check service status:

```bash
ssh user@vps-host "cd /srv/platform && docker compose ps"
```

View logs:

```bash
ssh user@vps-host "docker logs traefik --tail 50"
ssh user@vps-host "docker logs dashy --tail 50"
```

## 📖 Documentation

See [GOAL.md](./GOAL.md) for detailed requirements and architecture decisions.

## 📜 License

MIT
