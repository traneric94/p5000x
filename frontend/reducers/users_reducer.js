import { RECEIVE_CURRENT_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUser = {
  username: "",
  image_url: "",
  photos: [],
  followers: [],
  likes: []
};

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
};

export default usersReducer;
