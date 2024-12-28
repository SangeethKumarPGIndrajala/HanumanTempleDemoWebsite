import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';

function ResponsiveNavbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="text-dark">Temple</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-dark">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/" className="text-dark">Home</Nav.Link>
              <Nav.Link href="/about" className="text-dark">About</Nav.Link>
              <Nav.Link href="/services" className="text-dark">Services</Nav.Link>
              <Nav.Link href="/contact" className="text-dark">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
