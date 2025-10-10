## Objective

Set up **GitOps continuous deployment** for a public hub at **https://hub.devcatalin.com** using **Docker Compose** with **Traefik (TLS/ACME)** and **Dashy**, deployed by **GitHub Actions over SSH** to a Hetzner VPS. The configuration must be **portable** (usable on any VPS) and **reproducible** (source of truth is this repo). Future services (Directus, n8n) are out of scope for Phase 1.

## Non-Negotiable Rules

- Only this file (GOAL.md) may be edited for notes/status. Do **not** create new markdown files.
- All runtime config lives under `platform/`; no host-only tweaks except cert storage.
- Never commit secrets or certificates. Persist Traefik certs at `/var/lib/traefik/acme` on the server.
- Use **pinned image tags** (no `:latest`). All services use `restart: unless-stopped`, healthchecks, and log rotation.

## Target & Assumptions

- Domain: **hub.devcatalin.com** (A/AAAA → VPS IP).
- ACME email: **catalin.hoha.dev@gmail.com**.
- VPS: Ubuntu LTS with Docker + Compose, ports **80/443** open.
- Deployment method: GitHub Actions → SSH → `docker compose up -d`.

## Repository Structure (to create)

```
/.github/workflows/deploy.yml      # CI: deploy on push to main via SSH
/platform/
  docker-compose.yml               # Traefik + Dashy (services, network, volumes)
  traefik/
    dynamic/                       # optional dynamic rules (can start empty)
  services/
    dashy/conf.yml                 # Dashy config (Git is source of truth)
```

## Server Persistence (must exist; never overwritten)

- **Traefik cert store**: host path `/var/lib/traefik/acme` (contains `acme.json`, `chmod 600`).
- Runtime volumes (if any) and logs remain on server; not versioned.

## Compose Requirements

**Shared network**

- Named network `web` shared by Traefik and all services.

**Traefik service**

- Expose ports **80** and **443**.
- EntryPoints: `web:80`, `websecure:443`; redirect HTTP → HTTPS.
- ACME: **HTTP-01** challenge, email = `catalin.hoha.dev@gmail.com`.
- ACME storage: container `/letsencrypt/acme.json` mapped to host `/var/lib/traefik/acme/acme.json`.
- Docker provider enabled; services opt-in via `traefik.enable=true`.
- Dashboard **disabled** in Phase 1.
- Restart policy + log rotation (10MB × 3).

**Dashy service**

- Public at **hub.devcatalin.com** via labels:
  - `traefik.enable=true`
  - Router rule `Host(\`hub.devcatalin.com\`)`
  - EntryPoint `websecure`
  - TLS certresolver `myresolver`
- Mount read-only config from `platform/services/dashy/conf.yml`.
- Healthcheck on `/`, restart policy, log rotation.
- No host ports; only the `web` network.

## GitHub Actions (deploy.yml) Requirements

- Trigger: on push to `main`.
- Use secrets: `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY` (PEM).
- Steps:
  1. Checkout repo.
  2. Create `/srv/platform` on VPS if missing.
  3. Sync **`platform/` → `/srv/platform`** (clean obsolete files).
  4. Ensure host path **`/var/lib/traefik/acme`** exists; do **not** delete it.
  5. Run `docker compose -f /srv/platform/docker-compose.yml pull` then `up -d --remove-orphans`.
  6. Verify with `curl -I https://hub.devcatalin.com` (expect 200 or 301→200).
  7. On failure, show `docker ps` and recent Traefik logs.

## Acceptance Criteria

- First deploy issues valid Let’s Encrypt certs and serves Dashy at **https://hub.devcatalin.com**.
- Subsequent pushes to `main` trigger automatic, zero-SSH redeploys.
- Certificates persist across restarts and redeploys (no re-issuance loops).
- Removing/renaming services in Compose prunes orphans on deploy.

## Maintenance Checklist

- [ ] DNS points to VPS.
- [ ] SSH works with provided key.
- [ ] `/var/lib/traefik/acme` present and preserved.
- [ ] CI deploy succeeds; site reachable over HTTPS.
- [ ] Image tags pinned; rollback by Git revert works.

## Rollback

Revert to a prior commit and push; CI redeploys previous configuration. If needed, pin a known-good image tag in Compose and redeploy.

## Progress Log

_(Agent appends short, timestamped entries here. Do not create other markdown files.)_

### 2025-10-10 - Phase 1 Setup Complete

**Created repository structure:**

- `.github/workflows/deploy.yml` - GitHub Actions workflow for automated deployment via SSH
- `platform/docker-compose.yml` - Docker Compose with Traefik (v2.11.0) and Dashy (v2.1.2)
- `platform/traefik/dynamic/` - Dynamic config directory (empty, ready for future use)
- `platform/services/dashy/conf.yml` - Dashy configuration with Dev Hub setup

**Key features implemented:**

- Traefik with HTTP→HTTPS redirect, Let's Encrypt HTTP-01 challenge
- ACME storage mapped to `/var/lib/traefik/acme/acme.json` (persisted on host)
- Dashy exposed at `hub.devcatalin.com` via Traefik labels
- Pinned image tags (no `:latest`)
- All services with `restart: unless-stopped`, healthchecks, and log rotation (10MB × 3)
- Shared `web` network for service communication

**GitHub Actions workflow:**

1. Checkouts repo and sets up SSH
2. Creates `/srv/platform` on VPS
3. Syncs `platform/` directory (with `--delete` for cleanup)
4. Ensures `/var/lib/traefik/acme` exists with proper permissions
5. Pulls images and deploys with `--remove-orphans`
6. Verifies deployment via HTTPS curl (accepts 200/301/302)
7. Shows debug info on failure

**Next steps for user:**

- Set GitHub secrets: `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`
- Verify DNS A/AAAA records point to VPS IP
- Ensure VPS has Docker + Compose installed, ports 80/443 open
- Push to `main` branch to trigger first deployment

### 2025-10-10 - Simplified GitOps Flow with Cloud-Init

**Restructured for VPS reprovisioning:**

- Added repo deploy key (`~/.ssh/rose_repo_deploy`) for private GitHub access
- Enhanced `cloud-init.yaml` to:
  - Set up `/home/deploy/.ssh` with GitHub known_hosts
  - Clone repo to `/srv/rose` on first boot
  - Symlink `/srv/platform → /srv/rose/platform`
  - Run initial `docker compose up -d` automatically
- Updated `create_vps.sh` to:
  - Copy repo deploy key to VPS after provisioning
  - Wait for cloud-init completion before deployment
- Simplified `.github/workflows/deploy.yml`:
  - Removed rsync and manual directory creation
  - Uses `git fetch/reset` to pull latest code
  - Reduced from 8 steps to 4 steps

**Key benefits:**

- VPS is fully operational immediately after `create_vps.sh` completes
- No manual SSH directory setup or cert directory creation in CI
- Git is the single source of truth; rsync eliminated
- Reprovisioning the VPS is now a single script execution
