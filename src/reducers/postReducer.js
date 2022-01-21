import { SEND_POST } from "../actions/actionType";

const INITIAL_STATE = {
    post:null,
};


const postReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SEND_POST:
            return {
                ...state,
                post:action.post
            };

            default:
                return state;
    }
}

export default postReducer;