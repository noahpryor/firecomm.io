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

export const searchItem = (item) => ({
  type: types.SEARCH_ITEM,
  payload: item
})

export const toggleSearchRes =() => ({
  type: types.TOGGLE_SEARCH_RES,
})

export const toggleSearchResOff =() => ({
  type: types.TOGGLE_SEARCH_RES_OFF,
})

export const toggleSubSections = (nameOfCurrentSection) => ({
  type: types.TOGGLE_SUBSECTIONS,
  payload: nameOfCurrentSection
})
