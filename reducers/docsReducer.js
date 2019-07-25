import * as types from "../constants/actionTypes";

const defaultState = {
  section: "Introduction"
};

const docsReducer = (store = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_SECTION:
      return store;
    default:
      return store;
  }
};

export default docsReducer;
