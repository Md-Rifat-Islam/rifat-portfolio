"use client";

import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaTimes, FaRobot, FaCode, FaMobileAlt, FaLightbulb, FaUsers, FaExpand, FaLaptopCode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createPortal } from "react-dom";

const services = [
  {
    num: "01",
    title: "Backend & API Development",
    shortDesc: "Building secure, scalable backends and REST APIs with Python and Django.",
    description: `I design and build backend systems for production SaaS-style applications — currently shipping an enterprise billing system at DECO Limited, and previously an ERP and B2B marketplace at Taxsense IT Limited.`,
    icon: <FaCode />,
    color: "#06b6d4",
    features: [
      { icon: <FaCode />, title: "REST APIs", text: "Designing and securing REST APIs with Django REST Framework and JWT authentication." },
      { icon: <FaLightbulb />, title: "Database Architecture", text: "Designing normalized, optimized schemas for PostgreSQL and MySQL." },
      { icon: <FaRobot />, title: "Production Systems", text: "Shipping and maintaining billing, ERP, and marketplace backends." },
      { icon: <FaUsers />, title: "Agile Delivery", text: "Working in code reviews, CI/CD workflows, and agile sprints." },
    ],
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "MySQL", "JWT", "Docker", "Git"],
    href: "https://github.com/Md-Rifat-Islam",
  },
  {
    num: "02",
    title: "Full Stack Web Development",
    shortDesc: "Building React/Next.js frontends on top of Django backends for real business needs.",
    description: `I build complete web applications end-to-end — from React/Next.js interfaces to Django backends — for ERP, billing, and EdTech platforms.`,
    icon: <FaLaptopCode />,
    color: "#3b82f6",
    features: [
      { icon: <FaCode />, title: "Modern Frontend", text: "Building responsive UIs with React.js, Next.js, and Tailwind CSS." },
      { icon: <FaRobot />, title: "Full Stack Integration", text: "Connecting React/Next.js frontends to Django REST APIs." },
      { icon: <FaLightbulb />, title: "Real-Time Dashboards", text: "Implementing live dashboard modules for billing and ERP data." },
      { icon: <FaUsers />, title: "Agile Development", text: "Delivering iteratively in cross-functional, agile teams." },
    ],
    technologies: ["Next.js", "React.js", "Django", "PostgreSQL", "Tailwind CSS", "REST API", "TypeScript"],
    href: "https://github.com/Md-Rifat-Islam",
  },
  {
    num: "03",
    title: "Mobile App Development",
    shortDesc: "Building cross-platform mobile apps with Flutter, integrated with REST APIs and Firebase.",
    description: `I build cross-platform mobile apps focused on clean UI and reliable API integration — including the WHO Log Book app and an IoT-integrated healthcare companion.`,
    icon: <FaMobileAlt />,
    color: "#8b5cf6",
    features: [
      { icon: <FaMobileAlt />, title: "Mobile UI/UX", text: "Building responsive, native-feeling interfaces in Flutter." },
      { icon: <FaCode />, title: "API Integration", text: "Connecting mobile apps to REST APIs with structured state management." },
      { icon: <FaLightbulb />, title: "IoT & Firebase", text: "Integrating hardware sensors (ESP32) and Firebase backend services." },
      { icon: <FaUsers />, title: "Access Control", text: "Implementing role-based, multi-tier approval workflows." },
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "IoT", "ESP32"],
    href: "https://github.com/Md-Rifat-Islam",
  },
  {
    num: "04",
    title: "AI Research & Technical Writing",
    shortDesc: "Published researcher in NLP and healthcare AI, with ROUGE-based evaluation work.",
    description: `I combine academic rigor with technical execution — three publications in IEEE/ACM venues, including a Best Paper Award, on NLP and AI-driven healthcare systems.`,
    icon: <FaLightbulb />,
    color: "#f59e0b",
    features: [
      { icon: <FaLightbulb />, title: "Published Papers", text: "Three publications in IEEE (ICISET, ICCIT) and ACM (ICCA) venues." },
      { icon: <FaCode />, title: "Metrics Analysis", text: "Comparative evaluation of T5 and SpaCy using ROUGE metrics." },
      { icon: <FaRobot />, title: "Award-Winning Work", text: "Best Paper Award, ICISET 2024, Data Science Track." },
      { icon: <FaUsers />, title: "Technical Writing", text: "Translating AI concepts into clear academic and technical documentation." },
    ],
    technologies: ["TensorFlow", "Keras", "IEEE", "ACM", "ROUGE", "NLP", "Python"],
    href: "https://scholar.google.com/",
  },
  {
    num: "05",
    title: "Technical Instruction & Team Leadership",
    shortDesc: "Teaching Algorithms and AI, and coordinating small technical teams.",
    description: `As an Instructor and Executive at MADE EASY Limited, I manage both the technical curriculum and the people delivering it — alongside leading capstone projects and small dev teams.`,
    icon: <FaUsers />,
    color: "#10b981",
    features: [
      { icon: <FaUsers />, title: "Technical Instruction", text: "Teaching Data Structures, Algorithms, OOP, and AI." },
      { icon: <FaLightbulb />, title: "Academic Operations", text: "Managing Class 6–10 routine planning and curriculum design." },
      { icon: <FaCode />, title: "Capstone Supervision", text: "Supervising student projects in AI and full-stack development." },
      { icon: <FaRobot />, title: "Mentorship", text: "Mentoring junior developers and coordinating small technical teams." },
    ],
    technologies: ["Agile", "Curriculum Design", "Mentorship", "Sprint Planning", "Technical Strategy"],
    href: "https://www.linkedin.com/in/muhammad-rifat-islam-9ab376230/",
  },
];

// Portal Modal Component
const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

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
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <div>
                  <span className="text-white/40 text-sm">{service.num}</span>
                  <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
                </div>
              </div>
              <p className="text-white/70">{service.description}</p>
            </div>

            {/* Content */}
            <ScrollArea className="h-[calc(88vh-320px)] p-6">
              <div className="space-y-6">
                {/* Features Grid */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-white/50">
                    Key Capabilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-white/[0.03] rounded-lg p-4 border border-white/10"
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-lg mt-0.5" style={{ color: service.color }}>
                            {feature.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-white text-sm mb-1">{feature.title}</h4>
                            <p className="text-white/60 text-sm leading-relaxed">{feature.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-white/50">
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 border border-white/10 bg-white/5 rounded-md text-sm text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-6 rounded-lg font-medium text-white text-center transition-colors flex items-center justify-center gap-2"
                    style={{ backgroundColor: service.color }}
                  >
                    <span>Learn More</span>
                    <BsArrowUpRight size={16} />
                  </a>
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

// Service Card Component
const ServiceCard = ({ service, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.06 + index * 0.06, duration: 0.5 }}
        className="flex flex-col justify-between gap-5 group border border-white/10 rounded-xl p-7 transition-colors duration-300 bg-white/[0.03] hover:border-white/20 cursor-pointer relative overflow-hidden"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Expand Icon */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-white/40">
          <FaExpand size={14} />
        </div>

        {/* Top Section */}
        <div className="flex items-center gap-3">
          <div className="text-3xl" style={{ color: service.color }}>
            {service.icon}
          </div>
          <div className="text-3xl font-semibold opacity-20 text-white">
            {service.num}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold leading-tight text-white">
          {service.title}
        </h2>

        {/* Short Description */}
        <p className="text-sm text-white/60 leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Technology Preview */}
        <div className="flex flex-wrap gap-2">
          {service.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-1 border border-white/10 bg-white/[0.03] rounded-md text-white/50"
            >
              {tech}
            </span>
          ))}
          {service.technologies.length > 4 && (
            <span className="text-xs px-2.5 py-1 border border-white/10 bg-white/5 rounded-md text-white/50">
              +{service.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-sm font-medium text-white/50">
            View details →
          </span>
          <a
            href={service.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-[42px] h-[42px] rounded-full border border-white/10 bg-white/5 flex justify-center items-center transition-colors duration-300 text-white/60 hover:text-white hover:border-white/20"
          >
            <BsArrowUpRight className="text-base" />
          </a>
        </div>
      </motion.div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={service}
      />
    </>
  );
};

const Services = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-16 bg-[#0b1120]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-semibold mb-3 text-white">
            My Services
          </h1>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Backend and full-stack development, mobile apps, AI research, and technical leadership.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;