import { combineReducers } from "redux";

import docsReducer from "./docsReducer";

//the piece of state inside of each reducer will be stored inside the property on the store defined as the key in the combineReducers function
export default combineReducers({ docs: docsReducer });
