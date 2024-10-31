import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="About Image"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/soccer.png")} alt="Soccer" className={styles.listIcon} />
                        <div className={styles.aboutItemText}>
                            <h3 className={styles.aboutHeading}>Sports:</h3>
                            <p>I love playing and watching sports. My favorite sport is soccer.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cavs.png")} alt="UVA" className={styles.listIcon} />
                        <div className={styles.aboutItemText}>
                            <h3 className={styles.aboutHeading}>Education:</h3>
                            <p>I am currently pursuing a Bachelor's degree in Computer Science at the University of Virginia.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/stocks.png")} alt="Stocks" className={styles.listIcon} />
                        <div className={styles.aboutItemText}>
                            <h3 className={styles.aboutHeading}>Hobbies:</h3>
                            <p>During my free time, I like to trade stocks and cryptocurrencies.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}