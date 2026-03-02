import { useState, useMemo } from "react";
import styles from "./Movies.module.css";
import movies from "../data/movies.json";
import { getImageUrl } from "../../utils";

const ListIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);

const GridIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const SortArrow = ({ direction }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transform: direction === "desc" ? "rotate(180deg)" : "none",
      transition: "transform 0.2s",
    }}
  >
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

export const Movies = () => {
  const [view, setView] = useState("list");
  const [sortBy, setSortBy] = useState("rating");
  const [sortDir, setSortDir] = useState("desc");

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(field);
      setSortDir(field === "rating" ? "desc" : "asc");
    }
  };

  const sorted = useMemo(() => {
    const copy = [...movies];
    copy.sort((a, b) => {
      let cmp;
      if (sortBy === "name") {
        cmp = a.title.localeCompare(b.title);
      } else {
        cmp = a.rating - b.rating;
      }
      return sortDir === "asc" ? cmp : -cmp;
    });
    return copy;
  }, [sortBy, sortDir]);

  return (
    <section className={styles.container} id="movies">
      <h2 className={styles.title}>What I Watch</h2>
      <p className={styles.subtitle}>
        Films that shaped how I think about technology, storytelling, and life.
      </p>

      <div className={styles.toolbar}>
        <div className={styles.sortControls}>
          <span className={styles.sortLabel}>Sort by</span>
          <button
            className={`${styles.sortBtn} ${sortBy === "rating" ? styles.sortBtnActive : ""}`}
            onClick={() => handleSort("rating")}
          >
            Rating {sortBy === "rating" && <SortArrow direction={sortDir} />}
          </button>
          <button
            className={`${styles.sortBtn} ${sortBy === "name" ? styles.sortBtnActive : ""}`}
            onClick={() => handleSort("name")}
          >
            Name {sortBy === "name" && <SortArrow direction={sortDir} />}
          </button>
        </div>
        <div className={styles.viewToggle}>
          <button
            className={`${styles.viewBtn} ${view === "list" ? styles.viewBtnActive : ""}`}
            onClick={() => setView("list")}
            aria-label="List view"
          >
            <ListIcon />
          </button>
          <button
            className={`${styles.viewBtn} ${view === "grid" ? styles.viewBtnActive : ""}`}
            onClick={() => setView("grid")}
            aria-label="Grid view"
          >
            <GridIcon />
          </button>
        </div>
      </div>

      <div className={view === "list" ? styles.listView : styles.gridView}>
        {sorted.map((movie, idx) => (
          <article
            key={movie.title}
            className={view === "list" ? styles.listCard : styles.gridCard}
          >
            {view === "list" ? (
              <>
                <div className={styles.listPoster}>
                  {movie.poster ? (
                    <img
                      src={getImageUrl(movie.poster)}
                      alt={movie.title}
                      className={styles.poster}
                    />
                  ) : (
                    <div className={styles.posterPlaceholder}>
                      <span>🎬</span>
                    </div>
                  )}
                </div>
                <div className={styles.listContent}>
                  <div className={styles.titleRow}>
                    <span className={styles.rank}>#{idx + 1}</span>
                    <h3 className={styles.movieTitle}>{movie.title}</h3>
                  </div>
                  <div className={styles.meta}>
                    <span>{movie.year}</span>
                    <span>{movie.duration}</span>
                  </div>
                  <div className={styles.ratingRow}>
                    <span className={styles.star}>★</span>
                    <span className={styles.ratingValue}>{movie.rating}</span>
                  </div>
                  <p className={styles.reason}>{movie.reason}</p>
                </div>
              </>
            ) : (
              <>
                <span className={styles.gridRank}>#{idx + 1}</span>
                <div className={styles.gridPoster}>
                  {movie.poster ? (
                    <img
                      src={getImageUrl(movie.poster)}
                      alt={movie.title}
                      className={styles.poster}
                    />
                  ) : (
                    <div className={styles.posterPlaceholder}>
                      <span>🎬</span>
                    </div>
                  )}
                </div>
                <div className={styles.gridInfo}>
                  <div className={styles.gridRating}>
                    <span className={styles.star}>★</span>
                    <span className={styles.ratingValue}>{movie.rating}</span>
                  </div>
                  <h3 className={styles.gridTitle}>{movie.title}</h3>
                  <div className={styles.meta}>
                    <span>{movie.year}</span>
                    <span>{movie.duration}</span>
                  </div>
                </div>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
