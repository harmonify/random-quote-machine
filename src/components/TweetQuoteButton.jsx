import PropTypes from 'prop-types';

export const TweetQuoteButton = (props) => {
  let tweetUrl = "https://www.twitter.com/intent/tweet?";
  const query = {
    hashtags: "quotes",
    related: "harmonify",
    text: `${props.quoteText} ${props.quoteAuthor}`
  };

  for (let [key, value] of Object.entries(query)) {
    tweetUrl += `${key}=${value}&`
  }

  return (
    <a href={tweetUrl} className="btn text-white rounded-3" style={{ backgroundColor: props.randomColor }}>
      <i className="bi bi-twitter"></i>
    </a>
  )
};

TweetQuoteButton.propTypes = {
  randomColor: PropTypes.string.isRequired,
  quoteText: PropTypes.string.isRequired,
  quoteAuthor: PropTypes.string.isRequired,
}
