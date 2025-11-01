import { motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reversed index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  // Define gradient colors for each stair
  const gradientColors = [
    "bg-gradient-to-br from-[#06b6d4] to-[#0891b2]", // Cyan
    "bg-gradient-to-br from-[#0891b2] to-[#0e7490]", // Darker cyan
    "bg-gradient-to-br from-[#0e7490] to-[#3b82f6]", // Cyan to blue
    "bg-gradient-to-br from-[#3b82f6] to-[#2563eb]", // Blue
    "bg-gradient-to-br from-[#2563eb] to-[#1e40af]", // Darker blue
    "bg-gradient-to-br from-[#1e40af] to-[#0f172a]", // Blue to dark
  ];

  return (
    <>
      {/* Render motion divs, each representing a step of stairs.
      
      Each div will have the same animation defined by the stairAnimation object.
      The delay for each div is calculated automatically based on its reversed index,
      creating a staggered effect with decreasing delay for each subsequent step. */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className={`h-full w-full ${gradientColors[index]} relative`}
          />
        );
      })}
    </>
  );
};

export default Stairs;