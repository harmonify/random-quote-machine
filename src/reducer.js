import { getRandomColor } from "./utilities/getRandomColor";
import { getRandomQuote } from "./utilities/getRandomQuote";
import { ACTIONS } from "./config/ACTIONS";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_BACKGROUND:
      return {
        ...state,
        color: getRandomColor(),
      };
    case ACTIONS.UPDATE_QUOTE:
      return {
        ...state,
        quote: getRandomQuote(),
      };
    default:
      return state;
  }
}
