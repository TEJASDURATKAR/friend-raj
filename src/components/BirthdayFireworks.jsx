import { useEffect } from "react";
import "../styles/fireworks.css";

export default function BirthdayFireworks({ start }) {
  useEffect(() => {
    if (!start) return;

    const container = document.getElementById("fw-container");

    const createFirework = () => {
      const fw = document.createElement("div");
      fw.className = "firework";

      // random horizontal position
      fw.style.left = Math.random() * 90 + "%";

      container.appendChild(fw);

      // remove after animation
      setTimeout(() => fw.remove(), 1500);
    };

    const interval = setInterval(createFirework, 300);

    return () => clearInterval(interval);
  }, [start]);

  return <div id="fw-container"></div>;
}
