import { useEffect, useState } from "react";
import "../styles/surprise.css";

export default function SurprisePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="surprise-overlay">
      <div className={`surprise-box ${revealed ? "revealed" : ""}`}>
        
        {!revealed ? (
          <>
            <h2 className="surprise-title">🎁 A Surprise For You ❤️</h2>
            <p className="surprise-text">Click the button to reveal your gift…</p>

            <button className="reveal-btn" onClick={() => setRevealed(true)}>
              Reveal Surprise 💖
            </button>
          </>
        ) : (
          <div className="reveal-content">
            <h2>❤️ Meri Bandii ❤️</h2>
            <p>
              You are the best part of my life…
              <br />My happiness, my peace, my everything.  
            </p>
            <img src="/raj-img05.jpeg" alt="love" className="surprise-img" />

            <button className="close-btn" onClick={() => setShowPopup(false)}>
              Close 💕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
