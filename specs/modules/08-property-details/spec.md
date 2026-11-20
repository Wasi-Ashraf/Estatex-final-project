# Module Specification: Property Details Module (MOD-08)

**Module Reference:** MOD-08-PROPERTY-DETAILS  
**Status:** Approved Baseline  
**Target Roles:** Visitor, Buyer (`user`), Seller (`seller`), Admin (`admin`)  

---

## 1. Purpose & Scope
The Property Details Module presents comprehensive information regarding a selected property. It renders a high-resolution responsive image gallery, structured technical specifications, price in Pakistani formatting, location details, seller contact information, and direct action triggers (Favorite and Inquire).

## 2. Requirements Traceability
- `FR-DET-001`: Responsive image gallery with thumbnail navigation and full-screen view.
- `FR-DET-002`: Formatted price display in Pakistani standards (PKR Lakhs / Crores).
- `FR-DET-003`: Presentation of category-specific specifications (bedrooms, bathrooms, area, water rights).
- `FR-DET-004`: Seller contact card with inquiry form modal trigger.

## 3. Users & Personas
- **Tariq Mehmood (Buyer):** Reviews property specs, verifies room dimensions, checks location in Canal View Colony, and prepares to submit an inquiry.

## 4. UI Layout & Component Wireframe
```
+-----------------------------------------------------------------------+
|  Breadcrumbs: Home > Bhakkar > Houses > 5 Marla Brand New Modern House|
+-----------------------------------------------------------------------+
|  [ MAIN PROPERTY IMAGE CAROUSEL / GALLERY ]           | SELLER CARD   |
|  [ Thumb 1 ] [ Thumb 2 ] [ Thumb 3 ] [ Thumb 4 ]      | Malik Arshad  |
|                                                       | 0300-XXXXXXX  |
|  PKR 85 Lakhs (8,500,000)                             | [ Inquire ]   |
|  Location: Canal View Colony, Bhakkar, Punjab         | [ Save Fav ]  |
+-------------------------------------------------------+---------------+
|  OVERVIEW & SPECIFICATIONS                                            |
|  - Purpose: For Sale       - Category: House         - Area: 5 Marla  |
|  - Bedrooms: 3             - Bathrooms: 4            - Parking: Yes   |
+-----------------------------------------------------------------------+
|  DESCRIPTION                                                          |
|  Beautiful newly constructed double-story house situated in...        |
+-----------------------------------------------------------------------+
```

## 5. Business Rules
1. If the viewing user is the seller who owns the listing, an "Edit Listing" action button is surfaced.
2. If viewing user is an unauthenticated visitor, clicking "Inquire" or "Save Favorite" triggers the authentication modal with redirect parameters.
3. Every detail view visit increments the property's `viewCount` metric (debounced by IP / session).

## 6. Dependencies
- Dependent on: `MOD-06` (Property Listing Engine), `MOD-11` (Image Management).
- Triggers: `MOD-09` (Favorites), `MOD-10` (Inquiries).

## 7. Database Planning
- Single document lookup by `_id` on `properties` collection.
- Populates `sellerId` with public fields: `{ fullName: 1, phone: 1, createdAt: 1 }`.

## 8. API Planning
- `GET /api/v1/properties/:id` (Public)

## 9. Validation
- Validation of `id` parameter as a valid 24-character hexadecimal MongoDB `ObjectId`.
- Returns 404 Not Found if property does not exist or is deleted.

## 10. Security Considerations
- Prevents leaking private seller credentials (passwordHash, internal notes).

## 11. Acceptance Criteria
- [ ] Detail page renders all images in gallery.
- [ ] Category-specific specifications display accurately according to property type.
- [ ] Valid ObjectId lookup returns 200 OK; invalid format returns 400 Bad Request.

## 12. Testing Strategy
- Unit test for `ObjectId` parameter validator.
- Component rendering tests for image gallery and seller contact card.
