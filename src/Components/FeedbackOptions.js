import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
          <div>
        {options.map((option) => (
          <button key={ option} type="button" onClick={onLeaveFeedback} name ={option}>
            {option}
          </button>
            ))}
      </div> 
        )
    }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func
}

export default FeedbackOptions;