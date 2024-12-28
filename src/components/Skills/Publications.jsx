import React, { useEffect, useState } from "react";
import styles from "./Skills.module.css";  // Make sure to create a separate CSS module for Publications
import publicationsData from "../../data/publications.json";  // Import your JSON file

const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    setPublications(publicationsData.publications);  // Set publications data from JSON
  }, []);

  return (
    <ul className={styles.publicationsList}>
      {publications.map((publication, index) => (
        <li key={index} className={styles.publicationItem}>
          <a 
            href={publication.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.publicationLink}
          >
            <img
              src={publication.image}
              alt={`Logo of ${publication.journal}`}
              className={styles.publicationIcon}
            />
            <p className={styles.publicationTitle}>Publication: {publication.title}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Publications;
