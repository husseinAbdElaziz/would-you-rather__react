import { LOGIN_USER, LOGOUT_USER } from '../types';

export function loginUser(userId) {
  return {
    type: LOGIN_USER,
    payload: { userId },
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}
