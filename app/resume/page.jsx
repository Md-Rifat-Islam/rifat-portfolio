"use client";

import { useState } from "react";
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
  FaCode,
  FaLightbulb,
  FaTimes,
  FaExpand,
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

import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

// ---------- ABOUT ----------

const about = {
  title: "About Me",
  description: `I'm Muhammad Rifat Islam — a Software Developer and AI Engineer passionate about building intelligent, scalable systems that make a real-world impact.

I specialize in AI/ML model development, full-stack web solutions (React, Next.js, Django), and Flutter-based cross-platform apps.

I'm also a published researcher and educator, driven by curiosity, clarity, and innovation.`,
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
    "I've worked across AI research, web app development, and leadership — combining technical expertise with strategic execution to deliver real results.",
  items: [
    {
      company: "AIDE Private Limited",
      position: "Software Engineer (Contractual)",
      duration: "Aug 2025 – Present",
      details: [
        { icon: <FaReact />, text: "Developing cross-platform mobile applications using Flutter", color: "#02569B" },
        { icon: <FaCode />, text: "Implementing responsive UI/UX designs with modern design patterns", color: "#06b6d4" },
        { icon: <FaBriefcase />, text: "Collaborating with teams to deliver scalable app solutions", color: "#3b82f6" },
        { icon: <SiFlutter />, text: "Integrating RESTful APIs and real-time data synchronization", color: "#02569B" }
      ]
    },
    {
      company: "Taxsense IT Limited",
      position: "Junior Software Developer",
      duration: "Jan 2025 – Jul 2025",
      details: [
        { icon: <FaReact />, text: "Built full-stack web applications using React and Django", color: "#61DAFB" },
        { icon: <SiPostgresql />, text: "Designed and optimized PostgreSQL database schemas", color: "#4169E1" },
        { icon: <FaCode />, text: "Implemented authentication and authorization systems", color: "#06b6d4" },
        { icon: <SiDjango />, text: "Developed RESTful APIs for seamless frontend-backend integration", color: "#092E20" }
      ]
    },
    {
      company: "MADE EASY Limited",
      position: "Instructor & Executive Director",
      duration: "Apr 2024 – Dec 2025",
      details: [
        { icon: <FaGraduationCap />, text: "Teaching computer science and software engineering concepts", color: "#06b6d4" },
        { icon: <FaBriefcase />, text: "Leading strategic planning and operational management", color: "#3b82f6" },
        { icon: <FaLightbulb />, text: "Mentoring students in programming and problem-solving", color: "#f59e0b" },
        { icon: <FaCode />, text: "Developing curriculum for technical training programs", color: "#8b5cf6" }
      ]
    },
    {
      company: "Military Institute of Science & Technology (MIST)",
      position: "AI Research Assistant (Project)",
      duration: "2023 – 2024",
      details: [
        { icon: <SiTensorflow />, text: "Conducted research on machine learning and deep learning models", color: "#FF6F00" },
        { icon: <FaGraduationCap />, text: "Published research papers in AI and computer vision", color: "#06b6d4" },
        { icon: <SiScikitlearn />, text: "Implemented TensorFlow and scikit-learn based solutions", color: "#F7931E" },
        { icon: <FaLightbulb />, text: "Collaborated on cutting-edge AI research projects", color: "#3b82f6" }
      ]
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
      details: [
        { icon: <SiTensorflow />, text: "Specialized in Artificial Intelligence and Machine Learning", color: "#FF6F00" },
        { icon: <FaCode />, text: "Completed projects in computer vision and NLP", color: "#06b6d4" },
        { icon: <FaLightbulb />, text: "Strong foundation in algorithms and data structures", color: "#3b82f6" },
        { icon: <FaGraduationCap />, text: "Participated in research and academic publications", color: "#8b5cf6" }
      ]
    },
    {
      institution: "New Govt. Degree College, Rajshahi",
      degree: "Higher Secondary School Certificate (Science)",
      duration: "2017 – 2019",
      details: [
        { icon: <FaLightbulb />, text: "Focused on Mathematics, Physics, and Chemistry", color: "#06b6d4" },
        { icon: <FaCode />, text: "Achieved excellence in analytical problem-solving", color: "#3b82f6" },
        { icon: <FaBriefcase />, text: "Built strong foundation in computational thinking", color: "#8b5cf6" }
      ]
    },
    {
      institution: "Seroil Govt. High School, Rajshahi",
      degree: "Secondary School Certificate",
      duration: "2012 – 2017",
      details: [
        { icon: <FaGraduationCap />, text: "Comprehensive education in sciences and mathematics", color: "#06b6d4" },
        { icon: <FaLightbulb />, text: "Developed early interest in technology and computing", color: "#3b82f6" }
      ]
    },
  ],
};

// ---------- SKILLS ----------

const skills = {
  title: "My Skills",
  description:
    "A quick overview of the technologies and frameworks I use to design, build, and deploy AI-powered and full-stack software systems.",
  skillList: [
    { icon: <FaPython />, name: "Python", level: 90, category: "AI/ML" },
    { icon: <SiTensorflow />, name: "TensorFlow", level: 85, category: "AI/ML" },
    { icon: <SiScikitlearn />, name: "scikit-learn", level: 85, category: "AI/ML" },
    { icon: <SiOpenai />, name: "OpenAI API", level: 80, category: "AI/ML" },
    { icon: <SiLangchain />, name: "LangChain", level: 75, category: "AI/ML" },
    { icon: <FaReact />, name: "React.js", level: 90, category: "Frontend" },
    { icon: <SiNextdotjs />, name: "Next.js", level: 85, category: "Frontend" },
    { icon: <SiDjango />, name: "Django", level: 85, category: "Backend" },
    { icon: <SiFlutter />, name: "Flutter", level: 80, category: "Mobile" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 90, category: "Frontend" },
    { icon: <FaNodeJs />, name: "Node.js", level: 80, category: "Backend" },
    { icon: <SiPostgresql />, name: "PostgreSQL", level: 85, category: "Database" },
    { icon: <SiCplusplus />, name: "C++", level: 80, category: "Programming" },
    { icon: <FaFigma />, name: "Figma", level: 75, category: "Design" },
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl border border-white/20 shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-all"
              >
                <FaTimes size={20} />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl text-white">
                  {type === "experience" ? <FaBriefcase /> : <FaGraduationCap />}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{title}</h2>
                  <p className="text-white/80 text-sm">{subtitle}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <ScrollArea className="h-[calc(85vh-200px)] p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#06b6d4] hover:shadow-lg hover:shadow-[#06b6d4]/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="text-3xl mt-1 group-hover:text-[#06b6d4] transition-colors flex-shrink-0"
                        style={{ color: detail.color }}
                      >
                        {detail.icon}
                      </motion.div>
                      <p className="text-sm text-white/80 leading-relaxed group-hover:text-white transition-colors">
                        {detail.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>

            {/* Footer */}
            <div className="border-t border-white/10 p-4 bg-white/5">
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] hover:from-[#0891b2] hover:to-[#2563eb] text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Close
              </button>
            </div>
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#06b6d4] hover:bg-white/10 transition-all duration-300 group overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="p-6 relative">
          {/* Expand Icon */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute top-4 right-4 text-[#06b6d4] opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <FaExpand size={18} />
          </motion.div>

          <div className="mb-3">
            <span className="text-[#06b6d4] text-sm font-semibold">
              {item.duration}
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-all">
            {type === "experience" ? item.position : item.degree}
          </h3>

          <p className="text-white/60 mb-4">
            {type === "experience" ? item.company : item.institution}
          </p>

          {/* Preview Pills */}
          <div className="flex flex-wrap gap-2">
            {item.details.slice(0, 3).map((detail, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/70"
              >
                <span className="text-[#06b6d4]">{detail.icon}</span>
                <span className="truncate max-w-[120px]">
                  {detail.text.split(' ').slice(0, 3).join(' ')}...
                </span>
              </div>
            ))}
            {item.details.length > 3 && (
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] rounded-full px-3 py-1.5 text-xs text-white font-semibold">
                +{item.details.length - 3} more
              </div>
            )}
          </div>

          <div className="mt-4 text-xs text-[#06b6d4] font-semibold group-hover:text-white transition-colors">
            Click to view details →
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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="w-full">
            <div className="h-[170px] bg-white/5 border border-white/10 rounded-xl flex flex-col justify-center items-center group hover:border-[#06b6d4] hover:bg-gradient-to-br hover:from-[#06b6d4]/10 hover:to-[#3b82f6]/10 transition-all duration-300 p-4">
              <motion.div
                animate={{ scale: isHovered ? 1.2 : 1 }}
                transition={{ duration: 0.3 }}
                className="text-5xl text-white/70 group-hover:text-gradient transition-all duration-300 mb-3"
              >
                {skill.icon}
              </motion.div>
              <p className="text-sm text-white/60 mb-2">{skill.name}</p>
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isHovered ? `${skill.level}%` : "0%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]"
                />
              </div>
              <p className="text-xs text-[#06b6d4] mt-1">{skill.category}</p>
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] border-none">
            <p className="capitalize text-white">
              {skill.name} - {skill.level}%
            </p>
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#06b6d4] hover:shadow-lg hover:shadow-[#06b6d4]/20 transition-all duration-300 group"
    >
      <div className="flex items-center gap-4">
        <span className="text-2xl">{item.icon}</span>
        <div className="flex flex-col gap-1 flex-1">
          <span className="text-xs text-white/50">{item.fieldName}</span>
          <span className="text-base font-medium text-white group-hover:text-gradient transition-all">
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 bg-gradient-to-b from-[#0f172a] to-[#1e293b]"
    >
      <div className="container mx-auto px-4">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 bg-transparent">
            <TabsTrigger
              value="experience"
              className="bg-white/5 border border-white/10 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#06b6d4] data-[state=active]:to-[#3b82f6] data-[state=active]:text-white hover:border-[#06b6d4] transition-all"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="bg-white/5 border border-white/10 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#06b6d4] data-[state=active]:to-[#3b82f6] data-[state=active]:text-white hover:border-[#06b6d4] transition-all"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="bg-white/5 border border-white/10 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#06b6d4] data-[state=active]:to-[#3b82f6] data-[state=active]:text-white hover:border-[#06b6d4] transition-all"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="bg-white/5 border border-white/10 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#06b6d4] data-[state=active]:to-[#3b82f6] data-[state=active]:text-white hover:border-[#06b6d4] transition-all"
            >
              About Me
            </TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  <span className="text-gradient">{experience.title}</span>
                </h3>
                <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => (
                    <ExperienceEducationCard key={index} item={item} type="experience" />
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  <span className="text-gradient">{education.title}</span>
                </h3>
                <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                  {education.items.map((item, index) => (
                    <ExperienceEducationCard key={index} item={item} type="education" />
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  <span className="text-gradient">{skills.title}</span>
                </h3>
                <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
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
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">
                  <span className="text-gradient">{about.title}</span>
                </h3>
                <p className="max-w-[700px] text-white/70 mx-auto xl:mx-0 leading-relaxed">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 max-w-[800px] mx-auto xl:mx-0">
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