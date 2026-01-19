# Event Countdown Dashboard

A simple React application that displays upcoming events with countdown timers showing the remaining days until each event.

## Features

- Display a list of upcoming events
- Each event shows:
  - Event name
  - Event date (formatted)
  - Remaining days until the event
- Countdown automatically updates every minute
- Events are sorted by date (earliest first)
- Only shows future events
- Responsive design

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:5173
```

The application will automatically reload when you make changes to the code.

## Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
.
├── index.html              # HTML entry point
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
├── README.md               # This file
└── src/
    ├── main.jsx            # Application entry point
    ├── App.jsx             # Main application component
    └── App.css             # Application styles
```

## Mock Data

The application uses mock event data defined in `App.jsx`. You can modify the `mockEvents` array to add, remove, or change events.

## How It Works

- The application calculates the remaining days from the current date to each event date
- The countdown updates automatically every minute using `setInterval`
- Events that have passed (negative days) are filtered out
- Events are displayed in a responsive grid layout
