"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  distance?: number;
}

export default function FloatingElement({ 
  children, 
  duration = 3, 
  delay = 0, 
  distance = 15 
}: FloatingProps) {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
}