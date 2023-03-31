import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
      <div>Copyright © 2023 Run With Satendra</div>
      <div>
        Developed By:{" "}
        <a
          href="http://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nanshi Kumari
        </a>
      </div>
    </div>
  );
};

export default Footer;
