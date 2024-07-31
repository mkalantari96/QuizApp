import { useEffect, useState } from "react";

export default function Progress({ timeout, onTimeout, mode }) {
  const [time, setTime] = useState(timeout);

  useEffect(() => {
    const timerTimeout = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timerTimeout);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <progress id="question-time" max={timeout} value={time} className={mode} />
  );
}
