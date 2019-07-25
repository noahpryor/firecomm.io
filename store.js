import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combinedReducers from "./reducers/reducers-combined";

export default createStore(combinedReducers, composeWithDevTools());
