import React from "react";
import styles from "./About.module.css";
import { AiOutlineInstagram } from "react-icons/ai";

const About = () => {
  return (
    <div className={styles.about_container} id="about">
      <div className={styles.about_left}>
        <div className={styles.abt_leftcont}>
          <p className={styles.abt_header}>ABOUT ME</p>
          <p className={styles.abt_tag}>
            RUNNING COACH | MOTIVATION AND SUPPORT | CUSTOM TRAINING PLANS
          </p>
          <hr
            style={{
              width: "10%",
              height: "2px",
              backgroundColor: "red",
              textAlign: "left",
            }}
          />

          <p className={styles.abt_para}>
            Hi, My name is Aman Thukral and I started running about 8 years ago.
            I started with walking and then walking long distance and did a few
            sessions on a treadmill.
            <br />
            <br />
            For me, 8 years ago running 2km non-stop was something very
            challenging and my only aim was to finish running 2km without a
            break and then when I was able to do that I started enjoying
            challenging my body and mind to do more and overcoming mental and
            physical barriers.
            <br />
            <br />
            I fell in love with training to improve my speed and cross distance
            barriers.
            <br />
            <br />I recently did a 100km run. Having witnessed this journey of
            starting from scratch myself and following a properly structured
            training plan to improve I learned a lot about myself and helped
            many with my experience and started doing this full time.
          </p>
          <div className={styles.insta_icon}>
            {" "}
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram
                style={{
                  border: "1px solid",
                  borderRadius: "7px",
                  backgroundColor: "black",
                  color: "white",
                  marginTop: "12px",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
// <div className={styles.about_right}>
//         <div>
//           <img
//             src="https://i.ibb.co/PjhnK1H/Running-pic.jpg"
//             alt="Running Pic"
//           />
//         </div>
//         <div
//           style={{
//             fontWeight: "700",
//             fontSize: "20px",
//             marginTop: "2px",
//           }}
//         >
//           Satendra Singh
//         </div>
//       </div>
