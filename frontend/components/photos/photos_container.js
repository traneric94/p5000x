import { connect } from 'react-redux';
import {
  getPhotos,
  getPhoto,
  updatePhoto,
  deletePhoto
} from '../../actions/photo_actions';

import { getOwnPhotos } from '../../reducers/selectors';
import Photos from './photos';

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    photos: Object.values(state.entities.photos),
    ownPhotos: getOwnPhotos(state),
    errors: state.errors,
    loading: state.ui.loading.indexLoading,
    ownProps

  };
};

const mdp = dispatch => ({
  getPhotos: () => dispatch(getPhotos()),
  getPhoto: (id) => dispatch(getPhoto(id)),
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  deletePhoto: (id) => dispatch(deletePhoto(id))
});

export default connect(msp, mdp)(Photos);
