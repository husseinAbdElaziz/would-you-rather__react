import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../actions/authAction';

const Login = (props) => {
  console.log(props);

  const { users } = useSelector(({ users }) => ({ users }));

  const dispatch = useDispatch();

  const [loggedInUser, setLoggedInUser] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSelectionChange = (event) => {
    setLoggedInUser(event.target.value);
    setLoginError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // show error if no user choosed
    if (!loggedInUser) {
      return setLoginError('choose user');
    }

    // login
    dispatch(loginUser(loggedInUser));

    // navigate to home
    props.history.push('/');
  };

  return (
    <div
      className='d-flex align-items-center justify-content-center'
      style={{ height: '80vh' }}
    >
      <Container className='d-flex flex-column align-items-center flex-grow '>
        <h2> Welcome to Would You rather App </h2>
        <h5 className='my-3'> Please sign in to continue</h5>

        <h6 className='text-danger'> {loginError}</h6>
        <div style={{ maxWidth: '500px', minWidth: '400px' }}>
          <Form.Select
            size='lg'
            onChange={(event) => handleSelectionChange(event)}
          >
            <option value=''>choose user</option>
            {Object.keys(users).map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </Form.Select>
          <Button
            variant='dark'
            className='w-100 mt-3'
            onClick={(event) => handleSubmit(event)}
          >
            Login
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
