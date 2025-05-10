import React from "react";
import styles from "./Experience.module.css";
import history from "../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.timeline}>
        {history.map((historyItem, id) => (
          <div
            key={id}
            className={`${styles.timelineItem} ${
              id % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.historyImageContainer}>
            <img
                src={getImageUrl(historyItem.imageSrc)}
                className={styles.historyImage}
                alt={`${historyItem.organisation} Logo`}
              />  
            </div>
            <div className={styles.historyContent}>
              <div className={styles.historyHeader}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                className={styles.historyImageMobile}
                  alt={`${historyItem.organisation} Logo`}
                /> 
              <h3>
                <span className={styles.position}>{historyItem.role}</span>
                {" "}
                <span style={{ fontWeight: 400, fontStyle: "normal" }}>@</span>
                {" "}
                <span className={styles.company}>{historyItem.organisation}</span>
              </h3>
              </div>
              <p className={styles.date}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <img
                    src={getImageUrl("history/date.png")}
                    alt="Calendar"
                    width={18}
                    height={18}
                    style={{ marginRight: "4px", verticalAlign: "middle" }}
                  />
                  {`${historyItem.startDate} - ${historyItem.endDate}`}
                </span>
              </p>
              {/* <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p> */}
              <ul>
                {historyItem.experiences.map((experience, expId) => (
                  <li key={`${id}-${expId}`}>{experience}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};