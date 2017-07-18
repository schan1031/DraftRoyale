export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => dispatch => {
  return APIUtil.login(user).then(userObj => (
    dispatch(receiveCurrentUser(userObj))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ));
};

export const signup = (user) => dispatch => (
  APIUtil.signup(user).then(userObj => (
    dispatch(receiveCurrentUser(userObj))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);
