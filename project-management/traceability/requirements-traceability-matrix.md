# EstateX — Requirements Traceability Matrix (RTM)

**Document Reference:** RTM-ESTATEX-2026-V1  
**Project:** EstateX Real Estate & Rental Platform  
**Methodology:** Spec-Driven Development (SDD)  

---

## 1. Bidirectional Traceability Matrix

This matrix establishes end-to-end bidirectional traceability linking each Functional Requirement (FR) and Non-Functional Requirement (NFR) to its formal Spec Kit specification, architecture plan, development task, and test verification case.

| Req ID | Requirement Summary | Module Spec | Architecture Reference | Development Task ID | Verification Case | Status |
|---|---|---|---|---|---|---|
| **FR-VIS-001** | Public Homepage rendering | `MOD-01` | `ARCH-FE-01` | `TASK-FE-01` | `TEST-E2E-01` | Specified |
| **FR-VIS-002** | Browse property listings | `MOD-01` | `ARCH-FE-02` | `TASK-FE-02` | `TEST-INT-01` | Specified |
| **FR-VIS-003** | View property details | `MOD-01` | `ARCH-FE-03` | `TASK-FE-03` | `TEST-INT-02` | Specified |
| **FR-VIS-004** | Auth redirection prompt | `MOD-01` | `ARCH-FE-04` | `TASK-FE-04` | `TEST-UNIT-01` | Specified |
| **FR-VIS-005** | Static info pages (About/Contact) | `MOD-01` | `ARCH-FE-05` | `TASK-FE-05` | `TEST-UNIT-02` | Specified |
| **FR-AUT-001** | User/Seller Registration | `MOD-02` | `ARCH-BE-01` | `TASK-BE-01` | `TEST-INT-03` | Specified |
| **FR-AUT-002** | bcrypt password hashing | `MOD-02` | `SEC-01` | `TASK-BE-02` | `TEST-UNIT-03` | Specified |
| **FR-AUT-003** | JWT token generation & auth | `MOD-02` | `SEC-02` | `TASK-BE-03` | `TEST-INT-04` | Specified |
| **FR-AUT-004** | Role-Based Access Control (RBAC) | `MOD-02` | `SEC-03` | `TASK-BE-04` | `TEST-INT-05` | Specified |
| **FR-AUT-005** | Client logout & token clear | `MOD-02` | `ARCH-FE-06` | `TASK-FE-06` | `TEST-UNIT-04` | Specified |
| **FR-BUY-001** | Buyer profile management | `MOD-03` | `ARCH-BE-05` | `TASK-BE-05` | `TEST-INT-06` | Specified |
| **FR-BUY-002** | Save/remove favorites | `MOD-03` | `DB-01` | `TASK-BE-06` | `TEST-INT-07` | Specified |
| **FR-BUY-003** | Submit property inquiries | `MOD-03` | `DB-02` | `TASK-BE-07` | `TEST-INT-08` | Specified |
| **FR-BUY-004** | View inquiry history | `MOD-03` | `ARCH-FE-07` | `TASK-FE-07` | `TEST-INT-09` | Specified |
| **FR-SEL-001** | Create/edit/delete listings | `MOD-04` | `ARCH-BE-06` | `TASK-BE-08` | `TEST-INT-10` | Specified |
| **FR-SEL-002** | Seller dashboard | `MOD-04` | `ARCH-FE-08` | `TASK-FE-08` | `TEST-E2E-02` | Specified |
| **FR-SEL-003** | Mark listing Sold/Rented | `MOD-04` | `ARCH-BE-07` | `TASK-BE-09` | `TEST-INT-11` | Specified |
| **FR-SEL-004** | Inquiries inbox for leads | `MOD-04` | `ARCH-FE-09` | `TASK-FE-09` | `TEST-INT-12` | Specified |
| **FR-ADM-001** | Protected admin endpoints | `MOD-05` | `SEC-04` | `TASK-BE-10` | `TEST-INT-13` | Specified |
| **FR-ADM-002** | Listing review & approval | `MOD-05` | `ARCH-BE-08` | `TASK-BE-11` | `TEST-INT-14` | Specified |
| **FR-ADM-003** | Account moderation | `MOD-05` | `ARCH-BE-09` | `TASK-BE-12` | `TEST-INT-15` | Specified |
| **FR-ADM-004** | Admin KPIs dashboard | `MOD-05` | `ARCH-FE-10` | `TASK-FE-10` | `TEST-E2E-03` | Specified |
| **FR-LST-001** | Sale and Rent purpose modes | `MOD-06` | `DB-03` | `TASK-BE-13` | `TEST-UNIT-05` | Specified |
| **FR-LST-002** | 5 Pakistan Property Categories | `MOD-06` | `DB-04` | `TASK-BE-14` | `TEST-UNIT-06` | Specified |
| **FR-LST-003** | Mandatory property attributes | `MOD-06` | `DB-05` | `TASK-BE-15` | `TEST-INT-16` | Specified |
| **FR-LST-004** | Category-specific attributes | `MOD-06` | `DB-06` | `TASK-BE-16` | `TEST-INT-17` | Specified |
| **FR-SRC-001** | Text keyword search | `MOD-07` | `DB-07` | `TASK-BE-17` | `TEST-INT-18` | Specified |
| **FR-SRC-002** | Purpose filter | `MOD-07` | `ARCH-BE-10` | `TASK-BE-18` | `TEST-INT-19` | Specified |
| **FR-SRC-003** | Category filter | `MOD-07` | `ARCH-BE-11` | `TASK-BE-19` | `TEST-INT-20` | Specified |
| **FR-SRC-004** | Pakistan City filter | `MOD-07` | `ARCH-BE-12` | `TASK-BE-20` | `TEST-INT-21` | Specified |
| **FR-SRC-005** | Price range filter | `MOD-07` | `ARCH-BE-13` | `TASK-BE-21` | `TEST-INT-22` | Specified |
| **FR-SRC-006** | Price & date sorting | `MOD-07` | `ARCH-BE-14` | `TASK-BE-22` | `TEST-INT-23` | Specified |
| **FR-SRC-007** | Server-side pagination | `MOD-07` | `ARCH-BE-15` | `TASK-BE-23` | `TEST-INT-24` | Specified |
| **FR-DET-001** | Responsive image gallery | `MOD-08` | `ARCH-FE-11` | `TASK-FE-11` | `TEST-UNIT-07` | Specified |
| **FR-DET-002** | Pakistani price formatting | `MOD-08` | `ARCH-FE-12` | `TASK-FE-12` | `TEST-UNIT-08` | Specified |
| **FR-DET-003** | Category specs display | `MOD-08` | `ARCH-FE-13` | `TASK-FE-13` | `TEST-UNIT-09` | Specified |
| **FR-DET-004** | Seller contact card | `MOD-08` | `ARCH-FE-14` | `TASK-FE-14` | `TEST-INT-25` | Specified |
| **FR-FAV-001** | Toggle favorite bookmark | `MOD-09` | `DB-08` | `TASK-BE-24` | `TEST-INT-26` | Specified |
| **FR-FAV-002** | Prevent duplicate bookmarks | `MOD-09` | `DB-09` | `TASK-BE-25` | `TEST-UNIT-10` | Specified |
| **FR-FAV-003** | User dashboard favorites | `MOD-09` | `ARCH-FE-15` | `TASK-FE-15` | `TEST-INT-27` | Specified |
| **FR-INQ-001** | Submit property inquiry | `MOD-10` | `DB-10` | `TASK-BE-26` | `TEST-INT-28` | Specified |
| **FR-INQ-002** | Buyer & seller auto linkage | `MOD-10` | `ARCH-BE-16` | `TASK-BE-27` | `TEST-INT-29` | Specified |
| **FR-INQ-003** | Seller inquiry dashboard | `MOD-10` | `ARCH-FE-16` | `TASK-FE-16` | `TEST-INT-30` | Specified |
| **FR-INQ-004** | Inquiry status management | `MOD-10` | `ARCH-BE-17` | `TASK-BE-28` | `TEST-INT-31` | Specified |
| **FR-IMG-001** | 1 to 10 photos upload | `MOD-11` | `ARCH-BE-18` | `TASK-BE-29` | `TEST-INT-32` | Specified |
| **FR-IMG-002** | MIME & 5MB file validation | `MOD-11` | `SEC-05` | `TASK-BE-30` | `TEST-UNIT-11` | Specified |
| **FR-IMG-003** | Primary thumbnail flag | `MOD-11` | `DB-11` | `TASK-BE-31` | `TEST-UNIT-12` | Specified |
| **FR-IMG-004** | Cascade image cleanup | `MOD-11` | `ARCH-BE-19` | `TASK-BE-32` | `TEST-UNIT-13` | Specified |
| **FR-LOC-001** | Pakistan location hierarchy | `MOD-12` | `DB-12` | `TASK-BE-33` | `TEST-UNIT-14` | Specified |
| **FR-LOC-002** | Lat/Long coordinates | `MOD-12` | `DB-13` | `TASK-BE-34` | `TEST-UNIT-15` | Specified |
| **FR-LOC-003** | City database indexing | `MOD-12` | `DB-14` | `TASK-BE-35` | `TEST-INT-33` | Specified |
| **FR-DSH-001** | User Dashboard UI | `MOD-13` | `ARCH-FE-17` | `TASK-FE-17` | `TEST-E2E-04` | Specified |
| **FR-DSH-002** | Seller Dashboard UI | `MOD-13` | `ARCH-FE-18` | `TASK-FE-18` | `TEST-E2E-05` | Specified |
| **FR-DSH-003** | Admin Dashboard UI | `MOD-13` | `ARCH-FE-19` | `TASK-FE-19` | `TEST-E2E-06` | Specified |
