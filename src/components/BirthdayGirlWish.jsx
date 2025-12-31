import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BirthdayGirlWish.css";

export default function BirthdayGirlWish() {
  const navigate = useNavigate();

  useEffect(() => {
    // Confetti burst
    import("canvas-confetti").then((confetti) => {
      confetti.default({
        particleCount: 180,
        spread: 100,
        origin: { y: 0.7 },
      });
    });

    // Fireworks animation start
    startFireworks();
  }, []);

  const startFireworks = () => {
    const canvas = document.getElementById("fireworks-canvas");
    const ctx = canvas.getContext("2d");

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const particles = [];

    const randomColor = () =>
      `hsl(${Math.floor(Math.random() * 360)}, 100%, 60%)`;

    function createFirework() {
      const x = Math.random() * W;
      const y = Math.random() * (H / 2);

      for (let i = 0; i < 35; i++) {
        particles.push({
          x,
          y,
          size: Math.random() * 2 + 2,
          color: randomColor(),
          speedX: Math.random() * 4 - 2,
          speedY: Math.random() * 4 - 2,
          life: 55,
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);

      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);

        if (p.life <= 0) particles.splice(i, 1);
      });

      requestAnimationFrame(animate);
    }

    setInterval(createFirework, 800);
    animate();
  };

  return (
    <div className="birthday-wrapper">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <canvas id="fireworks-canvas"></canvas>

      {/* Balloons */}
      <div className="balloon balloon1">🎈</div>
      <div className="balloon balloon2">🎈</div>
      <div className="balloon balloon3">🎈</div>

      {/* Birthday Card */}
      <div className="birthday-card">
        <img src="/raj-img06.jpeg" alt="Her" className="birthday-photo" />

        <h3 className="birthday-title">🎉 Happy New Year Darling 💛😂</h3>

        <p className="birthday-text">
          Happy New Year, my love! As we step into a brand new year, I just want
          to say thank you from the bottom of my heart for being such an
          incredible part of my life. You came into my world and made everything
          more beautiful, more meaningful, and more full of love. Thank you for
          standing by my side through every up and down this year, for always
          understanding me, supporting me, and making me smile in ways no one
          else can. Because of you, this year became unforgettable — every
          memory, every laugh, every little moment with you is something I’ll
          always cherish. You’re truly my best part of 2025, and I can’t wait to
          make even more memories with you in the coming year. I love you
          endlessly, and I’m so lucky to have you. Happy New Year once again, my
          forever person! ❤️🎆
        </p>

        <button
          className="birthday-btn"
          onClick={() => alert("You're the best! 💛😂")}
        >
          🎁 Tap Here 🎁
        </button>
      </div>
    </div>
  );
}
