import { getRandomColor } from "./utilities/getRandomColor";
import { ACTIONS } from "./config/ACTIONS";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_QUOTE:
      return {
        ...state,
        color: getRandomColor(),
      };
    default:
      return state;
  }
}
