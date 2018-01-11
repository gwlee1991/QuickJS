import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SIGNIN_ERRORS,
  RECEIVE_SIGNUP_ERRORS,
  CLEAR_SESSION_ERRORS,
} from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = Object.freeze({
  currentUser: null,
  errors: { signIn: [], signUp: [] },
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, { currentUser });

    case RECEIVE_SIGNIN_ERRORS:
      const signInErrors = action.errors;
      return merge({}, state, { errors: { signIn: signInErrors, signUp: [] } });

    case RECEIVE_SIGNUP_ERRORS:
      const signUpErrors = action.errors;
      return merge({}, state, { errors: { signIn: [], signUp: signUpErrors } });

    case CLEAR_SESSION_ERRORS:
      return Object.assign({}, state, { errors: { signIn: [], signUp: [] } });

    default:
      return state;
  }
};

export default SessionReducer;
