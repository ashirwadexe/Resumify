# Resumify – AI Resume Builder (Frontend)

Resumify is a modern, AI-powered resume builder frontend that helps users create, optimize, preview, and share professional resumes effortlessly.  
This frontend is built with **React**, **Tailwind CSS**, and integrates seamlessly with backend APIs and AI services.

---

## 🚀 Features

- 🔐 User Authentication (Login / Signup)
- 📊 Dashboard to manage multiple resumes
- 📝 Create new resume or upload existing one
- 🤖 AI-powered resume optimization
- 👀 Live resume preview
- 🔗 Share resume via live public link
- 📥 Download resume as PDF
- 🎨 Multiple modern resume templates
- 🖼 Upload profile image & remove background
- ⚡ Fast, responsive, and clean UI

---

## 🛠 Tech Stack (Frontend)

- **React.js**
- **React Router DOM**
- **Tailwind CSS**
- **Lucide React (Icons)**
- **ImageKit (Image Handling)**
- **Gemini API (AI Integration)**

---

## 📂 Project Structure

src/
├── components/ # Reusable UI components
├── pages/ # Application pages (Home, Dashboard, Builder, Preview)
├── routes/ # App routing
├── assets/ # Images, icons, logos
├── utils/ # Helper functions
├── App.jsx
└── main.jsx


---

## 🔁 Application Flow (How It Works)

1. User creates an account or logs in
2. Redirected to dashboard
3. Create a new resume or upload an existing one
4. Add or edit resume details
5. Preview resume in real time
6. Download resume or share live link

---

## 🧩 Routing Overview

- `/` → Home
- `/login` → Login / Signup
- `/app` → Dashboard (Protected)
- `/app/builder/:resumeId` → Resume Builder
- `/view/:resumeId` → Public Resume Preview

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/resumify-frontend.git

# Navigate to project directory
cd resumify-frontend

# Install dependencies
npm install

# Start development server
npm run dev


