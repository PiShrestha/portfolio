/* eslint-disable react/prop-types */
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, github, devpost, live, doc, featured },
}) => {
  return (
    <div className={`${styles.container} ${featured ? styles.featured : ''}`}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`${title} screenshot`}
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
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="View on GitHub"
            >
              <img
                src={getImageUrl("contact/githubIcon.png")}
                alt="GitHub"
                className={styles.linkIcon}
              />
            </a>
          )}
          {devpost && (
            <a
              href={devpost}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="View on Devpost"
            >
              <svg
                className={styles.linkIconSvg}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861c.009-2.569-1.096-3.853-3.767-3.853h-1.336z" />
              </svg>
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="View live site"
            >
              <svg
                className={styles.linkIconSvg}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15,3 21,3 21,9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
          {doc && (
            <a
              href={doc}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="View documentation/report"
            >
              <svg
                className={styles.linkIconSvg}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
