import React from 'react';
import './EventCard.css';

const EventCard = ({ event, daysRemaining }) => {
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getCardClass = () => {
    if (daysRemaining <= 7) return 'event-card urgent';
    if (daysRemaining <= 30) return 'event-card soon';
    return 'event-card';
  };

  const getDaysLabel = () => {
    if (daysRemaining === 0) return 'Today!';
    if (daysRemaining === 1) return '1 day left';
    if (daysRemaining < 0) return 'Event passed';
    return `${daysRemaining} days left`;
  };

  return (
    <div className={getCardClass()}>
      <div className="event-info">
        <h2 className="event-name">{event.name}</h2>
        <p className="event-date">{formatDate(event.date)}</p>
      </div>
      <div className="countdown">
        <span className="days-number">{Math.max(0, daysRemaining)}</span>
        <span className="days-label">{getDaysLabel()}</span>
      </div>
    </div>
  );
};

export default EventCard;
