import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import Greeting from './greeting';
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    ownProps
  };
};

const mdp = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default withRouter(connect(msp, mdp)(Greeting));
