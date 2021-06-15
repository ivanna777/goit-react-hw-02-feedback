import React, { Component } from 'react';
import Statistics from "./Components/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions";
import Section from "./Components/Section";
import Notification from "./Components/Notification";

class App extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
 
  leaveFeedback = (e) => {
    console.log(e)
    const feedback = e.target.name;
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1
      }})
  }

  
  countTotalFeedback = () => {
    const allFeedbacks = Object.values(this.state);
    return allFeedbacks.reduce((acc, feedback) => acc + feedback, 0)
  }

  countPositiveFeedbackPercentage = () => {
    if (!this.countTotalFeedback()) return null;
    return (Math.floor((this.state.good/this.countTotalFeedback())*100))
  }

render() {
  return (
    <div>
      <Section title="Please leave feedback">
      <FeedbackOptions 
        options={ Object.keys(this.state) }
        onLeaveFeedback={ this.leaveFeedback }
      />
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() ?
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          /> :
          <Notification message="No feedback given" />}
      </Section>
      
      
    </div>
  )
}
}
export default App;