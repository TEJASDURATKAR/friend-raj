import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/Gallery.css"; 

export default function PhotoGallery() {
  const photos = [
    "/raj-img01.jpeg", // <-- directly use the path relative to public
    "/raj-img02.jpeg",
    "/raj-img03.jpeg",
    "/raj-img04.jpeg",
  ];

  return (
    <Container id="gallery" className="my-5">
      <h2 className="text-center mb-5" style={{ fontWeight: "bold", color: "#e91e63" }}>
        Our Beautiful Memories ❤️
      </h2>
      <Row>
        {photos.map((img, index) => (
          <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
            <div className="photo-card">
              <Card.Img 
                src={img} 
                alt={`memory-${index}`} 
                className="photo-image" 
              />
              <div className="heart-overlay">❤️</div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
