import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const templateUser = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = templateUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, templateUser, { currentUser: action.currentUser });
    default:
      return state;
  }
};

export default SessionReducer;
