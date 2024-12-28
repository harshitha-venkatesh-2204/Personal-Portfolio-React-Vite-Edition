import React from "react";
import styles from "./Hero.module.css";
import Pic from "../../../assets/Pic.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
  return (
    <section className={styles.container} id="#">
      <div className={styles.content}>
        <h1 className={styles.greeting}>Hello,</h1>
        <h1 className={styles.name}>I'm Harshitha!</h1>
        <p className={styles.description}>
          I recently graduated with a degree in Information Science from the University of Pittsburgh, and I've gained valuable experience in data engineering, analytics, and software development along the way. During my two years at Accenture, I worked on a range of projects involving data integration pipelines, where I focused on optimizing data processes and creating interactive dashboards to empower teams with actionable insights for better, data-driven decision-making. I'm excited to use my skills in data engineering and analysis to solve real-world problems and contribute to meaningful projects in the tech industry.
        </p>
        <a href="https://www.linkedin.com/in/harshitha-venkatesh" className={styles.linkedinBtn}>
          Connect on LinkedIn
        </a>
      </div>
      <div className={styles.imageAndContactContainer}>
        <div className={styles.imageContainer}>
          <img
            src={Pic}
            alt="Profile"
            className={styles.heroImg}
          />
        </div>
        <div className={styles.contactInfoContainer}>
          <div className={styles.contactInfo}>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Email : hav41@pitt.edu
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} /> Phone : 4125122766
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
