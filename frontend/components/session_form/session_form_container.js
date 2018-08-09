import { connect } from 'react-redux';
import { logIn, logOut, signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
  const formType = ownProps.location.pathname.slice(1)
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType
  }
};

const mdp = (dispatch, ownProps)  => {
  const formType = ownProps.location.pathname.slice(1)
  const processForm = (formType === 'login') ? logIn : signUp;
  return {
    processForm: user => dispatch(processForm(user)),
  };
};

export default connect(msp, mdp)(SessionForm);
