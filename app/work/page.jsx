"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// PROJECT DATA
const projects = [
  {
    num: "01",
    category: "Salam_with-Islam : Frontend",
    title: "Salam with Islam",
    description:
      "An educational website designed to promote Islamic knowledge and understanding. Built as part of my Web Development course, it delivers structured content with responsive UI and accessibility in mind.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://md-rifat-islam.github.io/Salam_with-Islam/",
    github: "https://github.com/Md-Rifat-Islam/Salam_with-Islam",
  },
  {
    num: "02",
    category: "rifat-portfolio : Frontend",
    title: "Personal Portfolio",
    description:
      "A sleek portfolio showcasing my projects, skills, and experience. Developed with Next.js and React, featuring smooth animations, responsive design, and SEO optimization.",
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://rifat-portfolio-2jvt.vercel.app/",
    github: "https://github.com/Md-Rifat-Islam/rifat-portfolio",
  },
  {
    num: "03",
    category: "Health-AI : Flutter",
    title: "Health AI App",
    description:
      "An AI-powered healthcare app offering personal health tracking, chatbot consultation, and SOS alerts. Integrated Azure AI, Firebase backend, and Flutter’s cross-platform design.",
    stack: [
      { name: "Flutter" },
      { name: "Microsoft Azure" },
      { name: "Firebase" },
      { name: "MVC" },
      { name: "Dart" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://lnkd.in/gmRtcERr",
    github: "https://github.com/Md-Rifat-Islam/Health-AI",
  },
  {
    num: "04",
    category: "Diabetes Chatbot : ML",
    title: "Diabetes Pre-screening Chatbot",
    description:
      "An intelligent chatbot integrated with IoT sensors to assist diabetic patients. Gathers lifestyle data and vitals, providing an initial health assessment for medical professionals.",
    stack: [
      { name: "Machine Learning" },
      { name: "TensorFlow" },
      { name: "Raspberry Pi" },
      { name: "Hardware Sensors" },
    ],
    image: "/assets/work/thumb4.png",
    github:
      "https://github.com/Md-Rifat-Islam/Diabetes_Patient_Pre-screening_Chatbot",
  },
  {
    num: "05",
    category: "T5 & SpaCy : ML",
    title: "YouTube News Summarizer",
    description:
      "A dual pipeline project summarizing YouTube news videos via Abstractive (T5) and Extractive (SpaCy) models, evaluated using ROUGE metrics for text quality and accuracy.",
    stack: [
      { name: "T5" },
      { name: "SpaCy" },
      { name: "ROUGE Score" },
      { name: "NLP" },
    ],
    image: "/assets/work/no_thumb.png",
    github:
      "https://github.com/Md-Rifat-Islam/YouTube-News-Video-Textual-Summarization-using-T5-and-SpaCy",
  },
  {
    num: "06",
    category: "To-Do & Sensor : Flutter",
    title: "Productivity + Sensor Tracker App",
    description:
      "A Flutter-based mobile app combining a To-Do List with real-time sensor data tracking. Built with clean architecture, persistent storage, and responsive layouts.",
    stack: [
      { name: "Flutter" },
      { name: "Sensors API" },
      { name: "SQLite" },
    ],
    image: "/assets/work/thumb6.png",
    github:
      "https://github.com/Md-Rifat-Islam/To-Do-List-and-Sensor-Tracking-App-Flutter-",
  },
  {
    num: "07",
    category: "TCB Goods System : Database",
    title: "TCB Goods Distribution System",
    description:
      "An Oracle-based distribution management system to digitize TCB’s essential goods supply chain, improving transparency and efficiency.",
    stack: [
      { name: "Oracle" },
      { name: "SQL" },
      { name: "HTML" },
      { name: "Bootstrap" },
    ],
    image: "/assets/work/no_thumb.png",
    github: "https://github.com/Md-Rifat-Islam/TCB-Goods-Distribution-System",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" },
      }}
      className="min-h-[90vh] flex flex-col justify-center py-16 bg-gradient-to-b from-[#0f172a] to-[#1e293b]"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col xl:flex-row items-start gap-12 xl:gap-16">
          {/* Project Info */}
          <div className="w-full xl:w-1/2 flex flex-col gap-6">
            <div className="text-7xl font-extrabold text-accent/20 select-none">
              {project.num}
            </div>
            <h2 className="text-4xl font-bold text-white leading-tight">
              {project.title}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.map((item, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 bg-accent/10 text-accent rounded-full"
                >
                  {item.name}
                </span>
              ))}
            </div>
            <div className="border-b border-white/10 my-4"></div>

            {/* Buttons */}
            <div className="flex gap-4">
              {project.live && (
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-accent/10 hover:bg-accent transition-all flex justify-center items-center group">
                        <BsArrowUpRight className="text-2xl text-accent group-hover:text-white" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Demo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}
              {project.github && (
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-accent/10 hover:bg-accent transition-all flex justify-center items-center group">
                        <BsGithub className="text-2xl text-accent group-hover:text-white" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}
            </div>
          </div>

          {/* Swiper */}
          <div className="w-full xl:w-1/2 relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] rounded-2xl overflow-hidden shadow-xl"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide
                  key={index}
                  className="relative group flex justify-center items-center bg-black/10"
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" />
                  <Image
                    src={project.image}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                    alt={`Thumbnail of ${project.title}`}
                  />
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="absolute right-4 bottom-4 z-20 flex gap-2"
                btnStyles="bg-accent hover:bg-accent/80 text-white text-lg w-[44px] h-[44px] flex justify-center items-center rounded-full shadow-lg transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
