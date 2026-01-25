import { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Pratik Shrestha
      </a>

      <button
        className={styles.menuBtn}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} />
      </button>

      <ul
        className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
        onClick={() => setMenuOpen(false)}
      >
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1XfGz_qHPNz3O9Z2GdzqQy57W10K7VPVw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeLink}
          >
            Resume
            <svg
              className={styles.externalIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15,3 21,3 21,9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};
