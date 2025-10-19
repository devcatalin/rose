.PHONY: help vps vps-status vps-logs vps-ssh deploy build-local cms-snapshot

# Default target - show help
help:
	@echo "🌹 Rose Platform - Available Commands"
	@echo ""
	@echo "VPS Management:"
	@echo "  make vps         - Provision a fresh VPS from scratch"
	@echo "  make vps-status  - Check status of all services on VPS"
	@echo "  make vps-logs    - View logs from all services"
	@echo "  make vps-ssh     - SSH into the VPS"
	@echo ""
	@echo "CMS Management:"
	@echo "  make cms-snapshot - Update Directus schema snapshot from VPS"
	@echo ""
	@echo "Deployment:"
	@echo "  make deploy      - Deploy latest changes (via GitHub Actions)"
	@echo ""
	@echo "Local Development:"
	@echo "  make build-local - Test build all websites locally"
	@echo ""

# Provision fresh VPS
vps:
	@echo "🚀 Provisioning fresh VPS..."
	./platform/scripts/create_vps.sh

# Check service status on VPS
vps-status:
	@echo "📊 Checking VPS service status..."
	@ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "cd /srv/rose/platform && docker compose ps"

# View service logs
vps-logs:
	@echo "📝 Fetching service logs..."
	@echo "=== Traefik ==="
	@ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "docker logs traefik --tail 20"
	@echo ""
	@echo "=== Dashy ==="
	@ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "docker logs dashy --tail 20"
	@echo ""
	@echo "=== CMS ==="
	@ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "docker logs cms --tail 20"
	@echo ""
	@echo "=== Floraria Hortensia ==="
	@ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "docker logs floraria-hortensia --tail 20"
	@echo ""
	@echo "=== Pizza Gioco ==="
	@ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245 "docker logs pizza-gioco --tail 20"

# SSH into VPS
vps-ssh:
	@echo "🔐 Connecting to VPS..."
	@ssh -i ~/.ssh/deploy_vps_key deploy@49.12.112.245

# Update Directus schema snapshot
cms-snapshot:
	@echo "📸 Updating Directus schema snapshot..."
	@./platform/scripts/update_snapshot.sh
