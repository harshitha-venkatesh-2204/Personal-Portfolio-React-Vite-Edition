import React, { useEffect, useState } from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";
import skillsData from "../../data/skills.json";
import Parttime from "./Parttime";
import Publications from "./Publications";

export const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  return (
    <section className={styles.container} id="skills">
      <div className={styles.content}>
        <div>
          <p className={styles.title}>Technical Skills</p>
          <ul className={styles.skillsList}>
            {skills.map((skill) => (
              <li
                key={skill.title}
                className={styles.skillItem}
                data-tooltip={skill.title} // Add the tooltip text
              >
                <img
                  src={getImageUrl(skill.imageSrc)}
                  alt={`${skill.title} icon`}
                  className={styles.skillIcon}
                />
              </li>
            ))}
          </ul>
          <a href="https://www.linkedin.com/in/harshitha-venkatesh/details/certifications/" className={styles.yellowButton}>
            View Certifications
          </a>
        </div>
        {/* Third Card - Smaller */}
        <div className={styles.card2}>
          <ul className={styles.skillsList}>
          <Publications />
          <Parttime />
          </ul>
        </div>
      </div>
    </section>
  );
};
