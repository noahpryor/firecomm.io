import * as types from "../constants/actionTypes";
import db from '../db'

const defaultState = {
  section: "Introduction",
  sidebarActive: false,
  searchBarActive: false,
  subSectionCollapsedObj: {'test': true },
  sections: ['Protobuff', 'Calls', 'Build', 'Server', 'Stud', 'Error Handling', 'Middleware/Interceptor'],
  protobuffSubsection: ['test1', 'test2', 'test3']
};

const docsReducer = (store = defaultState, action) => {
  switch (action.type) {
    case types.ADD_SUBSECTION:
      console.log('adding section bro---------------', action.payload)
      for(let i = 0; i < store.sections.length; i++){
        if(store.sections[i] === action.payload){
          // Render Sub-sections here
          // add a component with default display to none
          return store.protobuffSubsection
        }
      }

    case types.CHANGE_SECTION:
      console.log('daaaaaaa')
      const storeCopySection = { ...store };
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
      const storeFillDocs = { ...store }
      storeFillDocs.content = db[action.payload]
      console.log(action.payload)
      return storeFillDocs

    case types.TOGGLE_SEARCH_RES:
      console.log('toggle search bar reducer')
      const storeCopySearchRes = { ...store }
      if(storeCopySearchRes.searchBarActive === false){
        storeCopySearchRes.searchBarActive = true
      }
      return storeCopySearchRes

    case types.TOGGLE_SEARCH_RES_OFF:
        console.log('toggle search bar reducer')
        const storeCopySearchResOff = { ...store }
        storeCopySearchResOff.searchBarActive = false
        return storeCopySearchResOff

    case types.SEARCH_ITEM:
      if(action.payload.length === 0 ){
        const storeCopySearchItem = { ...store }
        storeCopySearchItem.searchBarActive = false
        return storeCopySearchItem
      }


    default:
      return store;
  }
};

export default docsReducer;
