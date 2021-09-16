import { showLoading, hideLoading } from 'react-redux-loading';
import { getUsers } from './userActions';
import { _getUsers, _getQuestions } from '../utils/Data';
import { getQuetions } from './questionsAction';

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
