"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_OUT, EASE_PREMIUM } from "@/lib/motion";

interface RevealImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  delay?: number;
}

export function RevealImage({
  src,
  alt,
  fill = true,
  width,
  height,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  quality = 75,
  delay = 0,
}: RevealImageProps) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });

  const image = (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={cn("object-cover", imageClassName)}
      sizes={sizes}
      priority={priority}
      quality={quality}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );

  if (reduceMotion) {
    return (
      <div ref={ref} className={cn("relative overflow-hidden", className)}>
        {image}
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 z-[1] bg-background"
        initial={{ scaleY: 1 }}
        animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
        transition={{ duration: 0.75, delay, ease: EASE_PREMIUM }}
        style={{ originY: 0 }}
        aria-hidden
      />
      <motion.div
        className={cn(
          fill ? "absolute inset-0" : "relative h-full w-full",
          "will-change-transform"
        )}
        initial={{ scale: 1.06, opacity: 0 }}
        animate={
          isInView ? { scale: 1, opacity: 1 } : { scale: 1.06, opacity: 0 }
        }
        transition={{ duration: 0.9, delay: delay + 0.04, ease: EASE_OUT }}
      >
        {image}
      </motion.div>
    </div>
  );
}
