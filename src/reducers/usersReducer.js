import { GET_USERS, USER_ANSWER_QUESTION } from '../types';

export const users = (userState = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...userState,
        ...action.payload.users,
      };
    case USER_ANSWER_QUESTION:
      const { answer, loggedInUser, qid } = action.payload;

      return {
        ...userState,
        [loggedInUser]: {
          ...userState[loggedInUser],
          answers: {
            ...userState[loggedInUser]?.answers,
            [qid]: answer,
          },
        },
      };
    default:
      return userState;
  }
};
