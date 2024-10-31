import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:pratikshr3stha@email.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <span className={styles.linkText}>Email</span>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/pishrestha">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <span className={styles.linkText}>LinkedIn</span>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.github.com/PiShrestha">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <span className={styles.linkText}>GitHub</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};
