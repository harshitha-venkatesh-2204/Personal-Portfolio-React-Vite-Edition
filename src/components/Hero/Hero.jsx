import React from "react";
import styles from "./Hero.module.css";
import Pic from "../../../assets/Pic.jpg";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <p className={styles.title}>Ab<span>out</span></p>
        <p className={styles.description}>
        I am a graduate student majoring in Information Science at the University of Pittsburgh with a robust foundation in data analytics, machine learning, and software development. My two years of experience at Accenture have equipped me with advanced skills in data visualization and analytics solutions, with a focus on big data platforms, AI, and interactive dashboard creation. My academic background, coupled with hands-on projects in machine learning, IoT solutions, and complex data analysis, highlights my commitment to leveraging technology to address real-world challenges. I am eager to apply my expertise in data-driven decision-making and contribute to impactful projects while continuing to advance my career in data science.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={Pic}
        alt="Profile"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
