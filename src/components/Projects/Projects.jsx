import React, { useEffect, useRef, useState } from 'react';
import projectsData from '../../data/projects.json';
import styles from './Projects.module.css'; 
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-solid-svg-icons';

export const Projects = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true); 

  const scroll = (direction) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === 'left' ? -containerRef.current.offsetWidth / 2 : containerRef.current.offsetWidth / 2,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className={styles['projects-section']}>
      <div className={`${styles['scroll-arrow']} ${styles['left']} ${!isVisible ? styles['hidden'] : ''}`} onClick={() => scroll('left')}>
        <i className="fas fa-chevron-left"></i>
      </div>
      <p className={styles.title}>Proj<span>ects</span></p>
      <div className={styles['projects-container']} ref={containerRef}>
        {projectsData.map((project, index) => (
          <div key={index} className={styles['project-card']}>
            <h6 className='title'>
              <a href={project.source} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h6>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <div className={`${styles['scroll-arrow']} ${styles['right']} ${!isVisible ? styles['hidden'] : ''}`} onClick={() => scroll('right')}>
        <i className="fas fa-chevron-right"></i>
      </div>
    </section>
  );
};
