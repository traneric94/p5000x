import * as SessionAPIUtil from '../util/session_util';

export const RECEIVE_SESSION_USER = "RECEIVE_SESSION_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_SESSION_USER,
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
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
    () => (dispatch(logoutCurrentUser())
  ))
);
