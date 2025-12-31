import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/NewYearNavbar.css";

export default function NavbarHeader() {
  return (
    <Navbar expand="lg" sticky="top" className="newyear-navbar">
      <Container>
        {/* Center Brand */}
        <Navbar.Brand href="/" className="navbar-brand-center">
          💖 My Babeeeeei 💖
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="newyear-navbar-nav" />

        <Navbar.Collapse id="newyear-navbar-nav">
          {/* Left side links */}
          <Nav className="me-auto nav-links-left">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
          </Nav>

          {/* Right side links */}
          <Nav className="ms-auto nav-links-right">
            <Nav.Link href="/birthday">🎊 New Year Surprise</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
