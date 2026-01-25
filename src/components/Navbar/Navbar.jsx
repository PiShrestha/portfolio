import { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skill</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1XfGz_qHPNz3O9Z2GdzqQy57W10K7VPVw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <img
                src={getImageUrl("skills/export.png")}
                alt="external link"
                className={styles.externalIcon}
                width={16}
                height={16}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
