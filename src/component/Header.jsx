import imageLogo from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={imageLogo} alt="quiz image" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
