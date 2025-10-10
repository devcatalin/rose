# Rose - GitOps Hub Platform

A GitOps-driven platform for hosting development tools and services with automated deployment, TLS certificates, and zero-downtime updates.

## 🎯 Overview

This repository contains the infrastructure-as-code for **hub.devcatalin.com**, featuring:

- **Traefik** reverse proxy with automatic Let's Encrypt TLS certificates
- **Dashy** dashboard for service organization
- **GitHub Actions** for continuous deployment to VPS
- **Docker Compose** for service orchestration

## 🚀 Quick Start

### Prerequisites

1. **VPS Requirements:**

   - Ubuntu LTS with Docker & Docker Compose installed
   - Ports 80 and 443 open
   - SSH access configured

2. **DNS Configuration:**

   - Point `hub.devcatalin.com` A/AAAA records to your VPS IP

3. **GitHub Secrets:**
   Configure these in your repository settings:
   - `VPS_HOST` - Your VPS IP or hostname
   - `VPS_USER` - SSH username (e.g., `root`)
   - `VPS_SSH_KEY` - Private SSH key in PEM format

### Deployment

Simply push to the `main` branch - GitHub Actions will automatically:

1. Sync the `platform/` directory to `/srv/platform` on the VPS
2. Pull Docker images
3. Deploy services with zero-downtime
4. Verify the deployment

First deployment typically takes 1-2 minutes for Let's Encrypt certificate issuance.

## 📁 Repository Structure

```
.github/workflows/deploy.yml      # CI/CD workflow
platform/
  docker-compose.yml              # Service definitions
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
