import * as UserAPIUtil from '../util/user_util';
import * as Loading from './loading_actions';
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

const receiveUser = ({ user }) => ({
  type: RECEIVE_USER,
  user
});

export const fetchUsers = () => dispatch => {
  dispatch(Loading.startLoading());

  return UserAPIUtil.getUsers()
  .then(users => (
    dispatch(receiveUsers(users))
  ))
};

export const fetchUser = id => dispatch => (
  UserAPIUtil.getUser(id).then(user => dispatch(receiveUser(user)))
);

export const updateUser = user => dispatch => (
  UserAPIUtil.updateUser(user)
  .then(userResponse => dispatch(receiveUser(userResponse)))
);
