"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/fade-in";
import { MotionCard } from "@/components/animations/motion-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { agents } from "@/lib/data";
import { EASE_PREMIUM } from "@/lib/motion";

function AgentCard({ agent }: { agent: (typeof agents)[number] }) {
  return (
    <MotionCard
      as="article"
      className="group flex h-full flex-col items-center rounded-[1.5rem] border border-foreground/[0.06] bg-white px-5 pb-7 pt-8 text-center sm:rounded-[1.75rem] sm:px-6 sm:pb-8 sm:pt-9"
      lift={5}
    >
      <motion.div
        className="relative mb-5 h-28 w-28 overflow-hidden rounded-full ring-1 ring-foreground/5 sm:mb-6 sm:h-36 sm:w-36"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.45, ease: EASE_PREMIUM }}
      >
        <Image
          src={agent.image}
          alt={`Portrait of ${agent.name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="144px"
          quality={70}
          loading="lazy"
        />
      </motion.div>

      <div
        className="mb-4 h-px w-6 bg-gold/45 transition-all duration-500 group-hover:w-11 group-hover:bg-gold"
        aria-hidden
      />

      <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
        {agent.name}
      </h3>
      <p className="mt-1.5 text-[11px] font-medium tracking-[0.16em] uppercase text-gold">
        {agent.role}
      </p>
      <p className="mt-3 text-sm text-muted-foreground">{agent.experience}</p>

      <div
        className="mt-4 flex items-center gap-1.5"
        aria-label={`Rated ${agent.rating} out of 5`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            className={
              i < Math.round(agent.rating)
                ? "fill-gold text-gold"
                : "fill-foreground/10 text-foreground/10"
            }
            aria-hidden
          />
        ))}
        <span className="ml-0.5 text-xs font-medium tabular-nums text-foreground/70">
          {agent.rating.toFixed(1)}
        </span>
      </div>

      <Button
        variant="outline"
        className="mt-6 h-12 w-full rounded-full border-foreground/10 text-[11px] font-medium tracking-[0.12em] uppercase group-hover:border-gold/40 group-hover:bg-gold group-hover:text-white sm:mt-7"
      >
        <MessageCircle size={15} strokeWidth={1.75} aria-hidden />
        Contact
      </Button>
    </MotionCard>
  );
}

export function MeetTheAgents() {
  return (
    <section id="agents" className="section-space bg-background">
      <div className="site-container">
        <SectionHeader
          eyebrow="Advisors"
          title="People behind the introductions"
          description="Specialists who treat every acquisition with discretion and precision."
        />

        <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {agents.map((agent) => (
            <StaggerItem key={agent.name} className="h-full">
              <AgentCard agent={agent} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
