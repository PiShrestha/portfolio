import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>At a Glance</h2>
      <div className={styles.statsGrid}>
        <div className={styles.stat}>
          <span className={styles.number}>400M+</span>
          <span className={styles.label}>Records Processed Weekly</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.number}>51%</span>
          <span className={styles.label}>Runtime Reduction</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.number}>50+</span>
          <span className={styles.label}>Clients Served</span>
        </div>
      </div>
      <div className={styles.highlights}>
        <div className={styles.highlight}>
          <span className={styles.highlightLabel}>Focus Areas</span>
          <span className={styles.highlightValue}>System Design · Data Engineering · Fintech</span>
        </div>
      </div>
    </section>
  );
};
