import { useState } from "react";
import logo from "../assets/nexifygen-logo.png.png";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* BRAND */}
      <a href="#home" className="navbar-brand" onClick={closeMenu}>
        <img
          src={logo}
          alt="Nexifygen Logo"
          className="navbar-logo"
        />

        <span className="brand-name">
          Nexifygen
        </span>
      </a>


      {/* DESKTOP MENU */}
      <div className="navbar-menu">

        <a href="#home" className="nav-link active">
          Home
        </a>

        <a href="#about" className="nav-link">
          About
        </a>

        <a href="#services" className="nav-link">
          Services
        </a>

        <a href="#portfolio" className="nav-link">
          Portfolio
        </a>

        <a href="#process" className="nav-link">
          Process
        </a>

        <a href="#contact" className="nav-link">
          Contact
        </a>

      </div>


      {/* RIGHT SIDE */}
      <div className="navbar-right">

        {/* LET'S TALK */}
        <a href="#contact" className="talk-button">
          <span>Let's Talk</span>
          <span className="talk-arrow">↗</span>
        </a>


        {/* THEME */}
        <button
          type="button"
          className={`theme-toggle ${darkMode ? "dark" : ""}`}
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          <span className="theme-sun">☼</span>
          <span className="theme-moon">☾</span>
        </button>


        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`mobile-menu-button ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${
          menuOpen ? "show" : ""
        }`}
      >

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#portfolio" onClick={closeMenu}>
          Portfolio
        </a>

        <a href="#process" onClick={closeMenu}>
          Process
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a
          href="#contact"
          className="mobile-talk-button"
          onClick={closeMenu}
        >
          Let's Talk ↗
        </a>

      </div>

    </nav>
  );
}

export default Navbar;