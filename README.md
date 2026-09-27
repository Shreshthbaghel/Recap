# AI-Powered Meeting Assistant 🚀

Welcome to the AI-Powered Meeting Assistant! This project is being built progressively to transform how we take, manage, and act upon meeting notes. 

## 📖 Project Overview

The Meeting Assistant is designed to start as a robust, real-time collaborative notes application and evolve into a multi-agent AI workflow system. 

It aims to solve the tedious parts of meetings—summarizing messy notes, extracting action items, generating follow-up emails, and automatically notifying assignees. 

### 🏗️ Tech Stack
- **Frontend**: React (Vite) + Tailwind CSS v4 + React Router
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT & bcryptjs
- **Upcoming Tech**: Socket.io (for real-time sync) + Claude AI API (for summarization & Q&A)

### 📈 Roadmap & Current Progress

We are building this project in 5 distinct phases:

- [x] **Phase 1: Foundation (Auth + Project Setup)**
  - Backend/Frontend scaffolding.
  - MongoDB connection and User schema.
  - JWT-based authentication (Login & Register).
  - Modern UI with custom Tailwind CSS v4 design tokens.
- [ ] **Phase 2: Core Product (Meetings + Real-time Notes)**
  - Real-time collaborative text editing with Socket.io.
  - Meeting creation and shareable join codes.
- [ ] **Phase 3: AI Agents #1 & #2 (Summarization + Q&A)**
  - Integration with Claude AI.
  - One-click summaries (action items, decisions, blockers).
  - Natural-language Q&A to query past notes.
- [ ] **Phase 4: AI Agent #3 & Orchestration (Email + Coordination)**
  - Automated follow-up email drafts.
  - An event bus where agents trigger each other (e.g., summarize -> email -> notify owners).
- [ ] **Phase 5: Polish, Deployment & Master Agent**
  - Live orchestration of agents during meetings.
  - Production deployments and rate limiting.

## 🛠️ Getting Started (Local Development)

### Prerequisites
- Node.js installed
- A local MongoDB instance running (or a MongoDB Atlas connection string)

### 1. Backend Setup
```bash
cd backend
npm install
# Ensure MongoDB is running, then start the development server
npm run dev
```
The backend server runs on `http://localhost:5000`.

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The Vite development server will start, typically on `http://localhost:5173`. 
