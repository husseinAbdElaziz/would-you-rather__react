import React, { Fragment, useEffect } from 'react';

// react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// state management
import { useDispatch, useSelector } from 'react-redux';

import { LoadingBar } from 'react-redux-loading';

import { handleGetQuestions, handleIniteData } from '../actions';

// components
import Login from './Login';
import NavBar from './NavBar';
import Home from './Home';
import Question from './Question';
import NewQuestion from './NewQuestion';
import NotFounded from './NotFounded';
import LeaderBoard from './LeaderBoard';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleIniteData());
    dispatch(handleGetQuestions());
  }, [dispatch]);

  const { loggedInUser } = useSelector((state) => state);

  return (
    <Router>
      <Fragment>
        <LoadingBar />

        {loggedInUser && <NavBar />}

        {!loggedInUser ? (
          <Route component={Login} />
        ) : (
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/add' component={NewQuestion} />
            <Route path='/question/:id' component={Question} />
            <Route path='/leaderboard' component={LeaderBoard} />
            <Route component={NotFounded} />
          </Switch>
        )}
      </Fragment>
    </Router>
  );
};

export default App;
