import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const noUser = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = noUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, noUser, { currentUser: action.currentUser });
    default:
      return state;
  }
};

export default SessionReducer;
