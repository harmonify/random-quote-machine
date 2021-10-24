/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Store';
import { TweetQuoteButton } from './TweetQuoteButton.jsx';
import { NewQuoteButton } from './NewQuoteButton.jsx';

export function QuoteBox () {
  const [state] = useContext(Context);
  const [quote, setQuote] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    state.quote.then(
      r => {
        setQuote(r)
        setIsLoading(false)
      }
    )
  })
  
  return (
    <div className="col-lg-5 d-flex flex-column bg-white p-5 rounded-3 td-500" id="quote-box">
      <div className="col-10 text-center align-self-center">
        <blockquote
          className="fs-4 lead fw-normal align-items-center td-500"
          style={{ color: state.color }}
        >
          <i className="fa fa-quote-left" />  {!isLoading && quote.content }
        </blockquote>
      </div>
      <span
        className="lead fs-6 fw-normal align-self-end mb-3 td-500"
        style={{ color: state.color }}
      >
        - {!isLoading && quote.author }
      </span>
      <div className="d-flex justify-content-between td-500">
        <TweetQuoteButton quote={!isLoading && quote} />
        <NewQuoteButton />
      </div>
    </div>
  );
}
