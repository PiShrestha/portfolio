import styles from "./InterestingFinds.module.css";
import finds from "../data/finds.json";
import { getImageUrl } from "../../utils";

export const InterestingFinds = () => {
    return (
        <section className={styles.container} id="finds">
            <h2 className={styles.title}>Interesting Finds</h2>
            <p className={styles.subtitle}>
                ideas that caught my attention.
            </p>
            {/* <div className={styles.findsList}>
                {finds.map((find, idx) => (
                    <article key={idx} className={styles.findCard}>
                        <div className={styles.imageContainer}>
                            {find.image ? (
                                <img
                                    src={getImageUrl(find.image)}
                                    alt={find.title}
                                    className={styles.image}
                                />
                            ) : (
                                <div className={styles.imagePlaceholder}>
                                    <span>📐</span>
                                </div>
                            )}
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.findTitle}>
                                {find.link ? (
                                    <a href={find.link} target="_blank" rel="noopener noreferrer">
                                        {find.title}
                                    </a>
                                ) : (
                                    find.title
                                )}
                            </h3>
                            <span className={styles.date}>{find.date}</span>
                            <p className={styles.description}>{find.description}</p>
                        </div>
                    </article>
                ))}
            </div> */}
        </section>
    );
};
