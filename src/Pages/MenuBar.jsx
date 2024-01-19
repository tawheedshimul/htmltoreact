import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="text-white bg-dark justify-content">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-white' />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'> 
          <Nav>
            <Nav.Link href="#deets" className="text-white">More deets</Nav.Link>
            <Nav.Link href="#deets" className="text-white">More deets</Nav.Link>
            <Nav.Link href="#deets" className="text-white">More deets</Nav.Link>
            <Nav.Link href="#deets" className="text-white">More deets</Nav.Link>
            <Nav.Link href="#deets" className="text-white">More deets</Nav.Link>
            <Nav.Link href="#deets" className="text-white">More deets</Nav.Link>
            <Nav.Link href="#deets" className="text-white">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="text-white">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
