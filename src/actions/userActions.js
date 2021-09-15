import { GET_USERS, ADD_NEW_QUESTION, ANSWER_QUESTION } from '../types';

export function getUsers(users) {
  return {
    type: GET_USERS,
    payload: { users },
  };
}

export function userAddQuestion({ authedUser, qid }) {
  return { type: ADD_NEW_QUESTION, payload: { authedUser, qid } };
}

export function userAnswerQuestion({ authedUser, qid, answer }) {
  return { type: ANSWER_QUESTION, payload: { answer, qid, authedUser } };
}
