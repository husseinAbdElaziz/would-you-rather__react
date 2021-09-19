import { GET_QUESTIONS, ADD_NEW_QUESTION, ANSWER_QUESTION } from '../types';

export const getQuetions = (questions) => ({ type: GET_QUESTIONS, questions });

export const addNewQuestion = (question) => ({
  type: ADD_NEW_QUESTION,
  payload: question,
});

export const answerQuestion = ({ authedUser, qid, answer }) => ({
  type: ANSWER_QUESTION,
  payload: { answer, qid, authedUser },
});
