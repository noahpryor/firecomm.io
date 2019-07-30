import * as types from "../constants/actionTypes";
import db from '../db'

const defaultState = {
  section: "Introduction",
  sidebarActive: false,
  searchBarActive: false,
  sections: {'Protobuff': ['psub1','psub2','psub3'], 
             'Calls': ['csub1', 'csub2'], 
             'Build': ['bsub1'], 
             'Server': [], 
             'Stub': [], 
             'Error': [], 
             'Middleware': []
            },
  collapsed: {'Protobuff': false, 
              'Calls': false, 
              'Build': false, 
              'Server': false, 
              'Stub': false, 
              'Error': false, 
              'Middleware': false
              },
};

const docsReducer = (store = defaultState, action) => {
  switch (action.type) {
    case types.TOGGLE_SUBSECTIONS:
      console.log('inside togglesubsectiondawg')
      const storeCopyCollapsed = JSON.parse(JSON.stringify(store));
      storeCopyCollapsed.collapsed[action.payload] === true ? storeCopyCollapsed.collapsed[action.payload] = false : storeCopyCollapsed.collapsed[action.payload] = true
      console.log(storeCopyCollapsed)
      return storeCopyCollapsed
      

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
