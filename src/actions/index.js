import { showLoading, hideLoading } from 'react-redux-loading';
import { getUsers, userAddAnswerToQuestion } from './userActions';
import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from '../utils/Data';
import { addNewQuestion, getQuetions, answerQuestion } from './questionsAction';

export const handleIniteData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return _getUsers().then((users) => {
      dispatch(getUsers(users));
      dispatch(hideLoading());
    });
  };
};

export const handleGetQuestions = () => {
  return (dispatch) => {
    return _getQuestions().then((questions) => {
      dispatch(getQuetions(questions));
    });
  };
};

export const handleAddQuestion = ({ optionOneText, optionTwoText, author }) => {
  return (dispatch) => {
    dispatch(showLoading());
    return _saveQuestion({ optionOneText, optionTwoText, author }).then(
      (questionRes) => {
        dispatch(addNewQuestion(questionRes));
        dispatch(hideLoading());
      }
    );
  };
};

export const handleAnswerQuestion = ({ answer, loggedInUser, qid }) => {
  return (dispatch) => {
    dispatch(showLoading());
    return _saveQuestionAnswer({ answer, qid, authedUser: loggedInUser }).then(
      (_) => {
        dispatch(hideLoading());
        dispatch(userAddAnswerToQuestion({ answer, loggedInUser, qid }));
        dispatch(answerQuestion({ answer, loggedInUser, qid }));
      }
    );
  };
};
