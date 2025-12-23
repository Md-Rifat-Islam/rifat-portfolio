"use client";

import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaTimes, FaRobot, FaCode, FaMobileAlt, FaLightbulb, FaUsers, FaExpand } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createPortal } from "react-dom";

const services = [
  {
    num: "01",
    title: "AI & Machine Learning Engineering",
    shortDesc: "Transforming research into production-ready AI systems using NLP and Deep Learning.",
    description: `I design and deploy intelligent systems that bridge the gap between academic research and real-world application. As a Microsoft for Startups founder, I specialize in building scalable AI architectures.`,
    icon: <FaRobot />,
    color: "#06b6d4",
    features: [
      { icon: <FaRobot />, title: "NLP & LLMs", text: "Advanced Natural Language Processing using HuggingFace, BERT, and GPT models." },
      { icon: <FaLightbulb />, title: "RAG & Prompting", text: "Building intelligent retrieval systems and optimized prompt engineering pipelines." },
      { icon: <FaCode />, title: "Model Development", text: "Training and fine-tuning models with TensorFlow, PyTorch, and Keras." },
      { icon: <FaUsers />, title: "Health AI", text: "Expertise in AI-driven healthcare companions and interactive patient chatbots." }
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Azure AI", "HuggingFace", "Python", "NLP"],
    href: "https://github.com/Md-Rifat-Islam",
  },
  {
    num: "02",
    title: "Full Stack Web Development",
    shortDesc: "Building scalable ERP, E-commerce, and EdTech platforms with modern stacks.",
    description: `I build robust, high-performance web applications tailored for complex business needs. My experience ranges from education technology at MADE EASY to financial ERP systems at Taxsense.`,
    icon: <FaCode />,
    color: "#3b82f6",
    features: [
      { icon: <FaCode />, title: "Modern Frontend", text: "Crafting dynamic, responsive UIs using Next.js, React, and Tailwind CSS." },
      { icon: <FaRobot />, title: "Scalable Backends", text: "Developing secure REST & WebSocket APIs with Django and Node.js." },
      { icon: <FaLightbulb />, title: "Database Architecture", text: "Designing optimized data schemas for PostgreSQL and MySQL." },
      { icon: <FaUsers />, title: "Agile Development", text: "Implementing agile methodologies to ensure rapid, iterative delivery." }
    ],
    technologies: ["Next.js", "React.js", "Django", "PostgreSQL", "Tailwind CSS", "REST API", "Node.js", "TypeScript"],
    href: "https://github.com/Md-Rifat-Islam",
  },
  {
    num: "03",
    title: "Flutter & Cross-Platform Development",
    shortDesc: "Developing intuitive mobile-first experiences with Flutter and IoT integration.",
    description: `I build high-performance, cross-platform mobile apps. My focus is on creating smooth, native-like experiences that integrate seamlessly with cloud services and hardware.`,
    icon: <FaMobileAlt />,
    color: "#8b5cf6",
    features: [
      { icon: <FaMobileAlt />, title: "Mobile UI/UX", text: "Creating beautiful, high-performance interfaces for Android and iOS." },
      { icon: <FaCode />, title: "State Management", text: "Implementing scalable state management using Bloc, Provider, or GetX." },
      { icon: <FaLightbulb />, title: "IoT & Firebase", text: "Integrating real-time hardware sensors and Firebase backend services." },
      { icon: <FaUsers />, title: "App Lead", text: "Leading mobile dev sprints to deliver reliable, production-grade applications." }
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "IoT", "SQLite", "Bloc", "Provider"],
    href: "https://github.com/Md-Rifat-Islam",
  },
  {
    num: "04",
    title: "AI Research & Academic Writing",
    shortDesc: "Published researcher with expertise in NLP, ROUGE analysis, and Data Science.",
    description: `I combine academic rigor with technical execution. With multiple publications in IEEE and ACM conferences, I help bring state-of-the-art innovations to life.`,
    icon: <FaLightbulb />,
    color: "#f59e0b",
    features: [
      { icon: <FaLightbulb />, title: "Published Papers", text: "Authored 4+ research papers on AI-NLP and Healthcare monitoring." },
      { icon: <FaCode />, title: "Metrics Analysis", text: "In-depth analysis of AI models using ROUGE scores and SpaCy vs T5." },
      { icon: <FaRobot />, title: "Award Winning", text: "Recipient of the Best Paper Award at ICISET 2024 for Data Science." },
      { icon: <FaUsers />, title: "Technical Content", text: "Translating complex AI concepts into clear, academic and technical documentation." }
    ],
    technologies: ["IEEE", "ACM", "Research Design", "Data Analysis", "NLP Summarization", "Generative AI"],
    href: "https://scholar.google.com/",
  },
  {
    num: "05",
    title: "Technical Leadership & Management",
    shortDesc: "Leading engineering teams and managing academic operations for tech ventures.",
    description: `As an Executive Director and Team Lead, I manage both the technical vision and the human element to ensure project success.`,
    icon: <FaUsers />,
    color: "#10b981",
    features: [
      { icon: <FaUsers />, title: "Team Leadership", text: "Coordinating agile teams at AIDE and Taxsense to deliver scalable software." },
      { icon: <FaLightbulb />, title: "Academic Ops", text: "Managing academic operations and developer teams at MADE EASY Limited." },
      { icon: <FaCode />, title: "Code Excellence", text: "Driving high standards through code reviews and structured documentation." },
      { icon: <FaRobot />, title: "Mentorship", text: "Mentoring junior developers and students in CSE and software engineering." }
    ],
    technologies: ["Agile", "Team Management", "Sprint Planning", "Jira", "Technical Strategy", "Mentorship"],
    href: "https://www.linkedin.com/in/muhammad-rifat-islam/",
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
            <div 
              className="p-6 relative"
              style={{
                background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)`
              }}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-all"
              >
                <FaTimes size={20} />
              </button>
              <div className="flex items-center gap-4 mb-3">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="text-5xl"
                  style={{ color: service.color }}
                >
                  {service.icon}
                </motion.div>
                <div>
                  <span className="text-white/60 text-sm font-semibold">{service.num}</span>
                  <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                </div>
              </div>
              <p className="text-white/80 text-lg">{service.description}</p>
            </div>

            {/* Content */}
            <ScrollArea className="h-[calc(90vh-350px)] p-6">
              <div className="space-y-6">
                {/* Features Grid */}
                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: service.color }}>
                    Key Features & Capabilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:shadow-lg transition-all duration-300 group"
                        style={{
                          borderColor: `${service.color}20`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = service.color;
                          e.currentTarget.style.boxShadow = `0 10px 30px ${service.color}30`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = `${service.color}20`;
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="text-2xl mt-1 transition-colors"
                            style={{ color: service.color }}
                          >
                            {feature.icon}
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                            <p className="text-white/70 text-sm leading-relaxed">{feature.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: service.color }}>
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 border rounded-full text-sm font-medium transition-all cursor-default"
                        style={{
                          backgroundColor: `${service.color}20`,
                          color: service.color,
                          borderColor: `${service.color}40`
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = `${service.color}30`;
                          e.currentTarget.style.borderColor = service.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = `${service.color}20`;
                          e.currentTarget.style.borderColor = `${service.color}40`;
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 px-6 rounded-lg font-semibold text-white text-center transition-all duration-300 flex items-center justify-center gap-2"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}, ${service.color}CC)`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = `0 10px 30px ${service.color}50`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span>Learn More</span>
                    <BsArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </ScrollArea>

            {/* Footer */}
            <div className="border-t border-white/10 p-4 bg-white/5">
              <button
                onClick={onClose}
                className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${service.color}, ${service.color}CC)`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
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

// Service Card Component
const ServiceCard = ({ service, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
        className="flex flex-col justify-between gap-6 group border border-white/10 rounded-2xl p-8 transition-all duration-500 bg-white/5 backdrop-blur-sm cursor-pointer relative overflow-hidden"
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = service.color;
          e.currentTarget.style.boxShadow = `0 20px 60px ${service.color}30`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Expand Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: service.color }}
        >
          <FaExpand size={16} />
        </motion.div>

        {/* Top Section */}
        <div className="w-full flex justify-between items-start">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="text-5xl"
              style={{ color: service.color }}
            >
              {service.icon}
            </motion.div>
            <div className="text-5xl font-extrabold opacity-30 group-hover:opacity-50 transition-all"
              style={{ color: service.color }}
            >
              {service.num}
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white group-hover:text-gradient transition-all duration-500">
          {service.title}
        </h2>

        {/* Short Description */}
        <p className="text-base text-white/80 leading-relaxed group-hover:text-white/90 transition-all">
          {service.shortDesc}
        </p>

        {/* Technology Preview */}
        <div className="flex flex-wrap gap-2">
          {service.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 border rounded-full"
              style={{
                backgroundColor: `${service.color}10`,
                color: service.color,
                borderColor: `${service.color}30`
              }}
            >
              {tech}
            </span>
          ))}
          {service.technologies.length > 4 && (
            <span
              className="text-xs px-3 py-1 border rounded-full font-semibold"
              style={{
                backgroundColor: `${service.color}20`,
                color: service.color,
                borderColor: `${service.color}40`
              }}
            >
              +{service.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-sm font-semibold transition-all"
            style={{ color: service.color }}
          >
            Click to explore details →
          </span>
          <a
            href={service.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-[50px] h-[50px] rounded-full border flex justify-center items-center transition-all duration-500 hover:-rotate-45"
            style={{
              backgroundColor: `${service.color}20`,
              borderColor: `${service.color}40`,
              color: service.color
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = service.color;
              e.currentTarget.style.borderColor = service.color;
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `${service.color}20`;
              e.currentTarget.style.borderColor = `${service.color}40`;
              e.currentTarget.style.color = service.color;
            }}
          >
            <BsArrowUpRight className="text-xl" />
          </a>
        </div>

        {/* Decorative gradient line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 rounded-full"
          style={{ backgroundColor: service.color }}
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.5 }}
        />
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
    <section className="min-h-screen flex flex-col justify-center py-16 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">My Services</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive technical expertise across AI, web development, mobile apps, research, and team leadership
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;