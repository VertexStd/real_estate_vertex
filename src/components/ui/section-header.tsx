"use client";

import type { ReactNode } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left" | "split";
  light?: boolean;
  className?: string;
  children?: ReactNode;
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
  children,
  id,
}: SectionHeaderProps) {
  if (align === "split") {
    return (
      <FadeIn
        className={cn(
          "mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end md:gap-10 lg:mb-20",
          className
        )}
      >
        <div className="max-w-xl">
          <p className="section-eyebrow mb-3 md:mb-4">{eyebrow}</p>
          <h2 id={id} className={cn("section-title", light && "text-white")}>
            {title}
          </h2>
        </div>
        {(description || children) && (
          <div className="max-w-sm md:pb-1 md:text-right">
            {description && (
              <p
                className={cn(
                  "section-lede md:ml-auto",
                  light && "text-white/50"
                )}
              >
                {description}
              </p>
            )}
            {children}
          </div>
        )}
      </FadeIn>
    );
  }

  return (
    <FadeIn
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      <p className="section-eyebrow mb-3 md:mb-4">{eyebrow}</p>
      <h2 id={id} className={cn("section-title mb-4 md:mb-5", light && "text-white")}>
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "section-lede",
            align === "center" && "mx-auto",
            light && "text-white/50"
          )}
        >
          {description}
        </p>
      )}
      {children}
    </FadeIn>
  );
}
