/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";
import { ACTIONS } from "../config";
import { Context } from "../Store";

export function Container(props) {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    setTimeout(dispatch({ type: ACTIONS.UPDATE_BACKGROUND }), 1000);
  }, []);

  return (
    <div
      className="container-fluid min-vh-100 min-vw-100 d-flex flex-column justify-content-center align-items-center td-1500"
      style={{ backgroundColor: state.color ? state.color : "#fff" }}
    >
      {props.children}
    </div>
  );
}
