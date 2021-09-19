import { showLoading, hideLoading } from 'react-redux-loading';
import { getUsers } from './userActions';
import { _getUsers, _getQuestions, _saveQuestion } from '../utils/Data';
import { addNewQuestion, getQuetions } from './questionsAction';

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
        console.log('resss', questionRes);
        dispatch(addNewQuestion(questionRes));
        dispatch(hideLoading());
      }
    );
  };
};
