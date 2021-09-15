import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

import authReducer from './authReducer';
import userReducer from './usersReducer';

const reducers = combineReducers({
  loggedInUser: authReducer,
  users: userReducer,
  loadingBar: loadingBarReducer,
});

export default reducers;
