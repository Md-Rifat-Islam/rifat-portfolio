"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "services",
    path: "/services",
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

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-10">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname 
                ? "text-gradient border-b-2 border-[#06b6d4]" 
                : "text-white"
            } capitalize font-medium hover:text-gradient transition-all duration-300 relative group`}
          >
            {link.name}
            {/* Animated underline */}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] group-hover:w-full transition-all duration-300"></span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;