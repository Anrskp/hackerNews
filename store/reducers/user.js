import { GET_USER } from '../actions/user';

const initialState = {
    user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                user: action.user
            }
    }
    return state;
}