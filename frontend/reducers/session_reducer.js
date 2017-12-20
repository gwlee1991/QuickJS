import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = Object.freeze({
  currentUser = null,
  errors = []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      // const currentUser = action.currentUser
      return merge({}, state, { action.currentUser });
    case RECEIVE_SESSION_ERRORS:
      return merge({}, state, { action.errors });
    case CLEAR_SESSION_ERRORS:
      return Object.assign({}, state, { errors: [] })
    default:
      return state;
  }
};

export default SessionReducer;


