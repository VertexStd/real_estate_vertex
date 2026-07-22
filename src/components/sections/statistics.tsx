"use client";

import {
  StaggerContainer,
  StaggerItem,
  FadeIn,
} from "@/components/animations/fade-in";
import { AnimatedCounter } from "@/components/animations/counter";
import { statistics } from "@/lib/data";

export function Statistics() {
  return (
    <section className="section-space relative overflow-x-clip bg-foreground">
      <div className="site-container relative z-10">
        <FadeIn className="mb-12 max-w-xl lg:mb-16">
          <p className="section-eyebrow mb-3 md:mb-4">Proven Quietly</p>
          <h2 className="section-title text-white">
            Three decades of considered transactions
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 gap-x-4 gap-y-10 border-t border-white/10 pt-10 sm:gap-8 lg:grid-cols-4 lg:pt-12">
          {statistics.map((stat, i) => (
            <StaggerItem key={stat.label}>
              <div
                className={`pr-2 ${i > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""}`}
              >
                <p className="font-display text-[2rem] font-light tabular-nums tracking-tight text-white sm:text-4xl lg:text-[3.25rem]">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </p>
                <p className="mt-3 max-w-[10rem] text-[11px] leading-snug tracking-[0.12em] uppercase text-white/40">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
