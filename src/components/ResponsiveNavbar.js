import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function ResponsiveNavbar() {
  // get poojaOrderSlice items from redux store
  const poojaOrders = useSelector(state => state.poojaOrders);
  // console.log("Pooja orders ", poojaOrders);
  const cartItems = poojaOrders?.poojaOrders?.length ? poojaOrders?.poojaOrders?.length : 0;
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="text-dark"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Hanuman Temple</Link></Navbar.Brand>
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
              <Nav.Link className="text-dark"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></Nav.Link>
              <Nav.Link className="text-dark"><Link to="/live-stream" style={{ textDecoration: 'none', color: 'black' }}>Live Stream</Link></Nav.Link>
              <Nav.Link className="text-dark"><Link to="/pooja" style={{ textDecoration: 'none', color: 'black' }}>Pooja</Link></Nav.Link>
              <Nav.Link className="text-dark"><Link to="/donation" style={{ textDecoration: 'none', color: 'black' }}>Donation</Link></Nav.Link>
              <Nav.Link className='text-dark'><Link to="/checkout" style={{ textDecoration: 'none', color: 'black' }}><span><img src="/cart-icon.svg"/>{cartItems}</span></Link></Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
