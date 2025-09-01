"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";

export const Meteors = ({
  number = 15, // Reduced default for better performance
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);
  const meteors = new Array(number).fill(true);
  
  const handleMount = useCallback(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    handleMount();
    
    // Get window width for full screen coverage
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    return () => window.removeEventListener('resize', updateWidth);
  }, [handleMount]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {meteors.map((el, idx) => {
          const meteorCount = number;
          // Calculate position to evenly distribute meteors across full screen width
          const position = idx * (windowWidth / meteorCount);
          
          // Wedding theme colors
          const colors = [
            "#FF9EBB", // Pink
            "#C29DF2", // Purple
            "#8BC34A", // Green
            "#4CBFAD", // Teal
            "#FFD93D", // Yellow
            "#FF7B54", // Orange
            "#E63946", // Red
          ];
          const colorIndex = idx % colors.length;
          const color = colors[colorIndex];

          return (
            <span
              key={"meteor" + idx}
              className={cn(
                "animate-meteor-effect absolute h-1 w-1 rotate-[45deg] rounded-[9999px] shadow-[0_0_0_1px_#ffffff10]",
                "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:content-['']",
                className,
              )}
              style={{
                top: "-40px", // Start above the container
                left: position + "px",
                backgroundColor: color,
                animationDelay: isMounted ? `${Math.random() * 5}s` : `${(idx * 0.2) % 5}s`,
                animationDuration: isMounted ? `${Math.floor(Math.random() * (10 - 5) + 5)}s` : "5s",
                zIndex: 1000,
                willChange: "transform, opacity", // Performance optimization
              }}
            ></span>
          );
        })}
      </motion.div>
    </div>
  );
}; 