import React from "react";
import styles from "./PersonalTraining.module.css";

const PersonalTraining = () => {
  return (
    <div className={styles.ptr_wrapper} id="training">
      <div className={styles.ptr_header}>Personal Training</div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          textAlign: "left",
        }}
      >
        {" "}
        <hr
          style={{
            width: "10%",
            height: "2px",
            backgroundColor: "red",
            // textAlign: "right",
          }}
        />
      </div>

      <div className={styles.ptr_container}>
        <div className={styles.ptr_left}>
          <div className={styles.ptr_text}>
            <p className={styles.ptr_para}>
              Planning to Start Running but dont know how to go about it
              <br />
              <br />
              Are you a runner who wants to run even more faster or farther ?
              <br />
              <br />
              Get your Training custom made for you only. 🏃‍♀️🏃. Be it 5K, 10K or
              Half or Full Marathon, Get everything Planned out for you to
              Increase your Stamina & Speed. Get right Advice from Picking Right
              Shoes to Gait Analysis with Nutrition Suggestions.
              <br />
              <br />
              Book a Running Consultation Today to find out more. Coach Aman
              will be happy to guide you
            </p>
          </div>
        </div>
        <div className={styles.ptr_right}>
          <ul>
            <li>Help you go faster and farther </li>
            <br />
            <li>Make you a strong marathon finisher</li>
            <br />
            <li>Suggest the right shoes as per your foot type</li>
            <br />
            <li>Suggest the right shoes as per your foot type </li>
            <br />
            <li>
              {" "}
              Study the statistics of your running session and give you a true
              opinion on it{" "}
            </li>
            <br />
            <li>Motivate you from time to time</li>
            <br />
            <li>Keep you grounded when you are going off track</li>
            <br />
            <li>Speed, Strength, Power Development </li>
            <br />
            <li>Give you nutritional or supplement advice</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalTraining;
