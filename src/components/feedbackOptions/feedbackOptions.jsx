import PropTypes from 'prop-types';
import React, { Component } from 'react';

import css from './feedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <ul className={css.feedback_btn_list}>
        {this.props.options.map(option => {
          return (
            <li key={option}>
              <button
                onClick={() => this.props.onLeaveFeedback(option)}
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
