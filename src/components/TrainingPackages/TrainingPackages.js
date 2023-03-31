import React from "react";
import styles from "./TrainingPackages.module.css";
import { BsArrowRight } from "react-icons/bs";
const TrainingPackages = () => {
  return (
    <div className={styles.pkg_wrapper} id="training">
      <div className={styles.pkg_header}>TRAINING PACKAGES</div>
      <hr
        style={{
          width: "10%",
          height: "2px",
          backgroundColor: "red",
          // textAlign: "right",
        }}
      />
      <p className={styles.pkg_tagline}>
        I am currently in offering following personal care packages.
      </p>
      <div className={styles.pkg_container}>
        <div className={styles.pkg_box}>
          <p className={styles.box_header}>START YOUR JOURNEY NOW! @ RS. 399</p>
          <p className={styles.box_tag}>
            1 Running Consultation to answer all your inquiries or to get you
            started
          </p>
          <div>
            <div className={styles.box_list}>
              <p>
                Telephonic Running Consultation with Coach Satendra Duration -
                15 to 20 minutes
              </p>
              <hr />
              <p>Analysis of Your 5 Best Running/Walking Sessions or Races</p>
              <hr />
              <p>General Tips to increase Speed and Stamina</p>
              <hr />
              <p>Information about type of Running Sessions</p>
              <hr />
              <p>
                Customized Running Plan for the next 3 Days Post Running
                Consultation
              </p>
            </div>
          </div>
          <div className={styles.pkg_register}>
            <a
              href="http://wa.link/u5l5y7"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Register Now <BsArrowRight />
            </a>
          </div>
        </div>
        <div className={styles.pkg_box}>
          <p className={styles.box_header}>START YOUR JOURNEY NOW! @ RS. 399</p>
          <p className={styles.box_tag}>
            1 Running Consultation to answer all your inquiries or to get you
            started
          </p>
          <div>
            <div className={styles.box_list}>
              <p>
                Telephonic Running Consultation with Coach Satendra Duration -
                15 to 20 minutes
              </p>
              <hr />
              <p>Quick Evaluation of your Current Fitness Level</p>
              <hr />
              <p>
                Explanation of terms used by runners such as Average Pace,
                Moving Time, Elapsed Time, Vo2 Max, HR, Stride Length, Cadence,
                Elevation Gain/Loss, PB
              </p>
              <hr />
              <p>General Tips to increase Speed and Stamina</p>
              <hr />
              <p>Information about type of Running Sessions</p>
              <hr />
              <p>
                Customized Running Plan for the next 5 Days Post Running
                Consultation
              </p>
            </div>
          </div>
          <div className={styles.pkg_register}>
            <a
              href="http://wa.link/u5l5y7"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Register Now <BsArrowRight />
            </a>
          </div>
        </div>
        <div className={styles.pkg_box}>
          <p className={styles.box_header}>START YOUR JOURNEY NOW! @ RS. 399</p>
          <p className={styles.box_tag}>
            1 Running Consultation to answer all your inquiries or to get you
            started
          </p>
          <div>
            <div className={styles.box_list}>
              <p>
                Long Telephonic Running Consultation with Coach Satendra
                Duration - 25 to 30 Minutes
              </p>
              <hr />
              <p>Quick Evaluation of your Current Fitness Level</p>
              <hr />
              <p>
                Critical Analysis and Detailed Study of your 5 Best Running/
                Walking Sessions or Races
              </p>
              <hr />
              <p>General Tips to Increase Speed and Stamina</p>
              <hr />
              <p>Information about different types of Running activities.</p>
              <hr />
              <p>
                Information of what factors attribute to increase or decrease in
                heart rate.
              </p>
              <hr />
              <p>
                Customized Running Plan for the next 10 Days Post Running
                Consultation
              </p>
            </div>
          </div>
          <div className={styles.pkg_register}>
            <a
              href="http://wa.link/u5l5y7"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Register Now <BsArrowRight />
            </a>
          </div>
        </div>
        <div className={styles.pkg_box}>
          <p className={styles.box_header}>START YOUR JOURNEY NOW! @ RS. 399</p>
          <p className={styles.box_tag}>
            1 Running Consultation to answer all your inquiries or to get you
            started
          </p>
          <div>
            <div className={styles.box_list}>
              <p>
                2 × Long Telephonic Running Consultation with Coach Aman
                Duration - 25 to 30 Minutes
              </p>
              <hr />
              <p>Quick Evaluation of your Current Fitness Level</p>
              <hr />
              <p>
                Critical Analysis and Detailed Study of your 5 Best Running/
                Walking Sessions or Races
              </p>
              <hr />
              <p>General Tips to Increase Speed and Stamina</p>
              <hr />
              <p>Information about different types of Running activities.</p>
              <hr />
              <p>
                Information of what factors attribute to increase or decrease in
                heart rate.
              </p>
              <hr />
              <p>
                Customized Running Plan for the next 30 days post our
                Consultation.
              </p>
              <hr />
              <p>Review of whole months activities on 30th day</p>
              <hr />
            </div>
          </div>
          <div className={styles.pkg_register}>
            <a
              href="http://wa.link/u5l5y7"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Register Now <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.pkg_btn}>
        <button>VIEW ALL PACKAGES</button>
      </div>
    </div>
  );
};

export default TrainingPackages;
