# EstateX — Backend Application & API Layer

## Overview
The `backend/` directory contains the Node.js and Express.js RESTful API service for EstateX, interfacing with MongoDB via the Mongoose ODM layer.

## Architectural Responsibilities
- Serve all REST endpoints under `/api/v1/`.
- Handle secure authentication via JWT and bcrypt password hashing.
- Enforce Role-Based Access Control (RBAC) across `user`, `seller`, and `admin` scopes.
- Execute input validation via Zod schemas and sanitize payloads against NoSQL injection.
- Manage file uploads for property imagery and compute pagination/filtering for listings.
- Centralize error handling and HTTP status code normalization.

## Structure Reference
See [Backend Architecture Specification](file:///D:/estatex/docs/04-architecture/backend-architecture.md) and [RESTful API Specification](file:///D:/estatex/docs/07-api/api-specification.md).

## Historical Preservation Note
The initial Express structure in `EstateX/backend/` is preserved as a reference implementation.

## Current Status
- **Phase:** Specification & Architecture Baseline.
- **Rule:** No Express code, controllers, routes, or backend npm packages are installed until implementation approval.
