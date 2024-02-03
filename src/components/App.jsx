import React, { useState } from 'react';
import './App.module.css';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [feedback, setFeedback] = useState({ ...INITIAL_STATE });

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;
    return total === 0 ? 0 : ((good / total) * 100).toFixed(0);
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };
  //am modificat handleClick pt a utiliza setFeedback pt a actualiza starea
  //am folosit o functie de actualizare pt a prelua starea ant si a o actualiza cu noile valori
  const handleClick = buttonName => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [buttonName.toLowerCase()]: prevFeedback[buttonName.toLowerCase()] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;

  return (
    <main className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {good === 0 && neutral === 0 && bad === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </main>
  );
};

export default App;
