import * as types from "../constants/actionTypes";

export const toggleSidebar = () => ({
  type: types.TOGGLE_SIDEBAR
})

export const changeSection = (title) => ({
  type: types.CHANGE_SECTION,
  payload: title
})

export const fillDocs = (title) => ({
  type: types.FILL_DOCS,
  payload: title
})
