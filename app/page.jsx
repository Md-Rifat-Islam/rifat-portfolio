"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const titles = [
    "Software Engineer",
    "AI & Full-Stack Developer",
    "App Developer",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayedText.length < currentTitle.length) {
            setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
          } else {
            // Finished typing, pause then start deleting
            setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
          }
        } else {
          // Deleting
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            // Finished deleting, move to next title
            setIsDeleting(false);
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? typingSpeed : displayedText.length === currentTitle.length ? pauseBeforeDelete : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between py-12 xl:py-20">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
          }}
          className="text-center xl:text-left order-2 xl:order-none space-y-6"
        >
          <div>
            <div className="text-5xl tracking-wide min-h-[28px]">
              <span className="text-gradient-animate">
                {displayedText}
              </span>
              <span className="text-gradient-animate animate-pulse ml-1">|</span>
            </div>
            <h1 className="text-5xl xl:text-6xl font-bold leading-tight mt-2">
              Hey there, I&apos;m <br />
              <span className="text-gradient">Muhammad Rifat Islam</span>
            </h1>
          </div>

          <p className="max-w-[520px] text-white/70 mx-auto xl:mx-0 text-lg leading-relaxed">
            I'm passionate about crafting scalable software, elegant UIs, and
            AI-driven applications. My focus lies in building impactful digital
            products that merge innovation with clean engineering.
          </p>

          {/* Buttons + Socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href="/assets/cv.pdf" download="Muhammad_Rifat_Islam_CV.pdf">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border-2 border-[#06b6d4] text-[#06b6d4] hover:bg-gradient-to-r hover:from-[#06b6d4] hover:to-[#3b82f6] hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-[#06b6d4]/50"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>

            <div className="mb-8 xl:mb-0">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-10 h-10 border-2 border-[#06b6d4] rounded-full flex justify-center items-center text-[#06b6d4] hover:bg-gradient-to-r hover:from-[#06b6d4] hover:to-[#3b82f6] hover:text-white hover:border-transparent transition-all duration-300"
              />
            </div>
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
          {/* Gradient glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/20 via-[#3b82f6]/20 to-transparent rounded-full blur-3xl group-hover:from-[#06b6d4]/30 group-hover:via-[#3b82f6]/30 transition-all duration-500 -z-10"></div>
          
          {/* Animated gradient ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#06b6d4] via-[#3b82f6] to-[#06b6d4] opacity-0 group-hover:opacity-20 blur-md transition-all duration-500 animate-spin-slow -z-10"></div>
          
          <Photo />
        </motion.div>
      </div>

      {/* Stats Section */}
      <Stats />
    </section>
  );
};

export default Home;