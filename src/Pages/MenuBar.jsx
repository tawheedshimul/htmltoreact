import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MenuBar() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className='mx-5'>
        <Navbar.Brand className='text-white' href="#home"><h6>GDPC COIN</h6></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav>
            <div className='nav-border'>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#cheapest-sec">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#industry-leader">Partners</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#accordian-sec">Coin</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#roadmapping">Roadmap </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./images/WPF_GDP_010124.pdf">Whitepaper</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact </a>
                </li>
                <li className="nav-item language-switherss">
                  <a className="nav-link" href="#">Languages</a>
                  <ul className="language-swither">
                    <li><a href="#">English</a></li>
                    <li><a href="#">German</a></li>
                  </ul>
                </li>
                <div className="header-btn" style={{ height: '10px' }}>
                  <a href="#">Connect Wallet</a>
                </div>
              </ul>
            </div>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default MenuBar;
