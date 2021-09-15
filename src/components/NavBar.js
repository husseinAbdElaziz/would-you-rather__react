import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <NavLink to='/' exact>
            Home
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <NavLink to='/login'>Login</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
