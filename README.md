# Souvik Konar — Software Engineering Portfolio

<div align="center">

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-BD34FE?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-00F0FF?style=for-the-badge)](https://lenis.darkroom.engineering/)
[![Audit Status](https://img.shields.io/badge/Audit_Tests-10%2F10_Passing-00E599?style=for-the-badge)](https://github.com/souvikx18)

<p align="center">
  <strong>An elite, high-performance portfolio featuring the Midnight Tech engineering design system, interactive background mechanics, and Lexis — an on-demand AI assistant.</strong>
</p>

</div>

---

## 🌟 Overview

This repository houses the personal software engineering portfolio of **Souvik Konar**, a Full-Stack & AI Systems developer based in Kolkata, India. Designed around a tactile "Midnight Tech" aesthetic, the site pairs production-grade engineering principles with responsive micro-interactions, hardware-accelerated animations, and zero-layout-shift architecture.

### Key Highlights
- **Midnight Tech Design System**: Calibrated dark palette (`#060B14`, `#070A0F`), cyan HUD accents (`#00F0FF`), precision monospace typography, and subtle cybernetic interfaces.
- **Lexis AI Portfolio Assistant**: An on-demand conversational technical assistant capable of answering architectural questions about Souvik's projects, tech stack, and background.
- **Sliding Cybernetic Capsule Launcher**: A floating mascot trigger that smoothly reveals an authentic `ASK LEXIS →` sci-fi pill capsule on hover.
- **Lenis Smooth Scroll Engine**: Decoupled, inertial scrolling with scroll-locking and touch-event isolation during modal sessions.
- **Verified Project Schematics**: Interactive architecture diagrams, tech specifications, and deployment evidence for all 6 verified projects.
- **Zero-Dependency Core**: Lightweight architecture built directly on React 19 and Vite with zero bloat.

---

## 🚀 Verified Projects

| Project | Domain | Tech Stack | Status |
| :--- | :--- | :--- | :--- |
| **[DecisionOS](https://github.com/souvikx18)** | Decision Intelligence & Analytics | Next.js, TypeScript, Tailwind CSS, Vercel | **Live Deployment** |
| **[Veridyn](https://github.com/souvikx18)** | AI Evaluation Harness & Benchmarks | Python, FastAPI, Docker, Async I/O | **Architecture Documented** |
| **[MATEX](https://github.com/souvikx18)** | Chess Engine & Platform | React, JavaScript, Chess.js, Minimax AI | **Live Deployment** |
| **Flash Flood Prediction** | Predictive Environmental Hydrology | Python, Scikit-Learn, Pandas, Streamlit | **In Development** |
| **HireIQ** | Automated Resume Evaluation Engine | React, Python, NLP, PostgreSQL | **In Development** |
| **JARVIS** | Localized Python Task Automation | Python, SpeechRecognition, Pyttsx3 | **In Development** |

---

## 🤖 Lexis AI Assistant Architecture

Lexis is a custom portfolio assistant integrated directly into the application with an audit-tested security and retrieval harness.

```
┌────────────────────────────────────────────────────────┐
│                   User Interaction                     │
│  [Floating Mascot] ──(Hover)──► [ASK LEXIS → Capsule]  │
└──────────────────────────┬─────────────────────────────┘
                           │ Click
                           ▼
┌────────────────────────────────────────────────────────┐
│               Lexis Dialog Modal                       │
│  - Lenis scroll-lock engaged                           │
│  - Two-column cybernetic HUD interface                 │
│  - 4-second synthesis delay with breathing indicators  │
│  - Guardrails preventing prompt injection              │
└──────────────────────────┬─────────────────────────────┘
                           │ Query Evaluation
                           ▼
┌────────────────────────────────────────────────────────┐
│             Verified Knowledge Graph                   │
│  - Source attribution (Projects, Stack, Academics)     │
│  - Strict anti-hallucination boundaries                │
└────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack & Tooling

- **Core Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Smooth Scroll**: [@studio-freight/lenis](https://lenis.darkroom.engineering/)
- **Testing & Auditing**: [TSX](https://github.com/privatenumber/tsx) + Node.js Test Harness
- **Styling**: Modern CSS3 (CSS Variables, Flexbox/Grid, Backdrop Filters, Keyframe Animations)

---

## 📂 Project Structure

```
MY-PORTFOLIO/
├── public/
│   ├── images/
│   │   ├── lexis-capsule.png            # High-resolution sci-fi HUD capsule
│   │   ├── lexis-robot-transparent.png  # Transparent Lexis mascot asset
│   │   └── ...                          # Supporting graphic assets
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── about/                       # Academic history & biography
│   │   ├── approach/                    # 4-pillar engineering methodology
│   │   ├── hero/                        # Hero section & developer.profile.ts card
│   │   ├── layout/                      # Navigation header, skip links & footer
│   │   ├── lexis/                       # Lexis AI Assistant, Trigger, & Dialog
│   │   ├── projects/                    # Project showcase, evidence & schematics
│   │   ├── skills/                      # Technical inventory & categorized skills
│   │   └── ui/                          # Button, Container, Section primitives
│   ├── data/                            # Verified knowledge base & project data
│   ├── hooks/                           # Custom React hooks (intersection, theme)
│   ├── styles/                          # CSS design system, typography & tokens
│   ├── types/                           # Strict TypeScript interfaces
│   ├── App.tsx                          # Root application component
│   └── main.tsx                         # Entry point
├── tests/
│   └── test-lexis.ts                    # 10-point audit & security test suite
├── .gitignore                           # Git ignore configuration
├── index.html                           # HTML5 shell
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/souvikx18/MY-PORTFOLIO.git
   cd MY-PORTFOLIO
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing & Verification

The repository includes a comprehensive 10-point audit test suite for the Lexis AI assistant covering identity retrieval, project evidence verification, prompt injection defense, and anti-hallucination safeguards:

```bash
# Run the Lexis test suite
npm run test:lexis

# Run full TypeScript typecheck
npm run typecheck

# Build for production
npm run build
```

---

## 👤 Author

**Souvik Konar**
- **Degree**: B.Tech in Computer Science & Engineering (3rd Year), Brainware University
- **Location**: Kolkata, West Bengal, India
- **Email**: [skonar566@gmail.com](mailto:skonar566@gmail.com)
- **GitHub**: [@souvikx18](https://github.com/souvikx18)
- **Portfolio**: [souvik-konar.dev](https://github.com/souvikx18)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

