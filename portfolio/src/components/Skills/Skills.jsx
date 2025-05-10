import React from "react";
import styles from "./Skills.module.css";
import skills from "../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skills}>
        {skills.map((skill, id) => (
          <div className={styles.skill} key={id}>
            <div className={styles.skillImageContainer}>
              <img
                src={getImageUrl(skill.imageSrc)}
                alt={`${skill.title} icon`}
                aria-label={skill.title}
              />
            </div>
            <p className={styles.skillTitle}>
              {skill.title}
              {skill.certificationUrl && (
                <a
                  href={skill.certificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certLinkBtn}
                  aria-label={`View ${skill.title} certification`}
                >
                  <img
                    src={getImageUrl("skills/export.png")}
                    alt="External link"
                    width={16}
                    height={16}
                    style={{ display: "inline", verticalAlign: "middle" }}
                  />
                </a>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
