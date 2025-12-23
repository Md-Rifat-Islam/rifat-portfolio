import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  { 
    icon: <FaGithub />, 
    path: "https://github.com/Md-Rifat-Islam",
    name: "GitHub",
    color: "#06b6d4",
    hoverColor: "hover:text-[#06b6d4]",
    followers: "250+",
    description: "Open source projects"
  },
  { 
    icon: <FaLinkedinIn />, 
    path: "https://www.linkedin.com/in/muhammad-rifat-islam-9ab376230/",
    name: "LinkedIn",
    color: "#0891b2",
    hoverColor: "hover:text-[#0891b2]",
    followers: "500+",
    description: "Professional network"
  },
  { 
    icon: <FaYoutube />, 
    path: "https://www.youtube.com/@MuhammadRifatIslam",
    name: "YouTube",
    color: "#3b82f6",
    hoverColor: "hover:text-[#3b82f6]",
    followers: "1K+",
    description: "Tech tutorials"
  },
  { 
    icon: <FaTwitter />, 
    path: "https://twitter.com/yourusername",
    name: "Twitter",
    color: "#2563eb",
    hoverColor: "hover:text-[#2563eb]",
    followers: "300+",
    description: "Tech insights"
  },
];

const Social = ({ containerStyles, iconStyles, showTooltip = true, animated = true }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        // Skip rendering if path is empty
        if (!item.path) return null;
        
        const SocialLink = (
          <Link 
            key={index} 
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconStyles} group relative overflow-hidden`}
            aria-label={item.name}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Icon */}
            <motion.span 
              className="relative z-10 transition-all duration-300"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
            </motion.span>
            
            {/* Animated background circle */}
            <motion.span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{
                background: `radial-gradient(circle, ${item.color}20, transparent 70%)`
              }}
              animate={hoveredIndex === index ? {
                scale: [1, 1.3, 1],
              } : {}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
            
            {/* Gradient glow ring */}
            <motion.span 
              className="absolute inset-0 rounded-full transition-all duration-300"
              style={{
                border: `2px solid ${item.color}00`,
              }}
              animate={hoveredIndex === index ? {
                borderColor: [`${item.color}00`, `${item.color}80`, `${item.color}00`],
                scale: [1, 1.2, 1],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Rotating gradient on hover */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
              style={{
                background: `conic-gradient(from 0deg, ${item.color}40, transparent, ${item.color}40)`
              }}
              animate={hoveredIndex === index ? {
                rotate: 360,
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Enhanced tooltip with stats */}
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 10,
                  scale: hoveredIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.2 }}
                className="absolute -top-24 left-1/2 -translate-x-1/2 pointer-events-none z-50"
              >
                <div 
                  className="rounded-xl p-3 shadow-2xl backdrop-blur-md border min-w-[140px]"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
                    borderColor: `${item.color}60`,
                    boxShadow: `0 10px 30px ${item.color}30`
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span 
                      className="text-lg"
                      style={{ color: item.color }}
                    >
                      {item.icon}
                    </span>
                    <p className="text-white font-semibold text-sm">{item.name}</p>
                  </div>
                  <p className="text-white/70 text-xs mb-1">{item.description}</p>
                  <div className="flex items-center gap-1">
                    <div 
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: item.color }}
                    />
                    <p className="text-white/80 text-xs font-semibold">{item.followers} followers</p>
                  </div>
                  
                  {/* Tooltip arrow */}
                  <div 
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}40, ${item.color}20)`,
                      borderRight: `1px solid ${item.color}60`,
                      borderBottom: `1px solid ${item.color}60`,
                    }}
                  />
                </div>
              </motion.div>
            )}

            {/* Particle effect on hover */}
            {hoveredIndex === index && (
              <>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{ backgroundColor: item.color }}
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    animate={{
                      x: [0, (Math.random() - 0.5) * 40],
                      y: [0, -20 - Math.random() * 20],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 1 + Math.random(),
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </>
            )}
          </Link>
        );

        if (animated) {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
            >
              {SocialLink}
            </motion.div>
          );
        }

        return SocialLink;
      })}
    </div>
  );
};

export default Social;