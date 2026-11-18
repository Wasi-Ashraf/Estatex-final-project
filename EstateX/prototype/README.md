# EstateX

### Smart Real Estate & Rental Platform

EstateX is a Pakistan-focused real estate and rental platform designed to help people discover, buy, rent, and list residential, commercial, and land properties through one organized digital platform.

Users can explore properties, search by location and budget, compare available options, save favorites, and contact property owners or sellers. Property owners and sellers can create and manage listings, while administrators review listings and help maintain platform quality.

> **Project status:** Academic / portfolio project in active development  
> **Development approach:** Spec-Driven Development (SDD)  
> **Project start:** 18 November 2026 (current development baseline)  
> **Target completion:** 8 March 2027  
> **Primary developer:** Wasi Ashraf  
> **Technology:** MERN Stack — MongoDB, Express.js, React.js, Node.js

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Problem Statement](#2-problem-statement)
3. [Proposed Solution](#3-proposed-solution)
4. [Project Goals and MVP Scope](#4-project-goals-and-mvp-scope)
5. [User Roles and Permissions](#5-user-roles-and-permissions)
6. [Core Features](#6-core-features)
7. [Technology Stack](#7-technology-stack)
8. [Development Tools](#8-development-tools)
9. [Project Architecture](#9-project-architecture)
10. [Target Repository Structure](#10-target-repository-structure)
11. [Spec-Driven Development Workflow](#11-spec-driven-development-workflow)
12. [Feature Development Lifecycle](#12-feature-development-lifecycle)
13. [Development Phases](#13-development-phases)
14. [19-Week Development Roadmap](#14-19-week-development-roadmap)
15. [Database Design Overview](#15-database-design-overview)
16. [API Design Standards](#16-api-design-standards)
17. [Security and Validation Standards](#17-security-and-validation-standards)
18. [Testing Strategy](#18-testing-strategy)
19. [Git and GitHub Workflow](#19-git-and-github-workflow)
20. [Getting Started](#20-getting-started)
21. [Definition of Done](#21-definition-of-done)
22. [Risks and Scope Boundaries](#22-risks-and-scope-boundaries)
23. [Future Improvements](#23-future-improvements)

---

## 1. Project Overview

EstateX brings property discovery and property listing management together in one platform.

The platform is designed around three main groups:

1. **Buyers and renters** — discover properties, apply filters, view property details, save favorites, and contact sellers or owners.
2. **Sellers and property owners** — publish property listings, upload property images, update listing details, and manage inquiries.
3. **Platform administrators** — manage users, review property listings, handle reports, and monitor platform activity.

EstateX will support multiple property categories, including:

- Houses
- Apartments and flats
- Shops
- Offices and commercial properties
- Residential plots
- Commercial plots
- Agricultural land

The project is intended to provide a practical, responsive, and easy-to-use property platform. Property information will be supplied by users and should not be represented as legally verified unless a separate, genuine verification process is completed.

## 2. Problem Statement

People searching for property may need to visit multiple websites, contact different agents, and compare information manually. Property details, prices, images, and availability may be scattered across different sources. Owners and sellers may also find it difficult to manage their listings and inquiries in an organized way.

Common challenges include:

- Finding properties according to location, price, type, and purpose.
- Comparing multiple properties using consistent information.
- Identifying whether a property is available, sold, or rented.
- Contacting the relevant owner or seller.
- Managing property images and listing information.
- Keeping track of inquiries and interested buyers.
- Reducing confusion caused by incomplete or outdated listing details.

These are the problems EstateX aims to address. Their actual frequency and severity should be validated through feedback from potential users.

## 3. Proposed Solution

EstateX proposes a centralized platform where users can explore properties and property owners can manage listings.

The platform will provide:

- A public property directory.
- Buy and rent property sections.
- Search by keyword and location.
- Filters for price, category, purpose, area, and other relevant attributes.
- Detailed property pages with images and specifications.
- User registration and login.
- Seller/owner property management.
- Favorites and saved properties.
- Buyer inquiries and seller responses.
- Admin review and listing moderation.
- Responsive pages for desktop, tablet, and mobile screens.

**Core value proposition:** EstateX connects property discovery with listing management and inquiry handling in one straightforward platform.

## 4. Project Goals and MVP Scope

### 4.1 MVP features

The first usable release is expected to include:

- User registration and login.
- Secure password storage and authenticated sessions/tokens.
- Role-based access control.
- Public home page and property directory.
- Buy and rent browsing.
- Property categories.
- Search, filtering, and sorting.
- Property details page.
- Seller/owner property creation and management.
- Property image upload.
- Listing status and admin review.
- Favorites.
- Buyer inquiries and seller contact workflow.
- User and seller dashboards.
- Admin dashboard and basic moderation.
- Responsive user interface.
- Basic automated and manual testing.
- Deployment and project documentation.

### 4.2 Not included in the initial MVP

The following items may be considered later, depending on time, cost, and technical feasibility:

- Online payments and escrow.
- Automated property ownership verification.
- Real-time property valuation.
- AI-powered recommendations.
- 360-degree property tours.
- Advanced maps and geospatial search.
- Native Android/iOS applications.
- Full property agency/CRM or society ERP functionality.

EstateX will not claim that a listing, owner, document, or property is legally verified merely because it has been uploaded or reviewed by an administrator.

## 5. User Roles and Permissions

The planned roles are:

| Role | Main permissions |
|---|---|
| Visitor | Browse public listings, search, filter, and view property details. |
| User / Buyer / Renter | Manage profile, save favorites, and submit or track inquiries. |
| Seller / Owner | Create and manage own property listings, upload images, and respond to inquiries. |
| Admin | Manage users, review listings, approve/reject reported content, and monitor platform activity. |

### Role principles

- A visitor does not need an account to browse public listings.
- An authenticated user can use buyer features.
- A seller can manage only their own listings unless an explicitly authorized admin action applies.
- One account may be designed to support both buyer and seller activities; the final permission model must be documented before implementation.
- Admin-only operations must be protected on the server, not merely hidden in the frontend.
- Knowing a property ID or user ID must never be treated as proof of permission.

## 6. Core Features

| Module | Main functionality |
|---|---|
| Authentication | Register, login, logout, password hashing, protected routes. |
| User Profile | View and update account information. |
| Property Listings | Create, view, edit, and delete authorized listings. |
| Property Images | Upload, display, and manage listing images. |
| Search and Filters | Search by keyword, city, category, purpose, price, and area. |
| Property Details | Display description, specifications, images, price, and contact options. |
| Favorites | Save and remove favorite properties. |
| Inquiries | Send questions to sellers/owners and manage responses. |
| Seller Dashboard | View listing counts, statuses, and inquiries. |
| Admin Dashboard | Review listings, manage users, and handle reports. |
| Notifications | Notify users about relevant account or listing activity, if included in MVP. |

## 7. Technology Stack

The project follows the MERN stack.

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | React.js | Build reusable UI components and pages. |
| Routing | React Router (if used in the existing frontend) | Handle client-side navigation. |
| Styling | CSS3 / Bootstrap | Responsive layouts and visual styling. |
| Backend runtime | Node.js | Run server-side JavaScript. |
| Backend framework | Express.js | Build REST APIs and middleware. |
| Database | MongoDB | Store users, properties, favorites, and inquiries. |
| ODM | Mongoose | Define schemas and interact with MongoDB. |
| Authentication | JSON Web Token (JWT) | Authenticate protected API requests. |
| Password security | bcrypt | Hash passwords before storage. |
| Validation | Zod or express-validator (choose one standard) | Validate incoming data. |
| API testing | Postman | Test API requests and responses. |
| Version control | Git and GitHub | Track changes and collaborate. |
| Frontend deployment | Vercel (planned) | Host the React frontend. |
| Backend deployment | Render or another compatible host (planned) | Host the Express API. |
| Database hosting | MongoDB Atlas (planned) | Host the production database. |

Use compatible, supported package versions. Record important dependency or architecture changes rather than changing the stack without a documented reason.

## 8. Development Tools

- **Visual Studio Code:** Main code editor.
- **Node.js and npm:** Runtime and package management.
- **MongoDB Compass:** Visual database inspection.
- **MongoDB Atlas:** Planned hosted database.
- **Postman:** API development and testing.
- **Git and GitHub:** Source control and repository hosting.
- **Browser Developer Tools:** Debug UI, network requests, and browser errors.
- **Figma (optional):** UI wireframes and design planning.
- **Markdown:** Project specifications and technical documentation.

## 9. Project Architecture

EstateX uses a client-server architecture.

```text
                 USER / BROWSER
                       |
                       v
              REACT FRONTEND
          Pages, Components, Forms
                       |
                 HTTP / REST API
                       |
                       v
              EXPRESS BACKEND
          Routes -> Middleware
                       |
                 Controllers
                       |
                  Mongoose
                       |
                       v
                 MONGODB
       Users | Properties | Favorites
             Inquiries | Reports
```

### Request lifecycle

1. A user performs an action in the React interface.
2. The frontend sends an HTTP request to the Express API.
3. Express middleware checks request format and authentication where required.
4. The route forwards the request to the relevant controller.
5. The controller applies business rules and uses Mongoose to access MongoDB.
6. The backend returns a consistent response.
7. React updates the interface based on the result.

Keep business logic out of large route files. Use separate routes, controllers, models, middleware, and utility modules as the application grows.

## 10. Target Repository Structure

The following is a target structure. It should be introduced gradually and reconciled with the existing repository; do not delete or rename working files just to match this example.

```text
EstateX/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── tests/
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.example
│   └── package.json
│
├── docs/
│   ├── constitution.md
│   ├── architecture/
│   ├── engineering/
│   ├── security/
│   ├── testing/
│   └── user-guide.md
│
├── specs/
│   ├── 001-project-foundation/
│   ├── 002-architecture-and-database/
│   ├── 003-authentication/
│   └── ...
│
├── prototype/
├── python-service/
├── .gitignore
├── README.md
└── MASTER_ROADMAP.md
```

### Structure rules

- Keep frontend and backend responsibilities separate.
- Keep database models inside `backend/models/`.
- Keep API route definitions inside `backend/routes/`.
- Keep request handling and business logic in controllers/services.
- Keep authentication and authorization checks in reusable middleware.
- Keep frontend API calls in a dedicated service layer.
- Keep reusable React components separate from page-level components.
- Store secrets in environment variables; never commit real `.env` files.
- Add new folders when a real feature requires them; avoid empty or unnecessary folders.

## 11. Spec-Driven Development Workflow

EstateX will follow the same Spec-Driven Development approach used in the reference roadmap.

The purpose is to understand and document a feature before implementing it.

### Main workflow

```text
CONSTITUTION
     |
     v
SPECIFICATION
     |
     v
CLARIFICATION
     |
     v
PLANNING
     |
     v
TASK BREAKDOWN
     |
     v
ANALYSIS / REVIEW
     |
     v
IMPLEMENTATION
     |
     v
TESTING & CONVERGENCE
     |
     v
COMMIT
```

### Workflow stages

1. **Constitution:** Define project-wide rules for code quality, security, architecture, naming, and testing.
2. **Specify:** Describe the feature, user needs, expected behavior, constraints, and acceptance criteria.
3. **Clarify:** Resolve missing or ambiguous requirements before coding.
4. **Plan:** Decide the technical approach, data model, API contracts, permissions, and dependencies.
5. **Tasks:** Divide the plan into small, ordered, testable tasks.
6. **Analyze:** Review the specification, plan, and tasks for contradictions or missing requirements.
7. **Implement:** Complete approved tasks in small steps.
8. **Converge:** Test the implementation against acceptance criteria and fix any gaps.
9. **Commit:** Save verified work in Git and update documentation when requirements change.

Do not ask an AI coding assistant to build the entire platform in one prompt. Review specifications and plans before implementation, and inspect generated code before accepting it.

## 12. Feature Development Lifecycle

Every major EstateX feature must follow this lifecycle.

| Step | Artifact / Activity | Example: Add Property |
|---|---|---|
| 1. Specify | `spec.md` | Define who can add a property and which fields are required. |
| 2. Plan | `plan.md` | Design form, API, validation, database model, and permissions. |
| 3. Tasks | `tasks.md` | Break work into model, controller, route, form, and tests. |
| 4. Implement | Source code | Build the approved frontend and backend changes. |
| 5. Test | Test cases/results | Confirm valid listings save and unauthorized users are blocked. |
| 6. Converge | Review checklist | Confirm all acceptance criteria pass. |
| 7. Commit | Git commit | Commit the verified feature. |

### Example feature acceptance criteria: Add Property

- An authenticated and authorized seller can open the add-property form.
- Required fields are validated on the server.
- Invalid data is rejected with a useful error response.
- The property is saved with the correct owner reference.
- A seller cannot create a listing on behalf of another user by changing a request field.
- The newly created property appears in the seller's listings.
- Automated or documented manual tests cover the main success and failure cases.

## 13. Development Phases

The project is divided into five major phases, following the reference roadmap structure.

| Phase | Weeks | Focus |
|---|---:|---|
| 1. Foundation | 1–4 | Setup, architecture, design system, authentication. |
| 2. Core Domain | 5–9 | Users, properties, images, listing management, public directory. |
| 3. Buyer Features | 10–13 | Search, filters, comparison, favorites, inquiries. |
| 4. Advanced Features | 14–16 | Dashboards, admin moderation, security and due diligence. |
| 5. Finalization | 17–19 | Notifications, testing, optimization, deployment. |
| Submission | — | Final verification and project submission. |

The week numbers describe the intended sequence. Since development is being resumed from an existing codebase, completed work must first be inspected and verified; the roadmap must not be used to claim that untested work is complete.

## 14. 19-Week Development Roadmap

### PHASE 1 — FOUNDATION

#### Week 1 — Project Setup and First Running App

**Feature:** `001-project-foundation`

- Day 1: Inspect existing Node.js installation, repository, package files, and Git status.
- Day 2: Review frontend/backend folder structure and required dependencies.
- Day 3: Verify the React application runs locally.
- Day 4: Verify the Express server runs locally.
- Day 5: Review `.gitignore`, `.env.example`, and project scripts.
- Day 6: Define the initial design system and shared layout requirements.
- Day 7: Document the baseline and verify the application starts.

**Deliverable:** A reviewed and documented project foundation with frontend and backend running.

#### Week 2 — Architecture and Database Design

**Feature:** `002-architecture-and-database`

- Day 1: Finalize user roles and permission matrix.
- Day 2: Define core entities and their relationships.
- Day 3: Document frontend/backend architecture and request flow.
- Day 4: Design MongoDB collections and Mongoose schemas.
- Day 5: Define API naming, response, and error-handling standards.
- Day 6: Review data ownership, validation, and security boundaries.
- Day 7: Approve architecture and database baseline; commit documentation.

**Deliverable:** Approved architecture, role matrix, data model, and API standards.

#### Week 3 — Application Foundation and Design System

**Feature:** `003-application-foundation`

- Day 1: Review existing React layouts and routes.
- Day 2: Finalize responsive layout and design tokens.
- Day 3: Organize reusable components and frontend services.
- Day 4: Polish navbar, footer, buttons, cards, and forms.
- Day 5: Add loading, empty, error, and not-found states where required.
- Day 6: Check responsive behavior and accessibility basics.
- Day 7: Test and commit the application foundation.

**Deliverable:** A consistent, responsive application shell.

#### Week 4 — Authentication and Access Control

**Feature:** `004-authentication`

- Day 1: Specify registration, login, logout, and session/token behavior.
- Day 2: Plan password hashing, JWT handling, and role authorization.
- Day 3: Review and complete the User model and auth API.
- Day 4: Connect registration and login UI to backend APIs.
- Day 5: Implement protected frontend routes and backend middleware.
- Day 6: Test invalid credentials, duplicate accounts, and unauthorized requests.
- Day 7: Review security behavior and commit.

**Deliverable:** Tested registration, login, and access-control foundation.

### PHASE 2 — CORE DOMAIN

#### Week 5 — User and Seller Profiles

**Feature:** `005-user-profiles`

- Specify profile fields and editable information.
- Define ownership and role-related rules.
- Implement profile read/update APIs.
- Build profile UI.
- Test invalid updates and access to another user's profile.

**Deliverable:** Database-backed user profiles.

#### Week 6 — Property Management

**Feature:** `006-property-management`

- Specify property fields, categories, purpose, and listing states.
- Plan property ownership and validation rules.
- Implement Property model.
- Implement create, read, update, and delete APIs.
- Build add/edit property forms.
- Test ownership and invalid data.

**Deliverable:** Complete property CRUD workflow.

#### Week 7 — Property Images and Media

**Feature:** `007-property-media`

- Specify image count, formats, size limits, and ordering.
- Select and configure an image storage approach.
- Implement secure upload handling.
- Connect images to property records.
- Build image preview and management UI.
- Test invalid file types, oversized files, and upload failures.

**Deliverable:** Property image upload and management.

#### Week 8 — Listing Status and Seller Inventory

**Feature:** `008-listing-workflow`

- Define listing statuses and allowed transitions.
- Implement seller property inventory.
- Add edit, deactivate, and availability actions.
- Add server-side ownership checks.
- Test status changes and unauthorized operations.

**Deliverable:** Seller can manage the lifecycle of their own listings.

#### Week 9 — Public Property Directory

**Feature:** `009-public-directory`

- Specify which listings are publicly visible.
- Build property listing page.
- Build property detail page.
- Display category, purpose, price, location, images, and specifications.
- Handle missing and unavailable property records.
- Test public visibility rules.

**Deliverable:** Public property discovery and details pages.

### PHASE 3 — BUYER FEATURES

#### Week 10 — Search and Filtering

**Feature:** `010-search-and-filtering`

- Specify keyword, city, category, purpose, price, and area filters.
- Plan database query behavior.
- Implement backend search and filter APIs.
- Connect frontend search controls.
- Add sorting and pagination where required.
- Test combined filters and empty results.

**Deliverable:** Database-backed property search.

#### Week 11 — Property Comparison

**Feature:** `011-property-comparison`

- Specify which property attributes can be compared.
- Design comparison selection UI.
- Build comparison table.
- Handle missing values clearly.
- Test comparison of different property categories.

**Deliverable:** Side-by-side property comparison.

#### Week 12 — Favorites

**Feature:** `012-favorites`

- Specify add/remove/list favorite behavior.
- Design favorite data relationship.
- Implement favorite APIs.
- Connect favorite buttons and favorites page.
- Ensure each user can access only their own favorites.
- Test duplicate favorites and removed properties.

**Deliverable:** Persistent, account-based favorites.

#### Week 13 — Buyer Inquiries and Contact Workflow

**Feature:** `013-inquiries`

- Specify inquiry fields and statuses.
- Design buyer and seller permissions.
- Implement inquiry model and APIs.
- Build inquiry form and seller inbox.
- Add inquiry status/response workflow.
- Test unauthorized access and duplicate submissions.

**Deliverable:** Buyer-to-seller inquiry workflow.

### PHASE 4 — ADVANCED FEATURES

#### Week 14 — User and Seller Dashboards

**Feature:** `014-dashboards`

- Specify dashboard information for each role.
- Implement summary counts and recent activity.
- Build user dashboard.
- Build seller dashboard.
- Show seller listings and inquiries.
- Test dashboard data against database records.

**Deliverable:** Role-based user and seller dashboards.

#### Week 15 — Admin Dashboard and Moderation

**Feature:** `015-admin-moderation`

- Specify admin permissions and moderation actions.
- Build admin overview and listing review queue.
- Implement approve/reject or hide actions.
- Add user and report management where included.
- Record important administrative actions.
- Test admin-only access and state transitions.

**Deliverable:** Protected admin moderation workflow.

#### Week 16 — Security, Validation, and Trust Features

**Feature:** `016-security-and-validation`

- Review authentication and authorization.
- Validate all important request payloads.
- Add rate limits and secure HTTP configuration where appropriate.
- Review image upload restrictions.
- Add report-listing or basic due-diligence guidance if included in the approved scope.
- Test common security boundaries and error cases.

**Deliverable:** Reviewed security and validation baseline.

### PHASE 5 — FINALIZATION

#### Week 17 — Notifications

**Feature:** `017-notifications`

- Specify notification events.
- Design notification data and access rules.
- Implement in-app notification storage.
- Add notification list and read/unread status.
- Connect relevant listing and inquiry events.
- Test privacy and failure cases.

**Deliverable:** Basic in-app notifications.

#### Week 18 — Testing and Optimization

**Feature:** `018-testing-and-optimization`

- Review acceptance criteria for all completed modules.
- Test authentication and role permissions.
- Test property CRUD, image upload, search, favorites, and inquiries.
- Perform responsive UI checks.
- Fix high-priority bugs.
- Review performance and loading states.
- Run regression tests and document known limitations.

**Deliverable:** Tested release candidate.

#### Week 19 — Deployment and Final Documentation

**Feature:** `019-deployment`

- Prepare production environment variables.
- Configure MongoDB Atlas.
- Deploy backend API.
- Deploy frontend application.
- Configure frontend/backend API URLs and CORS.
- Test deployed critical workflows.
- Prepare demo data, screenshots, and user guide.
- Review deployment and backup considerations.

**Deliverable:** Deployed demonstration and project documentation.

### FINAL SUBMISSION — 8 March 2027

- Verify all agreed MVP acceptance criteria.
- Run final regression tests.
- Check the live application.
- Finalize README and project report.
- Prepare architecture/database diagrams.
- Prepare demonstration flow and screenshots.
- Submit source code and required documentation.

**Schedule note:** The roadmap is a planning baseline. If existing work is incomplete or a task takes longer than expected, update the task status and revise the schedule transparently instead of marking unfinished work complete.

## 15. Database Design Overview

The following collections are proposed. Their exact fields, indexes, references, and validation rules will be finalized in the database specification.

| Collection | Purpose |
|---|---|
| `users` | Account details, credentials, and role information. |
| `properties` | Property details, owner reference, price, location, category, and status. |
| `favorites` | Relationship between users and saved properties. |
| `inquiries` | Buyer questions and seller responses/status. |
| `notifications` | User notifications and read status. |
| `reports` | User-submitted reports about listings or accounts. |

### Main relationships

- One user can own multiple property listings.
- One property can contain multiple images.
- One user can save multiple properties.
- One property can be saved by multiple users.
- One property can receive multiple inquiries.
- One user can create multiple inquiries.
- A notification belongs to a specific user.

Use Mongoose references where appropriate and validate referenced records and permissions on the server.

## 16. API Design Standards

Use resource-oriented REST endpoints. The final route names should be recorded in the API specification.

Example endpoint plan:

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/api/auth/register` | Register a user. |
| `POST` | `/api/auth/login` | Authenticate a user. |
| `GET` | `/api/auth/me` | Get the authenticated user's information. |
| `GET` | `/api/properties` | List public properties. |
| `POST` | `/api/properties` | Create a property for an authorized seller. |
| `GET` | `/api/properties/:propertyId` | Get property details. |
| `PATCH` | `/api/properties/:propertyId` | Update an authorized property. |
| `DELETE` | `/api/properties/:propertyId` | Delete or deactivate an authorized property. |
| `GET` | `/api/favorites` | Get the authenticated user's favorites. |
| `POST` | `/api/favorites/:propertyId` | Add a property to favorites. |
| `DELETE` | `/api/favorites/:propertyId` | Remove a favorite. |
| `POST` | `/api/properties/:propertyId/inquiries` | Submit an inquiry. |

### HTTP status conventions

- `200 OK` — successful request.
- `201 Created` — resource created.
- `204 No Content` — successful request with no response body.
- `400 Bad Request` — malformed request.
- `401 Unauthorized` — authentication missing or invalid.
- `403 Forbidden` — authenticated user lacks permission.
- `404 Not Found` — resource not found.
- `409 Conflict` — conflicting operation or duplicate resource.
- `413 Content Too Large` — upload exceeds allowed size.
- `422 Unprocessable Content` — request fails validation.
- `429 Too Many Requests` — rate limit exceeded.
- `500 Internal Server Error` — unexpected server error.

Use a consistent JSON response format. Do not expose stack traces, password hashes, tokens, secrets, or internal database errors to the client.

## 17. Security and Validation Standards

- Hash passwords using bcrypt; never store plain-text passwords.
- Keep JWT secrets and database credentials in environment variables.
- Validate data on the backend even when frontend validation exists.
- Protect private APIs with authentication middleware.
- Check resource ownership for every seller operation.
- Enforce admin permissions on the server.
- Limit image upload size and accepted file types.
- Avoid trusting user-supplied role or owner IDs.
- Use safe error messages and server-side logging.
- Configure CORS for the intended frontend origin in production.
- Apply rate limiting to sensitive endpoints such as login and registration.
- Do not commit `.env` files or private user uploads.

## 18. Testing Strategy

| Test type | What to verify |
|---|---|
| Manual UI testing | Forms, navigation, responsive layouts, and user flows. |
| API testing | Request validation, status codes, and response structure. |
| Authentication testing | Registration, login, logout, and protected endpoints. |
| Authorization testing | Buyer, seller, and admin permission boundaries. |
| Database testing | Create/read/update/delete behavior and references. |
| Feature testing | Search, filters, favorites, images, and inquiries. |
| Regression testing | Previously working features after code changes. |
| Deployment testing | Production URLs, environment variables, CORS, and database connection. |

A feature is not complete merely because its page looks correct. Its important backend behavior and permission checks must also be verified.

## 19. Git and GitHub Workflow

Use Git to preserve project history and keep changes reviewable.

Recommended workflow:

1. Keep the `main` branch stable.
2. Create a feature branch for a meaningful task.
3. Make small, focused commits.
4. Test the feature before merging.
5. Review changed files and remove temporary/debug code.
6. Merge verified work into `main`.
7. Push the updated branch to GitHub.

Example branch names:

```text
feature/authentication
feature/property-crud
feature/property-search
feature/favorites
fix/login-validation
docs/update-readme
```

Example commit messages:

```text
feat: add property creation API
fix: validate user login input
docs: update project roadmap
test: add property API test cases
```

Never commit secrets, `.env` files, database dumps containing private data, or unnecessary generated folders such as `node_modules/`.

## 20. Getting Started

### Prerequisites

- Node.js and npm.
- MongoDB Community Server or MongoDB Atlas.
- Visual Studio Code.
- Git.
- MongoDB Compass (recommended).
- Postman (recommended).

### 20.1 Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd EstateX
```

Replace the placeholder with the actual repository URL.

### 20.2 Install backend dependencies

```bash
cd backend
npm install
```

Create a local `.env` file using `.env.example` as a reference. Configure the MongoDB connection string and required authentication secret. Never commit the real `.env` file.

Example variable names:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=replace_with_a_long_random_secret
CLIENT_URL=http://localhost:5173
```

### 20.3 Run the backend

Use the scripts defined in `backend/package.json`. For example:

```bash
npm run dev
```

If the project uses a different script name, follow the actual `package.json`.

### 20.4 Install frontend dependencies

Open a second terminal:

```bash
cd frontend
npm install
```

Create the frontend environment file if the application requires one. For example:

```env
VITE_API_URL=http://localhost:5000/api
```

The variable name must match the frontend's actual configuration.

### 20.5 Run the frontend

```bash
npm run dev
```

Open the local URL printed by Vite in the terminal.

## 21. Definition of Done

A feature can be marked complete only when:

- Its specification is reviewed.
- Its plan and task list are approved.
- Implementation matches the acceptance criteria.
- Backend validation is implemented where required.
- Authentication and authorization are enforced where required.
- Relevant success and error states are handled.
- Tests or documented test evidence pass.
- No known critical defect remains unresolved.
- Documentation is updated.
- Verified changes are committed to Git.

## 22. Risks and Scope Boundaries

| Risk | Mitigation |
|---|---|
| Incomplete or inaccurate listings | Validate required fields and provide listing/reporting controls. |
| Unauthorized listing changes | Enforce ownership checks on backend APIs. |
| Fake or misleading property claims | Provide reporting and moderation; avoid claiming legal verification. |
| Unsafe image uploads | Restrict size/type and use a suitable storage strategy. |
| Exposed credentials | Use environment variables and Git ignore rules. |
| Schedule pressure | Prioritize MVP workflows and defer optional features. |
| Database connection problems | Test local and production configurations separately. |
| Poor mobile experience | Include responsive checks throughout development. |

## 23. Future Improvements

After the MVP is stable, possible improvements include:

- Map-based property discovery.
- Advanced location search.
- Email or SMS notifications.
- Property recommendations.
- Saved search alerts.
- Agent and agency profiles.
- Advanced property analytics.
- Multilingual interface.
- Mobile application.
- Carefully scoped AI-assisted search.

These are future possibilities, not commitments for the initial release.

---

## Project Development Principle

**EstateX will be developed one feature at a time: specify it, clarify it, plan it, break it into tasks, implement it, test it, and commit only verified work.**

The roadmap is a guide, not evidence of completion. Actual progress is determined by working functionality, reviewed code, passing tests, and documented acceptance criteria.
