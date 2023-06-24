import PropTypes from 'prop-types';
import React, { Component } from 'react';

import css from './feedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={css.feedback_btn_list}>
        {options.map(option => {
          return (
            <li key={option}>
              <button
                onClick={() => onLeaveFeedback(option)}
                className={css.feedback_btn}
                type="button"
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
