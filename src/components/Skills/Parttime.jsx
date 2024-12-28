import React, { useEffect, useState } from "react";
import styles from "./Skills.module.css";
import parttimeData from "../../data/parttime.json";


const Parttime = () => {
  const [parttimeJobs, setParttimeJobs] = useState([]);

  useEffect(() => {
    setParttimeJobs(parttimeData);
  }, []);

  return (
          <ul className={styles.jobsList}>
            {parttimeJobs.map((job, index) => (
              <li key={index} className={styles.jobItem}>
                <img
                  src={job.imageSrc}
                  alt={`${job.role} at ${job.organisation}`}
                  className={styles.jobIcon}
                />
                <div className={styles.jobDetails}>
                  <p className={styles.jobTitle}>{job.role}</p>
                  <p className={styles.jobOrganisation}>{job.organisation}</p>
                  <ul className={styles.jobExperiences}>
                    {job.experiences.map((experience, i) => (
                      <li key={i}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
  );
};

export default Parttime;
