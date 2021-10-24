import React, { useContext } from 'react';
import { Context } from '../Store';
import { QuoteBox } from './QuoteBox.jsx';
import { CreditBox } from './CreditBox.jsx';

export function Container() {
  const [state] = useContext(Context);
  
  return (
    <div
      className="container-fluid min-vh-100 min-vw-100 d-flex flex-column justify-content-center align-items-center"
      style={{backgroundColor: state.color }}
    >
      <QuoteBox />
      <CreditBox />
    </div>
  )
}
