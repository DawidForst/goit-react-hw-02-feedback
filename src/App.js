import React, { useReducer } from "react";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import css from "./app.module.css";

const initialState = { good: 0, neutral: 0, bad: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, [action.option]: state[action.option] + 1 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFeedback = (option) => {
    dispatch({ type: "increment", option });
  };

  const totalFeedback = Object.values(state).reduce(
    (acc, value) => acc + value,
    0
  );

  const positiveFeedbackPercentage =
    totalFeedback === 0 ? 0 : Math.round((state.good / totalFeedback) * 100);

  return (
    <div className={css.wrapper}>
      <Section title="Leave feedback">
        <FeedbackOptions onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
}
