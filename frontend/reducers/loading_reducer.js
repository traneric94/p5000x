import { RECEIVE_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_USERS } from '../actions/user_actions';
import { START_LOADING } from '../actions/loading_actions';

const initialState = {
    indexLoading: false
}

const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);

    switch (action.type) {
    case START_LOADING:
        return Object.assign({}, state, { indexLoading: true });
    case RECEIVE_PHOTOS:
        return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_USERS:
        return Object.assign({}, state, { indexLoading: false });
    default:
        return state;
    }
};

export default loadingReducer;