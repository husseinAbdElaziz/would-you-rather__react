import {
  USER_ADD_NEW_QUESTION,
  GET_USERS,
  USER_ANSWER_QUESTION,
} from '../types';

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

    case USER_ADD_NEW_QUESTION:
      const { qid: id, author } = action.payload;

      console.log('id', id);
      console.log('author', author);

      return {
        ...userState,
        [author]: {
          ...userState[author],
          questions: userState[author]?.questions?.concat(id),
        },
      };
    default:
      return userState;
  }
};
