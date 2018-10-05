import { connect } from 'react-redux';
import { 
  logIn, 
  signUp, 
  removeSessionErrors 
} from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
  const formType = ownProps.location.pathname.slice(1)
  return {
    errors: state.errors.sessionErrors,
    formType
  }
};

const mdp = (dispatch, ownProps)  => {
  const formType = ownProps.location.pathname.slice(1)
  const processForm = (formType === 'login') ? logIn : signUp;
  return {
    processForm: user => dispatch(processForm(user)),
    clearSessionErrors: () => dispatch(removeSessionErrors()),
    demoLogin: user => dispatch(logIn(user))
  };
};

export default connect(msp, mdp)(SessionForm);
