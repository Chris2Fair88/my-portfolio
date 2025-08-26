# Portfolio

This is a React + Vite portfolio project styled with BEM methodology and animated with Framer Motion. It features a retro computer terminal aesthetic with a DOS bootup sequence, displaying projects in a sleek old-school computer monitor design.

## Features
- Retro computer terminal aesthetic with full-screen monitor design
- DOS bootup sequence with authentic system messages
- BEM (Block Element Modifier) CSS methodology for maintainable styling
- Framer Motion animations for smooth interactions
- Custom retro cursor effects
- USER.EXE terminal interface for personal information
- Project grid with tech stack displays
- Responsive design optimized for desktop experience

## Getting Started

### Development
```
npm install
npm run dev
```

### Build
```
npm run build
```

## Project Structure
```
src/
├── components/
│   ├── App.jsx & App.css          # Main application container with computer screen design
│   ├── Bootup.jsx & Bootup.css    # DOS-style bootup sequence component
│   ├── Portfolio.jsx & Portfolio.css  # USER.EXE terminal interface
│   └── ProjectCard.jsx & ProjectCard.css  # Individual project display cards
├── assets/                        # Static assets (cursors, images)
├── index.css                      # Global styles and font imports
└── main.jsx                       # React app entry point
public/                            # Static public assets
```

## Styling Architecture
- **BEM Methodology**: Uses Block__Element--Modifier naming convention
- **Global CSS**: Traditional CSS with manually managed scope through BEM
- **Component-based**: Each component has its own CSS file
- **Retro Theme**: Consistent green terminal colors (#00ff41) and retro fonts

## Technologies Used
- **React 19.1.0**: Modern React with hooks
- **Vite 7.0.4**: Fast build tool and development server
- **Framer Motion 12.23.3**: Smooth animations and transitions
- **BEM CSS**: Maintainable and scalable styling methodology
- **Google Fonts**: Press Start 2P and Orbitron for authentic retro feel

## Customization
- Edit project data in `App.jsx` to add your own projects
- Update personal information in `Portfolio.jsx`
- Modify retro styling in component CSS files
- Add custom cursor images to `src/assets/`

---

## About This Project

This portfolio simulates an authentic 1980s computer terminal experience, complete with:
- **Realistic DOS bootup sequence** with system initialization messages
- **Terminal-style user interface** displaying personal and professional information
- **Retro computer monitor frame** with authentic CRT-style effects
- **Custom retro cursors** that change on hover interactions
- **Vintage typography** using period-appropriate fonts

The design pays homage to early personal computers while showcasing modern web development skills through React, advanced CSS techniques, and smooth animations.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
