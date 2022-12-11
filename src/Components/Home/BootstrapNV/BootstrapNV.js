import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link href="#home" className='ms-5'>Home</Nav.Link>
            <Nav.Link href="#link" className='ms-5'>About</Nav.Link>
            <Nav.Link href="#link" className='ms-5'>Dashboard</Nav.Link>
            <Nav.Link href="#link" className='ms-5 text-light'>Reviews</Nav.Link>
            <Nav.Link href="#link" className='ms-5 text-light'>Blog</Nav.Link>
            <Nav.Link href="#link" className='ms-5 text-light'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;