"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeName = "dark" | "light";

const themeEvent = "quntamcubits-theme-change";

const applyTheme = (theme: ThemeName) => {
  document.documentElement.classList.toggle("light", theme === "light");
  window.localStorage.setItem("theme", theme);
  window.dispatchEvent(new Event(themeEvent));
};

export function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useState<ThemeName>("dark");

  useEffect(() => {
    const syncTheme = () => {
      setActiveTheme(document.documentElement.classList.contains("light") ? "light" : "dark");
    };

    window.addEventListener(themeEvent, syncTheme);
    window.addEventListener("storage", syncTheme);

    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      applyTheme(savedTheme);
    }

    return () => {
      window.removeEventListener(themeEvent, syncTheme);
      window.removeEventListener("storage", syncTheme);
    };
  }, []);

  const handleToggle = () => {
    const nextTheme = activeTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    setActiveTheme(nextTheme);
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-50 transition hover:border-cyan-400/30 hover:text-cyan-300"
      onClick={handleToggle}
    >
      {activeTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
