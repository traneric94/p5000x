import { combineReducers } from 'redux';
import users from './users_reducer';
import photos from './photos_reducer';

const entitiesReducer = combineReducers({
  users,
  photos
});

export default entitiesReducer;
