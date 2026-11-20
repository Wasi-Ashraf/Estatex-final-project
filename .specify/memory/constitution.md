# EstateX Project Constitution

**Project Name:** EstateX — Real Estate & Rental Platform  
**Student Developer:** Wasi Ashraf  
**Academic Institution:** Government College of Technology (GCT) Bhakkar, Pakistan  
**Project Classification:** DAE CIT Final Year Project  
**Methodology:** Spec-Driven Development (SDD) via GitHub Spec Kit  
**Host Framework:** Google Antigravity (AGY)  
**Ratified Date:** 20 November 2026  
**Status:** Permanent Binding Project Charter  

---

## 1. Core Principles

### Principle 1: Proposal-First Development (Non-Negotiable Baseline)
The approved EstateX project proposal stands as the single, inviolable source of truth. All structural decisions, domain boundaries, feature sets, and user personas must originate directly from or map strictly to the proposal. Under no circumstances may features outside the approved scope (such as payment gateways, crypto integrations, artificial escrow, or automated legal deeds) be added without formal written supervisor approval.

### Principle 2: Specification Precedes Implementation (Strict SDD Gate)
No implementation code — including backend services, controllers, routes, Mongoose models, React components, state hooks, or styles — may be written until the corresponding specification has been created, clarified, planned, and reviewed. Every feature must progress through the canonical Spec Kit lifecycle:
1. Constitution check
2. Specification (`spec.md`)
3. Clarification (`clarify`)
4. Implementation Plan (`plan.md`)
5. Acceptance Checklist (`checklist.md`)
6. Atomic Task Breakdown (`tasks.md`)
7. Cross-Artifact Consistency Analysis (`analyze`)
8. Authorized Implementation (`implement`) — *Strictly prohibited until formal user sign-off*.

### Principle 3: Absolute Scope Boundaries & Pakistan Market Grounding
EstateX is purpose-engineered for the Pakistan property ecosystem. It explicitly supports the following five verified property classes across Sale and Rent purposes:
1. **Houses** (Independent homes, villas, portions, upper/lower floors)
2. **Apartments** (Flats, studio apartments, penthouse units)
3. **Commercial Properties** (Shops, plazas, corporate offices, retail spaces)
4. **Residential Plots** (Plots, plot files, developed sector land)
5. **Agricultural Land** (Farmland, agricultural acreage, orchards)

Supported user tiers are restricted strictly to:
- **Visitor (Public / Unauthenticated)**
- **User / Buyer / Renter (Registered)**
- **Seller / Property Owner (Registered & Verified)**
- **Platform Administrator (Privileged Management)**

### Principle 4: Zero Unauthorized Coding During Documentation Phase
The current authorization level is strictly limited to architectural design, system specification, database modeling, API contract definitions, testing planning, and project governance documentation. 
**Prohibited Actions at this stage:**
- Writing React application code or JSX components.
- Implementing Express routes, middleware, or controllers.
- Defining live Mongoose schemas or connecting to MongoDB instances.
- Installing runtime dependencies (`npm install` / `yarn add`).
- Deploying containers or production services.

### Principle 5: Preservation of Existing Assets & File Integrity
Existing repository artifacts, including the prototype files in `EstateX/prototype/`, scaffold files in `EstateX/frontend/` and `EstateX/backend/`, and previous documentation in `EstateX/DOC/` and root `README.md`, are preserved as historical references. No existing file may be removed, renamed, or destructively overwritten without explicit user authorization.

### Principle 6: Strict Requirements Traceability
Every development task must maintain bidirectional traceability back to a specific Functional Requirement (FR) or Non-Functional Requirement (NFR), and forward to a concrete acceptance test. Unlinked tasks or "ghost features" are considered defects in the SDD workflow.

### Principle 7: Test-First & Verifiable Quality Gates
Every module must define unambiguous, objective acceptance criteria prior to any coding. Validation schemas (Zod), API status contracts, role permissions, and edge cases must be formulated such that unit, integration, and user-acceptance test suites can execute against them deterministically.

---

## 2. Technology Stack Standards

The technology stack is formally locked as follows:

| Layer | Approved Technology | Responsibility |
|---|---|---|
| **Frontend Framework** | React.js (Vite runtime) | Declarative component UI, client-side routing, modular state |
| **Markup & Styling** | HTML5, Modern CSS3 | Semantic markup, responsive mobile-first layouts, accessible components |
| **Client Scripting** | ECMAScript 2022+ / JS | Modular logic, client-side validation, asynchronous API communication |
| **Backend Runtime** | Node.js (LTS v20+) | High-performance asynchronous JavaScript execution environment |
| **API Server Framework** | Express.js (v4.x) | RESTful API routing, centralized middleware, error normalization |
| **Database Engine** | MongoDB (v7.x) | Document-oriented NoSQL storage, high write throughput, geo-indexing |
| **ODM Layer** | Mongoose (v8.x) | Schema validation, business modeling, relation populations, indexing |
| **Authentication** | JSON Web Tokens (JWT) & bcrypt | Stateless token-based session handling, salted password hashing |
| **Validation Engine** | Zod / Express-Validator | Strict runtime boundary validation for all API inputs and queries |
| **SDD & Tooling** | GitHub Spec Kit & Google Antigravity | Automated specification scaffolding, skills orchestration, agent rules |

---

## 3. Governance and Amendment Process

1. **Constitutional Precedence:** This Constitution supersedes all informal notes, prototype shortcuts, and unrecorded assumptions.
2. **Amendments:** Any modification to this charter requires:
   - A documented change justification.
   - An impact analysis on existing specifications and roadmap milestones.
   - Explicit ratification by Student Developer Wasi Ashraf and the Project Supervisor.
3. **Audit Compliance:** At each development milestone, a compliance review must verify adherence to these principles before progressing to subsequent stages.

---
**Ratified by:** Wasi Ashraf (Senior SDD Lead & CIT Final Year Student)  
**Approved by:** Faculty Supervisor, GCT Bhakkar  
**Repository Location:** `D:\estatex\.specify\memory\constitution.md`
