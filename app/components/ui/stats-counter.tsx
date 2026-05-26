"use client";

import { useEffect, useState } from "react";

type StatsCounterProps = {
  value: string;
  label: string;
};

export function StatsCounter({ value, label }: StatsCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const target = parseInt(value, 10) || 0;
    const duration = 1200;
    const increment = Math.max(1, Math.ceil(target / (duration / 30)));
    const interval = window.setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        window.clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);

    return () => window.clearInterval(interval);
  }, [value]);

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 text-center shadow-card backdrop-blur-xl">
      <p className="text-4xl font-semibold tracking-tight text-white">{count}{value.includes("+") ? "+" : ""}</p>
      <p className="mt-3 text-sm uppercase tracking-[0.24em] text-cyan-300/80">{label}</p>
    </div>
  );
}
