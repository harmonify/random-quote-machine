import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Store";
import { TweetQuoteButton } from "./TweetQuoteButton.jsx";
import { NewQuoteButton } from "./NewQuoteButton.jsx";
import { ACTIONS } from "../config";

export function QuoteBox() {
  const [state, dispatch] = useContext(Context);
  const [quote, setQuote] = useState();

  useEffect(() => {
    state.quote.then((r) => {
      setQuote(r);
      setTimeout(
        () => dispatch({ type: ACTIONS.UPDATE_LOADING_COMPLETE }),
        1500
      );
    });
  });

  return (
    <div
      className="col-lg-5 d-flex flex-column bg-white p-5 rounded-3"
      id="quote-box"
    >
      <div className="col-10 text-center align-self-center">
        <blockquote
          className="fs-4 lead fw-normal align-items-center td-1500"
          id="text"
          style={{ color: state.color }}
        >
          <i className="fa fa-quote-left" /> {!state.isLoading && quote.content}
        </blockquote>
      </div>
      <span
        className="lead fs-6 fw-normal align-self-end mb-3 td-1500"
        id="author"
        style={{ color: state.color }}
      >
        - {!state.isLoading && quote.author}
      </span>
      <div className="d-flex justify-content-between">
        <TweetQuoteButton quote={!state.isLoading && quote} />
        <NewQuoteButton />
      </div>
    </div>
  );
}
