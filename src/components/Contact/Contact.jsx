import React from "react";
import styles from "./Contact.module.css";
import linkedinImg from "../../../assets/skills/linkedin.jpg";
import githubImg from "./../../../assets/skills/github.jpg";
import emailImg from "./../../../assets/skills/email.jpg";
import phoneImg from "./../../../assets/skills/phone.jpg";

const contactDetails = {
  linkedin: "https://www.linkedin.com/in/harshitha-venkatesh",
  github: "https://github.com/harshitha-venkatesh-2204",
  email: "mailto:harshithavenkatesh2204@gmail.com",
  phone: "+1 412-512-2766" 
};

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <div className={styles.header}>
        <p className={styles.title}>Contact<span> Details</span></p>
      </div>
      <div className={styles.content}>
        <ul className={styles.contactList}>
          <li className={styles.contactItem}>
            <a href={contactDetails.linkedin} className={styles.contactLink} target="_blank" rel="noopener noreferrer">
              <img src={linkedinImg} alt="LinkedIn" className={styles.icon} />
              LinkedIn
            </a>
          </li>
          <li className={styles.contactItem}>
            <a href={contactDetails.github} className={styles.contactLink} target="_blank" rel="noopener noreferrer">
              <img src={githubImg} alt="GitHub" className={styles.icon} />
              GitHub
            </a>
          </li>
          <li className={styles.contactItem}>
            <a href={contactDetails.email} className={styles.contactLink}>
              <img src={emailImg} alt="Email" className={styles.icon} />
              Email
            </a>
          </li>
          <li className={styles.contactItem}>
            <div className={styles.contactLink}>
              <img src={phoneImg} alt="Phone" className={styles.icon} />
              <span>{contactDetails.phone}</span>
            </div>
          </li>
        </ul>
      </div>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Harshitha Venkatesh. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
