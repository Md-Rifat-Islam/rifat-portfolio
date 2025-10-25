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
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0f172a]/70 border-b border-white/10"
    >
      <div className="container mx-auto flex justify-between items-center py-6 xl:py-8 text-white">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-4xl xl:text-5xl font-bold tracking-tight transition-all duration-300 group-hover:text-accent">
            R<span className="text-accent">!</span>fat
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav & Hire Button */}
        <div className="hidden xl:flex items-center gap-10">
          <Nav />
          <Link href="/contact">
            <Button
              className="bg-accent text-primary hover:bg-accent/80 transition-all duration-300"
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
