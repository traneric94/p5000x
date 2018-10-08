import { RECEIVE_USERS } from '../actions/user_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    const newState = merge({}, state);
    switch(action.type) {
        case RECEIVE_USERS:
            Object.values(action.users).forEach( user => {
                newState[user.username] = user.id;
            });
            return newState;
        default:
            return state;
    }
};