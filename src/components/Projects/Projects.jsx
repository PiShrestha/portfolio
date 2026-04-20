import { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../data/projects.js";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Show featured projects first, then others
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  const visibleProjects = showAll
    ? [...featuredProjects, ...otherProjects]
    : featuredProjects;

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <p className={styles.subtitle}>
        Side projects and hackathon builds that showcase what I care about.
      </p>
      <div className={styles.projects}>
        {visibleProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      {otherProjects.length > 0 && (
        <button
          className={styles.toggleButton}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : `See ${otherProjects.length} More`}
        </button>
      )}
    </section>
  );
};
