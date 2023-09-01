import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeProps {
  children: ReactNode;
  direction: "right" | "left" | "up" | "down" | "zoom";
}

export function Fade({ children, direction }: FadeProps) {
  const variants = {
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
    hidden: {
      opacity: 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      scale: direction === "zoom" ? 0 : 1,
    },
  };

  return (
    <main>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={variants}
      >
        {children}
      </motion.div>
    </main>
  );
}
