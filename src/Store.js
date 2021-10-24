/* eslint-disable */
import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { getRandomColor } from "./utilities/getRandomColor";

const initialState = {
  color: getRandomColor()
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
