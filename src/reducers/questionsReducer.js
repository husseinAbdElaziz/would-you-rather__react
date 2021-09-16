import { GET_QUESTIONS, ANSWER_QUESTION } from '../types';

export const questions = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, ...action.questions };
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
