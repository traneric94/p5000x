import { RECEIVE_USER_ERRORS } from '../actions/user_actions'
import merge from 'lodash/merge';

const userErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors
    default:
      return state;
  }
};

export default userErrorsReducer;
