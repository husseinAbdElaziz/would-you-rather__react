import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

import { authUser } from './authReducer';
import { users } from './usersReducer';
import { questions } from './questionsReducer';

const reducers = combineReducers({
  loadingBar: loadingBarReducer,
  loggedInUser: authUser,
  questions,
  users,
});

export default reducers;
