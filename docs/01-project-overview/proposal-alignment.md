# EstateX — Approved Proposal Alignment Audit

**Document Reference:** PROP-ALIGN-2026-V1  
**Single Source of Truth:** Approved EstateX DAE CIT Final Year Project Proposal  

---

## 1. Proposal Scope Verification Matrix

This matrix establishes that 100% of the planned EstateX modules and features directly map to the approved project proposal with zero unauthorized scope expansion.

| Proposal Requirement Area | Approved Proposal Scope | EstateX Specification Mapping | Compliance Status |
|---|---|---|---|
| **Property Categories** | Houses, Apartments/Flats, Shops/Commercial, Residential Plots, Agricultural Land | Fully specified in `specs/modules/06-property-listing` & `docs/06-database` | 100% ALIGNED |
| **Transaction Purposes** | Buying / Selling (Sale) and Renting (Rent) | Formalized as `purpose: ['Sale', 'Rent']` in all models & filters | 100% ALIGNED |
| **User Personas** | Visitor, Buyer/User, Seller/Owner, Administrator | Formally mapped in `docs/02-requirements/user-personas-and-roles.md` | 100% ALIGNED |
| **Core Functions** | Property Browse, Advanced Search, Favorites, Direct Inquiry, Dashboards | Formally mapped into Modules 01, 07, 09, 10, 13 | 100% ALIGNED |
| **Technology Stack** | React.js, Node.js, Express.js, MongoDB, Mongoose | Locked into Project Constitution and Architecture specifications | 100% ALIGNED |
| **Geographic Scope** | Pakistan (specifically including Bhakkar, Punjab, and national coverage) | Formalized in Module 12 (Location Management) | 100% ALIGNED |

---

## 2. Boundaries & Out-of-Scope Items (Strict Prohibitions)

To maintain focus and avoid scope creep during the academic timeframe:
- **Payment Gateway / Escrow:** Strictly out of scope. Property transactions in Pakistan are completed legally via land revenue authorities (Patwari/Registry). EstateX provides discovery, marketing, and verified inquiries, not monetary transactions.
- **Live Video Tours / 3D Virtual Tours:** Out of scope for MVP baseline. Standard high-resolution photo galleries are supported.
- **Automated AI Property Valuations:** Out of scope. Prices are set directly by property owners/sellers.
