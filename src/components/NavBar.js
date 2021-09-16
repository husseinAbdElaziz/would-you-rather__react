import React, { Fragment } from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';
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
        {!loggedInUser && (
          <Navbar.Collapse className='justify-content-end'>
            <NavLink to='/login'>Login</NavLink>
          </Navbar.Collapse>
        )}
        {loggedInUser && (
          <div>
            <Image
              roundedCircle
              className='avatar mx-2'
              src={`https://avatars.dicebear.com/api/initials/${loggedInUser}.svg`}
              alt={`avatar: ${loggedInUser}`}
            />

            <span className='pointer' onClick={() => dispatch(logoutUser())}>
              logout
            </span>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
