function Error({ message, dispatch }) {
  return (
    <div className="error">
      <p>
        <span>💥</span> {message || "There was an error fetching questions."}
      </p>
      {dispatch && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "useFallbackQuestions" })}
        >
          Use fallback questions
        </button>
      )}
    </div>
  );
}

export default Error;
