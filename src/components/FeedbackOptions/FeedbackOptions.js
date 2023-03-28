import React, { useCallback } from "react";
import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default function FeedbackOptions({ onLeaveFeedback }) {
  const handleFeedback = useCallback(
    (option) => {
      onLeaveFeedback(option);
    },
    [onLeaveFeedback]
  );

  return (
    <div className={css.buttons}>
      <button onClick={() => handleFeedback("good")} className={css.button}>
        Good
      </button>
      <button onClick={() => handleFeedback("neutral")} className={css.button}>
        Neutral
      </button>
      <button onClick={() => handleFeedback("bad")} className={css.button}>
        Bad
      </button>
    </div>
  );
}
