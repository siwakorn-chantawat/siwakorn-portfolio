import React from "react";
import { SectionHeading } from "./Section-heading";
import { projectsData } from "@/lib/data";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="scroll-mt-28" id="projects">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
