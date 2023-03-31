import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_overlay}>
        <div className={styles.tagline}>
          <span>TRANSFORM | REFORM | REPEAT</span>
        </div>
        <div className={styles.tagline2}>
          <span>
            RUNNING COACH | MOTIVATION AND SUPPORT | CUSTOM TRAINING PLANS
          </span>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.glowing_button}>
            {" "}
            <a
              href="http://wa.link/u5l5y7"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              START NOW @ JUST 399/-
            </a>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
