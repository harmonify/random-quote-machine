/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Context } from '../Store';

export function Container(props) {
  const [state] = useContext(Context);
  
  return (
    <div
      className="container-fluid min-vh-100 min-vw-100 d-flex flex-column justify-content-center align-items-center td-500"
      style={{backgroundColor: state.color }}
    >
      {props.children}
    </div>
  )
}
