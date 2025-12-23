"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showQuickContact, setShowQuickContact] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform values for parallax effect
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 16]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
      }}
      style={{
        backdropFilter: `blur(${headerBlur}px)`,
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0f172a]/95 border-b border-[#06b6d4]/30 shadow-2xl shadow-[#06b6d4]/10 py-3 xl:py-4' 
          : 'bg-[#0f172a]/80 border-b border-[#06b6d4]/20 shadow-lg py-6 xl:py-8'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center text-white px-6">
        {/* Logo with Dynamic Effects */}
        <Link href="/" className="group relative">
          <motion.h1 
            className={`font-bold tracking-tight transition-all duration-300 ${
              isScrolled ? 'text-3xl xl:text-4xl' : 'text-4xl xl:text-5xl'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="group-hover:text-gradient transition-all">R</span>
            <motion.span 
              className="text-gradient"
              animate={{ 
                opacity: [1, 0.5, 1],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              !
            </motion.span>
            <span className="group-hover:text-gradient transition-all">fat</span>
            <span className="text-gradient">.</span>
          </motion.h1>
          
          {/* Animated underline */}
          <motion.span 
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />

          {/* Floating particles effect on hover */}
          <motion.div
            className="absolute -top-2 -right-2 w-2 h-2 bg-[#06b6d4] rounded-full opacity-0 group-hover:opacity-100"
            animate={{
              y: [-5, -15, -5],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </Link>

        {/* Desktop Nav & Actions */}
        <div className="hidden xl:flex items-center gap-6">
          <Nav />
          
          {/* Quick Contact Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowQuickContact(!showQuickContact)}
            className="relative p-2 rounded-full border border-[#06b6d4]/30 hover:border-[#06b6d4] transition-all group"
          >
            <FiMail className="text-[#06b6d4] text-xl group-hover:scale-110 transition-transform" />
            
            {/* Notification dot */}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-0 right-0 w-2 h-2 bg-[#06b6d4] rounded-full"
            />
          </motion.button>

          {/* Hire Me Button with Enhanced Effects */}
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="relative bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white hover:from-[#0891b2] hover:to-[#2563eb] transition-all duration-300 shadow-lg hover:shadow-[#06b6d4]/50 border-none overflow-hidden group"
                size="lg"
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: [-200, 200],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
                <span className="relative z-10 font-semibold">Hire Me</span>
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>

      {/* Quick Contact Dropdown */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{
          opacity: showQuickContact ? 1 : 0,
          y: showQuickContact ? 0 : -20,
          scale: showQuickContact ? 1 : 0.95,
          pointerEvents: showQuickContact ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="absolute right-6 top-full mt-2 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-[#06b6d4]/30 rounded-xl shadow-2xl shadow-[#06b6d4]/20 p-4 min-w-[280px] hidden xl:block"
      >
        <h3 className="text-sm font-semibold text-[#06b6d4] mb-3">Quick Contact</h3>
        
        <div className="space-y-3">
          {/* Email */}
          <a
            href="mailto:muhammad.rifat.islam31@gmail.com"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#06b6d4]/20 to-[#3b82f6]/20 flex items-center justify-center group-hover:from-[#06b6d4] group-hover:to-[#3b82f6] transition-all">
              <FiMail className="text-[#06b6d4] group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-white/50">Email</p>
              <p className="text-sm text-white/90 truncate">muhammad.rifat.islam31@gmail.com</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+8801728977294"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#06b6d4]/20 to-[#3b82f6]/20 flex items-center justify-center group-hover:from-[#06b6d4] group-hover:to-[#3b82f6] transition-all">
              <FiPhone className="text-[#06b6d4] group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-white/50">Phone</p>
              <p className="text-sm text-white/90">(+880) 1728-977294</p>
            </div>
          </a>

          {/* Social Links */}
          <div className="pt-3 border-t border-white/10">
            <p className="text-xs text-white/50 mb-2">Connect</p>
            <div className="flex gap-2">
              <a
                href="https://github.com/Md-Rifat-Islam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-2 rounded-lg bg-gradient-to-r from-[#06b6d4]/10 to-[#3b82f6]/10 hover:from-[#06b6d4]/20 hover:to-[#3b82f6]/20 border border-[#06b6d4]/20 hover:border-[#06b6d4] transition-all flex items-center justify-center gap-2"
              >
                <BsGithub className="text-[#06b6d4]" />
                <span className="text-xs text-white/80">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-rifat-islam-9ab376230"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-2 rounded-lg bg-gradient-to-r from-[#06b6d4]/10 to-[#3b82f6]/10 hover:from-[#06b6d4]/20 hover:to-[#3b82f6]/20 border border-[#06b6d4]/20 hover:border-[#06b6d4] transition-all flex items-center justify-center gap-2"
              >
                <BsLinkedin className="text-[#06b6d4]" />
                <span className="text-xs text-white/80">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Click outside to close */}
      {showQuickContact && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowQuickContact(false)}
        />
      )}

      {/* Progress bar at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#06b6d4] via-[#3b82f6] to-[#06b6d4]"
        style={{
          scaleX: useTransform(scrollY, [0, 1000], [0, 1]),
          transformOrigin: "left",
        }}
      />
    </motion.header>
  );
};

export default Header;