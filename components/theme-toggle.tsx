"use client";

import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex rounded-[100%] dark:border-transparent sm:border border-black dark:border-gray-400 hover:bg-gray-200 dark:hover:bg-[#3B3E47] p-3 text-blue-500 "
    >
      <Moon className="absolute text-4xl rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <Sun className="rotate-0 text-4xl scale-100 transition-all dark:-rotate-90 dark:scale-0 " />

      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
export default ThemeToggle