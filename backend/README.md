# Contacts Book Backend API

A production-oriented REST API built with **Node.js**, **Express**, **TypeScript**, and **SQLite** for managing contacts with secure JWT authentication.

This project was developed as **Step 2** of the PaperPlane Full Stack JavaScript Developer Technical Assignment.

---

# Features

- JWT Authentication
- User Registration
- User Login
- Contact CRUD Operations
- Search Contacts
- Sort Contacts
- Filter Contacts by Tag
- SQLite Database
- Password Hashing using bcrypt
- Request Validation using Zod
- Integration Tests with Jest & Supertest
- TypeScript Strict Mode

---

# Tech Stack

- Node.js
- Express.js
- TypeScript
- SQLite (better-sqlite3)
- JWT
- bcrypt
- Zod
- Jest
- Supertest
- dotenv

---

# Folder Structure

```
backend/

src/

├── config/
├── controllers/
├── database/
├── middleware/
├── models/
├── routes/
├── services/
├── tests/
├── utils/
├── validators/
├── app.ts
└── server.ts

.env.example
package.json
README.md
```

---

# Architecture

```
Client

↓

Routes

↓

Controllers

↓

Services

↓

SQLite Database
```

The project follows a layered architecture where routing, business logic, validation, middleware, and persistence are kept separate for maintainability.

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create environment variables

```bash
cp .env.example .env
```

Run development server

```bash
npm run dev
```

---

# Environment Variables

```
PORT=5000
JWT_SECRET=your-secret-key
DATABASE_URL=contacts.db
```

---

# API Endpoints

## Authentication

| Method | Endpoint       | Authentication |
| ------ | -------------- | -------------- |
| POST   | /auth/register | Public         |
| POST   | /auth/login    | Public         |

---

## Contacts

| Method | Endpoint      | Authentication |
| ------ | ------------- | -------------- |
| GET    | /contacts     | Public         |
| GET    | /contacts/:id | Public         |
| POST   | /contacts     | JWT Required   |
| PUT    | /contacts/:id | JWT Required   |
| DELETE | /contacts/:id | JWT Required   |

---

# Authentication

Protected endpoints require a valid JWT token.

Example

```
Authorization: Bearer <JWT_TOKEN>
```

Passwords are securely hashed using bcrypt before being stored in the database.

---

# Validation

All incoming requests are validated using Zod.

Validation includes:

- Required fields
- Email format
- Phone validation
- Duplicate email detection
- Authentication payload validation

---

# Database

SQLite is used as the persistence layer.

Tables created automatically on application startup:

- users
- contacts

No manual database setup is required.

---

# Testing

Integration testing is implemented using Jest and Supertest.

Covered scenarios include:

- User Registration
- User Login
- Unauthorized Requests
- Contact Creation
- Contact Retrieval
- Contact Deletion

Run tests

```bash
npm test
```

---

# Design Decisions

- SQLite was selected for simple local setup without external dependencies.
- JWT provides stateless authentication.
- bcrypt ensures secure password storage.
- Service layer separates business logic from controllers.
- Middleware handles authentication and centralized error processing.
- Zod provides request validation with clear error messages.
- TypeScript strict mode improves reliability and maintainability.

---

# AI Usage

## AI Tools Used

ChatGPT was used throughout development to assist with:

- Express project scaffolding
- TypeScript type definitions
- SQLite schema design
- JWT authentication setup
- Jest integration test structure
- Code review and refactoring suggestions

---

## Example of Human Decision Making

An initial suggestion was to place authentication state inside Zustand. Instead, JWT storage in Local Storage combined with an Axios interceptor was chosen because it provides a cleaner separation between authentication and application state while simplifying authenticated API requests.

---

## Where AI Accelerated Development

Frontend

- Assisted with reusable component organization and form validation approaches.

Backend

- Accelerated Express routing, database configuration, authentication scaffolding, and test generation, allowing more time to focus on architecture, validation, and API design.

---

# Future Improvements

- Refresh Token Authentication
- Role-Based Authorization
- Pagination
- Docker Support
- API Documentation using Swagger/OpenAPI
- PostgreSQL Support
- CI/CD Pipeline
