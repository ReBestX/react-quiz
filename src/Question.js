import { useState, useEffect } from "react";

function Question({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  const [animationClass, setAnimationClass] = useState("fade-in");

  // Apply animation effect when question changes
  useEffect(() => {
    setAnimationClass("fade-in");

    // Clean up the animation class after animation completes
    const timer = setTimeout(() => {
      setAnimationClass("");
    }, 500);

    return () => clearTimeout(timer);
  }, [question]);

  return (
    <div className={`question ${animationClass}`}>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            disabled={hasAnswered}
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : index === answer
                  ? "wrong"
                  : ""
                : ""
            }`}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            aria-pressed={index === answer}
            aria-label={`Option ${index + 1}: ${option}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
