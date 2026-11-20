# Docker Deployment Blueprints

This directory contains containerization specifications:
- `Dockerfile.frontend`: Multi-stage build (Node build -> Nginx static serving).
- `Dockerfile.backend`: Minimal Node.js LTS Alpine container.
- `docker-compose.yml`: Local orchestrator binding frontend, backend, and MongoDB services.
