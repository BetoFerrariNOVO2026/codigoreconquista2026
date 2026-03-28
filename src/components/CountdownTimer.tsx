import { useState, useEffect } from "react";

const TIMER_DURATION = 15 * 60; // 15 minutes in seconds

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(TIMER_DURATION);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-sm text-destructive font-semibold">⏰ Oferta expira em:</p>
      <div className="flex gap-2">
        <div className="bg-destructive text-destructive-foreground rounded-lg px-4 py-2 text-2xl font-bold tabular-nums">
          {String(minutes).padStart(2, "0")}
        </div>
        <span className="text-2xl font-bold text-foreground self-center">:</span>
        <div className="bg-destructive text-destructive-foreground rounded-lg px-4 py-2 text-2xl font-bold tabular-nums">
          {String(secs).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
