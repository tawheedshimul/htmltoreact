import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MenuBar() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand className='text-white' href="#home">GDPC COIN</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
            <Nav>
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#cheapest-sec">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#industry-leader">Patners</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#accordian-sec">Coin</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#roadmapping">Roadmap </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./images/WPF_GDP_010124.pdf">Whitepaper</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#contact">Contact </a>
                </li>
                <li class="nav-item language-switherss">
                  <a class="nav-link" href="#">Languages</a>
                  <ul class="language-swither">
                    <li><a href="#">English</a></li>
                    <li><a href="#">German</a></li>
                  </ul>
                </li>
              </ul>
              <div class="d-flex header-btn">
                <a href="#">Connect Wallet</a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MenuBar;
