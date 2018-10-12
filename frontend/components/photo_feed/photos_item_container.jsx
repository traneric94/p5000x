import { connect } from "react-redux";
import { deletePhoto } from '../../actions/photo_actions';
import PhotosItem from '../photos/photos_item';

const msp = (state) => (
    {
        currentUser: state.session.currentUser
    }
);

const mdp = dispatch => ({
    deletePhoto: (id) => dispatch(deletePhoto(id))
});

export default connect(msp, mdp)(PhotosItem);
