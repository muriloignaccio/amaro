import { TOGGLE_BAG } from '../constants/bag';

const INITIAL_STATE = {
  active: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOGGLE_BAG:
      return { ...state, active: !state.active };
    default:
      return state;
  }
};
