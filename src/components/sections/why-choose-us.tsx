"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Users, Lock, Sparkles } from "lucide-react";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/fade-in";
import { MotionCard } from "@/components/animations/motion-card";
import { SectionHeader } from "@/components/ui/section-header";
import { whyChooseUs } from "@/lib/data";
import { EASE_PREMIUM } from "@/lib/motion";

const iconMap = {
  "badge-check": BadgeCheck,
  users: Users,
  lock: Lock,
  sparkles: Sparkles,
};

export function WhyChooseUs() {
  return (
    <section id="about" className="section-space bg-white">
      <div className="site-container">
        <SectionHeader
          eyebrow="The Aurelius Standard"
          title="Why clients stay with us"
          description="Four quiet commitments that shape every introduction, negotiation, and handover."
        />

        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <StaggerItem key={item.title} className="h-full">
                <MotionCard
                  className="group flex h-full flex-col rounded-[1.5rem] border border-foreground/[0.06] bg-background p-6 sm:rounded-[1.75rem] sm:bg-white sm:p-7 lg:p-8"
                  lift={4}
                >
                  <motion.div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/[0.04] transition-colors group-hover:bg-gold/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-foreground/75 transition-colors duration-300 group-hover:text-gold"
                      aria-hidden
                    />
                  </motion.div>
                  <h3 className="mb-2 font-display text-xl font-medium tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </MotionCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
