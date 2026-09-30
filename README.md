<p align="center">
  <img src="public/devs-logo.png" alt="DEVS Logo" width="200" />
</p>

<h1 align="center">DEVs P2P · Peer-to-Peer Technical Learning Platform</h1>

<p align="center">
  <strong>An open-source, multi-domain engineering curriculum, mentor directory, and project incubator.</strong><br />
  A high-contrast monochrome platform designed to take developers from core fundamentals to production-grade engineering across six technical domains.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-DEVs%20P2P-black?style=for-the-badge&logo=github" alt="Platform" />
  <img src="https://img.shields.io/badge/Design-Monochrome%20Aesthetic-white?style=for-the-badge" alt="Design" />
  <img src="https://img.shields.io/badge/Stack-React%2019%20%7C%20TypeScript%20%7C%20Tailwind%20v4-black?style=for-the-badge" alt="Stack" />
  <img src="https://img.shields.io/badge/License-MIT-white?style=for-the-badge" alt="License" />
</p>

---

## 📌 Project Overview

**DEVs P2P** is an open-source educational platform engineered to provide structured, self-paced learning roadmaps for modern engineering disciplines. Each domain curriculum is curated by student mentors and experienced practitioners, featuring:

- **Track Prerequisites**: Clear baseline requirements before diving into advanced topics.
- **Phased Roadmaps**: Step-by-step curriculum milestones with interactive topic checklists.
- **Interactive 3D Linktree**: Touch and drag-rotatable 3D cylinder showcasing domain mentors and direct contact channels.
- **Curated Resource Library**: Handpicked textbooks, documentation, interactive tutorials, and tools with search and filter capabilities.
- **Capstone Project Portfolio**: Practical, real-world projects categorized from Beginner to Advanced with concrete learning outcomes.
- **Isolated Progress Tracking**: Individual topic completion states and bookmarks saved per track in browser `localStorage`.

---

## 🚀 Technical Domains & Tracks

The platform hosts six distinct technical disciplines accessible via direct URL routing:

| Track Route | Domain | Lead Mentors | Core Curriculum Focus |
| :--- | :--- | :--- | :--- |
| **`/aiml`** | **AI & Machine Learning** | Sai Srikar B, Sabhari Sainath AM, Padma Sree M | PyTorch, Neural Architectures, Vector DBs, Local RAG, LangGraph Agents & Model Serving |
| **`/frontend`** | **Frontend Engineering** | ASVAND K, Chandhru L | Modern JavaScript/TypeScript, React 19, State Architecture, Web Performance & Accessibility |
| **`/backend`** | **Backend & Distributed Systems** | Sai Kishore S, Kamlesh A | Python, FastAPI, Django, PostgreSQL, Redis Caching, Celery Tasks, Docker & System Design |
| **`/cloud`** | **Cloud & DevOps** | Rohan Deshmukh, Ananya Sen | Linux, Docker, CI/CD, Terraform IaC, Kubernetes GitOps (ArgoCD) & Prometheus Observability |
| **`/iot`** | **IoT & Embedded Systems** | Vijay Ghanesh G J, Chithralekha B | ESP32, STM32, Sensors, MQTT, LoRa, BLE, FreeRTOS, TinyML Edge Inference & Custom PCBs |
| **`/video-editing`** | **Video Editing & Post-Production** | Kevin Infant, VS Thamizhselvan | Storytelling Pacing, Foley Audio, DaVinci Resolve Color Grading, Motion Graphics & Master Delivery |

---

## 🎨 Design System & Platform Architecture

- **Monochrome Design Philosophy**: Built strictly with `#000000` pitch black backgrounds, zinc surface hierarchies (`zinc-950`, `zinc-900`, `zinc-800`), and pure white/zinc typography for maximum readability and zero visual clutter.
- **Procedural ASCII Hands Hero**: An interactive HTML5 canvas engine that renders 1,104 procedural colored ASCII glyphs forming Michelangelo's *The Creation of Adam* with dynamic perspective and zero external image assets.
- **3D Rotatory Mentor Carousel**: Pure CSS 3D cylinder transform engine (`perspective: 1200px`, `transform: rotateY(...) translateZ(...)`) with multi-touch swipe, mouse drag, and keyboard navigation.
- **Client-Side History Router**: A custom routing engine (`useDomainRouter`) built on top of `window.history.pushState` enabling instantaneous track switching and deep-linking without full page reloads.
- **Accessibility & Contrast**: Typography paired with `Plus Jakarta Sans` for body copy and `JetBrains Mono` for badges, commands, and code blocks, fully meeting WCAG AA contrast standards.
- **Expandable Content Cards**: Adaptive expand/collapse toggles on lengthy project outcomes and resource summaries to avoid arbitrary truncation (`...`).

---

## 💻 Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build & Tooling** | [Vite 8](https://vite.dev/) (lightning-fast HMR and optimized production bundling) |
| **Styling Engine** | [Tailwind CSS v4](https://tailwindcss.com/) with pure monochrome variables |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **Graphics & 3D** | HTML5 Procedural Canvas + CSS 3D Matrix Transforms |
| **Deployment Target** | [Vercel](https://vercel.com/) with SPA rewrite configuration |

---

## 👥 Track Organizers & Mentors

- **AI & Machine Learning**: Sai Srikar B, Sabhari Sainath AM, Padma Sree M
- **Frontend Engineering**: ASVAND K, Chandhru L
- **Backend Engineering**: Sai Kishore S, Kamlesh A
- **Cloud & DevOps**: Rohan Deshmukh, Ananya Sen
- **IoT & Embedded Systems**: Vijay Ghanesh G J, Chithralekha B
- **Video Editing**: Kevin Infant, VS Thamizhselvan

---

## 📄 License

This project is licensed under the **MIT License**. Open-source and free to adapt for student clubs, organizations, and developer communities.
