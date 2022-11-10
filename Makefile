help:
	@grep -E '^[a-zA-Z_-]+:.*?##.*$$' $(MAKEFILE_LIST) | sort | awk '{split($$0, a, ":"); printf "\033[36m%-30s\033[0m %-30s %s\n", a[1], a[2], a[3]}'

# Infrastructure
start: ## Launch rfm containers
	@docker-compose -f ./docker/docker-compose.yml up --build

stop: ## Stop containers
	@docker-compose -f ./docker/docker-compose.yml stop

destroy: ## Remove containers, volumes and images
	@docker-compose -f ./docker/docker-compose.yml rm -s
	@docker-compose -f ./docker/docker-compose.yml down -v --rmi all --remove-orphan