"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_PREMIUM } from "@/lib/motion";

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  lift?: number;
  as?: "div" | "article";
}

export function MotionCard({
  children,
  className,
  lift = 6,
  as = "div",
}: MotionCardProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = as === "article" ? motion.article : motion.div;

  return (
    <MotionTag
      className={cn("will-change-transform", className)}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.992 }}
      animate="rest"
      variants={{
        rest: {
          y: 0,
          boxShadow: "0 4px 24px -6px rgba(0, 0, 0, 0.06)",
        },
        hover: {
          y: -lift,
          boxShadow: "0 22px 48px -18px rgba(0, 0, 0, 0.14)",
          transition: { duration: 0.45, ease: EASE_PREMIUM },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
