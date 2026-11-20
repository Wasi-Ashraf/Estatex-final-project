# EstateX — Deployment Assets & Configuration

## Purpose & Scope
This directory houses infrastructure configuration files, Dockerfiles, docker-compose manifests, and environment profiles for deploying EstateX.

## Folder Organization
- `docker/` — Dockerfile blueprints and `docker-compose.yml` specs for full-stack orchestration.
- `environments/` — Template environment files (`.env.development`, `.env.staging`, `.env.production`).

## Deployment Principles
- Configuration is strictly separated from code according to Twelve-Factor App methodology.
- No live deployments or build executions are run until authorized.
