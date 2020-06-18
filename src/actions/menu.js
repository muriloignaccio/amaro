import { SET_CATEGORY, SET_ITEM, TOGGLE_MENU } from '../constants/menu';

export const setCategory = (payload) => {
  return {
    type: SET_CATEGORY,
    payload,
  };
};

export const setItem = (payload) => {
  return {
    type: SET_ITEM,
    payload,
  };
};

export const toggleMenu = () => ({ type: TOGGLE_MENU });
