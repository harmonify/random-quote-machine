import React, { useContext } from "react";
import { ACTIONS } from "../config";
import { Context } from "../Store";

export const NewQuoteButton = () => {
  const [state, dispatch] = useContext(Context);

  function handleClick(e) {
    if (!state.isLoading) {
      e.preventDefault();
      dispatch({ type: ACTIONS.UPDATE_BACKGROUND });
      dispatch({ type: ACTIONS.UPDATE_QUOTE });
      setTimeout(
        () => dispatch({ type: ACTIONS.UPDATE_LOADING_COMPLETE }),
        1500
      );
    }
  }

  return (
    <button
      type="button"
      className="btn text-white rounded-3 td-1500"
      id="new-quote"
      style={{ backgroundColor: state.color }}
      onClick={handleClick}
      disabled={state.isLoading}
    >
      <span>New Quote</span>
    </button>
  );
};
