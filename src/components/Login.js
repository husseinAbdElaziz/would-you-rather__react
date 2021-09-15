import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Container, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

class Login extends Component {
  state = {
    loggedInUser: '',
    loginError: '',
  };

  handleSelectionChange = (event) => {
    console.log(event.target.value);
    this.setState({ loggedInUser: event.target.value, loginError: '' });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // show error if no user choosed
    if (!this.state.loggedInUser) {
      return this.setState({ loginError: 'choose user' });
    }
    this.props.history.push('/');
  };

  render() {
    const { users } = this.props;
    return (
      <div
        className='d-flex align-items-center justify-content-center'
        style={{ height: '80vh' }}
      >
        <Container className='d-flex flex-column align-items-center flex-grow '>
          <h2> Login </h2>

          <h6 className='text-danger'> {this.state.loginError}</h6>
          <div style={{ maxWidth: '500px', minWidth: '400px' }}>
            <Form.Select
              size='lg'
              onChange={(event) => this.handleSelectionChange(event)}
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
              onClick={(event) => this.handleSubmit(event)}
            >
              Login
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users,
});
export default connect(mapStateToProps)(Login);
