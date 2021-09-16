import { GET_USERS } from '../types';

export const users = (userState = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...userState,
        ...action.payload.users,
      };
    default:
      return userState;
  }
};
