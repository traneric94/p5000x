import { connect } from 'react-redux';
import { updatePhoto } from '../../actions/photo_actions';
import PhotoEdit from './photo_edit';

const msp = state => {
  return {
    currentUser: state.session.currentUser,
    wholeState: state
  }
}

const mdp = dispatch => ({
  updatePhoto: (photo, photoId) => dispatch(updatePhoto(photo, photoId)),
});

export default connect(msp, mdp)(PhotoEdit)
