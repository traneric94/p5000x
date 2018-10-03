import { connect } from 'react-redux';
import { logOut, receiveErrors } from '../../actions/session_actions';
import Greeting from './greeting';
import { withRouter } from 'react-router-dom';
import { openModal} from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    ownProps
  };
};

const mdp = dispatch => ({
  logOut: () => dispatch(logOut()),
  openModal: (modal) => dispatch(openModal(modal)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default withRouter(connect(msp, mdp)(Greeting));
