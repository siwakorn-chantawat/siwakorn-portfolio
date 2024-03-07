"use client";

import React from "react";
import { SectionHeading } from "./Section-heading";
import { projectsData } from "@/lib/data";
import { Project } from "./Project";
import { useSectionInView } from "@/lib/hook";

export const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} className="scroll-mt-28 mb-28 sm:mb-40" id="projects">
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
