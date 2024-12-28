import { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("ABOUT");

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <h1>Harshitha Venkatesh</h1>
        <ul className={styles.navbarList}>
          <li
            className={styles.navbarItem}
            onClick={() => handleClick("ABOUT")}
          >
            <a
              href="#"
              className={`${styles.navbarLink} ${
                activeSection === "ABOUT" ? styles.active : ""
              }`}
            >
              ABOUT
            </a>
          </li>
          <li
            className={styles.navbarItem}
            onClick={() => handleClick("EXPERIENCE")}
          >
            <a
              href="#experience"
              className={`${styles.navbarLink} ${
                activeSection === "EXPERIENCE" ? styles.active : ""
              }`}
            >
              EXPERIENCE
            </a>
          </li>
          <li
            className={styles.navbarItem}
            onClick={() => handleClick("PROJECTS")}
          >
            <a
              href="#projects"
              className={`${styles.navbarLink} ${
                activeSection === "PROJECTS" ? styles.active : ""
              }`}
            >
              PROJECTS
            </a>
          </li>
          <li
            className={styles.navbarItem}
            onClick={() => handleClick("HIGHLIGHTS")}
          >
            <a
              href="#skills"
              className={`${styles.navbarLink} ${
                activeSection === "HIGHLIGHTS" ? styles.active : ""
              }`}
            >
              HIGHLIGHTS
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
