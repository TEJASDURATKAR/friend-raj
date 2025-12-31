import { useState, useRef, useEffect } from "react";
import "../styles/music.css";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    // Autoplay fix: start muted so Chrome allows autoplay
    audio.muted = true;
    audio.play().catch(() => {});

    // On first user interaction → unmute real volume
    const enableSound = () => {
      audio.muted = false;   // unmute
      audio.volume = 1;      // normal volume
      window.removeEventListener("click", enableSound);
    };

    window.addEventListener("click", enableSound);

    return () => {
      window.removeEventListener("click", enableSound);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music02.mp3"   // ✔ correct path: public/music/music.mp3
        loop
        preload="auto"
        autoPlay
        playsInline
      ></audio>

      <div className="music-btn" onClick={toggleMusic}>
        {isPlaying ? (
          <span className="music-icon playing">🎵</span>
        ) : (
          <span className="music-icon">🔇</span>
        )}
      </div>
    </>
  );
}
