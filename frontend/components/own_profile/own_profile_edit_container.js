import { connect } from 'react-redux';
import { updateUser, receiveErrors } from '../../actions/user_actions';
import OwnProfileEdit from './own_profile_edit';

const msp = state => {
    return {
        currentUser: state.session.currentUser,
        errors: state.errors,
    }
}

const mdp = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user)),
    receiveErrors
});

export default connect(msp, mdp)(OwnProfileEdit)
