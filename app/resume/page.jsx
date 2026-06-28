"use client";

import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaTimes, FaRobot, FaCode, FaMobileAlt, FaLightbulb, FaUsers, FaExpand } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createPortal } from "react-dom";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaJava,
  FaChevronDown,
  FaChevronUp,
  FaBriefcase,
  FaGraduationCap,
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

// ---------- ABOUT ----------

const about = {
  title: "About Me",
  description: `I'm Muhammad Rifat Islam — a Software Engineer building backend systems, full-stack web applications, and mobile apps.

I work primarily with Python (Django, DRF), React.js/Next.js, and Flutter, with a relational-database background in PostgreSQL and MySQL.

I'm also a published researcher (IEEE/ACM) and an instructor, with experience teaching Data Structures, Algorithms, and AI.`,
  info: [
    { fieldName: "Name", fieldValue: "Muhammad Rifat Islam", icon: "👤" },
    { fieldName: "Phone", fieldValue: "(+880) 1728-977294", icon: "📱" },
    { fieldName: "Experience", fieldValue: "2+ Years", icon: "💼" },
    { fieldName: "Email", fieldValue: "muhammad.rifat.islam31@gmail.com", icon: "📧" },
    { fieldName: "LinkedIn", fieldValue: "muhammad-rifat-islam-9ab376230", icon: "💼" },
    { fieldName: "GitHub", fieldValue: "Md-Rifat-Islam", icon: "💻" },
    { fieldName: "Freelance", fieldValue: "Available", icon: "✅" },
    { fieldName: "Languages", fieldValue: "English, Bangla, Arabic, Urdu", icon: "🌐" },
  ],
};

// ---------- EXPERIENCE ----------

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I've worked across backend development, full-stack web apps, mobile engineering, and instruction — combining hands-on coding with clear communication.",
  items: [
    {
      company: "DECO Limited",
      position: "Software Engineer",
      duration: "Aug 2025 – Present",
      details: [
        { icon: <SiDjango />, text: "Building an enterprise Billing System with Django, React.js, and PostgreSQL", color: "#06b6d4" },
        { icon: <FaCode />, text: "Developing secure REST APIs with Django REST Framework and JWT auth", color: "#3b82f6" },
        { icon: <FaBriefcase />, text: "Implementing real-time dashboard modules for billing data", color: "#06b6d4" },
        { icon: <FaReact />, text: "Rebuilt the company website, deco.com.bd, on WordPress", color: "#61DAFB" },
      ],
    },
    {
      company: "AIDE Private Limited",
      position: "App Developer (Contractual, Remote)",
      duration: "Nov 2025 – Jan 2026",
      details: [
        { icon: <SiFlutter />, text: "Built the WHO Log Book cross-platform mobile app in Flutter", color: "#02569B" },
        { icon: <FaCode />, text: "Implemented role-based access control across multi-tier approval workflows", color: "#06b6d4" },
        { icon: <FaBriefcase />, text: "Collaborated remotely with the team on system design and deployment", color: "#3b82f6" },
        { icon: <FaMobileAlt />, text: "Integrated REST APIs and optimized API latency and UI responsiveness", color: "#02569B" },
      ],
    },
    {
      company: "Taxsense IT Limited",
      position: "Junior Software Developer",
      duration: "Jan 2025 – Aug 2025",
      details: [
        { icon: <FaReact />, text: "Built features for an enterprise ERP system using React and Django", color: "#61DAFB" },
        { icon: <SiPostgresql />, text: "Designed and optimized PostgreSQL database schemas", color: "#4169E1" },
        { icon: <FaCode />, text: "Built a B2B reverse marketplace platform end-to-end", color: "#06b6d4" },
        { icon: <SiDjango />, text: "Developed RESTful APIs with JWT authentication", color: "#092E20" },
      ],
    },
    {
      company: "MADE EASY Limited",
      position: "Instructor & Executive",
      duration: "Apr 2024 – Dec 2025",
      details: [
        { icon: <FaGraduationCap />, text: "Taught Data Structures, Algorithms, OOP, and AI", color: "#06b6d4" },
        { icon: <FaBriefcase />, text: "Managed Class 6–10 academics: routine planning and curriculum design", color: "#3b82f6" },
        { icon: <FaLightbulb />, text: "Supervised student capstone projects in AI and full-stack development", color: "#f59e0b" },
        { icon: <FaCode />, text: "Led the LMS migration from WordPress to Next.js + Django", color: "#8b5cf6" },
      ],
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
      duration: "2020 – 2024",
      details: [
        { icon: <SiTensorflow />, text: "CGPA: 3.50 / 4.00", color: "#FF6F00" },
        { icon: <FaCode />, text: "Completed projects in AI, NLP, and IoT-integrated healthcare", color: "#06b6d4" },
        { icon: <FaLightbulb />, text: "Strong foundation in algorithms and data structures", color: "#3b82f6" },
        { icon: <FaGraduationCap />, text: "Published 3 papers in IEEE/ACM conferences during studies", color: "#8b5cf6" },
      ],
    },
    {
      institution: "New Govt. Degree College, Rajshahi",
      degree: "Higher Secondary Certificate (Science)",
      duration: "2019",
      details: [
        { icon: <FaLightbulb />, text: "GPA: 5.00", color: "#06b6d4" },
        { icon: <FaCode />, text: "Focused on Mathematics, Physics, and Chemistry", color: "#3b82f6" },
      ],
    },
    {
      institution: "Seroil Govt. High School, Rajshahi",
      degree: "Secondary School Certificate",
      duration: "2017",
      details: [
        { icon: <FaGraduationCap />, text: "GPA: 5.00", color: "#06b6d4" },
        { icon: <FaLightbulb />, text: "Developed early interest in technology and computing", color: "#3b82f6" },
      ],
    },
  ],
};

// ---------- SKILLS ----------

const skills = {
  title: "My Skills",
  description:
    "A quick overview of the technologies I use to design, build, and deploy backend systems, full-stack apps, and AI-driven research.",
  skillList: [
    { icon: <FaPython />, name: "Python", level: 90, category: "Backend" },
    { icon: <SiDjango />, name: "Django", level: 85, category: "Backend" },
    { icon: <FaReact />, name: "React.js", level: 85, category: "Frontend" },
    { icon: <SiNextdotjs />, name: "Next.js", level: 80, category: "Frontend" },
    { icon: <SiFlutter />, name: "Flutter", level: 80, category: "Mobile" },
    { icon: <SiPostgresql />, name: "PostgreSQL", level: 85, category: "Database" },
    { icon: <FaJs />, name: "JavaScript", level: 80, category: "Frontend" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 75, category: "Frontend" },
    { icon: <FaNodeJs />, name: "Node.js", level: 60, category: "Backend" },
    { icon: <SiCplusplus />, name: "C++", level: 75, category: "Programming" },
    { icon: <FaJava />, name: "Java", level: 65, category: "Programming" },
    { icon: <SiTensorflow />, name: "TensorFlow", level: 75, category: "AI/ML" },
  ],
};

// Portal Modal Component
const PortalModal = ({ isOpen, onClose, title, subtitle, details, type }) => {
  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 12 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="bg-[#10182b] rounded-xl border border-white/10 shadow-2xl max-w-2xl w-full max-h-[82vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 relative">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
              >
                <FaTimes size={18} />
              </button>
              <div className="flex items-center gap-3">
                <div className="text-2xl text-white/70">
                  {type === "experience" ? <FaBriefcase /> : <FaGraduationCap />}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">{title}</h2>
                  <p className="text-white/50 text-sm">{subtitle}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <ScrollArea className="h-[calc(82vh-180px)] p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {details.map((detail, index) => (
                  <div
                    key={index}
                    className="bg-white/[0.03] rounded-lg p-4 border border-white/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-xl mt-0.5 flex-shrink-0" style={{ color: detail.color }}>
                        {detail.icon}
                      </div>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {detail.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};

// Card Component with Portal Trigger
const ExperienceEducationCard = ({ item, type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.li
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/[0.03] rounded-xl border border-white/10 hover:border-white/20 transition-colors duration-300 group overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="p-5 relative">
          <div className="absolute top-4 right-4 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity">
            <FaExpand size={14} />
          </div>

          <div className="mb-2">
            <span className="text-cyan-400/80 text-xs font-medium">
              {item.duration}
            </span>
          </div>

          <h3 className="text-lg font-semibold mb-1 text-white">
            {type === "experience" ? item.position : item.degree}
          </h3>

          <p className="text-white/50 text-sm mb-4">
            {type === "experience" ? item.company : item.institution}
          </p>

          {/* Preview Pills */}
          <div className="flex flex-wrap gap-2">
            {item.details.slice(0, 2).map((detail, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/50"
              >
                <span className="text-white/40">{detail.icon}</span>
                <span className="truncate max-w-[140px]">
                  {detail.text.split(' ').slice(0, 4).join(' ')}…
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 text-xs text-white/40 group-hover:text-white/70 transition-colors">
            View details →
          </div>
        </div>
      </motion.li>

      <PortalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={type === "experience" ? item.position : item.degree}
        subtitle={type === "experience" ? item.company : item.institution}
        details={item.details}
        type={type}
      />
    </>
  );
};

// Skill Card with Progress
const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="w-full">
            <div className="h-[150px] bg-white/[0.03] border border-white/10 rounded-xl flex flex-col justify-center items-center hover:border-white/20 transition-colors duration-300 p-4">
              <div className="text-4xl text-white/60 mb-3">
                {skill.icon}
              </div>
              <p className="text-sm text-white/60 mb-2">{skill.name}</p>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isHovered ? `${skill.level}%` : "0%" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-full bg-cyan-400"
                />
              </div>
              <p className="text-xs text-white/30 mt-1">{skill.category}</p>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{skill.name} – {skill.level}%</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.li>
  );
};

// About Info Card
const AboutInfoCard = ({ item, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="bg-white/[0.03] rounded-lg p-4 border border-white/10 hover:border-white/20 transition-colors duration-300"
    >
      <div className="flex items-center gap-4">
        <span className="text-xl">{item.icon}</span>
        <div className="flex flex-col gap-1 flex-1">
          <span className="text-xs text-white/40">{item.fieldName}</span>
          <span className="text-sm font-medium text-white">
            {item.fieldValue}
          </span>
        </div>
      </div>
    </motion.li>
  );
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 bg-[#0b1120]"
    >
      <div className="container mx-auto px-4">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-3 bg-transparent">
            <TabsTrigger
              value="experience"
              className="bg-white/[0.03] border border-white/10 data-[state=active]:bg-cyan-400/10 data-[state=active]:border-cyan-400/40 data-[state=active]:text-cyan-300 text-white/70 transition-colors"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="bg-white/[0.03] border border-white/10 data-[state=active]:bg-cyan-400/10 data-[state=active]:border-cyan-400/40 data-[state=active]:text-cyan-300 text-white/70 transition-colors"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="bg-white/[0.03] border border-white/10 data-[state=active]:bg-cyan-400/10 data-[state=active]:border-cyan-400/40 data-[state=active]:text-cyan-300 text-white/70 transition-colors"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="bg-white/[0.03] border border-white/10 data-[state=active]:bg-cyan-400/10 data-[state=active]:border-cyan-400/40 data-[state=active]:text-cyan-300 text-white/70 transition-colors"
            >
              About Me
            </TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[24px] text-center xl:text-left">
                <h3 className="text-3xl font-semibold text-white">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  {experience.items.map((item, index) => (
                    <ExperienceEducationCard key={index} item={item} type="experience" />
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[24px] text-center xl:text-left">
                <h3 className="text-3xl font-semibold text-white">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                  {education.items.map((item, index) => (
                    <ExperienceEducationCard key={index} item={item} type="education" />
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[24px] text-center xl:text-left">
                <h3 className="text-3xl font-semibold text-white">
                  {skills.title}
                </h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px]">
                  {skills.skillList.map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} />
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[24px]">
                <h3 className="text-3xl font-semibold text-white">
                  {about.title}
                </h3>
                <p className="max-w-[700px] text-white/50 mx-auto xl:mx-0 leading-relaxed whitespace-pre-line">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-3 max-w-[800px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <AboutInfoCard key={index} item={item} index={index} />
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