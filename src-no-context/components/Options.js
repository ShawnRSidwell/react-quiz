function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  function checkAnswer(index) {
    return index === question.correctOption ? "correct" : "wrong";
  }

  return (
    <div>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered ? checkAnswer(index) : ""
            }`}
            disabled={hasAnswered}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
