# Antigravity Agent Project Rules — EstateX

These rules govern the autonomous and assisted behavior of Google Antigravity (AGY) within the **EstateX** project repository (`D:\estatex`).

## Rule 1: Strict Adherence to Project Constitution
- Every action must align with the ratified Project Constitution in `.specify/memory/constitution.md`.
- No features outside the approved EstateX proposal may be designed, specified, or implemented.
- The approved domain consists of Pakistan real estate: Houses, Apartments, Commercial shops, Residential plots, and Agricultural land across Sale and Rent.

## Rule 2: Current Stage Boundary — Documentation & Architecture Only
- **ABSOLUTE BAN ON CODE IMPLEMENTATION AT THIS STAGE.**
- Do NOT create or edit React components (`.jsx`, `.tsx`).
- Do NOT create backend Express routes, controllers, or live server handlers.
- Do NOT define operational Mongoose schemas or initialize database connections.
- Do NOT run package managers to install dependencies (`npm install`, `npm i`, `yarn add`, `pnpm add`).
- All work must be strictly confined to architectural plans, specifications, database schema definitions, API documentation, task breakdowns, and markdown deliverables.

## Rule 3: Spec-Driven Development (SDD) Workflow
Always enforce the GitHub Spec Kit lifecycle:
1. **Constitution** -> `.specify/memory/constitution.md`
2. **Specify** -> `/speckit-specify` -> `specs/modules/<module>/spec.md`
3. **Clarify** -> `/speckit-clarify` -> De-risk ambiguities before planning
4. **Plan** -> `/speckit-plan` -> `plan.md` architecture and contracts
5. **Checklist** -> `/speckit-checklist` -> Quality gate and verification checklists
6. **Tasks** -> `/speckit-tasks` -> Actionable, prioritized development tasks
7. **Analyze** -> `/speckit-analyze` -> Cross-artifact consistency verification
8. **Implementation** -> BLOCKED until explicitly approved by Wasi Ashraf.

## Rule 4: Preservation of Existing Files
- Existing files in `EstateX/` (including `EstateX/prototype/`, `EstateX/frontend/`, `EstateX/backend/`, `EstateX/DOC/`, and root files) must NEVER be deleted, destructively overwritten, or renamed without explicit user confirmation.
- New modular documentation must complement and extend the foundation established in existing records.

## Rule 5: Traceability and Formatting Standards
- All specifications must maintain explicit links back to the Functional Requirements (FR-xx) and Non-Functional Requirements (NFR-xx).
- Use standard GitHub Flavored Markdown.
- Use Mermaid diagrams (`flowchart TD`, `sequenceDiagram`, `erDiagram`) to visualize architectural flows, database relations, and state machines.
- Always generate clickable relative or `file:///` markdown links for referenced documents.
