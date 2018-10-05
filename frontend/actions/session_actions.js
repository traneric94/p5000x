import * as SessionAPIUtil from '../util/session_util';

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const removeSessionErrors = () => ({
  type: REMOVE_SESSION_ERRORS
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
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
      dispatch(receiveSessionErrors(err.responseJSON))
    )
  )
);

export const logIn = user => dispatch => (
  SessionAPIUtil.logIn(user).then(
    user => (
      dispatch(receiveCurrentUser(user))
    ),
    err => (
      dispatch(receiveSessionErrors(err.responseJSON))
    )
  )
);

export const logOut = () => dispatch => (
  SessionAPIUtil.logOut().then(
    () => (dispatch(logoutCurrentUser())
  ))
);
