import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Context } from "../Store";

export const TweetQuoteButton = ({ quote }) => {
  const [state] = useContext(Context);

  const getTweetUrl = (content, author) => {
    let tweetUrl = "https://www.twitter.com/intent/tweet?";
    const query = {
      hashtags: "quotes",
      related: "harmonify",
      text: `${content} - ${author}`,
    };
    for (let [key, value] of Object.entries(query)) {
      tweetUrl += `${key}=${value}&`;
    }
    return tweetUrl;
  };

  return (
    <a
      href={getTweetUrl(quote.content, quote.author)}
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

TweetQuoteButton.propTypes = {
  quote: PropTypes.shape({
    content: PropTypes.string,
    author: PropTypes.string,
  }),
};
