import { useState, useEffect } from "react";

export function Timer() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setHours(24, 0, 0, 0);

      const difference = tomorrow - now;

      if (difference > 0) {
        const hours = String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0");
        const minutes = String(
          Math.floor((difference / 1000 / 60) % 60)
        ).padStart(2, "0");
        const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
          2,
          "0"
        );

        setTimeLeft(`${hours}:${minutes}:${seconds}`);
      } else {
        setTimeLeft("00:00:00");
      }
    };

    const timerInterval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div>
      <p>Next poem in: {timeLeft}</p>
    </div>
  );
}
