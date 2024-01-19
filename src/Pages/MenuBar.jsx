import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MenuBar() {
  const [activeNavItem, setActiveNavItem] = useState('Home'); // Set the default active item

  // Define your Nav items and their corresponding href values
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#cheapest-sec' },
    { label: 'Partners', href: '#industry-leader' },
    { label: 'Coin', href: '#accordian-sec' },
    { label: 'Roadmap', href: '#roadmapping' },
    { label: 'Whitepaper', href: './images/WPF_GDP_010124.pdf' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className='mx-5'>
        <Navbar.Brand className='text-white navs-brand' href="#home"><h6>GDPC COIN</h6></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav>
            <div className='nav-border'>
              <ul className="navbar-nav">
                {navItems.map((item) => (
                  <li className={`nav-item ${activeNavItem === item.label ? 'active' : ''}`} key={item.label}>
                    <a className="nav-link" href={item.href} onClick={() => setActiveNavItem(item.label)}>
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="nav-item language-switherss">
                  <a className="nav-link" href="#">Languages</a>
                  <ul className="language-swither">
                    <li><a href="#">English</a></li>
                    <li><a href="#">German</a></li>
                  </ul>
                </li>
                <div className="header-btn">
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
