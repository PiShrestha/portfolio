import React, { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {visibleProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      {projects.length > 3 && (
        <button
          className={styles.toggleButton}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "See Less" : "See More"}
        </button>
      )}
    </section>
  );
};