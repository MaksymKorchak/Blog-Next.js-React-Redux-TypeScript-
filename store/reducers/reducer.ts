import {CREATE_NEW_POST, DELETE_POST, EDIT_POST, GET_ALL_POSTS, GET_ONE_POST, State} from '../../interfaces';

const initialState: State = {
    posts: [],
    post: {}
};

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        case GET_ONE_POST:
            return {
                ...state,
                post: action.payload,
            }
        case CREATE_NEW_POST :
            return {
                ...state,
            }
        case EDIT_POST:
            return {
                ...state
            }
        case DELETE_POST:
            return {
                ...state
            }
        default:
            return state;
    }
};

export default reducer;