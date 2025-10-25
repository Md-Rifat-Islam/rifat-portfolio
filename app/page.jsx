"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
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
            <span className="text-lg tracking-wide text-accent/80">
              Software Engineer | AI & Full-Stack Developer
            </span>
            <h1 className="text-5xl xl:text-6xl font-bold leading-tight mt-2">
              Hey there, I&apos;m <br />
              <span className="text-accent">Muhammad Rifat Islam</span>
            </h1>
          </div>

          <p className="max-w-[520px] text-white/70 mx-auto xl:mx-0 text-lg leading-relaxed">
            I’m passionate about crafting scalable software, elegant UIs, and
            AI-driven applications. My focus lies in building impactful digital
            products that merge innovation with clean engineering.
          </p>

          {/* Buttons + Socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href="/cv.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>

            <div className="mb-8 xl:mb-0">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary transition-all duration-300"
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
          className="order-1 xl:order-none mb-10 xl:mb-0"
        >
          <Photo />
        </motion.div>
      </div>

      {/* Stats Section */}
      <Stats />
    </section>
  );
};

export default Home;
