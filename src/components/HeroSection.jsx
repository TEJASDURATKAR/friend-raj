import { Container, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import FloatingHearts from "./FloatingHearts";
import "../styles/HeroSection.css";

export default function HeroSection() {
  const [startHearts, setStartHearts] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Happy New Year My Pandaaaaaaa ❤️";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 80);
    return () => clearInterval(typing);
  }, []);

  const handleClick = () => {
    setStartHearts(true);
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <FloatingHearts start={startHearts} />

      <section
        className="hero-wrapper"
        style={{ backgroundImage: "url(/backgroud-image.jpeg)" }}
      >
        <Container className="hero-content">
          <div className="glass-card">
            <h1>{text}</h1>

            <p>
              A small surprise website made with
              <span> endless love 💖</span>
            </p>

            <Button className="hero-btn" onClick={handleClick}>
              Explore Our Memories ✨
            </Button>
          </div>

          <div className="scroll-indicator">
            <span></span>
          </div>
        </Container>
      </section>
    </>
  );
}
