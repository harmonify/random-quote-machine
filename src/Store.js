import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { quoteService } from "./services";
import { getRandomColor } from "./utilities";

const initialState = {
  color: getRandomColor(),
  quote: quoteService.getRandomQuote(),
  isLoading: true,
};
export const Context = createContext(initialState);

export const Store = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};
