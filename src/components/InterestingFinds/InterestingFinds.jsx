import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import styles from "./InterestingFinds.module.css";
import finds from "../data/finds.json";

const Latex = ({ math, displayMode = true }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      katex.render(math, ref.current, {
        displayMode,
        throwOnError: false,
      });
    }
  }, [math, displayMode]);
  return <span ref={ref} />;
};

const InlineLatex = ({ text }) => {
  const parts = text.split(/(\$[^$]+\$)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("$") && part.endsWith("$")) {
          return <Latex key={i} math={part.slice(1, -1)} displayMode={false} />;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
};

export const InterestingFinds = () => {
  return (
    <section className={styles.container} id="finds">
      <h2 className={styles.title}>Interesting Finds</h2>
      <p className={styles.subtitle}>ideas that caught my attention.</p>
      <ol className={styles.findsList}>
        {finds.map((find, idx) => (
          <li key={idx} className={styles.findItem}>
            <span className={styles.factText}>
              <InlineLatex text={find.description} />
            </span>
            <span className={styles.equation}>
              <Latex math={find.latex} />
            </span>
            {find.citation && (
              <span className={styles.citationBlock}>
                <a
                  className={styles.citation}
                  href={find.citation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [{idx + 1}] {find.citation.text}
                </a>
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};
