import { connect } from 'react-redux';
import { createPhoto, updatePhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';
const msp = state => {
  return {
    photo: state.entities.photos[state.ui.modal],
    currentUser: state.session.currentUser,
    errors: state.errors.photoErrors
  }
}

const mdp = dispatch => ({
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  createPhoto: (photo) => dispatch(createPhoto(photo))
});

export default connect(msp, mdp)(PhotoForm)
