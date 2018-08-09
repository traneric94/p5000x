import { RECEIVE_USER_ERRORS } from '../actions/user_actions'
import merge from 'lodash/merge';

const userErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return merge([], state, action.errors);
    default:
      return state;
  }
};

export default userErrorsReducer;
