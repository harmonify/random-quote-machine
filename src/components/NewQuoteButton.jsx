import PropTypes from 'prop-types';

export const NewQuoteButton = (props) => {
  return (
    <button type="button" className="btn text-white rounded-3" style={{ backgroundColor: props.randomColor }}>
      <span>New Quote</span>
    </button>
  )
}

NewQuoteButton.propTypes = {
  randomColor: PropTypes.string.isRequired
}