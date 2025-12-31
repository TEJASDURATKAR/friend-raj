import { useState, useEffect } from "react";
import BirthdayFireworks from "./BirthdayFireworks";
import "../styles/BirthdayCountdown.css";

export default function BirthdayCountdown() {
  const [timeLeft, setTimeLeft] = useState({});
  const [fireStart, setFireStart] = useState(false);

  const now = new Date();
  let target = new Date(`January 1, ${now.getFullYear() + 1} 00:00:00`);
  const targetDate = target.getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = targetDate - Date.now();

      if (diff <= 0) {
        setFireStart(true);
        clearInterval(interval);
        setTimeLeft({ expired: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <>
      <BirthdayFireworks start={fireStart} />

      <div className="countdown-wrapper">
        <h2 className="countdown-title">🎊 New Year Countdown 🎊</h2>

        {!timeLeft.expired ? (
          <div className="timer-box">
            <div className="time-card">
              <span>{timeLeft.days}</span>
              <p>Days</p>
            </div>
            <div className="time-card">
              <span>{timeLeft.hours}</span>
              <p>Hours</p>
            </div>
            <div className="time-card">
              <span>{timeLeft.minutes}</span>
              <p>Minutes</p>
            </div>
            <div className="time-card pulse">
              <span>{timeLeft.seconds}</span>
              <p>Seconds</p>
            </div>
          </div>
        ) : (
          <div className="newyear-msg">
            🎉 HAPPY NEW YEAR 🎉  
            <br />
            New beginnings, new madness 🥂🎆
          </div>
        )}
      </div>
    </>
  );
}
