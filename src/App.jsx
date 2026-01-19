import { useState, useEffect } from 'react'

// Mock event data
const mockEvents = [
  { id: 1, name: 'New Year 2027', date: '2027-01-01' },
  { id: 2, name: 'Summer Vacation', date: '2026-07-15' },
  { id: 3, name: 'Company Anniversary', date: '2026-03-20' },
  { id: 4, name: 'Product Launch', date: '2026-02-14' },
  { id: 5, name: 'Team Building Event', date: '2026-01-25' }
]

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  // Update current time every minute to refresh countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  const calculateRemainingDays = (eventDate) => {
    const today = new Date(currentTime.toDateString())
    const event = new Date(eventDate)
    const diffTime = event - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  // Filter and sort events (only show future events)
  const upcomingEvents = mockEvents
    .filter(event => calculateRemainingDays(event.date) >= 0)
    .sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className="app">
      <header className="header">
        <h1>Event Countdown Dashboard</h1>
        <p className="subtitle">Track your upcoming events</p>
      </header>
      
      <main className="main">
        {upcomingEvents.length === 0 ? (
          <div className="no-events">
            <p>No upcoming events</p>
          </div>
        ) : (
          <div className="events-grid">
            {upcomingEvents.map(event => {
              const remainingDays = calculateRemainingDays(event.date)
              return (
                <div key={event.id} className="event-card">
                  <div className="event-header">
                    <h2 className="event-name">{event.name}</h2>
                  </div>
                  <div className="event-body">
                    <div className="event-date">
                      <span className="label">Date:</span>
                      <span className="value">{formatDate(event.date)}</span>
                    </div>
                    <div className="countdown">
                      <div className="countdown-number">{remainingDays}</div>
                      <div className="countdown-label">
                        {remainingDays === 0 ? 'Today!' : 
                         remainingDays === 1 ? 'day left' : 'days left'}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
