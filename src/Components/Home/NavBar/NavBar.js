import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import BasicExample from "../BootstrapNV/BootstrapNV";

const NavBar = () => {
  return (
    <div>
      <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            {/* <Nav.Link href="#home" className='ms-5'>Home</Nav.Link> */}
            <Link className="ms-5" to="/home">Home</Link>
            <Link className="ms-5" to="/about">About</Link>
            <Link className="ms-5" to="/dashboard/appointment">Dashboard</Link>
            <Link className="ms-5" to="/reviews">Reviews</Link>
            <Link className="ms-5" to="/blog">Blog</Link>
            <Link className="ms-5" to="/contact">Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavBar;
