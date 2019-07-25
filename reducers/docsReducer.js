import * as types from "../constants/actionTypes";

const defaultState = {
  section: "Introduction",
  sidebarActive: false
};

const docsReducer = (store = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_SECTION:
      return store;
    case types.TOGGLE_SIDEBAR:
      console.log("inside togglesidebar reducer");
      const storeCopy = { ...store };
      storeCopy.sidebarActive = !store.sidebarActive;
      console.log({ storeCopy });
      return storeCopy;
    default:
      return store;
  }
};

export default docsReducer;
