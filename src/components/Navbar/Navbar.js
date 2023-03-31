import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav>
      <div className={styles.logo}></div>
      <ul className={styles.nav_links}>
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
    </nav>
  );
};

export default Navbar;
