import React, { useEffect, useState } from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";
import skillsData from "../../data/skills.json";

export const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  return (
    <section className={styles.container} id="skills">
      <p className={styles.title}>Ski<span>lls</span></p>
      <div className={styles.content}>
        <ul className={styles.skillsList}>
          {skills.map((skill) => (
            <li key={skill.title} className={styles.skillItem}>
              <img
                src={getImageUrl(skill.imageSrc)}
                alt={`${skill.title} icon`}
                className={styles.skillIcon}
              />
              <div className={styles.skillText}>
                <p>{skill.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
