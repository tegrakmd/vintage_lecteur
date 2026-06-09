"use client";
import { useState, useEffect } from "react";

export function useClock(): string {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const date = new Date();
      let h = date.getHours();
      const m = date.getMinutes().toString().padStart(2, "0");
      const ampm = h >= 12 ? "pm" : "am";
      h = h % 12 || 12;
      setTime(`${h.toString().padStart(2, "0")}:${m} ${ampm}`);
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return time;
}
