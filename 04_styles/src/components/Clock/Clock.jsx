import { useState, useEffect } from "react";
import "./Clock.css";

function Clock({ 
  morningColor = "yellow", 
  dayColor = "skyblue", 
  eveningColor = "black",
  
  showDate = false, 
  fontFamily = "Arial, sans-serif", 
  fontSize = "24px", 
  fontColor = "black" 
}) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hour = time.getHours();
  let backgroundColor;

  if (hour >= 6 && hour < 12) {
    backgroundColor = morningColor; 
  } else if (hour >= 12 && hour < 18) {
    backgroundColor = dayColor;
  } else {
    backgroundColor = eveningColor; 
  }

  const dateString = time.toLocaleDateString("uk-UA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="clock" style={{ backgroundColor, fontFamily, fontSize }}>
      <h2 style={{ color: fontColor }}>{time.toLocaleTimeString()}</h2>
      
      {showDate && <p style={{ color: fontColor }}>{dateString}</p>}
    </div>
  );
}

export default Clock;