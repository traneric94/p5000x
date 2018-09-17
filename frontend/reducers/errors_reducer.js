import { combineReducers } from 'redux';
import userErrorsReducer from './user_errors_reducer';
import photoErrorsReducer from './photo_errors_reducer';
import sessionErrors from './session_errors_reducer';

const errorsReducer = combineReducers({
  userErrors: userErrorsReducer,
  photoErrors: photoErrorsReducer,
  sessionErrors
});

export default errorsReducer;
