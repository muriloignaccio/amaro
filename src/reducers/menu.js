import { SET_CATEGORY, SET_ITEM, TOGGLE_MENU } from '../constants/menu';

const INITIAL_STATE = {
  category: '',
  item: '',
  active: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_CATEGORY:
      return { ...state, category: payload };
    case SET_ITEM:
      return { ...state, item: payload };
    case TOGGLE_MENU:
      return { ...state, active: !state.active };
    default:
      return state;
  }
};
