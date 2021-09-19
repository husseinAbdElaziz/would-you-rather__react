import { GET_QUESTIONS, ANSWER_QUESTION, ADD_NEW_QUESTION } from '../types';

export const questions = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, ...action.questions };

    case ADD_NEW_QUESTION:
      const question = action.payload;

      console.log('question action', question);

      return {
        ...state,
        [question.id]: question,
      };
    case ANSWER_QUESTION:
      // const { loggedInUser, qid, answer } = action;
      return {
        ...state,
        //   [qid]: {
        //   ...state[qid],
        // }
      };

    default:
      return state;
  }
};
