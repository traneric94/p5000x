import { connect } from 'react-redux';
import { updateUser, fetchUsers } from '../../actions/user_actions';
import { getPhotos } from "../../actions/photo_actions";
import OwnProfile from './own_profile';

import { getMappedUser } from '../../reducers/selectors';

const msp = (state, ownProps) => {

  const username = ownProps.location.pathname.slice(1);
  console.log("state", state);
  return {
    currentUser: state.session.currentUser,
    user: getMappedUser(state, username)
  };
}

const mdp = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(msp, mdp)(OwnProfile);
