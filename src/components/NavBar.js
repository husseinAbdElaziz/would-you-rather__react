import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { logoutUser } from '../actions/authAction';

const NavBar = () => {
  const loggedInUser = useSelector(({ loggedInUser }) => loggedInUser);
  const dispatch = useDispatch();

  console.log('loggedInUser', loggedInUser);
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <NavLink to='/' exact>
            Home
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        {loggedInUser && (
          <div className='d-flex align-items-center'>
            <span className='font-weight-bold mx-3'>{loggedInUser}</span>

            <span
              className=' material-icons pointer'
              onClick={() => dispatch(logoutUser())}
            >
              logout
            </span>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
