import Progress from "./Progress.jsx";
import Answers from "./Answers.jsx";
import { useState } from "react";
import questionData from "../questions";
export default function Question({
  questionIndex,
  onSelectAnswer,
  handleSkipAnswer,
}) {
  const [answers, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;
  if (answers.selectedAnswer) {
    timer = 1000;
  }

  if (answers.isCorrect !== null) {
    timer = 2000;
  }
  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: questionData[questionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answers.selectedAnswer && answers.isCorrect !== null) {
    answerState = answers.isCorrect ? "correct" : "wrong";
  } else if (answers.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <Progress
        key={timer}
        timeout={timer}
        onTimeout={answers.selectedAnswer === "" ? handleSkipAnswer : null}
        mode={answerState}
      />

      <h2>{questionData[questionIndex].text}</h2>
      <Answers
        answers={questionData[questionIndex].answers}
        selectedAnswer={answers.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
