"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  // زمان اولیه (ثانیه)
  const initialSeconds =
    99 * 24 * 60 * 60 + // 99 روز
    9 * 60 * 60 + // 9 ساعت
    44 * 60 + // 44 دقیقه
    39; // 39 ثانیه

  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (sec) => {
    const days = String(Math.floor(sec / (24 * 60 * 60))).padStart(2, "0");
    const hours = String(Math.floor((sec % (24 * 60 * 60)) / 3600)).padStart(
      2,
      "0",
    );
    const minutes = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    const seconds = String(sec % 60).padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(secondsLeft);

  return (
    <div className="flex gap-2 text-lg font-medium text-primary">
      <span>{days}D</span>
      <span>:</span>
      <span>{hours}H</span>
      <span>:</span>
      <span>{minutes}M</span>
      <span>:</span>
      <span>{seconds}S</span>
    </div>
  );
}
