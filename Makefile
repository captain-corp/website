.PHONY: build start stop restart clean help build-static serve-static serve-standalone

# Variables
DOCKER_COMPOSE = docker compose
STATIC_DIR = _site
STANDALONE_DIR = standalone

help: ## Show this help message
	@echo 'Usage:'
	@echo '  make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-20s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build: ## Build the Docker image
	$(DOCKER_COMPOSE) build

start: ## Start the documentation server
	$(DOCKER_COMPOSE) up

start-detached: ## Start the documentation server in detached mode
	$(DOCKER_COMPOSE) up -d

stop: ## Stop the documentation server
	$(DOCKER_COMPOSE) down

restart: stop start ## Restart the documentation server

build-static: ## Build static HTML files
	$(DOCKER_COMPOSE) run --rm build
	@echo "Static files generated in $(STATIC_DIR)/"

serve-static: build-static ## Serve static files locally using Python (for testing)
	@echo "Serving static files from $(STATIC_DIR)/ at http://localhost:8000"
	@cd $(STATIC_DIR) && python3 -m http.server 8000

serve-standalone: ## Serve the standalone landing page
	@echo "Serving standalone page from $(STANDALONE_DIR)/ at http://localhost:8001"
	@cd $(STANDALONE_DIR) && python3 -m http.server 8001

clean: ## Remove built site and Docker artifacts
	$(DOCKER_COMPOSE) down --rmi local
	rm -rf $(STATIC_DIR) .jekyll-cache .sass-cache

logs: ## View the logs
	$(DOCKER_COMPOSE) logs -f

shell: ## Open a shell in the container
	$(DOCKER_COMPOSE) exec site /bin/bash
