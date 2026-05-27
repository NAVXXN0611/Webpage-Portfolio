# Goal

Create an innovative, classic yet modern interactive portfolio website for a Computer Science student (Joel) seeking internships. The design will be minimal, elegant, and professional, using a dark + light mode toggle, smooth animations, and glassmorphism elements. It will be built as a Single Page Application using React and Vite to support advanced interactive features like Framer Motion animations.

## User Review Required

> [!IMPORTANT]  
> I plan to use **React (via Vite)** as the modern framework for this portfolio, as suggested in the "Advanced Enhancements" of your prompt. This will provide the best environment for smooth animations (using Framer Motion), component reusability, and interactive state management (like the dark/light mode toggle).
> 
> If you prefer sticking strictly to **Vanilla HTML/CSS/JS**, please let me know and I will adjust the plan accordingly!

## Open Questions

> [!QUESTION]  
> 1. Do you have a specific color palette in mind for light/dark mode, or should I use a curated elegant theme (e.g., Deep Charcoal/Slate for dark mode, Soft Off-White for light mode with an accent color like Electric Blue or Emerald Green)?
> 2. For the optional Chatbot / AI assistant, do you want a simple UI mockup of a chatbot, or should I integrate a basic functional keyword-based auto-responder?
> 3. Should I use `framer-motion` for all the scroll and hover animations? (Highly recommended for React)

## Proposed Changes

We will scaffold a React + Vite project in the `d:\Portfolio` directory.

### Project Setup
- Run `npx create-vite@latest ./ --template react` to initialize the React application.
- Install dependencies: `framer-motion` (animations), `react-icons` (icons), `react-simple-typewriter` (typing effect).

### Core Structure

#### [NEW] `index.html`
- Include basic SEO meta tags, Google Fonts (e.g., Inter or Outfit).

#### [NEW] `src/App.jsx`
- Main application component managing state (Dark/Light mode).
- Container for all the sections.

#### [NEW] `src/index.css`
- Core CSS variables for light and dark themes.
- Global styles, typography, utility classes for glassmorphism.

### Components

#### [NEW] `src/components/Navbar.jsx`
- Sticky top navigation.
- Smooth scroll links to sections.
- Dark/Light mode toggle button.

#### [NEW] `src/components/Hero.jsx`
- Greeting, Name (Joel), and animated typing effect for the tagline.
- "View Projects" and "Contact Me" buttons.
- Micro-interactions on hover.

#### [NEW] `src/components/About.jsx`
- Short introduction and career goals.

#### [NEW] `src/components/Skills.jsx`
- Programming, Web Development, and Tools categories.
- Animated progress bars or circular indicators.

#### [NEW] `src/components/Projects.jsx`
- Grid layout with glassmorphic cards.
- Project Title, Description, Tech Stack, and Links.
- Hover animations.

#### [NEW] `src/components/Experience.jsx`
- Vertical timeline component for Education and Courses.

#### [NEW] `src/components/Contact.jsx`
- Contact form UI.
- Social links (LinkedIn, GitHub, Email).

#### [NEW] `src/components/Footer.jsx`
- Simple copyright and social icons.

## Verification Plan

### Automated Tests
- Build the project using `npm run build` to ensure there are no compilation errors.
- Start the dev server `npm run dev` and verify that the app runs on the local server.

### Manual Verification
- I will use the browser tool to open the local development server.
- Verify the light/dark mode toggle works.
- Verify that scrolling navigation works.
- Check responsive layouts on different viewport sizes.
- Verify hover effects and Framer Motion transitions are playing correctly.
