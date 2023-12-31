import { useEffect, useState } from "react";
import { useQuiz } from "../contexts/QuizContext";

const SECS_PER_QUESTION = 1;

function Timer() {
  const { numQuestions } = useQuiz();
  const { dispatch } = useQuiz();
  const [timer, setTimer] = useState(numQuestions * SECS_PER_QUESTION);
  const mins = Math.floor(timer / 60);
  const seconds = timer % 60;

  useEffect(
    function () {
      const id = setInterval(() => {
        setTimer((tick) => tick - 1);
      }, 1000);
      if (mins === 0 && seconds === 0) return dispatch({ type: "finish" });
      return () => clearInterval(id);
    },
    [dispatch, mins, seconds]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
