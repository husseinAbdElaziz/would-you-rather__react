import { showLoading, hideLoading } from 'react-redux-loading';
import { getUsers } from './userActions';
import { _getUsers } from '../utils/Data';

export function handleIniteData() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getUsers().then((users) => {
      dispatch(getUsers(users));
      dispatch(hideLoading());
    });
  };
}
