import React, { Component, Fragment } from 'react';

// react-router-dom
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// state management
import { connect } from 'react-redux';

import { LoadingBar } from 'react-redux-loading';

import { handleIniteData } from '../actions';

// components
import Login from './Login';
import NavBar from './NavBar';
import Home from './Home';
import Question from './Question';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleIniteData());
  }

  render() {
    const { loggedInUser } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />

          {loggedInUser && <NavBar />}

          {!loggedInUser && (
            <Redirect
              to={{
                pathname: '/login',
              }}
            />
          )}

          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/question/:id' component={Question} />
        </Fragment>
      </Router>
    );
  }
}

const maoStateToProps = ({ loggedInUser }) => ({ loggedInUser });

export default connect(maoStateToProps)(App);
