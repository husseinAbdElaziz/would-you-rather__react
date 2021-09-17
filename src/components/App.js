import React, { Fragment, useEffect } from 'react';

// react-router-dom
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// state management
import { useDispatch, useSelector } from 'react-redux';

import { LoadingBar } from 'react-redux-loading';

import { handleIniteData } from '../actions';

// components
import Login from './Login';
import NavBar from './NavBar';
import Home from './Home';
import Question from './Question';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleIniteData());
  }, [dispatch]);

  const { loggedInUser } = useSelector((state) => state);

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
};

export default App;
