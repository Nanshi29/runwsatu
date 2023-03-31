import React from "react";
import styles from "./RunnerGallery.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const RunnerGallery = () => {
  return (
    <div className={styles.rng_wrapper} id="gallery">
      <div className={styles.rng_header}>Runner's Gallery</div>
      <hr
        style={{
          width: "10%",
          height: "2px",
          backgroundColor: "red",
          color: "red",
          // textAlign: "right",
        }}
      />
      <p className={styles.rng_tagline}>
        These are my passionate clients who took a decision to Run With
        Satendra.
      </p>
      <div className={styles.crsl_container}>
        <Carousel
          className={styles.crsl_body}
          showIndicators={false}
          autoPlay
          infiniteLoop={true}
          showThumbs={false}
        >
          <div>
            <img
              src={require("../../assets/ss.jpg")}
              alt="img"
              width={100}
              height={600}
            />
          </div>
          <div>
            <img
              src={require("../../assets/sss.jpg")}
              alt="img"
              width={100}
              height={600}
            />
          </div>
          <div>
            <img
              src={require("../../assets/WhatsApp Image 2023-02-18 at 14.37.26.jpg")}
              alt="img"
              width={100}
              height={600}
            />
          </div>
          <div>
            <img
              src={require("../../assets/WhatsApp Image 2023-02-18 at 14.39.43.jpg")}
              alt="img"
              width={100}
              height={600}
            />
          </div>
          <div>
            <img
              src={require("../../assets/WhatsApp Image 2023-02-18 at 14.39.49.jpg")}
              alt="img"
              width={100}
              height={600}
            />
          </div>
          <div>
            <img
              src={require("../../assets/WhatsApp Image 2023-02-18 at 14.41.12.jpg")}
              alt="img"
              width={100}
              height={600}
            />
          </div>
          <div>
            <img
              src={require("../../assets/WhatsApp Image 2023-02-18 at 14.41.14.jpg")}
              alt="img"
              width={100}
              height={600}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default RunnerGallery;
