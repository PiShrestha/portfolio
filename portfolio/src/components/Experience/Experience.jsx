import React from "react";
import styles from "./Experience.module.css";
import history from "../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <ul className={styles.history}>
        {history.map((historyItem, id) => (
          <li key={id} className={styles.historyItem}>
            <div className={styles.historyHeader}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
                aria-label={`${historyItem.organisation} Logo`}
              />
              <h3>
                <span className={styles.position}>{historyItem.role}</span>,{" "}
                <span className={styles.company}>
                  {historyItem.organisation}
                </span>
              </h3>
            </div>
            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
            <ul>
              {historyItem.experiences.map((experience, expId) => (
                <li key={`${id}-${expId}`}>{experience}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
