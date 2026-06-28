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
    category: "Backend & Full Stack",
    title: "Gas Bill Metering System",
    description:
      "An ongoing enterprise billing system built at DECO Limited for multi-customer gas metering, billing, and payment tracking, with automated consumption calculation and a normalized relational schema.",
    stack: [
      { name: "Django" },
      { name: "React.js" },
      { name: "PostgreSQL" },
      { name: "DRF" },
    ],
    image: "/assets/work/no_thumb.png",
    github: "https://github.com/Md-Rifat-Islam/Gas-bill-metering-system",
    icon: <FaDatabase />,
    color: "#06b6d4",
    details: [
      { title: "Role", text: "Software Engineer, DECO Limited (Aug 2025 – Present)" },
      { title: "Architecture", text: "Django REST Framework backend with a React.js frontend" },
      { title: "Status", text: "In active development" },
    ],
  },
  {
    num: "02",
    category: "Mobile & Healthcare",
    title: "WHO Log Book",
    description:
      "A Flutter mobile application for managing daily, weekly, monthly, quarterly, and half-yearly logs with automated result processing, built for structured enterprise workflows.",
    stack: [
      { name: "Flutter" },
      { name: "Firebase" },
      { name: "REST API" },
      { name: "Dart" },
    ],
    image: "/assets/work/no_thumb.png",
    github: "https://github.com/Md-Rifat-Islam/WHO-log-book-App-Flutter",
    icon: <FaMobileAlt />,
    color: "#3b82f6",
    details: [
      { title: "Role", text: "App Developer, AIDE Private Limited (Nov 2025 – Jan 2026)" },
      { title: "Backend", text: "Firebase authentication and data storage" },
      { title: "Access Control", text: "Multi-tier, role-based approval workflows" },
    ],
  },
  {
    num: "03",
    category: "Full Stack & AI Research",
    title: "Azure Health Bot System",
    description:
      "A cloud-native healthcare companion published in ICCA 2024 (ACM). Integrates IoT sensors (ESP32) and Azure Health Bot services with a Flutter interface for real-time health monitoring.",
    stack: [
      { name: "Azure AI" },
      { name: "Flutter" },
      { name: "ESP32" },
      { name: "Firebase" },
    ],
    image: "/assets/work/thumb3.png",
    github: "https://github.com/Md-Rifat-Islam/Health-AI",
    icon: <FaRobot />,
    color: "#06b6d4",
    details: [
      { title: "Publication", text: "ICCA '24, ACM" },
      { title: "Support", text: "Backed by Microsoft for Startups Founders Hub" },
      { title: "Architecture", text: "IoT-to-mobile health data pipeline" },
    ],
  },
  {
    num: "04",
    category: "IoT & Deep Learning",
    title: "Diabetes Pre-screening Chatbot",
    description:
      "Award-winning system (Best Paper, ICISET 2024) that pairs an ANN model with a simulated doctor–patient dataset to classify diabetes risk, deployed on a Raspberry Pi.",
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
      { title: "Achievement", text: "Best Paper Award, ICISET 2024" },
      { title: "Model", text: "Artificial Neural Network for questionnaire classification" },
      { title: "Deployment", text: "Inference on Raspberry Pi hardware" },
    ],
  },
  {
    num: "05",
    category: "NLP",
    title: "YouTube News Summarizer",
    description:
      "A dual-pipeline summarization tool comparing abstractive (T5) and extractive (SpaCy) approaches for condensing long-form news videos into readable summaries. Published in IEEE ICCIT 2023.",
    stack: [
      { name: "T5 Transformer" },
      { name: "SpaCy" },
      { name: "Python" },
      { name: "ROUGE" },
    ],
    image: "/assets/work/no_thumb.png",
    github: "https://github.com/Md-Rifat-Islam/YouTube-News-Video-Textual-Summarization-using-T5-and-SpaCy",
    icon: <FaCode />,
    color: "#3b82f6",
    details: [
      { title: "Publication", text: "IEEE ICCIT 2023" },
      { title: "Evaluation", text: "ROUGE-1, ROUGE-2, and ROUGE-L analysis" },
      { title: "Pipeline", text: "Custom transcript extraction and preprocessing" },
    ],
  },
  {
    num: "06",
    category: "B2B Marketplace",
    title: "Smart Supply Network",
    description:
      "A full-stack reverse B2B marketplace platform built at Taxsense IT Limited, with company registration, KYC verification, supplier certification, and quotation management workflows.",
    stack: [
      { name: "React.js" },
      { name: "Django" },
      { name: "PostgreSQL" },
      { name: "DRF" },
    ],
    image: "/assets/work/no_thumb.png",
    icon: <FaNetworkWired />,
    color: "#10b981",
    details: [
      { title: "Role", text: "Junior Software Developer, Taxsense IT Limited" },
      { title: "Workflow", text: "Quotation management and request-response modules" },
      { title: "Schema", text: "Company profiles, contact persons, and KYC documents" },
    ],
  },
  {
    num: "07",
    category: "Enterprise ERP",
    title: "Taxsense ERP Portal",
    description:
      "A modular ERP system covering user, billing, audit, and role-based control modules, with secure REST APIs and JWT authentication.",
    stack: [
      { name: "React.js" },
      { name: "Django" },
      { name: "PostgreSQL" },
      { name: "JWT" },
    ],
    image: "/assets/work/no_thumb.png",
    icon: <FaLaptopCode />,
    color: "#8b5cf6",
    details: [
      { title: "Role", text: "Junior Software Developer, Taxsense IT Limited" },
      { title: "Process", text: "Code reviews and CI/CD in a collaborative team" },
      { title: "Auth", text: "JWT-based authentication across modules" },
    ],
  },
  {
    num: "08",
    category: "Personal",
    title: "Personal Portfolio",
    description:
      "A portfolio showcasing my projects, skills, and experience, built with Next.js and React, with smooth animations and SEO optimization.",
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://rifat-portfolio-2jvt.vercel.app/",
    github: "https://github.com/Md-Rifat-Islam/rifat-portfolio",
    icon: <FaLaptopCode />,
    color: "#3b82f6",
    details: [
      { title: "Purpose", text: "Professional showcase of projects and skills" },
      { title: "Features", text: "Responsive layout, dark mode, SEO optimization" },
      { title: "Technologies", text: "Next.js, React.js, Tailwind CSS, Framer Motion" },
    ],
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 12 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="bg-[#10182b] rounded-xl border border-white/10 shadow-2xl max-w-3xl w-full max-h-[88vh] overflow-hidden"
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
              <div className="flex items-center gap-4">
                <div className="text-3xl" style={{ color: project.color }}>
                  {project.icon}
                </div>
                <div>
                  <span className="text-white/50 text-sm">{project.category}</span>
                  <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                </div>
              </div>
            </div>

            {/* Content */}
            <ScrollArea className="h-[calc(88vh-280px)] p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-white/50 mb-2 uppercase tracking-wide">Overview</h3>
                  <p className="text-white/80 leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white/50 mb-3 uppercase tracking-wide">Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.details.map((detail, index) => (
                      <div
                        key={index}
                        className="bg-white/[0.03] rounded-lg p-4 border border-white/10"
                      >
                        <h4 className="text-white font-medium text-sm mb-1">{detail.title}</h4>
                        <p className="text-white/60 text-sm leading-relaxed">{detail.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white/50 mb-3 uppercase tracking-wide">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white/5 text-white/80 border border-white/10 rounded-md text-sm"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-white font-medium py-2.5 px-5 rounded-lg transition-colors flex items-center justify-center gap-2"
                      style={{ backgroundColor: project.color }}
                    >
                      <BsArrowUpRight size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/5 hover:bg-white/10 text-white font-medium py-2.5 px-5 rounded-lg transition-colors flex items-center justify-center gap-2 border border-white/10"
                    >
                      <BsGithub size={16} />
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </ScrollArea>
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
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.06 }}
        className="bg-white/[0.03] rounded-xl border border-white/10 hover:border-white/20 transition-colors duration-300 group overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image Section */}
        <div className="relative h-40 bg-white/[0.02] overflow-hidden">
          {!imageError && project.image !== "/assets/work/no_thumb.png" ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-5xl opacity-20" style={{ color: project.color }}>
                {project.icon}
              </div>
            </div>
          )}
          <div className="absolute top-4 right-4 text-3xl font-semibold text-white/10">
            {project.num}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-lg" style={{ color: project.color }}>
              {project.icon}
            </div>
            <span className="text-xs text-white/40">{project.category}</span>
          </div>

          <h3 className="text-lg font-semibold mb-2 text-white">
            {project.title}
          </h3>

          <p className="text-white/60 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-white/50"
              >
                {tech.name}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-3 border-t border-white/10">
            {project.live && (
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger
                    className="flex-1 bg-white/5 border border-white/10 hover:border-white/20 text-white/70 hover:text-white py-2 rounded-md transition-colors flex items-center justify-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.live, '_blank');
                    }}
                  >
                    <BsArrowUpRight size={14} />
                    <span className="text-xs font-medium">Live</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Live Demo</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {project.github && (
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger
                    className="flex-1 bg-white/5 border border-white/10 hover:border-white/20 text-white/70 hover:text-white py-2 rounded-md transition-colors flex items-center justify-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                  >
                    <BsGithub size={14} />
                    <span className="text-xs font-medium">Code</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View GitHub Repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
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
      className="min-h-screen flex flex-col justify-center py-16 bg-[#0b1120]"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-semibold mb-3 text-white"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-base max-w-xl mx-auto"
          >
            Backend systems, mobile apps, and published AI research, from production billing software to award-winning healthcare research.
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