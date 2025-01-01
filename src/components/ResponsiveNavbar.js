import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ResponsiveNavbar() {
  const [cartItems, setCartItems] = useState(0);

  const poojaOrders = useSelector((state) => state.poojaOrders);

  useEffect(() => {
    const itemsCount = poojaOrders?.poojaOrders?.length || 0;
    setCartItems(itemsCount);
  }, [poojaOrders]);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            Hanuman Temple
          </Link>
        </Navbar.Brand>
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
              <Nav.Link as={Link} to="/" style={{ textDecoration: 'none', color: 'black' }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/live-stream" style={{ textDecoration: 'none', color: 'black' }}>
                Live Stream
              </Nav.Link>
              <Nav.Link as={Link} to="/pooja" style={{ textDecoration: 'none', color: 'black' }}>
                Pooja
              </Nav.Link>
              <Nav.Link as={Link} to="/donation" style={{ textDecoration: 'none', color: 'black' }}>
                Donation
              </Nav.Link>
              <Nav.Link as={Link} to="/checkout" style={{ textDecoration: 'none', color: 'black' }}>
                <span>
                  <img
                    src="/cart-icon.svg"
                    alt="Cart Icon"
                    style={{ marginRight: '5px', verticalAlign: 'middle' }}
                  />
                  {cartItems}
                </span>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
