import { connect } from 'react-redux';
import { updatePhoto, receiveErrors } from '../../actions/photo_actions';
import PhotoEdit from './photo_edit';

const msp = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors

  }
}

const mdp = dispatch => ({
  updatePhoto: (photo, photoId) => dispatch(updatePhoto(photo, photoId)),
  receiveErrors
});

export default connect(msp, mdp)(PhotoEdit)
