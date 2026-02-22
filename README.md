# Ayush Saraf — Personal Portfolio Website

A modern, responsive personal portfolio website built for a Computer Science & AI/ML student at VIT Vellore.

## 🚀 Live Demo

Deploy via Netlify by dragging the project folder or using the CLI (see below).

## 📁 Project Structure

```
ayush_portfolio/
├── index.html          # Main HTML — all sections
├── css/
│   └── style.css       # Complete design system & animations
├── js/
│   └── main.js         # All interactive features
├── assets/             # (Optional) images/icons
└── README.md
```

## ✨ Features

| Feature | Description |
|---|---|
| 🌑 Dark/Light Mode | Toggle with localStorage persistence |
| ⌨️ Typing Animation | Rotating headline phrases in the hero |
| 🎆 Particle BG | Animated canvas with connected particles |
| 📈 Scroll Progress | Top bar showing scroll depth |
| 🎭 Scroll Reveal | Elements animate into view on scroll |
| 🔍 Project Filter | Filter by All / AI-ML / Web Dev |
| 📱 Fully Responsive | Mobile-first, works on all devices |
| 📬 Contact Form | Opens native email client via mailto |
| ♿ Accessible | Semantic HTML, ARIA labels, contrast |

## 🎨 Design System

- **Theme**: Dark neon — charcoal background, electric blue + violet accents
- **Fonts**: Space Grotesk + Inter + Fira Code
- **Style**: Glassmorphism cards, smooth gradients, micro-animations

## 🛠️ Local Development

No build step required. Simply open `index.html` in any browser:

```bash
# Option 1: Open directly
start index.html

# Option 2: Use VS Code Live Server (recommended)
# Install the "Live Server" extension, then right-click index.html → "Open with Live Server"

# Option 3: Python simple server
python -m http.server 8080
# Then visit http://localhost:8080
```

## 🚢 Netlify Deployment

### Option A — Drag & Drop (Fastest)
1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Drag the entire `ayush_portfolio` folder into the deploy zone

### Option B — Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --dir . --prod
```

### Option C — GitHub Integration
1. Push this repo to GitHub
2. Connect the repo in Netlify dashboard
3. Set the **Publish directory** to `/` (or `./`)
4. Deploy!

## 📦 Dependencies

All external resources are loaded via CDN (no npm install needed):
- [Google Fonts](https://fonts.google.com/) — Space Grotesk, Inter, Fira Code

## 📄 Sections

1. **Hero** — Name, animated tagline, CTA buttons
2. **About** — Bio, stats, quick info card
3. **Skills** — Categorized badges (Languages, Frameworks, Tools, Soft Skills)
4. **Experience** — Timeline (SentiAid Internship, Gravitas Volunteer)
5. **Projects** — Cards with filter (Resume Feedback, Heart Disease Detection, Student Performance Predictor, E-Learning Platform)
6. **Certifications & Achievements** — Generative AI Workshop + highlights
7. **Contact** — Form + social links
8. **Footer** — Links + copyright

---

© 2026 Ayush Saraf · Built with ❤️ using HTML/CSS/JS
