import { useState, useCallback } from "react";
import questionData from "../questions";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswer, SetAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;

  const quizIsComplete = activeQuestionIndex === questionData.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selected) {
    SetAnswer((prevAnswer) => {
      return [...prevAnswer, selected];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswer={userAnswer} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        handleSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
