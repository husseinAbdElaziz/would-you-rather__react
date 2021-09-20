import { GET_QUESTIONS, ANSWER_QUESTION, ADD_NEW_QUESTION } from '../types';

export const questions = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, ...action.questions };

    case ADD_NEW_QUESTION:
      const question = action.payload;
      return {
        ...state,
        [question.id]: question,
      };
    case ANSWER_QUESTION:
      const { answer, loggedInUser, qid } = action.payload;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer]?.votes?.concat(loggedInUser),
          },
        },
      };

    default:
      return state;
  }
};
