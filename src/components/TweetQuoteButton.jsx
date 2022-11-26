/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Context } from "../Store";

export const TweetQuoteButton = (props) => {
  const [state] = useContext(Context);

  let tweetUrl = "https://www.twitter.com/intent/tweet?";
  const query = {
    hashtags: "quotes",
    related: "harmonify",
    text: `${props.quote.content} - ${props.quote.author}`,
  };
  for (let [key, value] of Object.entries(query)) {
    tweetUrl += `${key}=${value}&`;
  }

  return (
    <a
      href={tweetUrl}
      className="btn text-white rounded-3 td-1500"
      id="tweet-quote"
      style={{ backgroundColor: state.color }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-twitter"></i>
    </a>
  );
};
