"use client";

import React from "react";
import Image from "next/image";
import siwakorn from "@/public/me.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hook";
import { useActiveSectionContext } from "@/context/active-section-context";
import { MdEmail } from "react-icons/md";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section ref={ref} id="home" className="scroll-mt-[100rem]">
      <div className="block items-center justify-center">
        <div className="flex items-center justify-center ">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src={siwakorn}
                alt="Siwakorn image"
                quality="95"
                priority={true}
                className="object-cover h-64 w-64 rounded-full border-[0.35] border-white shadow-xl"
              />
            </motion.div>
            <motion.span
              className="absolute text-2xl bottom-0 right-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center m-6"
        >
          <p className="font-medium text-lg leading-[1.5] text-gray-500 dark:text-white/50">
            Hello, I&apos;m
          </p>
          <h1 className="font-extrabold text-2xl min-[390px]:text-3xl min-[580px]:text-4xl dark:text-white">
            Siwakorn Chantawat
          </h1>
          <h3 className="font-bold text-xl sm:text-2xl  text-gray-500 dark:text-white/50">
            Frontend Developer
          </h3>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="m-10 flex flex-col items-center justify-center gap-2 px-4 sm:flex-row "
      >
        <a
          href="mailto:siwakorn.chantawat@gmail.com"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full text-lg font-medium
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition  dark:bg-white/10 dark:text-white"
          // onClick={() => {
          //   setActiveSection("Contact");
          //   setTimeOfLastClick(Date.now());
          // }}
        >
          Email Me
          <MdEmail className="opacity-70 group-hover:translate-x-1 transition" />
        </a>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full 
        outline-none focus:scale-110 hover:scale-110 active:scale-105 transition
        cursor-pointer borderBlack dark:bg-white/10 dark:text-white "
          href="/siwakorn-chantawat-cv.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition " />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
          outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition
          cursor-pointer borderBlack max-[639px]:px-20 dark:bg-white/10 dark:text-white "
          href="https://linkedin.com/in/siwakorn-chantawat"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full
        outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition
        cursor-pointer borderBlack max-[639px]:px-20 dark:bg-white/10 dark:text-white "
          href="https://github.com/siwakorn-chantawat"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
