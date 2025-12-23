"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload, FiMail } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode, FaRobot, FaMobileAlt, FaGraduationCap } from "react-icons/fa";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

// SEO Data - UPDATED WITH CV CONTENT
const SEO_DATA = {
  name: "Muhammad Rifat Islam",
  titles: [
    "Software Engineer",
    "AI & Full-Stack Developer",
    "App Developer",
    "AI Researcher",
  ],
  description: "I am a CSE graduate from MIST and a Microsoft for Startups Founder. I specialize in building scalable software, intelligent AI-driven applications, and cross-platform mobile solutions that merge research with clean engineering.",
  keywords: "Software Engineer, AI Developer, Full-Stack Developer, Flutter Developer, Machine Learning, Next.js, Django, MIST, Microsoft for Startups",
  location: "Dhaka, Bangladesh",
  availability: "Open to opportunities"
};

// Highlight Cards Data - UPDATED WITH CV SKILLS
const HIGHLIGHTS = [
  {
    title: "AI & ML",
    description: "NLP, TensorFlow, PyTorch, Keras",
    icon: <FaRobot />,
    color: "#06b6d4"
  },
  {
    title: "Full-Stack",
    description: "Next.js, React, Django, Node.js",
    icon: <FaCode />,
    color: "#3b82f6"
  },
  {
    title: "Mobile Apps",
    description: "Flutter, Firebase, REST APIs",
    icon: <FaMobileAlt />,
    color: "#8b5cf6"
  },
  {
    title: "Research",
    description: "4 Publications, Best Paper Award",
    icon: <FaGraduationCap />,
    color: "#f59e0b"
  }
];

const Home = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Typing animation effect
  useEffect(() => {
    const currentTitle = SEO_DATA.titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseBeforeDelete = 2000;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentTitle.length) {
            setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentTitleIndex((prev) => (prev + 1) % SEO_DATA.titles.length);
          }
        }
      },
      isDeleting ? typingSpeed : displayedText.length === currentTitle.length ? pauseBeforeDelete : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <>
      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h1>{SEO_DATA.name} - {SEO_DATA.titles.join(", ")}</h1>
        <p>{SEO_DATA.description}</p>
      </div>

      <section className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#0f172a] to-[#1e293b] overflow-hidden">
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between py-12 xl:py-20 px-6">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
            }}
            className="text-center xl:text-left order-2 xl:order-none space-y-6 max-w-2xl"
          >
            {/* Typing Animation */}
            <div>
              <div className="text-3xl md:text-4xl xl:text-5xl tracking-wide min-h-[48px] md:min-h-[56px]">
                <span className="text-gradient-animate font-semibold">
                  {displayedText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-gradient-animate ml-1"
                >
                  |
                </motion.span>
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mt-4">
                Hey there, I&apos;m <br />
                <span className="text-gradient">{SEO_DATA.name}</span>
              </h1>
              {/* Added Subtitle for Startup Recognition */}
              <p className="text-[#06b6d4] font-semibold tracking-widest uppercase text-sm mt-2">
                Microsoft for Startups Founder
              </p>
            </div>

            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              {SEO_DATA.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="/assets/muhammad_rifat_islam.pdf" download="Muhammad_Rifat_Islam_CV.pdf" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full uppercase flex items-center justify-center gap-2 border-2 border-[#06b6d4] text-[#06b6d4] hover:bg-gradient-to-r hover:from-[#06b6d4] hover:to-[#3b82f6] hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-[#06b6d4]/50"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <a href="mailto:muhammad.rifat.islam31@gmail.com" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] hover:from-[#0891b2] hover:to-[#2563eb] text-white transition-all duration-300 shadow-lg hover:shadow-[#06b6d4]/50 flex items-center justify-center gap-2"
                >
                  <span>Get In Touch</span>
                  <FiMail className="text-xl" />
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center xl:justify-start">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-10 h-10 border-2 border-[#06b6d4] rounded-full flex justify-center items-center text-[#06b6d4] hover:bg-gradient-to-r hover:from-[#06b6d4] hover:to-[#3b82f6] hover:text-white hover:border-transparent transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.5, duration: 0.6, ease: "easeOut" },
            }}
            className="order-1 xl:order-none mb-10 xl:mb-0 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/20 via-[#3b82f6]/20 to-transparent rounded-full blur-3xl group-hover:from-[#06b6d4]/30 group-hover:via-[#3b82f6]/30 transition-all duration-500 -z-10"></div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#06b6d4] via-[#3b82f6] to-[#06b6d4] opacity-0 group-hover:opacity-20 blur-md transition-all duration-500 -z-10"
            ></motion.div>
            
            <Photo />
          </motion.div>
        </div>

        {/* Quick Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="container mx-auto px-6 pb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {HIGHLIGHTS.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#06b6d4] transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl mb-2 group-hover:scale-110 transition-transform"
                    style={{ color: highlight.color }}
                  >
                    {highlight.icon}
                  </motion.div>
                  <h3 className="font-semibold text-white text-sm md:text-base">
                    {highlight.title}
                  </h3>
                  <p className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <Stats />

        {/* Background Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 left-10 w-72 h-72 bg-[#06b6d4]/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"
          />
        </div>
      </section>
    </>
  );
};

export default Home;