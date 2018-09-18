import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import OwnProfile from './own_profile';
import {
  getPhotos,
  getPhoto,
  updatePhoto,
  deletePhoto
} from "../../actions/photo_actions";

import { getOwnPhotos } from '../../reducers/selectors';


const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    id: state.session.currentUser.id,
    user: state.entities.users[state.session.currentUser.id],
    ownPhotos: getOwnPhotos(state),
    state: state,
  };
}

const mdp = dispatch => ({
  getPhotos: () => dispatch(getPhotos()),
  getPhoto: (id) => dispatch(getPhoto(id)),
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  deletePhoto: (id) => dispatch(deletePhoto(id)),
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(msp, mdp)(OwnProfile);
