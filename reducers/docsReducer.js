import * as types from "../constants/actionTypes";
import db from '../db'

const defaultState = {
  section: "Introduction",
  sidebarActive: false
};

const docsReducer = (store = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_SECTION:
      console.log(store)
      const storeCopySection = {...store };
      console.log(action.payload)
      storeCopySection.section = action.payload
      return storeCopySection;
    case types.TOGGLE_SIDEBAR:
      console.log("inside togglesidebar reducer");
      const storeCopy = { ...store };
      storeCopy.sidebarActive = !store.sidebarActive;
      console.log({ storeCopy });
      return storeCopy;
      case types.FILL_DOCS:
        console.log('fill docs reducer')
        const storeFillDocs = {...store}
        storeFillDocs.content = db[action.payload]
        console.log(action.payload)
        return storeFillDocs
    default:
      return store;
  }
};

export default docsReducer;
