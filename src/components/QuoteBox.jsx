import React, { useContext } from 'react';
import { Context } from '../Store';
import { TweetQuoteButton } from './TweetQuoteButton.jsx';
import { NewQuoteButton } from './NewQuoteButton.jsx';

const quoteText = 'Start where you are. Use what you have.  Do what you can. ';
const quoteAuthor = 'Arthur';
export function QuoteBox () {
  const [state] = useContext(Context);

  return (
    <div className="col-lg-5 d-flex flex-column bg-white p-5 rounded-3" id="quote-box">
      <div className="col-10 text-center align-self-center">
        <blockquote
          className="fs-4 lead fw-normal align-items-center"
          style={{ color: state.color }}
        >
          {quoteText}
        </blockquote>
      </div>
      <span
        className="lead fs-6 fw-normal align-self-end mb-3"
        style={{ color: state.color }}
      >
        - {quoteAuthor}
      </span>
        <div className="d-flex justify-content-between">
        <TweetQuoteButton />
        <NewQuoteButton />
      </div>
    </div>
  );
}
