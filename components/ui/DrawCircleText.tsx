import React from "react";
import { motion } from "motion/react";
import { AuroraText } from "@/components/ui/aurora-text"
export const DrawCircleText = () => {
  return (
    
      <h1 className="max-w-2xl text-center text-3xl sm:text-4xl leading-snug">
        Discover{" "}
        <span className="relative inline-block">
         <AuroraText>Indian Ethnic Fashion</AuroraText>
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-18 w-full translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 2.25,
                ease: "easeInOut",
                 repeat: Infinity,
      repeatType: "loop"
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#FACC15"
              strokeWidth="3"
            />
          </svg>
        </span>{" "}
        matched to your style with simple AI tools
      </h1>
   
  );
};