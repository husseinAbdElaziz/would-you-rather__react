import { LOGIN_USER, LOGOUT_USER } from '../types';

export const authUser = (userstate = null, action) => {
  switch (action.type) {
    case LOGIN_USER:
      const { userId } = action.payload;
      return userId;
    case LOGOUT_USER:
      return null;
    default:
      return userstate;
  }
};
