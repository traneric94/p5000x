import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
 } from '../actions/photo_actions';
 import merge from 'lodash/merge';

const photosReducer = (state = {}, action ) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_PHOTOS:
        return action.photos;
      case RECEIVE_PHOTO:
        return merge({}, state, action.photo)
      case REMOVE_PHOTO:
        debugger;
        let newState = merge({}, state);
        delete newState[action.id];
        return newState;
      default:
        return state;
    }
};

export default photosReducer;
