"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

type ProjectProps = (typeof projectsData)[number];

export const Project = ({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  demoUrl,
}: ProjectProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group bg-gray-100 max-w-[42rem] 
    border border-black/5 overflow-hidden sm:pr-8 relative
    sm:h-[24rem] mb-3 sm:mb-8 last:mb-0 sm:even:pl-8
    hover:bg-gray-200 transition dark:text-white dark:bg-white/10"
    >
      <div
        className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 
      sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]"
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p
          className="mt-2 leading-relaxed
        text-gray-700 dark:text-white/70"
        >
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex  items-center mt-4 sm:justify-evenly sm:mt-8">
          <a
            className="bg-white flex px-6 py-4 text-gray-700  rounded-full
            hover:text-white transition cursor-pointer hover:bg-gray-700  dark:bg-black/30  dark:hover:bg-white/90 dark:text-white/90 dark:hover:text-black/80"
            href={demoUrl}
            target="_blank"
          >
            <span className="text-sm pr-1">Demo </span>
            <MdOpenInNew className="text-xl" />
          </a>
          <a
            className="bg-white flex px-6 py-4 text-gray-700 rounded-full
         hover:text-white transition cursor-pointer hover:bg-gray-700 mr-2 dark:bg-black/30 dark:hover:bg-white/90 dark:text-white/90 dark:hover:text-black/80"
            href={githubUrl}
            target="_blank"
          >
            <span className="text-sm pr-1">Code </span>
            <FaGithubSquare className="text-xl" />
          </a>
        </div>
      </div>

      <Image
        src={imageUrl}
        alt="My Project"
        quality={95}
        className="absolute top-8 -right-40 w-[28.25rem] 
        rounded-t-lg shadow-2xl hidden sm:block
        transition
        group-even:-right-[initial] 
        group-even:-left-40
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-hover:scale-[1.04]
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2 "
      />
    </motion.section>
  );
};
