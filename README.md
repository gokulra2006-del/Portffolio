# Gokul Ramachandran — Portfolio

[![CI](https://github.com/gokulra2006-del/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/gokulra2006-del/portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Production-ready personal engineering portfolio and project case study showcase for **Gokul Ramachandran**, Junior Full-Stack Engineer with an AI systems focus.

🌐 **Live Deployment:** [https://portffolio-p0zdfx9af-gokulra2006-dels-projects.vercel.app](https://portffolio-p0zdfx9af-gokulra2006-dels-projects.vercel.app)

---

## 🎯 Positioning

> **"I build reliable full-stack products and practical AI systems from API design to polished user experience."**

Targeted towards engineering recruiters, product startup founders, and software engineering hiring managers. Highlights concrete project architecture, security considerations, engineering trade-offs, and verified evidence.

---

## 🏗️ Featured Engineering Case Studies

1. **[AgriBank](https://github.com/gokulra2006-del/agri-bank)**
   - *Full-Stack Agriculture Banking & Subsidy Platform*
   - React.js, Node.js, Express.js, MongoDB, JWT, REST APIs, ML Credit Evaluation.
   - Role-based workflows connecting farmers, credit officers, and administrators with audit ledgers.

2. **[Dual-enjoy](https://github.com/gokulra2006-del/Dual-enjoy)**
   - *Dual Bluetooth Headphone Synchronizer for Windows*
   - C#, .NET 8, Windows CoreAudio, WASAPI, Bluetooth, WPF/XAML.
   - Low-latency circular buffering, sample-rate conversion, and real-time audio drift compensation.

3. **[AI Code Review Assistant](https://github.com/gokulra2006-del/codereview-ai)**
   - *Developer Tool & Code Quality Analysis System*
   - React.js, TypeScript, Node.js, Express.js, LLM APIs via OpenRouter.
   - Structured JSON schema prompt orchestration, model gateway routing, and line-specific review suggestions.

---

## 🛠️ Technical Stack & Tooling

- **Frontend:** React 19, TypeScript, Tailwind CSS, Framer Motion
- **Tooling & Build:** Vite 8, Rolldown / Rollup manual chunks code-splitting, PostCSS
- **Testing:** Vitest, Testing Library (React & DOM), jsdom
- **Linting & Code Quality:** Oxlint
- **CI / Automation:** GitHub Actions (`.github/workflows/ci.yml`)
- **Hosting & Edge Delivery:** Vercel

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm (v10+)

### Installation

```bash
git clone https://github.com/gokulra2006-del/portfolio.git
cd portfolio
npm install
```

### Environment Setup

Copy `.env.example` to `.env` if configuring Formspree contact endpoint:

```bash
cp .env.example .env
```

### Development Server

```bash
npm run dev
```

Starts the local Vite development server on `http://localhost:5173`.

### Running Tests

```bash
npm test
```

Executes the Vitest unit and integration test suite across all 6 test suites.

### Linting

```bash
npm run lint
```

### Production Build & Bundle Inspection

```bash
npm run build
```

Generates production-optimized assets in `dist/` with automated bundle analysis outputted to `bundle-stats.html`.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
