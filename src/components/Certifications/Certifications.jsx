import React, { useEffect, useState } from "react";
import styles from "./Certifications.module.css";
import { getImageUrl } from "../../utils";
import certificationsData from "../../data/certifications.json"; // Ensure this path is correct

export const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    // Check the data structure in the console
    console.log(certificationsData.certifications);
    // Ensure the data is an array
    if (Array.isArray(certificationsData.certifications)) {
      setCertifications(certificationsData.certifications);
    } else {
      console.error("Certifications data is not an array");
    }
  }, []);

  return (
    <section className={styles.container} id="certifications">
      <p className={styles.title}>Certifi<span>cations</span></p>
      <div className={styles.content}>
        <ul className={styles.certificationsList}>
          {Array.isArray(certifications) && certifications.map((cert) => (
            <li key={cert.credentialId} className={styles.certificationItem}>
              <img
                src={getImageUrl(cert.logo)}
                alt={`${cert.title} logo`}
                className={styles.certificationIcon}
              />
              <a
                href={cert.showCredential}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certificationLink}
              >
                {cert.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
