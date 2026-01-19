import React, { useState, useEffect } from 'react';
import { mockEvents } from './data/mockEvents';
import EventCard from './components/EventCard';
import './App.css';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  // Calculate days remaining until an event
  const calculateDaysRemaining = (eventDate) => {
    const event = new Date(eventDate);
    const today = new Date(currentDate);
    
    // Reset time to midnight for accurate day calculation
    event.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    
    const diffTime = event - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };

  // Sort events by days remaining (closest first)
  const sortEventsByDate = (eventList) => {
    return [...eventList].sort((a, b) => {
      const daysA = calculateDaysRemaining(a.date);
      const daysB = calculateDaysRemaining(b.date);
      return daysA - daysB;
    });
  };

  // Initialize and sort events
  useEffect(() => {
    const sortedEvents = sortEventsByDate(mockEvents);
    setEvents(sortedEvents);
  }, []);

  // Auto-update countdown every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Re-sort events when current date changes
  useEffect(() => {
    if (events.length > 0) {
      const sortedEvents = sortEventsByDate(events);
      setEvents(sortedEvents);
    }
  }, [currentDate]);

  const formatCurrentDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
  };

  // Filter to show only upcoming events (including today)
  const upcomingEvents = events.filter(event => calculateDaysRemaining(event.date) >= 0);

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Event Countdown Dashboard</h1>
        <p className="current-date">Today is {formatCurrentDate()}</p>
      </header>

      <main className="events-container">
        {upcomingEvents.length > 0 ? (
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                daysRemaining={calculateDaysRemaining(event.date)}
              />
            ))}
          </div>
        ) : (
          <div className="no-events">
            <p>No upcoming events</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Countdown updates automatically</p>
      </footer>
    </div>
  );
}

export default App;
