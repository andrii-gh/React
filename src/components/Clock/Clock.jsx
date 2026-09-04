import { useState, useEffect } from 'react';
import './Clock.css';

function Clock({ 
  bgColors = { morning: '#FFD700', day: '#87CEEB', evening: '#2C2C2C', night: '#1A1A2E' },
  showDate = true,
  fontFamily = 'Arial, sans-serif',
  fontSize = '2rem',
  fontColor = '#000000'
}) {
  const [time, setTime] = useState(new Date());
  const [timeOfDay, setTimeOfDay] = useState('day');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);
      
      const hours = now.getHours();
      if (hours >= 6 && hours < 12) {
        setTimeOfDay('morning');
      } else if (hours >= 12 && hours < 18) {
        setTimeOfDay('day');
      } else if (hours >= 18 && hours < 22) {
        setTimeOfDay('evening');
      } else {
        setTimeOfDay('night');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getBackgroundColor = () => {
    switch (timeOfDay) {
      case 'morning': return bgColors.morning;
      case 'day': return bgColors.day;
      case 'evening': return bgColors.evening;
      case 'night': return bgColors.night;
      default: return bgColors.day;
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('uk-UA', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('uk-UA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTimeOfDayLabel = () => {
    switch (timeOfDay) {
      case 'morning': return 'Ранок';
      case 'day': return 'День';
      case 'evening': return 'Вечір';
      case 'night': return 'Ніч';
      default: return '';
    }
  };

  return (
    <div 
      className="clock-container"
      style={{
        backgroundColor: getBackgroundColor(),
        fontFamily: fontFamily,
        color: fontColor,
        transition: 'background-color 0.5s ease'
      }}
    >
      <div className="clock-content">
        <div 
          className="time-display"
          style={{ fontSize: fontSize }}
        >
          {formatTime(time)}
        </div>
        <div className="time-of-day">
          {getTimeOfDayLabel()}
        </div>
        {showDate && (
          <div className="date-display">
            {formatDate(time)}
          </div>
        )}
      </div>
    </div>
  );
}

export default Clock;