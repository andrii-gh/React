import "./Navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark-mode", !isDark);
  };

  return (
    <nav className="navbar">
      <h1>My App</h1>
      <button onClick={toggleTheme} className="theme-btn">
        <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
      </button>
    </nav>
  );
};

export default Navbar;