import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// รูปโปรเจค
import skooldio from "@/public/skooldio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Skooldio WDB #1",
    location: "Bangkok, Thailand",
    description:
      "Learn What Front-End Developer needs to know. I graduated after 4 months of studying at Skooldio.",
    icon: React.createElement(LuGraduationCap),
    // icon: <LuGraduationCap />
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "E-commerce Project",
    description:
      "This is an E-commerce Website group project from Skooldio Web Development Bootcamp#1.",
    tags: ["React", "shadcn/ui", "Tailwind"],
    imageUrl: skooldio, //import img
    githubUrl: "https://github.com/siwakorn-chantawat/m4-project-sandbox",
    demoUrl: "https://wdb-skooldio-project-tawny.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;
