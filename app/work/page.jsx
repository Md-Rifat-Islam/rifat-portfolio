"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaTimes, FaCode, FaLaptopCode, FaMobileAlt, FaRobot, FaDatabase, FaAward, FaNetworkWired } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createPortal } from "react-dom";

// PROJECT DATA
const projects = [
  {
    num: "01",
    category: "Full Stack & AI : Research",
    title: "Azure Health Bot System",
    description:
      "A cloud-native healthcare companion. Published in ICCA 2024 (ACM). It uses Azure Health Bot services to provide preliminary medical advice and health monitoring via a Flutter interface.",
    stack: [
      { name: "Azure AI" },
      { name: "Flutter" },
      { name: "Node.js" },
      { name: "Firebase Auth" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://lnkd.in/gmRtcERr",
    github: "https://github.com/Md-Rifat-Islam/Health-AI",
    icon: <FaRobot />,
    color: "#06b6d4",
    details: [
      { title: "Publication", text: "ICCA '24 / ACM Digital Library" },
      { title: "Architecture", text: "Cloud-to-Mobile bridge using Azure Resource Manager" },
      { title: "Team Lead", text: "Led a group of 4 researchers for system implementation" }
    ]
  },
  {
    num: "02",
    category: "Natural Language Processing",
    title: "YouTube News Summarizer",
    description:
      "Dual-pipeline summarization tool. Uses Abstractive (T5) and Extractive (SpaCy) models to condense long news videos into readable summaries. Published in IEEE ICCIT 2023.",
    stack: [
      { name: "T5 Transformer" },
      { name: "SpaCy" },
      { name: "BeautifulSoup" },
      { name: "ROUGE" },
    ],
    image: "/assets/work/no_thumb.png",
    github: "https://github.com/Md-Rifat-Islam/YouTube-News-Video-Textual-Summarization-using-T5-and-SpaCy",
    icon: <FaCode />,
    color: "#3b82f6",
    details: [
      { title: "Research Link", text: "Published in ICCIT 2023 / IEEE Xplore" },
      { title: "Scraping", text: "Custom YouTube transcript extraction via Python" },
      { title: "Evaluation", text: "ROUGE-1, ROUGE-2, and ROUGE-L metric analysis" }
    ]
  },
  {
    num: "03",
    category: "IoT & Deep Learning",
    title: "Diabetes Pre-screening Bot",
    description:
      "Award-winning system (Best Paper @ ICISET 2024). Integrates hardware sensors with a Raspberry Pi to predict diabetes risk levels using trained ML models.",
    stack: [
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "Raspberry Pi" },
      { name: "Python" },
    ],
    image: "/assets/work/thumb4.png",
    github: "https://github.com/Md-Rifat-Islam/Diabetes_Patient_Pre-screening_Chatbot",
    icon: <FaAward />,
    color: "#f59e0b",
    details: [
      { title: "Achievement", text: "Best Paper Award - ICISET 2024" },
      { title: "Hardware", text: "Interface with blood glucose and heart rate sensors" },
      { title: "Accuracy", text: "Achieved high precision in pre-screening classification" }
    ]
  },
  {
    num: "04",
    category: "Supply Chain : Optimization",
    title: "Smart Supply Network",
    description:
      "Research project on building a sustainable and resilient supply chain network. Focused on mathematical modeling and optimization for distribution logistics.",
    stack: [
      { name: "Optimization" },
      { name: "Python" },
      { name: "Data Analysis" },
      { name: "Matplotlib" },
    ],
    image: "/assets/work/no_thumb.png",
    github: "https://github.com/Md-Rifat-Islam/A-Sustainable-and-Resilient-Supply-Chain-Network",
    icon: <FaNetworkWired />,
    color: "#10b981",
    details: [
      { title: "Focus", text: "Sustainability and resilience in global supply chains" },
      { title: "Methodology", text: "Quantitative modeling of logistics nodes" },
      { title: "Context", text: "BSc Thesis / Research Publication" }
    ]
  },
  {
    num: "05",
    category: "Enterprise Software (ERP)",
    title: "Taxsense Business Portal",
    description:
      "A high-performance portal for Tax and Financial management. Features complex forms, real-time calculations, and secure document handling.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "PostgreSQL" },
    ],
    image: "/assets/work/no_thumb.png",
    icon: <FaLaptopCode />,
    color: "#8b5cf6",
    details: [
      { title: "Industry", text: "FinTech / EdTech" },
      { title: "Performance", text: "Optimized for Lighthouse scores of 95+" },
      { title: "Process", text: "Full Agile Lifecycle management" }
    ]
  },
  {
    num: "06",
    category: "Database Management",
    title: "TCB Distribution System",
    description:
      "Digitizing the Trading Corporation of Bangladesh's goods flow. This Oracle-based system manages thousands of distribution records with strict data integrity.",
    stack: [
      { name: "Oracle" },
      { name: "SQL" },
      { name: "PL/SQL" },
      { name: "Bootstrap" },
    ],
    image: "/assets/work/no_thumb.png",
    github: "https://github.com/Md-Rifat-Islam/TCB-Goods-Distribution-System",
    icon: <FaDatabase />,
    color: "#ec4899",
    details: [
      { title: "Scale", text: "Handles multi-warehouse inventory tracking" },
      { title: "Security", text: "Role-based access control (RBAC) implementation" },
      { title: "Complexity", text: "Relational schema with 15+ normalized tables" }
    ]
  },
  {
    num: "07",
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
    icon: <FaCode />,
    color: "#06b6d4",
    details: [
      { title: "Purpose", text: "Educational platform for Islamic knowledge and teachings" },
      { title: "Features", text: "Responsive design, structured content sections, accessibility-focused UI" },
      { title: "Technologies", text: "HTML5, CSS3, JavaScript, Bootstrap framework" },
      { title: "Highlights", text: "Clean interface with organized content delivery" }
    ]
  },
  {
    num: "08",
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
    icon: <FaLaptopCode />,
    color: "#3b82f6",
    details: [
      { title: "Purpose", text: "Professional portfolio to showcase projects and skills" },
      { title: "Features", text: "Smooth animations, SEO optimized, dark mode, responsive layouts" },
      { title: "Technologies", text: "Next.js, React.js, Tailwind CSS, Framer Motion" },
      { title: "Highlights", text: "Modern UI/UX with excellent performance scores" }
    ]
  },
];

// Portal Modal Component
const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

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
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl border border-white/20 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
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
              <div className="flex items-center gap-4 mb-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="text-4xl text-white"
                  style={{ color: project.color }}
                >
                  {project.icon}
                </motion.div>
                <div>
                  <span className="text-white/80 text-sm">{project.category}</span>
                  <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                </div>
              </div>
            </div>

            {/* Content */}
            <ScrollArea className="h-[calc(90vh-300px)] p-6">
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold text-[#06b6d4] mb-3">Overview</h3>
                  <p className="text-white/80 leading-relaxed">{project.description}</p>
                </div>

                {/* Details Grid */}
                <div>
                  <h3 className="text-xl font-semibold text-[#06b6d4] mb-3">Project Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#06b6d4] hover:shadow-lg hover:shadow-[#06b6d4]/20 transition-all duration-300"
                      >
                        <h4 className="text-[#06b6d4] font-semibold mb-2">{detail.title}</h4>
                        <p className="text-white/70 text-sm leading-relaxed">{detail.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-semibold text-[#06b6d4] mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-[#06b6d4]/20 to-[#3b82f6]/20 text-[#06b6d4] border border-[#06b6d4]/30 rounded-full text-sm font-medium hover:from-[#06b6d4]/30 hover:to-[#3b82f6]/30 transition-all"
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] hover:from-[#0891b2] hover:to-[#2563eb] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <BsArrowUpRight size={18} />
                      View Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
                    >
                      <BsGithub size={18} />
                      GitHub Repo
                    </a>
                  )}
                </div>
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

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#06b6d4] hover:bg-white/10 transition-all duration-300 group overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image Section */}
        <div className="relative h-48 bg-gradient-to-br from-[#06b6d4]/10 to-[#3b82f6]/10 overflow-hidden">
          {!imageError && project.image !== "/assets/work/no_thumb.png" ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-6xl opacity-30"
                style={{ color: project.color }}
              >
                {project.icon}
              </motion.div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 text-4xl font-bold text-white/20">
            {project.num}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-2xl" style={{ color: project.color }}>
              {project.icon}
            </div>
            <span className="text-xs text-white/50">{project.category}</span>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all">
            {project.title}
          </h3>

          <p className="text-white/70 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-white/60"
              >
                {tech.name}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="text-xs px-2 py-1 bg-gradient-to-r from-[#06b6d4]/20 to-[#3b82f6]/20 border border-[#06b6d4]/30 rounded-full text-[#06b6d4] font-semibold">
                +{project.stack.length - 3}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4 border-t border-white/10">
            {project.live && (
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger
                    className="flex-1 bg-gradient-to-r from-[#06b6d4]/20 to-[#3b82f6]/20 border border-[#06b6d4]/30 hover:from-[#06b6d4] hover:to-[#3b82f6] text-[#06b6d4] hover:text-white py-2 rounded-lg transition-all flex items-center justify-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.live, '_blank');
                    }}
                  >
                    <BsArrowUpRight size={16} />
                    <span className="text-sm font-semibold">Live</span>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] border-none">
                    <p className="text-white">View Live Demo</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {project.github && (
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger
                    className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white py-2 rounded-lg transition-all flex items-center justify-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                  >
                    <BsGithub size={16} />
                    <span className="text-sm font-semibold">Code</span>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] border-none">
                    <p className="text-white">View GitHub Repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>

          <div className="mt-3 text-xs text-[#06b6d4] font-semibold text-center group-hover:text-white transition-colors">
            Click for full details →
          </div>
        </div>
      </motion.div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={project}
      />
    </>
  );
};

// Main Work Component
const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" },
      }}
      className="min-h-screen flex flex-col justify-center py-16 bg-gradient-to-b from-[#0f172a] to-[#1e293b]"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            <span className="text-gradient">My Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            A collection of my work spanning web development, mobile apps, AI/ML projects, and database systems
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.num} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;