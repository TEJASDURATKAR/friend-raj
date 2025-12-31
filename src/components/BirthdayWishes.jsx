import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/BirthdayWishes.css"; // create a CSS file for this section

export default function BirthdayWishes() {
const wishes = [
  "Happy New Year, my love ❤️✨",
  "Another year with you is my biggest blessing 🥂💫",
  "Let’s make this year even more beautiful together 💖",
];


  return (
    <Container id="birthday-wishes" className="my-5">
      <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#ff4081" }}>
        New Year Wishes 🎂
      </h2>
      <Row>
        {wishes.map((wish, index) => (
          <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
            <Card className="wish-card p-3 text-center">
              <p style={{ fontSize: "1.2rem" }}>{wish}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
