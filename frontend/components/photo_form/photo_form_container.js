import { connect } from 'react-redux';
import { createPhoto, getPhotos } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const msp = state => {
  return {
    currentUser: state.session.currentUser,
  }
}

const mdp = dispatch => ({
  createPhoto: (photo) => dispatch(createPhoto(photo)),
});

export default connect(msp, mdp)(PhotoForm)
