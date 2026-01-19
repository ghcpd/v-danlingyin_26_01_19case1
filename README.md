# Event Countdown Dashboard

A lightweight React + Vite frontend that lists upcoming events with live day-countdown from mock data.

## Requirements
- Node.js 18 or newer

## Getting started
1. Install deps:
   ```bash
   npm install
   ```
2. Run in dev (with hot reload):
   ```bash
   npm run dev
   ```
   Then open the shown local URL (usually http://localhost:5173).
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Project structure
```
.
├─ index.html
├─ package.json
├─ vite.config.js
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ mockEvents.js
│  └─ styles.css
└─ README.md
```

## Notes
- Uses only mock data; edit `src/mockEvents.js` to change events.
- Countdown updates every second while the page is open.
