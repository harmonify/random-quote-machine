import { getRandomColor, getRandomQuote } from "./utilities";
import { ACTIONS } from "./config";

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
};
