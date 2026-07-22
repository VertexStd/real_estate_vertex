"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_PREMIUM, EASE_SOFT } from "@/lib/motion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
}

const directionOffset = {
  up: { y: 22 },
  down: { y: -22 },
  left: { x: 22 },
  right: { x: -22 },
  none: {},
};

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.7,
  direction = "up",
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once, margin: "-8% 0px" });

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionOffset[direction] }
      }
      transition={{ duration, delay, ease: EASE_PREMIUM }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.09,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once, margin: "-6% 0px" });

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: EASE_PREMIUM },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

interface StaggerTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function StaggerText({
  text,
  className,
  delay = 0,
  as: Tag = "h1",
}: StaggerTextProps) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-4% 0px" });
  const words = text.split(" ");

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <div ref={ref}>
      <Tag className={cn("flex flex-wrap", className)} aria-label={text}>
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="mr-[0.22em] overflow-hidden last:mr-0"
          >
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "105%", opacity: 0 }}
              animate={
                isInView ? { y: 0, opacity: 1 } : { y: "105%", opacity: 0 }
              }
              transition={{
                duration: 0.6,
                delay: delay + i * 0.06,
                ease: EASE_SOFT,
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
