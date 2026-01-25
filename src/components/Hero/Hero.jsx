import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pratik</h1>
        <p className={styles.tagline}>CS + Math @ UVA</p>
        <p className={styles.description}>
          Building at the intersection of ML, trading systems, and cryptography.
        </p>
        <a href="mailto:pratikshr3stha@gmail.com" className={styles.contactBtn}>
          Get in Touch
        </a>
      </div>
      <div className={styles.heroImgContainer}>
        <img
          src={getImageUrl("hero/pratik.png")}
          alt="Pratik Shrestha"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
