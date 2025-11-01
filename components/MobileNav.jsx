"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center group">
        <div className="relative p-2 rounded-lg border-2 border-[#06b6d4] bg-gradient-to-br from-[#06b6d4]/10 to-[#3b82f6]/10 hover:from-[#06b6d4]/20 hover:to-[#3b82f6]/20 transition-all duration-300">
          <CiMenuFries className="text-[28px] text-[#06b6d4] group-hover:text-gradient transition-all" />
        </div>
      </SheetTrigger>
      
      <SheetContent className="flex flex-col bg-gradient-to-b from-[#0f172a] to-[#1e293b] border-l border-[#06b6d4]/20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-32 mb-40 text-center text-2xl"
        >
          <Link href="/" className="group inline-block relative">
            <h1 className="text-4xl font-semibold">
              <span className="group-hover:text-gradient transition-all">Rifat</span>
              <span className="text-gradient ml-1">.</span>
            </h1>
            {/* Decorative underline */}
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] group-hover:w-full transition-all duration-300"></span>
          </Link>
        </motion.div>

        {/* Nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            const isActive = link.path === pathname;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                <Link
                  href={link.path}
                  className={`${
                    isActive
                      ? "text-gradient border-b-2 border-[#06b6d4]"
                      : "text-white"
                  } text-xl capitalize hover:text-gradient transition-all duration-300 relative group px-4 py-2`}
                >
                  {link.name}
                  
                  {/* Animated background on hover */}
                  {!isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-[#06b6d4]/0 to-[#3b82f6]/0 group-hover:from-[#06b6d4]/10 group-hover:to-[#3b82f6]/10 rounded-lg transition-all duration-300 -z-10"></span>
                  )}
                  
                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] rounded-full"
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Optional: Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="mt-auto mb-8 flex justify-center"
        >
          <div className="w-20 h-1 bg-gradient-to-r from-[#06b6d4] via-[#3b82f6] to-[#06b6d4] rounded-full"></div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;