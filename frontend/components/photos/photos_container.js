import { connect } from 'react-redux';
import { getUserPhotos } from '../../reducers/selectors';
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
    photos: getUserPhotos(state, ownProps.userId)
  };
};

const mdp = dispatch => ({
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  deletePhoto: (id) => dispatch(deletePhoto(id)),
  getOwnPhotos: (id) => dispatch(getOwnPhotos(id))
});

export default connect(msp, mdp)(Photos);
