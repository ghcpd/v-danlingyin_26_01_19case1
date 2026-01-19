import { useEffect, useMemo, useState } from 'react';
import { mockEvents } from './mockEvents.js';

const msPerDay = 1000 * 60 * 60 * 24;

function daysUntil(dateString, now) {
  const target = new Date(`${dateString}T00:00:00`);
  const diff = target - now;
  return Math.ceil(diff / msPerDay);
}

export default function App() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const upcoming = useMemo(() => {
    return mockEvents
      .map((event) => {
        const remainingDays = daysUntil(event.date, now);
        return { ...event, remainingDays };
      })
      .filter((event) => event.remainingDays >= 0)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [now]);

  return (
    <div className="page">
      <div className="page__noise" aria-hidden />
      <header className="hero">
        <div>
          <p className="eyebrow">Event Countdown Dashboard</p>
          <h1>Stay ahead of what is coming next.</h1>
          <p className="lede">
            A simple, zero-config view of your upcoming milestones. Mock data only —
            ready to swap with your own feed later.
          </p>
        </div>
        <div className="pill">
          <span className="dot" /> Live countdown
        </div>
      </header>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h2>Upcoming events</h2>
            <p className="subtle">Automatically updates every second while open.</p>
          </div>
          <div className="now">
            <span className="label">Current time</span>
            <span className="value">{now.toLocaleString()}</span>
          </div>
        </div>

        {upcoming.length === 0 ? (
          <div className="empty">
            <p>No upcoming events. Add some mock data to get started.</p>
          </div>
        ) : (
          <div className="grid">
            {upcoming.map((event) => (
              <article key={event.id} className="card">
                <div className="card__header">
                  <div>
                    <p className="label">Event</p>
                    <h3>{event.name}</h3>
                  </div>
                  <div className="badge">
                    {event.remainingDays === 0 ? 'Today' : `${event.remainingDays} days`}
                  </div>
                </div>

                <div className="meta">
                  <div>
                    <p className="label">Date</p>
                    <p className="value">{new Date(event.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="label">Time until</p>
                    <p className="value">{event.remainingDays} days</p>
                  </div>
                </div>

                <div className="timeline" aria-hidden>
                  <div className="timeline__start">Now</div>
                  <div className="timeline__track">
                    <div
                      className="timeline__progress"
                      style={{ width: `${Math.min(100, Math.max(0, 100 - event.remainingDays))}%` }}
                    />
                  </div>
                  <div className="timeline__end">{event.remainingDays}d</div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="footer">
        <p>Mock data only. Swap in your own source when ready.</p>
      </footer>
    </div>
  );
}
