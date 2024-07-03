import React from "react";
import { LuGraduationCap } from "react-icons/lu";

// รูปโปรเจค
import skooldio from "@/public/skooldio.png";
import doctorqclinic from "@/public/doctorqclinic.png";
import { MdWorkOutline } from "react-icons/md";

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
    title: "Frontend Developer",
    location: "Bangkok, Thailand",
    description: "Working as a Freelancer",
    icon: React.createElement(MdWorkOutline),
    date: "2024 - Now",
  },
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
    tags: ["React", "Shadcn/UI", "Tailwind"],
    imageUrl: skooldio, //import img
    githubUrl: "https://github.com/siwakorn-chantawat/m4-project-sandbox",
    demoUrl: "https://wdb-skooldio-project-tawny.vercel.app/",
  },
  {
    title: "Doctor Q Clinic",
    description:
      "A static website. This represents my work as a freelancer, currently undergoing development to meet specific customer requirements.",
    tags: ["Next 14", "Tailwind", "Shadcn/UI"],
    imageUrl: doctorqclinic,
    githubUrl: "https://github.com/siwakorn-chantawat/doctorq",
    demoUrl: "https://doctorq.vercel.app/",
  },
  // {
  //   title: "Frontend Mentor #1",

  // }
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
  "Node.js",
  "Express.js",
  "MongoDB",
] as const;
