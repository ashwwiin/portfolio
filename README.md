# 🚀 Ashwin Thamban — Modern Portfolio & AshAI Assistant

A high-performance, ultra-modern developer portfolio built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and an integrated draggable AI assistant named **AshAI** powered by **Google Gemini 3.6** & **Pollinations AI**.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-emerald?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?style=for-the-badge&logo=framer)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-3.6_Flash-blue?style=for-the-badge&logo=google-gemini)

---

## ✨ Key Features

### 🤖 AshAI — Draggable AI Assistant
- **Ultra-Fast Latency (~1s)**: Powered by `gemini-flash-lite-latest` serverless route handler for instant responses.
- **Draggable & Expandable UI**: Floating widget that can be dragged anywhere on screen or expanded for full view.
- **💻 One-Click Code Snippets**: Formats generated code into dark code containers with one-click copy functionality.
- **🎨 Real-Time AI Image Generation**: Generates custom artwork on-the-fly using Pollinations AI with instant download links.
- **Quick Suggestion Prompts**: One-click chips for tech stack, work experience, featured projects, and contact info.

### 🎨 Customization & Aesthetics
- **Navbar Theme & Accent Selector**: Live theme switcher (Light/Dark mode) with 6 dynamic accent color palettes.
- **Fullscreen Glassmorphism Mobile Menu**: Agency-grade mobile overlay menu with zero background bleed-through.
- **Fluid Desktop Navbar**: Edge-to-edge full-width top navigation header on large displays.

### 📱 Responsive & Performant
- **Mobile-First Layout**: Optimized DOM ordering (Badge ➔ Profile Photo ➔ Headline) on mobile devices.
- **Smooth Animations**: Powered by Framer Motion scroll triggers, particle effects, and morphing background blobs.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Core**: [Google Gemini API (`@google/genai`)](https://ai.google.dev/)
- **Image Generation**: [Pollinations AI](https://pollinations.ai/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Quick Start

### 1. Prerequisites
Make sure you have **Node.js 18+** and **npm** installed on your system.

### 2. Clone Repository & Install Dependencies
```bash
git clone https://github.com/ashwwiin/portfolio.git
cd portfolio
npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root directory and add your Google Gemini API key:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view your live portfolio!

---

## 🌐 Deploying to Vercel

When hosting your portfolio on **Vercel**:

1. Import your GitHub repository into Vercel.
2. Go to **Project Settings ➔ Environment Variables**.
3. Add the following variable:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: `your_gemini_api_key`
4. Click **Save** and trigger a **Redeploy**.

---

## 👤 Author

**Ashwin Thamban**  
- Portfolio: [Ashwin Thamban](https://github.com/ashwwiin/portfolio)
- GitHub: [@ashwwiin](https://github.com/ashwwiin)

---

⭐ *If you like this portfolio and AshAI assistant, feel free to star the repo!*
