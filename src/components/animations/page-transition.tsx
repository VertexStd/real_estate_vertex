"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { EASE_PREMIUM } from "@/lib/motion";

export function PageTransition({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  );
}
