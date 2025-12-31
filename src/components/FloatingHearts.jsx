import { useEffect, useRef } from "react";
import "../styles/PhotoGallery.css";

export default function FloatingHearts({ start }) {
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Create container
    const container = document.createElement("div");
    container.className = "floating-hearts-container";
    document.body.appendChild(container);
    containerRef.current = container;

    return () => {
      document.body.removeChild(container);
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (start) {
      // Start generating hearts
      intervalRef.current = setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 4 + Math.random() * 4 + "s";
        heart.style.fontSize = Math.random() * 25 + 15 + "px";

        containerRef.current.appendChild(heart);

        setTimeout(() => heart.remove(), 7000);
      }, 500);
    } else {
      // Stop hearts
      clearInterval(intervalRef.current);
    }
  }, [start]);

  return null;
}
