# USCOOL (starter)

Minimal starter scaffold for a school management system (MVP).
Features: authentication, roles, student/teacher profiles, classes, attendance, messaging.

Structure:
- backend/  — Node.js + TypeScript API
- frontend/ — React + TypeScript app
- docker-compose.yml — development services (db, redis)

How to run (local dev):
1. docker-compose up -d
2. cd backend && npm install && npm run dev
3. cd frontend && npm install && npm start

This is a starter scaffold — extend as needed.