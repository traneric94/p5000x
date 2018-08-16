import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import OwnProfile from './own_profile';

const msp = state => {
  // console.log(state)
  return {
    currentUser: state.session.currentUser,
    id: state.session.currentUser.id,
    user: state.entities.users

  };
}

const mdp = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(msp, mdp)(OwnProfile);
