"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef, type ReactNode } from "react";

interface ParallaxHeroProps {
  children: ReactNode;
  className?: string;
}

export function ParallaxHero({ children, className }: ParallaxHeroProps) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => setEnabled(mq.matches && !reduceMotion);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduceMotion]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  if (!enabled) {
    return (
      <div ref={ref} className={className}>
        <div className="h-full w-full">{children}</div>
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ y, opacity, scale }}
        className="h-full w-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
