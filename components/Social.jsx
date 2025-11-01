import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  { 
    icon: <FaGithub />, 
    path: "https://github.com/Md-Rifat-Islam",
    name: "GitHub",
    color: "hover:text-[#06b6d4]"
  },
  { 
    icon: <FaLinkedinIn />, 
    path: "https://www.linkedin.com/in/muhammad-rifat-islam-9ab376230/",
    name: "LinkedIn",
    color: "hover:text-[#0891b2]"
  },
  { 
    icon: <FaYoutube />, 
    path: "https://www.youtube.com/@MuhammadRifatIslam",
    name: "YouTube",
    color: "hover:text-[#3b82f6]"
  },
  { 
    icon: <FaTwitter />, 
    path: "https://twitter.com/yourusername",
    name: "Twitter",
    color: "hover:text-[#2563eb]"
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        // Skip rendering if path is empty
        if (!item.path) return null;
        
        return (
          <Link 
            key={index} 
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconStyles} group relative`}
            aria-label={item.name}
          >
            <span className="relative z-10 transition-all duration-300 group-hover:scale-110">
              {item.icon}
            </span>
            
            {/* Gradient glow effect on hover */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#06b6d4]/0 to-[#3b82f6]/0 group-hover:from-[#06b6d4]/20 group-hover:to-[#3b82f6]/20 transition-all duration-300 blur-sm"></span>
            
            {/* Optional: Tooltip on hover */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
              {item.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;