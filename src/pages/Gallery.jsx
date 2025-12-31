import { Container } from "react-bootstrap";
import "../styles/Gallery.css";
import { useEffect } from "react";

export default function Gallery() {

  const memories = [
    { type: "image", src: "/raj-img14.jpeg", text: "Us 💕" },
    { type: "video", src: "/raj-ved01.mp4", text: "Our Vibe 🎥" },
    { type: "image", src: "/raj-img13.jpeg", text: "Sweet Days 🌸" },
    { type: "image", src: "/raj-img12.jpeg", text: "Always Together 💞" },
    { type: "video", src: "/raj-ved02.mp4", text: "Fav Clip 💖" },
    { type: "image", src: "/raj-img11.jpeg", text: "Forever ♾️" },
    { type: "video", src: "/raj-ved03.mp4", text: "Moments ✨" },
  ];

  return (
    <section className="memory-section">
      <Container>

        <div className="memory-header">
          <h2>Captured Moments 💘</h2>
          <p>Little pieces of love, frozen in time</p>
        </div>

        <div className="memory-slider">
          {memories.map((item, i) => (
            <div className="memory-card" key={i}>

              {item.type === "image" ? (
                <img src={item.src} alt="memory" />
              ) : (
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls
                  onClick={(e) => {
                    if (e.target.paused) {
                      e.target.play();
                    } else {
                      e.target.pause();
                    }
                  }}
                />
              )}

              <div className="memory-overlay">
                <span>{item.text}</span>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
