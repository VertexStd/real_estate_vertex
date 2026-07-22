"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { communities } from "@/lib/data";

const EASE = [0.25, 0.4, 0.25, 1] as const;

function CommunityCard({
  community,
  index,
}: {
  community: (typeof communities)[number];
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const spring = { stiffness: 100, damping: 22, mass: 0.4 };
  const x = useSpring(mouseX, spring);
  const y = useSpring(mouseY, spring);
  const imageX = useTransform(x, [0, 1], ["3%", "-3%"]);
  const imageY = useTransform(y, [0, 1], ["2.5%", "-2.5%"]);

  return (
    <motion.a
      ref={ref}
      href="#properties"
      onMouseMove={(e) => {
        if (window.matchMedia("(pointer: coarse)").matches) return;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
      }}
      onMouseLeave={() => {
        mouseX.set(0.5);
        mouseY.set(0.5);
      }}
      className="group relative block aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-[3/4] sm:rounded-[1.75rem]"
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.35, ease: EASE }}
      aria-label={`Explore ${community.name}, ${community.properties} properties`}
    >
      <motion.div className="absolute inset-[-8%]" style={{ x: imageX, y: imageY }}>
        <Image
          src={community.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          quality={75}
          loading="lazy"
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10"
        aria-hidden
      />

      <span
        className="absolute left-4 top-4 font-display text-4xl font-light text-white/15 sm:left-5 sm:top-5 sm:text-5xl"
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="absolute inset-x-0 bottom-0 flex flex-col p-5 sm:p-6">
        <p className="mb-1 text-[11px] font-medium tracking-[0.18em] uppercase text-white/55">
          {community.properties} Properties
        </p>
        <h3 className="font-display text-[1.5rem] font-medium tracking-tight text-white sm:text-2xl">
          {community.name}
        </h3>
        <p className="mt-2 text-sm text-white/65 sm:max-h-0 sm:overflow-hidden sm:opacity-0 sm:transition-all sm:duration-500 sm:group-hover:max-h-16 sm:group-hover:opacity-100">
          {community.description}
        </p>
        <span className="mt-4 inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-[11px] font-medium tracking-[0.12em] uppercase text-white backdrop-blur-md transition-colors active:bg-gold sm:group-hover:border-gold/50 sm:group-hover:bg-gold">
          Explore
          <ArrowRight size={13} aria-hidden />
        </span>
      </div>
    </motion.a>
  );
}

export function PremiumCommunities() {
  return (
    <section id="communities" className="section-space bg-background">
      <div className="site-container">
        <SectionHeader
          align="split"
          eyebrow="Neighborhoods"
          title="Places of distinction"
          description="Four Dubai communities where we maintain an enduring presence."
        />

        <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {communities.map((community, index) => (
            <StaggerItem key={community.name}>
              <CommunityCard community={community} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
