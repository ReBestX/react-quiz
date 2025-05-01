import { useEffect, useCallback } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  // Using useCallback to prevent the tick function from being recreated on each render
  const tick = useCallback(() => {
    dispatch({ type: "tick" });
  }, [dispatch]);

  useEffect(() => {
    const id = setInterval(tick, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(id);
  }, [tick]);

  return (
    <div className="timer">
      {mins < 10 ? "0" : ""}
      {mins}:{seconds < 10 ? "0" : ""}
      {seconds}
    </div>
  );
}

export default Timer;
