# 📌 Task Manager Web Application

A full-stack **Task Management System** that allows users to create projects, assign tasks, and track progress with role-based access control (Admin & Member). This project is designed to improve productivity and collaboration within teams.

---

## 🚀 Features

- 🔐 **Authentication & Authorization**
  - User Signup/Login
  - Role-based access (Admin / Member)

- 📁 **Project Management**
  - Create and manage multiple projects
  - Add team members to projects

- ✅ **Task Management**
  - Create, assign, update, and delete tasks
  - Task status tracking (Pending, In Progress, Completed)

- 📊 **Dashboard**
  - Overview of tasks
  - Status-wise task distribution
  - Overdue task tracking

- 👥 **Team Collaboration**
  - Assign tasks to users
  - Track individual performance

---

## 🛠️ Tech Stack

### Frontend
- HTML, CSS, JavaScript / React
- Axios (API calls)
- Tailwind CSS / Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MongoDB (Mongoose)

### Other Tools
- JWT Authentication
- REST APIs
- Git & GitHub

---
###Project Struture

Task-Manager/
│
├── backend/
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── projectController.js
│ │ └── taskController.js
│ │
│ ├── models/
│ │ ├── User.js
│ │ ├── Project.js
│ │ └── Task.js
│ │
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── projectRoutes.js
│ │ └── taskRoutes.js
│ │
│ ├── middleware/
│ │ └── authMiddleware.js
│ │
│ ├── config/
│ │ └── db.js
│ │
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Navbar.js
│ │ │ ├── TaskCard.js
│ │ │ └── ProjectCard.js
│ │ │
│ │ ├── pages/
│ │ │ ├── Login.js
│ │ │ ├── Register.js
│ │ │ ├── Dashboard.js
│ │ │ └── ProjectPage.js
│ │ │
│ │ ├── services/
│ │ │ └── api.js
│ │ │
│ │ ├── App.js
│ │ └── index.js
│ │
│ └── package.json
│
├── .env
├── package.json
└── README.md

