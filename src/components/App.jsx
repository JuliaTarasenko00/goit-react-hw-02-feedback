import React, { Component } from 'react';
import Statistic from './statistics/statistics';
import FeedbackOptions from './feedbackOptions/feedbackOptions';
import { Section } from './sectionTitle/sectiontitle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementOnClickBtn = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good }) => {
    const ratings = this.countTotalFeedback(this.state);
    const rating = (good / ratings) * 100;
    return Math.round(rating) || 0;
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.incrementOnClickBtn}
          />
        </Section>
        <Section title={'Statistic'}>
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        </Section>
      </>
    );
  }
}
