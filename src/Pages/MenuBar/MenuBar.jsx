import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './MenuBar.css';

function MenuBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="border-bottom border-secondary" style={{ background: "black", height: "" }}>
      <Container className='d-flex align-items-center'>
        <Navbar.Brand className='text-white' href="#home">GDPC COIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-links" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-links" href="#cheapest-sec">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-links" href="#industry-leader">Partners</a>
              </li>
              <li className="nav-item">
                <a className="nav-links" href="#accordian-sec">Coin</a>
              </li>
              <li className="nav-item">
                <a className="nav-links" href="#roadmapping">Roadmap </a>
              </li>
              <li className="nav-item">
                <a className="nav-links" href="./images/WPF_GDP_010124.pdf">Whitepaper</a>
              </li>

              <li className="nav-item">
                <a className="nav-links" href="#contact">Contact </a>
              </li>
              <li className="nav-item language-switherss">
                <a className="nav-links" href="#">Languages</a>
                <div>
                <ul className="language-swither">
                  <li><a href="#">English</a></li>
                  <li><a href="#">German</a></li>
                </ul>
                </div>
              </li>
            </ul>
            <div className="d-flex header-btn">
              <a href="#">Connect Wallet</a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuBar;
