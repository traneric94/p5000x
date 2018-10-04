import { RECEIVE_SESSION_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const templateUser = Object.freeze({
  currentUser: null
});

export default (state = templateUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_SESSION_USER:
      return merge({}, templateUser, { currentUser: action.currentUser });
    case LOGOUT_CURRENT_USER:
      return templateUser;
    default:
      return state;
  }
};
