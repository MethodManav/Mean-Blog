"use client";

import { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";

export default function Layout() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkTheme(savedTheme === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };
  {
    ("Manav");
  }

  return (
    <div className={`min-h-screen ${isDarkTheme ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        <div className="flex">
          <Sidebar isDarkTheme={isDarkTheme} />
          <Content isDarkTheme={isDarkTheme} />
        </div>
      </div>
    </div>
  );
}
