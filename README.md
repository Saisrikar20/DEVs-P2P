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
| **`/aiml`** | **AI & Machine Learning** *(Flagship)* | Sai Srikar B, Sabhari Sainath AM, Padma Sree M | PyTorch, Neural Architectures, Vector DBs, Local RAG, LangGraph Agents & Model Serving |
| **`/frontend`** | **Frontend Engineering** | ASVAND K, Chandhru L | Modern JavaScript/TypeScript, React 19, State Architecture, Web Performance & Accessibility |
| **`/backend`** | **Backend & Distributed Systems** | Sai Kishore S, Kamlesh A | Python, FastAPI, Django, PostgreSQL, Redis Caching, Celery Tasks, Docker & System Design |
| **`/cloud`** | **Cloud & DevOps** | Rohan Deshmukh, Ananya Sen | Linux, Docker, CI/CD, Terraform IaC, Kubernetes GitOps (ArgoCD) & Prometheus Observability |
| **`/iot`** | **IoT & Embedded Systems** | Vijay Ganesh, Chithralekha | ESP32, STM32, Sensors, MQTT, LoRa, BLE, FreeRTOS, TinyML Edge Inference & Custom PCBs |
| **`/video-editing`** | **Video Editing & Post-Production** | Nikhita Menon | Storytelling Pacing, Foley Audio, DaVinci Resolve Color Grading, Motion Graphics & Master Delivery |

---

## 🏛️ Curriculum Breakdowns

### 1. Artificial Intelligence & Machine Learning (`/aiml`)
- **Phase 1: Mathematical Foundations & Python for AI**: Linear algebra, vector spaces, eigenvalues, multivariable calculus, autograd, and idiomatic Python.
- **Phase 2: Data Engineering, Analytics & Scientific Computing**: NumPy vectorized operations, Pandas/Polars data pipelines, exploratory data analysis, and SQL for analytics.
- **Phase 3: Classical Machine Learning & Statistical Modeling**: Regression, classification, ensemble models (Random Forest, XGBoost, LightGBM), feature selection, and SHAP explainability.
- **Phase 4: Deep Learning & Neural Network Architectures**: PyTorch autograd from scratch, convolutional networks, recurrent models, Transformers, and multi-head self-attention.
- **Phase 5: Generative AI, Autonomous Agents & Production Serving**: Embeddings, vector databases (Chroma/Milvus), Local RAG, LangGraph multi-agent orchestration, and vLLM inference serving.

### 2. Frontend Engineering (`/frontend`)
- **Phase 1: Web Standards & Modern JavaScript Fundamentals**: Semantic HTML5, CSS layout engines (Flexbox & Grid), modern ES6+ JavaScript, asynchronous execution, and DOM manipulation.
- **Phase 2: React Core & Component Architecture**: Virtual DOM mechanics, custom hooks, reusable design systems, accessibility (WCAG/ARIA), and Tailwind CSS v4 styling.
- **Phase 3: State Management & Client-Side Architecture**: Complex global state (Zustand/Redux Toolkit), server cache synchronization (TanStack Query), and optimistic UI updates.
- **Phase 4: Web Performance, Rendering & Optimization**: Core Web Vitals (LCP, INP, CLS), code-splitting, bundle profiling, image optimization, and responsive design patterns.
- **Phase 5: Production Readiness, Testing & Modern Tooling**: Unit and integration testing (Vitest, React Testing Library), end-to-end testing (Playwright), and CI/CD deployment pipelines.

### 3. Backend Engineering & Distributed Systems (`/backend`)
- **Phase 1: Python Fundamentals & Backend Programming**: Object-oriented programming, data structures, type hints, file handling, testing with pytest, and Git version control.
- **Phase 2: Web Frameworks & RESTful API Development**: HTTP protocols, FastAPI, Django, request validation (Pydantic), routing, CRUD operations, and JWT authentication.
- **Phase 3: Databases, Data Modeling & Caching**: Relational modeling in PostgreSQL, indexing strategies, transactions, Alembic migrations, and in-memory Redis caching.
- **Phase 4: Asynchronous Processing & Containerization**: Celery background queues, Redis message brokers, async event loops, Docker containerization, and multi-container Docker Compose stacks.
- **Phase 5: Distributed Systems & Production Deployment**: Microservices architecture, load balancing, API gateways, database replication, logging/monitoring, and cloud server deployment.

### 4. Internet of Things & Embedded Systems (`/iot`)
- **Phase 1: Embedded Hardware Foundations & Microcontrollers**: C/C++ embedded programming, ESP32/STM32/Arduino hardware architecture, GPIOs, ADC/DAC, and communication buses (UART, I2C, SPI).
- **Phase 2: Wireless IoT: Connectivity & Device Communication**: Wi-Fi station/AP modes, embedded HTTP REST servers, MQTT publish/subscribe messaging, long-range LoRa, and Bluetooth Low Energy (BLE).
- **Phase 3: Cloud Telemetry, Data Pipelines & Dashboards**: AWS IoT Core / Mosquitto broker setup, InfluxDB time-series storage, Node-RED automated flow processing, and live Grafana dashboards.
- **Phase 4: Advanced Embedded IoT: RTOS, Security & Reliable Systems**: FreeRTOS multitasking, mutexes and semaphores, TLS encryption, flash security, and Over-the-Air (OTA) firmware updates.
- **Phase 5: System Architecture & Product Development**: Edge gateways, TinyML machine learning inference on microcontrollers, and custom schematic/PCB layout in KiCad.

### 5. Cloud & DevOps (`/cloud`)
- **Phase 1: Linux Administration & Core Networking**: Linux terminal navigation, shell scripting (Bash), SSH keys, networking models (DNS, TCP/IP, subnets), and firewall configuration.
- **Phase 2: Containerization & CI/CD Automation**: Docker container architecture, multi-stage Dockerfiles, Docker Compose, and automated GitHub Actions testing and build workflows.
- **Phase 3: Infrastructure as Code (IaC) & Cloud Architecture**: Declarative provisioning with HashiCorp Terraform, state management, AWS VPCs, EC2 instances, S3 storage, and IAM policies.
- **Phase 4: Kubernetes Orchestration & GitOps**: Pods, Deployments, Services, Ingress, Helm charts, and declarative continuous delivery using ArgoCD GitOps pipelines.
- **Phase 5: Observability, Security & Production Site Reliability**: Metrics collection with Prometheus, Grafana visualization, centralized logging, secret management, and disaster recovery.

### 6. Video Editing & Post-Production (`/video-editing`)
- **Phase 1: Non-Linear Editing Fundamentals & Montage Pacing**: Narrative storytelling structure, timeline editing in Adobe Premiere Pro / DaVinci Resolve, J-cuts, L-cuts, and match cuts.
- **Phase 2: Sound Design, Foley & Audio Mixing**: Dialogue cleaning, equalization (EQ), compression, sound effects Foley layering, and broadcast loudness normalization (-14 LUFS).
- **Phase 3: Color Grading & Look Development**: Log/RAW color management, primary exposure and white balance balancing, secondary isolation, and creative aesthetic LUT creation.
- **Phase 4: Motion Graphics & Dynamic Visual Effects**: Keyframe animation, lower thirds, typography, speed ramps, optical flow smoothing, and masking in After Effects.
- **Phase 5: Delivery Pipelines & Professional Portfolio**: Codec selection (H.264, ProRes), platform-specific delivery formats, and showreel assembly for client work.

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
- **IoT & Embedded Systems**: Vijay Ganesh, Chithralekha
- **Video Editing**: Nikhita Menon

---

## 📄 License

This project is licensed under the **MIT License**. Open-source and free to adapt for student clubs, organizations, and developer communities.
