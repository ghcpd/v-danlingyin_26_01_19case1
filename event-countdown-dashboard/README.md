# Event Countdown Dashboard

A React application that displays a list of upcoming events with countdown timers showing the remaining days until each event.

## Features

- Display a list of upcoming events
- Each event shows:
  - Event name
  - Event date (formatted)
  - Remaining days until the event
- Events are sorted by closest date first
- Countdown updates automatically every minute
- Visual indicators for urgent events (≤7 days) and soon events (≤30 days)
- Responsive design for mobile and desktop

## Tech Stack

- React 18
- Vite (Build tool)
- CSS3 (Styling)

## Project Structure

```
event-countdown-dashboard/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── App.css
    ├── components/
    │   ├── EventCard.jsx
    │   └── EventCard.css
    └── data/
        └── mockEvents.js
```

## Installation & Running

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Steps

1. Navigate to the project directory:
   ```bash
   cd event-countdown-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Mock Data

The application uses mock event data defined in `src/data/mockEvents.js`. You can modify this file to add, remove, or edit events.

## License

MIT
