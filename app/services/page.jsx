"use client";

import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "AI & Machine Learning Engineering",
    description: `I design and deploy intelligent systems that connect data, models, and people.
    - Develop deep learning and NLP-based solutions.
    - Work with LLMs, Prompt Engineering, and RAG pipelines.
    - Build AI chatbots, data classifiers, and analytics tools.
    - Integrate AI services (OpenAI, Azure, LangChain) into production systems.
    I transform research-driven ideas into practical, AI-powered applications.`,
    href: "https://github.com/Md-Rifat-Islam",
  },
  {
    num: "02",
    title: "Full Stack Web Development",
    description: `I craft robust and scalable full-stack applications with modern frameworks.
    - Build dynamic frontends using React.js, Next.js, and Tailwind CSS.
    - Develop secure backends with Django, REST APIs, and PostgreSQL.
    - Design data-driven dashboards and B2B SaaS solutions.
    - Implement authentication, caching, and performance optimization.
    I deliver high-performance web apps tailored for real-world business needs.`,
    href: "https://github.com/Md-Rifat-Islam",
  },
  {
    num: "03",
    title: "Flutter & Cross-Platform App Development",
    description: `I build high-performance cross-platform mobile apps with Flutter.
    - Create intuitive UIs and smooth user experiences.
    - Integrate APIs, Firebase, and IoT sensors.
    - Optimize app performance and state management.
    - Deliver solutions that work seamlessly across Android, iOS, and web.
    I focus on scalable mobile-first architectures that users love.`,
    href: "https://github.com/Md-Rifat-Islam",
  },
  {
    num: "04",
    title: "AI Research & Innovation",
    description: `I explore emerging AI technologies and bring research into application.
    - Conduct research in NLP, Deep Learning, and Generative AI.
    - Author and co-author academic publications in IEEE and ACM conferences.
    - Work with tools like TensorFlow, PyTorch, and HuggingFace.
    - Experiment with LLMs and multimodal AI for real-world impact.
    I combine academic rigor with creative experimentation to push boundaries.`,
    href: "https://scholar.google.com/",
  },
  {
    num: "05",
    title: "Technical Leadership & Mentorship",
    description: `I lead small engineering teams to deliver reliable, maintainable software.
    - Manage agile sprints and ensure cross-functional collaboration.
    - Guide developers and students in full-stack and AI projects.
    - Balance innovation with clarity and execution discipline.
    - Focus on mentorship, scalability, and long-term technical vision.
    I believe great software is built through teamwork, clarity, and ownership.`,
    href: "https://www.linkedin.com/in/muhammad-rifat-islam-9ab376230/",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      {/* <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 bg-gradient-to-b"> */}
        <div className="container mx-auto px-6 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-6 group border border-white/10 rounded-2xl p-8 hover:border-accent hover:shadow-xl transition-all duration-500 bg-white/5 backdrop-blur-sm"
            >
              {/* Top Section */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-accent opacity-90">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  target="_blank"
                  className="w-[60px] h-[60px] rounded-full bg-accent/10 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowUpRight className="text-accent text-2xl group-hover:text-white transition-all" />
                </Link>
              </div>

              {/* Title */}
              <h2 className="text-[30px] md:text-[34px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              {/* Description */}
              <div className="space-y-2">
                {service.description.split("\n").map((line, i) => (
                  <p
                    key={i}
                    className="text-base text-white/80 leading-relaxed tracking-wide"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
