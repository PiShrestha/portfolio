import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <ul className={styles.skills}>
          {skills.map((skill, idx) => (
            <li key={idx} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>

        <p className={styles.description}>{description}</p>

        <div className={styles.links}>
          {/* GitHub icon only */}
          <a href={source} target="_blank" rel="noopener noreferrer">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="GitHub icon"
            />
          </a>
          {/* Source link */}
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};
