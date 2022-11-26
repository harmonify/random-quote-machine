import React, { useContext } from "react";
import { ACTIONS } from "../config";
import { Context } from "../Store";

export const NewQuoteButton = () => {
  const [state, dispatch] = useContext(Context);

  function handleClick(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.UPDATE_BACKGROUND });
    dispatch({ type: ACTIONS.UPDATE_QUOTE });
  }

  return (
    <button
      type="button"
      className="btn text-white rounded-3 td-1500"
      id="new-quote"
      style={{ backgroundColor: state.color }}
      onClick={handleClick}
    >
      <span>New Quote</span>
    </button>
  );
};
