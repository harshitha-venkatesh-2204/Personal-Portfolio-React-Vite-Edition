import React from "react";
import { Link } from "react-router-dom";
import styles from "./Publications.module.css";
import publications from "../../data/publications.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const Publications = () => {
  return (
    <section className={styles.container} id="publications">
      <div className={styles.header}>
        <p className={styles.title}>Public<span>ations</span></p>
      </div>
      <div className={styles.content}>
        <ul className={styles.publicationsList}>
          {publications.publications.map((pub, index) => (
            <li key={index} className={styles.publicationItem}>
              <div className={styles.publicationContent}>
                <div className={styles.squareBox}>
                  <a href={pub.link} className={styles.publicationTitle} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                </div>
                <div className={styles.squareBox}>
                  <p className={styles.publicationDescription}>{pub.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Publications;
