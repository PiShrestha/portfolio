import styles from "./Movies.module.css";
import movies from "../data/movies.json";
import { getImageUrl } from "../../utils";

export const Movies = () => {
    return (
        <section className={styles.container} id="movies">
            <h2 className={styles.title}>Movies I Love</h2>
            <p className={styles.subtitle}>
                Films that shaped how I think about technology, storytelling, and life.
            </p>
            <div className={styles.moviesList}>
                {movies.map((movie, idx) => (
                    <article key={idx} className={styles.movieCard}>
                        <div className={styles.posterContainer}>
                            {movie.poster ? (
                                <img
                                    src={getImageUrl(movie.poster)}
                                    alt={`${movie.title} poster`}
                                    className={styles.poster}
                                />
                            ) : (
                                <div className={styles.posterPlaceholder}>
                                    <span>🎬</span>
                                </div>
                            )}
                        </div>
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <h3 className={styles.movieTitle}>{movie.title}</h3>
                                {movie.rating && (
                                    <span className={styles.rating}>{movie.rating}/10</span>
                                )}
                            </div>
                            <p className={styles.reason}>{movie.reason}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
