import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useTheme } from "../../context/ThemeContext";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isMainPage = location.pathname === "/";

  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} to="/">
        Pratik Shrestha
      </Link>

      <div className={styles.navContent}>
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          {isMainPage ? (
            <>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </>
          ) : (
            <>
              <li><Link to="/#experience">Experience</Link></li>
              <li><Link to="/#projects">Projects</Link></li>
            </>
          )}
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
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15,3 21,3 21,9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </li>
          {isMainPage ? (
            <li><a href="#contact">Contact</a></li>
          ) : (
            <li><Link to="/#contact">Contact</Link></li>
          )}
          <li>
            <Link to="/misc" className={location.pathname === '/misc' ? styles.activeLink : ''}>
              Miscellaneous
            </Link>
          </li>
        </ul>

        {/* Theme Toggle - far right */}
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>

        {/* Hamburger Menu Button */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} />
        </button>
      </div>
    </nav>
  );
};
