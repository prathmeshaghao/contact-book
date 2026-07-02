1# Contacts Book

A modern Contact Management application built with React, TypeScript, Zustand, Material UI, React Router, React Hook Form, and Zod.

## Live Demo

## Vercel Deployment (Frontend) : https://contact-books.vercel.app/

## Render Deployment (Backend) : https://contact-book-nudq.onrender.com

> Note:
> The backend is hosted on Render's free tier. The first request may take 30–60 seconds if the service is waking up after inactivity.

## GitHub Repository: https://github.com/prathmeshaghao/contact-book

## Project Overview

Contacts Book is a single-page application that allows users to manage contacts with full CRUD functionality.

Users can:

- View all contacts
- Search contacts in real time
- Filter contacts by tags
- Sort contacts by name and date added
- View contact details
- Create new contacts
- Edit existing contacts
- Delete contacts with confirmation
- Validate form inputs
- Prevent duplicate email entries
- Receive warnings about unsaved changes

The application is fully responsive and adapts between desktop table layouts and mobile card layouts.

---

## Tech Stack

### Frontend

- React
- TypeScript
- React Router v6

### State Management

- Zustand

### UI

- Material UI (MUI)

### Forms & Validation

- React Hook Form
- Zod
- @hookform/resolvers

### Testing

- Vitest

### Build Tool

- Vite

### Deployment

- Vercel

---

## Setup Instructions

### Clone Repository

```bash
git clone <YOUR_GITHUB_REPO_URL>
```

### Navigate Into Project

```bash
cd contacts-book
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Application will be available at:

```txt
http://localhost:5173
```

---

## Build Project

```bash
npm run build
```

---

## Run Tests

```bash
npm run test
```

---

## Features

### Contact List

- Displays all contacts
- Seeded initial data
- Real-time search
- Multi-select tag filtering
- Sorting by:
  - Name A-Z
  - Name Z-A
  - Date Added

### Contact Details

- Avatar initials
- Contact information display
- Edit contact
- Delete contact
- Confirmation dialog

### Contact Form

- Shared form component for Create and Edit operations

  Validation Rules

- First Name is required
- First Name allows letters only
- Email is required
- Email must be valid format
- Phone is required
- Phone must contain exactly 10 digits
- Duplicate emails are prevented

### User Experience

- Unsaved changes warning
- Responsive design

Desktop (1280px+)

- Sortable table layout

Mobile (375px+)

- Card-based layout
- Touch-friendly navigation
- Responsive filters and forms

---

## Folder Structure

```txt
src
│
├── app
│   └── router
│
├── components
│   ├── common
│   └── contacts
│
├── data
│
├── hooks
│
├── pages
│
├── store
│
├── tests
│
├── theme
│
├── types
│
└── utils
```

---

## State Management Choice

I selected Zustand for state management.

### Why Zustand?

- Minimal boilerplate
- Excellent TypeScript support
- Simple API
- Easy scalability
- Cleaner than Context for application-wide contact management

Since contacts are shared across multiple routes (List, Details, Create, Edit), Zustand provided a lightweight and maintainable solution without unnecessary complexity.

---

## Architecture Decisions

### Reusable Form Component

A single ContactForm component is used for both:

- Create Contact
- Edit Contact

This prevents code duplication and improves maintainability.

## Custom Hooks

### useContactFilter

Responsible for:

- Search filtering
- Tag filtering
- Sorting

### useUnsavedChanges

Responsible for:

- Detecting dirty forms
- Warning users before leaving unsaved forms

### Separation of Concerns

- Pages handle routing and page-level logic
- Components handle UI rendering
- Zustand handles global state
- Hooks handle reusable business logic
- Validation is centralized using Zod

---

## Testing

The application includes meaningful unit tests covering core functionality.

### Validation Test

Verifies:

- Required first name validation
- Valid contact submission

### Search Filter Test

Verifies:

- Contact search functionality
- Filtering logic

### Duplicate Email Test

Verifies:

- Duplicate email detection
- Unique email acceptance

---

## Application Flow

Contact List
├── Search
├── Filter
├── Sort
│
├── Contact Detail
│ ├── Edit Contact
│ └── Delete Contact
│
└── Create Contact

Global State (Zustand)
├── Contacts
├── Add Contact
├── Update Contact
├── Delete Contact
└── Duplicate Email Check

## Responsive Design

Desktop:

- Contact table layout

Mobile:

- Contact card layout
- Optimized spacing and touch interactions

The application has been tested across desktop and mobile screen sizes.

---

## Trade-offs / Shortcuts

Due to the assignment time constraints:

- Backend persistence was not implemented
- Data is stored in client-side state
- Authentication was not implemented
- Advanced pagination was not implemented

Priority was given to:

- Clean architecture
- Type safety
- Reusable components
- Validation
- User experience

## Key Decisions

### Why Zustand Instead of Context?

Zustand was selected because it provides a lightweight API, minimal boilerplate, and excellent TypeScript support. Since contacts are accessed across multiple routes, it simplified global state management while keeping components focused on UI.

### Why React Hook Form + Zod?

React Hook Form minimizes re-renders and integrates naturally with Zod. This provides type-safe validation and a single source of truth for form validation rules.

### Why Separate Custom Hooks?

Filtering and unsaved-change detection were extracted into reusable hooks to improve maintainability and testability.

---

## Improvements With More Time

If given additional time, I would add:

### Functional Enhancements

- Contact grouping
- Favorite contacts
- Bulk delete
- Import/Export CSV
- Contact image uploads

### Technical Enhancements

- Backend API integration
- React Query
- Server-side search
- Pagination
- Better route guards

### User Experience

- Dark mode
- Toast notifications
- Advanced filtering
- Skeleton loaders
- Accessibility improvements

---

## Conclusion

This project was built with a focus on clean architecture, reusable components, type safety, maintainability, and user experience.

The goal was not only to satisfy the assignment requirements but also to demonstrate production-oriented React development practices using modern tools and patterns.
