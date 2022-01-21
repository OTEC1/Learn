import { combineReducers } from "redux";
import postReducer  from "./postReducer";


const rootReducer = combineReducers({
    postState: postReducer,
})


export default rootReducer;