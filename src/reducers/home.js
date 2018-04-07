import { TOGGLE_HOME } from '../constants';

const initialState = {
  isHome: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HOME:
      return { ...state, isHome: !state.isHome };
    default:
      return state;
  }
};
