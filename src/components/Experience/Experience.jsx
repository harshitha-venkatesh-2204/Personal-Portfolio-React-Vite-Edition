import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.header}>
      </div>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <div className={styles.historyItemContent}>
                <div className={styles.projectImg}>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                  />
                </div>
                <div className={styles.historyItemDetails}>
                  <p1 className={styles.role}>{`${historyItem.role}`}</p1><br/>
                  <p2 className={styles.date}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p2>
                    {historyItem.experiences.map((experience, idx) => (
                      <p className={styles.description} key={idx}>{experience}</p>
                    ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
