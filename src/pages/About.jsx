import { Container, Row, Col } from "react-bootstrap";
import "../styles/About.css";

export default function About() {
  return (
    <section className="love-section">
      <Container>

        {/* HERO */}
        <div className="love-hero">
          <h1>Our Story 💕</h1>
          <p>
            Not just a love story, but a journey of hearts, smiles, and forever promises.
          </p>
        </div>

        {/* PROFILE STRIP */}
        <Row className="profile-strip">
          <Col md={6}>
            <div className="profile-card left">
              <img src="/raj-img07.jpeg" alt="Her" />
              <div className="profile-info">
                <h3>She 🌸</h3>
                <p>
                  Grace in her smile, magic in her presence.  
                  She turns ordinary days into beautiful memories.
                </p>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="profile-card right">
              <img src="/raj-img08.jpeg" alt="Me" />
              <div className="profile-info">
                <h3>Me 🖤</h3>
                <p>
                  Just a guy who found his forever in her.  
                  Loving her is my favorite part of life.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* STORY FLOW */}
        <div className="story-flow">
          <h2>Moments That Made Us 💞</h2>

          <div className="flow-item">
            <span>✨</span>
            <p><b>The First Hello</b> — where everything quietly began.</p>
          </div>

          <div className="flow-item">
            <span>💬</span>
            <p><b>Late Night Talks</b> — words that built a bond.</p>
          </div>

          <div className="flow-item">
            <span>❤️</span>
            <p><b>Falling in Love</b> — without even realizing it.</p>
          </div>

          <div className="flow-item">
            <span>💍</span>
            <p><b>Forever Together</b> — still writing this story.</p>
          </div>
        </div>

        {/* FINAL NOTE */}
        <div className="final-note">
          <p>
            “If love had a name, it would be hers.” 💖
          </p>
        </div>

      </Container>
    </section>
  );
}
