import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <nav>
      <div className={styles.logo}></div>
      <ul className={`styles.nav_links ${showMenu ? "show" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#training">Training</a>
        </li>
        <li>
          <a href="#achievements">Achievements</a>
        </li>
        <li>
          <a href="#packages">Packages</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className="navbar-toggle" onClick={toggleMenu}>
        {showMenu ? "Close" : "Menu"}
      </button>
    </nav>
  );
};

export default Navbar;
