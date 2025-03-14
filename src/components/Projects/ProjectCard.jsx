import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      {/* Uncomment the image if needed */}
      {/* <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      /> */}
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.description}>
        {Array.isArray(description) ? (
          description.map((point, index) => <li key={index}>{point}</li>)
        ) : (
          <li>{description}</li> // Handle single-string descriptions
        )}
      </ul>
      {/*<ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>*/}
      {/*<div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>*/}
    </div>
  );
};
