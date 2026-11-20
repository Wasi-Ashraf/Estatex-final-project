# EstateX — RESTful API Specification

**Document Reference:** API-SPEC-2026-V1  
**Protocol:** HTTP/1.1 & HTTP/2 over TLS  
**Base URL:** `/api/v1`  
**Authentication Scheme:** `Bearer <JWT_TOKEN>`  

---

## 1. Endpoint Summary & RBAC Scope

```
Authentication:
POST   /api/v1/auth/register          # Register user or seller (Public)
POST   /api/v1/auth/login             # Authenticate & issue token (Public)
GET    /api/v1/auth/me                # Get authenticated profile (User, Seller, Admin)
PUT    /api/v1/auth/profile           # Update profile details (User, Seller, Admin)

Properties:
GET    /api/v1/properties             # Search & browse approved listings (Public)
GET    /api/v1/properties/featured    # Get curated featured listings (Public)
GET    /api/v1/properties/:id         # Get detailed property profile (Public)
POST   /api/v1/properties             # Create new property listing (Seller, Admin)
PUT    /api/v1/properties/:id         # Update owned property listing (Seller, Admin)
DELETE /api/v1/properties/:id         # Soft delete property listing (Seller, Admin)
PATCH  /api/v1/properties/:id/status  # Update listing status active/sold/rented (Seller, Admin)

Favorites:
GET    /api/v1/favorites              # List current user's saved properties (User, Seller)
POST   /api/v1/favorites/:propertyId  # Add property to favorites (User, Seller)
DELETE /api/v1/favorites/:propertyId  # Remove property from favorites (User, Seller)

Inquiries:
POST   /api/v1/inquiries              # Submit property inquiry (User, Seller)
GET    /api/v1/inquiries/buyer        # List inquiries submitted by user (User, Seller)
GET    /api/v1/inquiries/seller       # List inquiries received by seller (Seller, Admin)
PATCH  /api/v1/inquiries/:id/status   # Update inquiry lead status (Seller, Admin)

Administration:
GET    /api/v1/admin/stats            # Platform metrics & counts (Admin)
GET    /api/v1/admin/users            # List and filter registered users (Admin)
PATCH  /api/v1/admin/users/:id/status # Suspend or activate user account (Admin)
GET    /api/v1/admin/properties/pending # List pending listings for approval (Admin)
PATCH  /api/v1/admin/properties/:id/moderate # Approve or reject property (Admin)
```

---

## 2. Detailed Endpoint Contracts

### 2.1 `POST /api/v1/auth/register`
- **Access:** Public
- **Request Body:**
```json
{
  "fullName": "Muhammad Tariq",
  "email": "tariq@example.pk",
  "phone": "03001234567",
  "password": "SecurePassword123!",
  "role": "user"
}
```
- **Response (201 Created):**
```json
{
  "success": true,
  "statusCode": 201,
  "message": "User registered successfully",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "673da1234567890abcdef001",
      "fullName": "Muhammad Tariq",
      "email": "tariq@example.pk",
      "role": "user"
    }
  }
}
```

### 2.2 `GET /api/v1/properties`
- **Access:** Public
- **Query Parameters:**
  - `search` (string): Text match against title, description, and locality
  - `city` (string): e.g. `Bhakkar`, `Lahore`
  - `purpose` (string): `Sale` or `Rent`
  - `category` (string): `House`, `Apartment`, `Commercial Shop`, `Residential Plot`, `Agricultural Land`
  - `minPrice` (number): e.g. `1000000`
  - `maxPrice` (number): e.g. `15000000`
  - `sort` (string): `price_asc`, `price_desc`, `date_desc` (default)
  - `page` (number): default `1`
  - `limit` (number): default `12`, max `24`
- **Response (200 OK):**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Listings fetched successfully",
  "data": {
    "properties": [
      {
        "_id": "673da4567890abcdef002",
        "title": "5 Marla Brand New Modern House in Bhakkar",
        "purpose": "Sale",
        "category": "House",
        "pricePKR": 8500000,
        "area": { "value": 5, "unit": "Marla" },
        "location": { "address": "Canal View Colony", "city": "Bhakkar", "province": "Punjab" },
        "primaryImage": "https://res.cloudinary.com/estatex/image/upload/v1/sample1.jpg",
        "specifications": { "bedrooms": 3, "bathrooms": 4 },
        "createdAt": "2026-11-20T10:00:00.000Z"
      }
    ],
    "pagination": {
      "total": 45,
      "page": 1,
      "limit": 12,
      "totalPages": 4
    }
  }
}
```

### 2.3 `POST /api/v1/inquiries`
- **Access:** Authenticated (`user`, `seller`)
- **Headers:** `Authorization: Bearer <TOKEN>`
- **Request Body:**
```json
{
  "propertyId": "673da4567890abcdef002",
  "buyerName": "Muhammad Tariq",
  "buyerEmail": "tariq@example.pk",
  "buyerPhone": "03001234567",
  "message": "I am interested in this house. Is it available for immediate visit this weekend?",
  "preferredDate": "2026-11-25T14:00:00.000Z"
}
```
- **Response (201 Created):**
```json
{
  "success": true,
  "statusCode": 201,
  "message": "Inquiry submitted successfully to seller",
  "data": {
    "inquiryId": "673da789abcdef003",
    "status": "new",
    "submittedAt": "2026-11-20T12:00:00.000Z"
  }
}
```

---

## 3. HTTP Status Codes & Error Registry

| Status Code | Code Meaning | Common Scenarios |
|---|---|---|
| `200 OK` | Standard Success | Resource fetched or updated successfully |
| `201 Created` | Created | User registered, listing created, inquiry submitted |
| `400 Bad Request` | Validation Failure | Missing required fields, invalid phone, negative price |
| `401 Unauthorized` | Auth Required | Missing or expired JWT token |
| `403 Forbidden` | Insufficient Permissions | User trying to delete another seller's listing or call admin API |
| `404 Not Found` | Not Found | Property ID or User ID does not exist |
| `409 Conflict` | Duplicate Resource | Registering email that already exists, duplicate favorite |
| `429 Too Many Requests` | Rate Limited | Exceeded IP rate limit threshold |
| `500 Server Error` | Internal Error | Unhandled server exception (logged for investigation) |
