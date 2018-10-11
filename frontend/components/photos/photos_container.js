import { connect } from 'react-redux';
import { getUserPhotos, getMappedUser } from '../../reducers/selectors';
import Photos from "./photos";
import {
  getOwnPhotos,
  updatePhoto,
  deletePhoto
} from '../../actions/photo_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors,
    loading: state.ui.loading.indexLoading,
    photos: getUserPhotos(state, ownProps.userId),
    id: ownProps.userId
  };
};

const mdp = dispatch => ({
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  deletePhoto: (id) => dispatch(deletePhoto(id)),
  getOwnPhotos: (id) => dispatch(getOwnPhotos(id)),
  fetchUsers: () => dispatch(fetchUsers()),
  getMappedUser: (state, username) => dispatch(getMappedUser(state, username))
});

export default connect(msp, mdp)(Photos);
