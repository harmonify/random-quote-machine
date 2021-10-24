import React, { useContext } from 'react';
import { Context } from '../Store';

export const TweetQuoteButton = () => {
  const state = useContext(Context);
  
  let tweetUrl = "https://www.twitter.com/intent/tweet?";
  const query = {
    hashtags: "quotes",
    related: "harmonify",
    text: `${state.quoteText} ${state.quoteAuthor}`
  };

  for (let [key, value] of Object.entries(query)) {
    tweetUrl += `${key}=${value}&`
  }

  return (
    <a href={tweetUrl} className="btn text-white rounded-3" style={{ backgroundColor: state.randomColor }}>
      <i className="bi bi-twitter"></i>
    </a>
  )
};
