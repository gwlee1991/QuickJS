import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const logIn = user => dispatch => (
  APIUtil.login(user)
    .then(user => {
      dispatch(receiveCurrentUser(user));
      dispatch(clearSessionErrors());
    },
    err => {
      dispatch(receiveSessionErrors(err.responseJSON))
    })
);

export const logOut = () => dispatch => (
  APIUtil.logOut()
    .then(()=> dispatch(receiveCurrentUser(null)))
);

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => {
        dispatch(receiveCurrentUser(user));
        dispatch(clearErrors());
    }, err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);


