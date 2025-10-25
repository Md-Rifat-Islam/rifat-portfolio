"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiCplusplus,
  SiPostgresql,
  SiDjango,
  SiTensorflow,
  SiScikitlearn,
  SiOpenai,
  SiLangchain,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// ---------- ABOUT ----------
const about = {
  title: "About Me",
  description: `I'm Muhammad Rifat Islam — a Software Developer and AI Engineer passionate about building intelligent, scalable systems that make a real-world impact. 
  I specialize in AI/ML model development, full-stack web solutions (React, Next.js, Django), and Flutter-based cross-platform apps. 
  I’m also a published researcher and educator, driven by curiosity, clarity, and innovation.`,
  info: [
    { fieldName: "Name", fieldValue: "Muhammad Rifat Islam" },
    { fieldName: "Phone", fieldValue: "(+880) 1728-977294" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "Email", fieldValue: "muhammad.rifat.islam31@gmail.com" },
    { fieldName: "LinkedIn", fieldValue: "muhammad-rifat-islam-9ab376230" },
    { fieldName: "GitHub", fieldValue: "Md-Rifat-Islam" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Bangla, Arabic, Urdu" },
  ],
};

// ---------- EXPERIENCE ----------
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I’ve worked across AI research, web app development, and leadership — combining technical expertise with strategic execution to deliver real results.",
  items: [
    {
      company: "AIDE Private Limited",
      position: "App Developer (Part-Time)",
      duration: "Aug 2025 – Present",
    },
    {
      company: "Taxsense IT Limited",
      position: "Junior Software Developer",
      duration: "Jan 2025 – Jul 2025",
    },
    {
      company: "MADE EASY Limited",
      position: "Instructor & Executive Director",
      duration: "Apr 2024 – Present",
    },
    {
      company: "Military Institute of Science & Technology (MIST)",
      position: "AI Research Assistant (Project)",
      duration: "2023 – 2024",
    },
  ],
};

// ---------- EDUCATION ----------
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "My education in Computer Science & Engineering provided the foundation for AI, software engineering, and problem-solving that I apply in every project.",
  items: [
    {
      institution: "Military Institute of Science & Technology (MIST)",
      degree: "B.Sc. in Computer Science & Engineering",
      duration: "Jan 2020 – Apr 2024",
    },
    {
      institution: "New Govt. Degree College, Rajshahi",
      degree: "Higher Secondary School Certificate (Science)",
      duration: "2017 – 2019",
    },
    {
      institution: "Seroil Govt. High School, Rajshahi",
      degree: "Secondary School Certificate",
      duration: "2012 – 2017",
    },
  ],
};

// ---------- SKILLS ----------
const skills = {
  title: "My Skills",
  description:
    "A quick overview of the technologies and frameworks I use to design, build, and deploy AI-powered and full-stack software systems.",
  skillList: [
    { icon: <FaPython />, name: "Python" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiScikitlearn />, name: "scikit-learn" },
    { icon: <SiOpenai />, name: "OpenAI API" },
    { icon: <SiLangchain />, name: "LangChain" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};

// ---------- COMPONENT ----------
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 bg-gradient-to-b from-[#0f172a] to-[#1e293b]"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Tab Buttons */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 bg-transparent">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-white/5 backdrop-blur-sm h-[184px] py-6 px-8 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1 border border-white/10 hover:border-accent transition-all"
                      >
                        <span className="text-accent text-sm">
                          {item.duration}
                        </span>
                        <h3 className="text-xl font-semibold max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <p className="text-white/60">{item.company}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-white/5 backdrop-blur-sm h-[184px] py-6 px-8 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1 border border-white/10 hover:border-accent transition-all"
                      >
                        <span className="text-accent text-sm">
                          {item.duration}
                        </span>
                        <h3 className="text-xl font-semibold max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <p className="text-white/60">{item.institution}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{skills.title}</h3>
                <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-white/5 border border-white/10 rounded-xl flex justify-center items-center group hover:border-accent hover:bg-white/10 transition-all duration-300">
                            <div className="text-5xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-accent">{about.title}</h3>
                <p className="max-w-[700px] text-white/70 mx-auto xl:mx-0 leading-relaxed">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}:</span>
                      <span className="text-lg font-medium text-white">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
