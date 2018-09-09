import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import OwnProfile from './own_profile';
import {
  getPhotos,
  getPhoto,
  updatePhoto,
  deletePhoto
} from "../../actions/photo_actions";

const msp = state => {
  console.log(state)
  return {
    currentUser: state.session.currentUser,
    id: state.session.currentUser.id,
    user: state.entities.users[state.session.currentUser.id],
    photos: Object.values(state.entities.photos)
  };
}

const mdp = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  getPhotos: () => dispatch(getPhotos()),
  getPhoto: (id) => dispatch(getPhoto(id)),
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  deletePhoto: (id) => dispatch(deletePhoto(id))
});

export default connect(msp, mdp)(OwnProfile);
