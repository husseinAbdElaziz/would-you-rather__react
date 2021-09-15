import { GET_USERS } from '../types';

const userReducer = (userState = {}, action) => {
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

export default userReducer;
