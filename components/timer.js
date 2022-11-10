import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Timer({}) {
  const [date, setDate] = useState(0);
  const calculateTimeLeft = () => {
    const difference = date - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div
      className="timer"
      onClick={() => {
        setDate(Date.now() + 600000);
      }}
      style={{
        backgroundColor:
          timeLeft.minutes <= 2
            ? timeLeft.minutes <= 1
              ? timeLeft.minutes <= 0
                ? "#F07A90"
                : "#D8F07A"
              : "#9BDEAC"
            : "",
      }}
    >
      {timeLeft.minutes || timeLeft.seconds ? (
        <span>
          {timeLeft.minutes}:{timeLeft.seconds}
        </span>
      ) : date + 10000 >= Date.now() ? (
        <span>spawned!</span>
      ) : (
        <span>?</span>
      )}
    </div>
  );
}
