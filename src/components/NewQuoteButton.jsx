import React, { useContext } from 'react';
import { ACTIONS } from '../config/ACTIONS';
import { Context } from '../Store';

export const NewQuoteButton = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <button
      type="button"
      className="btn text-white rounded-3"
      style={{ backgroundColor: state.color }}
      onClick={() => dispatch({type: ACTIONS.UPDATE_QUOTE})}  
    >
      <span>New Quote</span>
    </button>
  )
}
