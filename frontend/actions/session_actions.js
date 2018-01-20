import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const RECEIVE_SIGNIN_ERRORS = 'RECEIVE_SIGNIN_ERRORS';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveSignUpErrors = errors => ({
  type: RECEIVE_SIGNUP_ERRORS,
  errors,
});

export const receiveSignInErrors = errors => ({
  type: RECEIVE_SIGNIN_ERRORS,
  errors,
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const logIn = user => dispatch =>
  APIUtil.logIn(user).then(
    (user) => {
      dispatch(receiveCurrentUser(user));
      dispatch(clearSessionErrors());
    },
    (err) => {
      dispatch(receiveSignInErrors(err.responseJSON));
    },
  );

export const logOut = () => dispatch =>
  APIUtil.logOut().then(
    () => {
      dispatch(receiveCurrentUser(null));
      dispatch(clearSessionErrors());
    }
  );

export const signUp = user => dispatch =>
  APIUtil.signUp(user).then(
    (user) => {
      dispatch(receiveCurrentUser(user));
      dispatch(clearSessionErrors());
    },
    err => dispatch(receiveSignUpErrors(err.responseJSON)),
  );
