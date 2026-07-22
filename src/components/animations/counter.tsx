"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1600,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = (n: number) =>
      `${prefix}${decimals > 0 ? n.toFixed(decimals) : Math.floor(n).toString()}${suffix}`;

    if (reduceMotion || !isInView) {
      if (isInView || reduceMotion) el.textContent = format(value);
      return;
    }

    let startTime: number | undefined;
    let frame: number;

    const animate = (timestamp: number) => {
      if (startTime === undefined) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = format(eased * value);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration, decimals, prefix, suffix, reduceMotion]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {reduceMotion ? (decimals > 0 ? value.toFixed(decimals) : value) : "0"}
      {suffix}
    </span>
  );
}
