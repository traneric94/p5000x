import * as SessionAPIUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signUp = user => dispatch => (
  SessionAPIUtil.signUp(user).then(
    user => (
      dispatch(receiveCurrentUser(user))
    ),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )
  )
);

export const logIn = user => dispatch => (
  SessionAPIUtil.logIn(user).then(
    user => (
      dispatch(receiveCurrentUser(user))
    ),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )
  )
);

export const logOut = () => dispatch => (
  SessionAPIUtil.logOut().then(
    () => (dispatch(receiveCurrentUser(null))
  ))
);
