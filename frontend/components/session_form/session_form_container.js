import { connect } from 'react-redux';
import { logIn, signUp, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
  const formType = ownProps.location.pathname.slice(1)
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors,
    formType
  }
};

const mdp = (dispatch, ownProps)  => {
  const formType = ownProps.location.pathname.slice(1)
  const processForm = (formType === 'login') ? logIn : signUp;
  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(msp, mdp)(SessionForm);
