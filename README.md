# 🛍️ Marketplace API 🎨
## Day 2

*Created during the challenge of 1 project/day documented on TikTok 📅*

## Achievements:
- 🚀 Complete API in NodeJS for managing users, products, orders, and reviews.
- 📊 Database models created with Sequelize.
- 🔄 Synchronized with a MySQL database.
- 🔒 Middleware for securing routes with JSONWebToken.

## Database Models:
- 👤 **User**
- 📦 **Product**
- 🛒 **Order**
- ⭐ **Rating**

## Main Routes:
- **/users**
  - POST: Create a user
  - GET: Get all users
  - GET: Get a user by ID
  - PUT: Update a user
  - DELETE: Delete a user
- **/products**
  - POST: Create a product
  - GET: Get all products
  - GET: Get a product by ID
  - PUT: Update a product
  - DELETE: Delete a product
- **/orders**
  - POST: Create an order
  - GET: Get all orders
  - GET: Get an order by ID
  - PUT: Update an order
  - DELETE: Delete an order
- **/ratings**
  - POST: Create a rating
  - GET: Get all ratings
  - GET: Get a rating by ID
  - PUT: Update a rating
  - DELETE: Delete a rating

## Main Challenge:
- ❗ Database access issue

**Work time:** 5 hours  
**Difficulty:** 2/5

*Check my video on TikTok: corentindld0*

## 🔐 Authentication System
The authentication system for the Artisan Marketplace API uses JSON Web Tokens (JWT) to secure routes and manage user sessions. Here are the key components of the authentication system:

### 📝 User Registration
When a user registers, their information is validated, and the password is hashed using bcrypt before being stored in the database. This ensures that even if the database is compromised, the passwords remain secure.

### 🔑 User Login
During login, the user's credentials are validated. If the credentials are correct, a JWT is generated and returned to the user. This token is used to authenticate subsequent requests.

### 🛠️ Token Generation
JWT tokens are generated using a secret key. These tokens include the user's ID and an expiration time, which ensures that tokens are valid only for a specific period.

### 🕵️‍♂️ Token Verification
For protected routes, the server verifies the JWT token included in the request headers. If the token is valid, the request proceeds; otherwise, an error is returned, indicating that the user is not authorized.
