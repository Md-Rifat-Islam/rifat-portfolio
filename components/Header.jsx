"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
      }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0f172a]/80 border-b border-[#06b6d4]/20 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center py-6 xl:py-8 text-white">
        {/* Logo */}
        <Link href="/" className="group relative">
          <h1 className="text-4xl xl:text-5xl font-bold tracking-tight transition-all duration-300">
            <span className="group-hover:text-gradient transition-all">R</span>
            <span className="text-gradient animate-pulse">!</span>
            <span className="group-hover:text-gradient transition-all">fat</span>
            <span className="text-gradient">.</span>
          </h1>
          
          {/* Decorative underline on hover */}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Desktop Nav & Hire Button */}
        <div className="hidden xl:flex items-center gap-10">
          <Nav />
          <Link href="/contact">
            <Button
              className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white hover:from-[#0891b2] hover:to-[#2563eb] transition-all duration-300 shadow-lg hover:shadow-[#06b6d4]/50 hover:scale-105 border-none"
              size="lg"
            >
              Hire Me
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;