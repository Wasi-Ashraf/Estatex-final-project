# ESTATEX — DEVELOPMENT ROADMAP

**Project Name:** EstateX — Real Estate & Rental Platform  
**Project Type:** Final Year Project (DAE CIT)  
**Development Start Date:** 18 November 2026  
**Development Completion Date:** 7 March 2027  
**Final Submission Date:** 8 March 2027  
**Total Duration:** 16 Weeks + 1 Submission Day  
**Technology Stack:** MongoDB, Express.js, React.js, Node.js (MERN Stack)  
**Development Approach:** Spec-Driven Development (SDD)

---

# 1. PROJECT OVERVIEW

EstateX is a modern real estate and rental platform designed to connect property buyers, renters, sellers, and property owners through a single platform.

The platform will support residential, commercial, and agricultural property listings, including:

- Houses
- Apartments
- Shops
- Commercial Properties
- Residential Plots
- Agricultural Land

Users will be able to explore, search, filter, and save properties. Sellers will be able to publish and manage property listings, while administrators will manage users, listings, and platform activities.

## Main Project Objectives

1. Develop a professional real estate platform.
2. Provide property buying and rental facilities.
3. Support multiple property categories.
4. Implement secure user authentication.
5. Provide separate user, seller, and admin dashboards.
6. Develop advanced search and filtering.
7. Implement property inquiry and communication features.
8. Build a responsive and user-friendly interface.
9. Deploy a functional web application.

---

# 2. DEVELOPMENT STRATEGY

The complete development process is divided into five major stages.

| Stage | Weeks | Development Focus |
|---|---|---|
| Stage 1 | Week 01–03 | Foundation, Requirements & UI/UX |
| Stage 2 | Week 04–07 | Backend, Database & Authentication |
| Stage 3 | Week 08–11 | Main Platform Features |
| Stage 4 | Week 12–14 | Advanced Features & Optimization |
| Stage 5 | Week 15–16 | Testing, Deployment & Documentation |

---

# 3. WEEK-BY-WEEK DEVELOPMENT PLAN

## STAGE 1 — FOUNDATION & ARCHITECTURE

### WEEK 01 — Project Foundation & Existing Work Review
**Duration:** 18 November – 22 November 2026

**Goal:** Organize the project and review previously completed work.

**Tasks:**
- Review existing EstateX development.
- Identify completed and pending tasks.
- Finalize project folder structure.
- Organize Frontend, Backend, DOC, and Prototype.
- Configure GitHub repository.
- Configure .gitignore.
- Update the main README.
- Finalize project requirements.

**Deliverables:**
- Organized project structure.
- Updated README.
- Project status report.
- Requirements document.
- GitHub repository.

### WEEK 02 — Software Requirements & System Architecture
**Duration:** 23 November – 29 November 2026

**Goal:** Define the complete system architecture before major development.

**Tasks:**
- Define functional requirements.
- Define non-functional requirements.
- Identify user roles and permissions.
- Define Visitor, User, Seller, and Admin workflows.
- Prepare system architecture diagram.
- Define frontend and backend communication.
- Plan database architecture.
- Plan API endpoints.
- Define security requirements.

**Deliverables:**
- Software Requirements Specification (SRS).
- System architecture diagram.
- User flow diagrams.
- Database planning document.
- API planning document.

### WEEK 03 — UI/UX Design & Frontend Foundation
**Duration:** 30 November – 6 December 2026

**Goal:** Design the professional interface and establish the frontend foundation.

**Tasks:**
- Finalize color scheme and typography.
- Design Navbar and Footer.
- Design Homepage.
- Design Property Listing Page.
- Design Property Details Page.
- Design Login and Signup Pages.
- Design User Dashboard.
- Design Seller Dashboard.
- Design Admin Dashboard.
- Plan responsive layouts.
- Configure React frontend.

**Deliverables:**
- UI/UX documentation.
- Homepage foundation.
- Reusable React components.
- React routing foundation.
- Responsive layout foundation.

---

## STAGE 2 — CORE DEVELOPMENT

### WEEK 04 — Backend & Server Development
**Duration:** 7 December – 13 December 2026

**Goal:** Establish the backend architecture and server.

**Tasks:**
- Configure Node.js project.
- Set up Express.js server.
- Connect MongoDB.
- Configure environment variables.
- Set up middleware.
- Implement error handling.
- Organize routes and controllers.
- Organize services and utilities.
- Create health check API.
- Test backend server.

**Deliverables:**
- Working Express server.
- MongoDB connection.
- Organized backend structure.
- Initial API endpoints.

### WEEK 05 — Database Design & Models
**Duration:** 14 December – 20 December 2026

**Goal:** Design and implement the database structure.

**Tasks:**
- Create User model.
- Create Property model.
- Create Category model.
- Create Inquiry model.
- Create Favorite model.
- Create Review model if required.
- Define property image structure.
- Define user roles.
- Establish database relationships.
- Implement schema validation.

**Deliverables:**
- MongoDB database structure.
- Mongoose models.
- Schema validation.
- Database documentation.

### WEEK 06 — Authentication & Authorization
**Duration:** 21 December – 27 December 2026

**Goal:** Develop a secure user authentication system.

**Tasks:**
- Implement user registration.
- Implement user login.
- Hash passwords using bcrypt.
- Implement JWT authentication.
- Create authentication middleware.
- Implement role-based authorization.
- Create user profile API.
- Implement logout functionality.
- Protect private routes.
- Integrate Login and Signup frontend.

**Deliverables:**
- Working Signup and Login.
- Secure password storage.
- JWT authentication.
- Role-based access control.

### WEEK 07 — Property Management System
**Duration:** 28 December 2026 – 3 January 2027

**Goal:** Allow sellers to add and manage property listings.

**Tasks:**
- Develop Add Property form.
- Implement property categories.
- Support houses, apartments, shops, plots, and agricultural land.
- Implement Sale and Rent options.
- Add property title and description.
- Add price and location fields.
- Implement property image upload.
- Implement Edit Property.
- Implement Delete Property.
- Develop Seller Property Dashboard.
- Integrate frontend and backend.

**Deliverables:**
- Add Property functionality.
- Edit and Delete functionality.
- Property database integration.
- Seller property management.

---

## STAGE 3 — MAIN PLATFORM FEATURES

### WEEK 08 — Public Homepage & Property Listings
**Duration:** 4 January – 10 January 2027

**Goal:** Develop the public property browsing experience.

**Tasks:**
- Integrate homepage.
- Display dynamic property cards.
- Implement featured properties.
- Display latest properties.
- Develop property listing page.
- Develop property details page.
- Implement property image gallery.
- Display complete property information.
- Add loading and error states.
- Integrate backend APIs.

**Deliverables:**
- Functional homepage.
- Dynamic property listings.
- Property details system.

### WEEK 09 — Search & Advanced Filters
**Duration:** 11 January – 17 January 2027

**Goal:** Allow users to find properties easily.

**Tasks:**
- Search by location.
- Search by property title.
- Filter by price.
- Filter by property category.
- Filter by Sale and Rent.
- Filter by bedrooms.
- Filter by property size.
- Implement sorting.
- Implement pagination.
- Handle empty search results.

**Deliverables:**
- Working search system.
- Advanced filtering.
- Sorting and pagination.

### WEEK 10 — User Dashboard & Favorites
**Duration:** 18 January – 24 January 2027

**Goal:** Develop personalized user account features.

**Tasks:**
- Develop User Dashboard.
- Display user profile.
- Implement Edit Profile.
- Add Favorite Properties.
- Remove Favorite Properties.
- Display Saved Properties.
- Display inquiry history.
- Add dashboard statistics.
- Protect dashboard routes.

**Deliverables:**
- User Dashboard.
- Favorites system.
- Profile management.
- Inquiry history.

### WEEK 11 — Inquiry & Communication System
**Duration:** 25 January – 31 January 2027

**Goal:** Establish communication between buyers/renters and sellers.

**Tasks:**
- Develop Property Inquiry Form.
- Send inquiries to sellers.
- Store inquiries in database.
- Develop Seller Inquiry Dashboard.
- Display inquiry details.
- Implement inquiry status management.
- Implement Contact Seller functionality.
- Add form validation.
- Integrate inquiry APIs.

**Deliverables:**
- Working inquiry system.
- Seller inquiry dashboard.
- Inquiry management functionality.

---

## STAGE 4 — ADVANCED DEVELOPMENT

### WEEK 12 — Admin Dashboard & Management
**Duration:** 1 February – 7 February 2027

**Goal:** Allow administrators to manage the platform.

**Tasks:**
- Implement admin authentication.
- Protect admin routes.
- Develop Admin Dashboard.
- Implement user management.
- Implement seller management.
- Implement property management.
- Approve or reject property listings.
- Remove inappropriate listings.
- Manage reported properties.
- Display dashboard statistics.

**Deliverables:**
- Admin Dashboard.
- User management system.
- Property moderation system.

### WEEK 13 — Security & Notifications
**Duration:** 8 February – 14 February 2027

**Goal:** Improve platform security and user experience.

**Tasks:**
- Improve API security.
- Implement input validation.
- Configure rate limiting.
- Implement secure error handling.
- Test role permissions.
- Develop notification system.
- Add new inquiry notifications.
- Add property approval notifications.
- Add account-related notifications.
- Review authentication security.

**Deliverables:**
- Improved application security.
- Notification functionality.
- Security testing report.

### WEEK 14 — Advanced Features & Optimization
**Duration:** 15 February – 21 February 2027

**Goal:** Improve performance, responsiveness, and overall quality.

**Tasks:**
- Optimize property images.
- Improve responsive layouts.
- Improve loading performance.
- Optimize API responses.
- Optimize database queries.
- Implement basic SEO.
- Improve empty states.
- Create error pages.
- Implement Light and Dark Mode if time permits.
- Improve UI animations and styling.

**Deliverables:**
- Optimized frontend.
- Improved backend performance.
- Responsive interface.
- SEO foundation.

---

## STAGE 5 — TESTING & FINALIZATION

### WEEK 15 — Complete Integration & Quality Testing
**Duration:** 22 February – 28 February 2027

**Goal:** Test the complete application and resolve bugs.

**Tasks:**
- Perform frontend/backend integration testing.
- Test authentication.
- Test property management.
- Test search and filters.
- Test user dashboard.
- Test seller dashboard.
- Test inquiry system.
- Test admin functionality.
- Test role-based access.
- Test form validation.
- Perform responsive testing.
- Fix identified bugs.

**Deliverables:**
- Complete testing report.
- Fixed critical bugs.
- Integrated working application.
- Final feature verification.

### WEEK 16 — Deployment & Final Documentation
**Duration:** 1 March – 7 March 2027

**Goal:** Deploy EstateX and prepare the final project documentation.

**Tasks:**
- Configure production environment.
- Deploy frontend.
- Deploy backend.
- Configure production MongoDB.
- Configure environment variables.
- Test deployed application.
- Finalize README.
- Prepare installation instructions.
- Prepare user guide.
- Complete developer documentation.
- Capture project screenshots.
- Prepare project presentation.
- Update GitHub repository.
- Create final project backup.

**Deliverables:**
- Deployed EstateX application.
- Updated GitHub repository.
- Complete documentation.
- User guide.
- Final presentation.

---

# 4. FINAL SUBMISSION

**Submission Date:** 8 March 2027

## Final Submission Checklist

- [ ] Project fully functional.
- [ ] Frontend and backend connected.
- [ ] Database working.
- [ ] Authentication working.
- [ ] User, Seller, and Admin roles working.
- [ ] Property management working.
- [ ] Search and filters working.
- [ ] User dashboard working.
- [ ] Seller dashboard working.
- [ ] Admin dashboard working.
- [ ] Inquiry system working.
- [ ] Security checks completed.
- [ ] Testing completed.
- [ ] Deployment completed.
- [ ] README completed.
- [ ] Documentation completed.
- [ ] Presentation ready.

---

# 5. DAILY DEVELOPMENT WORKFLOW

Each week will follow a six-day development schedule with one review day.

| Day | Activities |
|---|---|
| Monday | Weekly requirements and specifications |
| Tuesday | Planning and task breakdown |
| Wednesday | Main development |
| Thursday | Development continuation |
| Friday | Integration and testing |
| Saturday | Bug fixing and documentation |
| Sunday | Weekly review and next-week planning |

Sunday will primarily be used for reviewing progress and planning upcoming tasks.

---

# 6. SPEC-DRIVEN DEVELOPMENT (SDD) WORKFLOW

Every major EstateX feature will follow this development process:

1. **Specification:** Define what the feature should do.
2. **Clarification:** Identify missing or unclear requirements.
3. **Planning:** Decide how the feature will be developed.
4. **Task Breakdown:** Divide the feature into smaller tasks.
5. **Implementation:** Write and integrate the code.
6. **Testing:** Verify the feature's functionality.
7. **Review:** Check code quality and functionality.
8. **Completion:** Update documentation and close the task.

### Example: Add Property Feature

- Specification: Sellers can add new properties.
- Planning: Define form, API, model, and validation.
- Implementation: Develop frontend and backend.
- Testing: Verify that property data is saved correctly.
- Review: Check validation and error handling.
- Completion: Update the task status.

---

# 7. DOCUMENTATION STRUCTURE

All project documentation will be maintained inside the DOC folder.

```text
DOC/
│
├── Daily Tasks/
│   ├── DAILY-TASK-TEMPLATE.md
│   ├── 2026-11-18.md
│   ├── 2026-11-19.md
│   └── ...
│
├── Weekly Modules/
│   ├── WEEKLY-MODULE-TEMPLATE.md
│   ├── WEEK-01.md
│   ├── WEEK-02.md
│   ├── WEEK-03.md
│   └── ...
│
└── Project Planning/
    ├── PROJECT-OVERVIEW.md
    ├── MASTER-ROADMAP.md
    ├── SDD-WORKFLOW.md
    ├── REQUIREMENTS.md
    └── PROJECT-PROGRESS.md
```

## Daily Task Documentation

Every daily task file will contain:

- Today's Objectives
- Tasks Completed
- Tasks Pending
- Problems Faced
- Solutions
- Tomorrow's Plan

## Weekly Module Documentation

Every weekly module will contain:

- Weekly Goal
- Requirements
- Development Tasks
- Testing Tasks
- Deliverables
- Completion Status

---

# 8. PROJECT DEVELOPMENT RULES

1. Never start major coding without proper planning.
2. Every major feature must have a specification.
3. Develop one major feature at a time.
4. Test every feature after implementation.
5. Avoid unnecessary changes to working code.
6. Commit code regularly to GitHub.
7. Update documentation every week.
8. Carry pending tasks into the next weekly plan.
9. Implement security and validation throughout development.
10. Perform complete integration testing before submission.

---

# 9. WEEKLY PROGRESS TRACKING

| Week | Module | Status |
|---|---|---|
| Week 01 | Project Foundation | Not Started |
| Week 02 | Requirements & Architecture | Not Started |
| Week 03 | UI/UX & Frontend Foundation | Not Started |
| Week 04 | Backend & Server | Not Started |
| Week 05 | Database & Models | Not Started |
| Week 06 | Authentication | Not Started |
| Week 07 | Property Management | Not Started |
| Week 08 | Homepage & Listings | Not Started |
| Week 09 | Search & Filters | Not Started |
| Week 10 | User Dashboard & Favorites | Not Started |
| Week 11 | Inquiry System | Not Started |
| Week 12 | Admin Dashboard | Not Started |
| Week 13 | Security & Notifications | Not Started |
| Week 14 | Advanced Features & Optimization | Not Started |
| Week 15 | Integration & Testing | Not Started |
| Week 16 | Deployment & Documentation | Not Started |

**Status Options:**
- Not Started
- In Progress
- Partially Completed
- Completed
- Delayed

---

# 10. PROJECT COMPLETION TARGET

By 8 March 2027, EstateX should be a functional, tested, documented, and deployed real estate and rental platform.

The main objective is not simply to complete the coding. The objective is to develop a reliable software product using a structured development process, proper documentation, continuous testing, and professional project management.

**PROJECT MOTTO:**

> Plan Carefully. Build Systematically. Test Continuously. Deliver Professionally.

---

**END OF MASTER DEVELOPMENT ROADMAP**
