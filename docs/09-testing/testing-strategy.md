# EstateX — Comprehensive Testing Strategy

**Document Reference:** TEST-STRAT-2026-V1  
**Project:** EstateX Real Estate & Rental Platform  
**Testing Pyramid:** Unit Tests (70%) | Integration Tests (20%) | E2E & System Tests (10%)  

---

## 1. Testing Pyramid & Methodology

EstateX applies Spec-Driven Development testing gates where every module must pass defined acceptance verification tests prior to milestone sign-off.

```mermaid
graph TD
    subgraph E2E Tests [10% - End-to-End & Acceptance]
        E1[Full User Journeys: Visitor -> Register -> Favorite -> Inquire]
        E2[Full Seller Journey: Add Listing -> Admin Approve -> Lead Received]
    end

    subgraph Integration Tests [20% - Service & API Integration]
        I1[Express Route + Supertest API Contract Verification]
        I2[MongoDB In-Memory MemoryServer Query Testing]
        I3[JWT Auth & RBAC Guard Permutations]
    end

    subgraph Unit Tests [70% - Isolated Units]
        U1[Zod Schema Boundary & Edge Case Tests]
        U2[Utility Functions: Currency & Area Converters]
        U3[React Hook & Component State Unit Tests]
        U4[Mongoose Model Validation Rules]
    end

    E2E Tests --> Integration Tests
    Integration Tests --> Unit Tests
```

---

## 2. Testing Frameworks & Tools

| Testing Tier | Tool / Framework | Responsibility |
|---|---|---|
| **Unit Testing (Backend)** | Jest | Fast, isolated function, utility, and validation tests |
| **API Integration Testing** | Jest + Supertest | Testing HTTP routes, status codes, and database mutations |
| **In-Memory Testing DB** | `mongodb-memory-server` | Ephemeral MongoDB instance for fast, isolated integration runs |
| **Unit Testing (Frontend)** | Vitest + React Testing Library | Component rendering, event handling, hook testing |
| **E2E & UI Testing** | Playwright (or Cypress) | Real browser automation verifying multi-step user workflows |
| **Manual Verification** | Postman Collection | Pre-configured environment collection for academic demonstration |

---

## 3. Module Acceptance Criteria Checklists

### Module 02: Authentication & Authorization
- [ ] User registration with valid data returns 201 Created and signed JWT token.
- [ ] Registration with existing email returns 409 Conflict with appropriate message.
- [ ] Login with invalid password returns 401 Unauthorized (does not reveal whether email or password failed).
- [ ] Accessing protected routes without Bearer token returns 401 Unauthorized.
- [ ] User with `user` role attempting to access `POST /api/v1/properties` returns 403 Forbidden.

### Module 06 & 07: Property Listing & Search
- [ ] Creating property with missing price or title fails with 400 Bad Request and field-specific errors.
- [ ] Property created by seller defaults to `pending` approval status.
- [ ] Public listing query only returns properties with `approvalStatus: "approved"` and `listingStatus: "active"`.
- [ ] Filtering by `city: "Bhakkar"` and `purpose: "Sale"` returns only matching listings.
- [ ] Price range filter correctly applies `>= minPrice` and `<= maxPrice`.

### Module 10: Inquiries
- [ ] Submitting inquiry with valid data creates record and associates seller ID automatically.
- [ ] Buyer can view their own inquiries at `/api/v1/inquiries/buyer`.
- [ ] Seller can view inquiries only for properties owned by their seller ID.
