import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedThemeMode = localStorage.getItem("themeMode");
    if (
      storedThemeMode === "dark" ||
      (!storedThemeMode && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleThemeToggle = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      localStorage.setItem("themeMode", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      localStorage.setItem("themeMode", "dark");
      document.documentElement.classList.add("dark");
    }
  };
  
  return (
        <header>
        <div className="container">
          <a id="logo" href="index.html">
            <img src="images/logotype.svg" alt="Logotype" />
          </a>

          <nav id="main-menu" className="navbar">
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link-two" href="#">Contact</a>
          </nav>

          <div id="darkmode-toggle-switch" className="btn-toggle-switch">
            <span className="label">
              Dark Mode
            </span>
            <label htmlFor="darkmode-switch" className="toggle-switch">
              <input id="darkmode-switch" type="checkbox" checked={isDarkMode} onChange={handleThemeToggle} />
              <span className="slider round"></span>
            </label>
          </div>


          <a id="signin" href="#" className="btn-primary">
            <i className="fa-regular fa-user"></i>
            <span>Sign in / up</span>
          </a>

          <button className="btn-mobile">
            <i className="fa-solid fa-bars"></i>
          </button>

        </div>
      </header>
  )
}

export default Hero