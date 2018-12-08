import { connect } from 'react-redux';
import Photo from "./photo";
import {
  getPhoto,
  updatePhoto,
  deletePhoto
} from "../../actions/photo_actions";
import { openModal } from "../../actions/modal_actions";


const msp = (state, ownProps) => {

    return {
        errors: state.errors,
        loading: state.ui.loading.indexLoading,
        id: ownProps.match.params.photo_id,
        photos: state.entities.photos,
        photo: state.entities.photos[ownProps.match.params.photo_id],
        currentUser: state.session.currentUser
    };
};

const mdp = dispatch => ({
    updatePhoto: (photo) => dispatch(updatePhoto(photo)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    getPhoto: (id) => dispatch(getPhoto(id)),
    getMappedUser: (state, username) => dispatch(getMappedUser(state, username)),
    openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(msp, mdp)(Photo);