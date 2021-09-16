import React from 'react';
import { Container } from 'react-bootstrap';

function NotFounded() {
  return (
    <Container className='vh-80 d-flex flex-column justify-content-center align-items-center'>
      <span className='material-icons'>warning</span>
      <p>Uh oh, the page you're looking for doesn't exist</p>
    </Container>
  );
}

export default NotFounded;
