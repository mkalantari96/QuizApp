import quizCompleteImage from "../assets/quiz-complete.png";
import questionData from "../questions";

export default function Summary({ userAnswer }) {
  const skippedAnswers = userAnswer.filter((answer) => answer === null);
  const correctAnswers = userAnswer.filter(
    (answer, index) => answer === questionData[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswer.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswer.length) * 100
  );
  const wrongAnswersShare = 100 - correctAnswersShare - skippedAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteImage} alt="quiz is completed" />
      <h2>Quiz completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctlt</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectlt</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === questionData[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questionData[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
