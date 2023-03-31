import React from "react";
import styles from "./Achievements.module.css";

const Achievements = () => {
  return (
    <div className={styles.ach_wrapper} id="achievements">
      <div className={styles.ach_header}>MY ACHIEVEMENTS</div>
      <hr style={{ width: "75%" }} />
      <div className={styles.ach_data}>
        <div>
          5 KM TIMINGS <br />
          <span className={styles.ach_time}>19:45</span>
        </div>
        <div>
          10 KM TIMINGS <br /> <span className={styles.ach_time}>41:42</span>
        </div>
      </div>
      <hr style={{ width: "75%" }} />
      <div className={styles.ach_data}>
        <div>
          HALF MARATHON <br />
          <span className={styles.ach_time}>1:36:29</span>
        </div>
        <div>
          FULL MARATHON <br />
          <span className={styles.ach_time}>3:45:12</span>
        </div>
      </div>
      <hr style={{ width: "75%" }} />
      <div className={styles.ach_data}>
        <span className={styles.ach_time}>60 KM Finisher</span>
        &nbsp;&nbsp;&nbsp;{" "}
        <span className={styles.ach_time}>75 KM Finisher</span>{" "}
    
      </div>
    </div>
  );
};

export default Achievements;
