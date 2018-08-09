import * as UserAPIUtil from '../util/user_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const fetchUser = id => dispatch => (
  UserAPIUtil.getUser(id).then(user => dispatch(receiveUser(user)))
);

export const updateUser = user => dispatch => (
  UserAPIUtil.updateUser(user)
  .then(userResponse => dispatch(receiveUser(userResponse)))
);
