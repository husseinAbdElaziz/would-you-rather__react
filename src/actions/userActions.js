import { GET_USERS, USER_ANSWER_QUESTION } from '../types';

export const getUsers = (users) => ({
  type: GET_USERS,
  payload: { users },
});

export const userAddAnswerToQuestion = (answer) => ({
  type: USER_ANSWER_QUESTION,
  payload: answer,
});
