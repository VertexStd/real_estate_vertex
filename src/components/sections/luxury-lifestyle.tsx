"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const EASE = [0.25, 0.4, 0.25, 1] as const;

const lifestyleBlocks = [
  {
    id: 1,
    eyebrow: "Architecture",
    title: "Spaces That Inspire Extraordinary Living",
    description:
      "From floor-to-ceiling glass to sculptural interiors, every residence is chosen for architectural integrity — homes where light, proportion, and craftsmanship define the everyday.",
    cta: "Discover Residences",
    href: "#properties",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85",
    imageAlt: "Modern luxury villa with geometric glass facade",
    reverse: false,
  },
  {
    id: 2,
    eyebrow: "Lifestyle",
    title: "A Life Composed Around Elegance",
    description:
      "Private beaches, chef's kitchens, spa suites, and skyline terraces — we curate not only properties, but the rhythm of refined living that surrounds them.",
    cta: "Explore Lifestyle",
    href: "#communities",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85",
    imageAlt: "Luxury open-plan living space with ocean views",
    reverse: true,
  },
  {
    id: 3,
    eyebrow: "Sanctuary",
    title: "Where Stillness Meets the Horizon",
    description:
      "Retreat into residences designed for quiet luxury — infinity edges, cloistered courtyards, and rooms that frame the landscape like living art.",
    cta: "View Collection",
    href: "#showcase",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=85",
    imageAlt: "Luxury villa courtyard with pool",
    reverse: false,
  },
];

function LifestyleRow({
  block,
}: {
  block: (typeof lifestyleBlocks)[number];
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [parallaxOn, setParallaxOn] = useState(false);
  const isInView = useInView(rowRef, { once: true, margin: "-8% 0px" });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => setParallaxOn(mq.matches && !reduceMotion);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduceMotion]);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1.02, 1.06]);

  return (
    <div ref={rowRef} className="grid grid-cols-1 lg:grid-cols-2">
      <motion.div
        ref={imageRef}
        className={`relative min-h-[48vh] overflow-hidden sm:min-h-[56vh] lg:min-h-[78vh] ${
          block.reverse ? "lg:order-2" : "lg:order-1"
        }`}
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <motion.div
          className="absolute inset-0"
          style={parallaxOn ? { y: imageY, scale: imageScale } : undefined}
        >
          <Image
            src={block.image}
            alt={block.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={75}
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className={`flex items-center bg-white px-6 py-12 sm:px-10 sm:py-14 lg:px-16 xl:px-24 ${
          block.reverse ? "lg:order-1" : "lg:order-2"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
      >
        <div className="mx-auto w-full max-w-md">
          <p className="section-eyebrow mb-4">{block.eyebrow}</p>
          <h3 className="mb-4 font-display text-[1.75rem] font-light leading-[1.15] tracking-tight text-foreground sm:mb-5 sm:text-3xl lg:text-4xl">
            {block.title}
          </h3>
          <p className="mb-7 text-[0.9375rem] leading-relaxed text-muted-foreground sm:mb-8 sm:text-base">
            {block.description}
          </p>
          <Button variant="gold" size="lg" className="h-12 w-full sm:w-auto" asChild>
            <a href={block.href}>
              {block.cta}
              <ArrowRight size={15} aria-hidden />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export function LuxuryLifestyle() {
  return (
    <section id="lifestyle" className="w-full overflow-x-hidden bg-white">
      <div className="site-container section-space !pb-10 lg:!pb-16">
        <SectionHeader
          eyebrow="The Aurelius Life"
          title="Living, composed"
          description="Beyond square footage — the cadence of a well-considered life."
        />
      </div>
      <div>
        {lifestyleBlocks.map((block) => (
          <LifestyleRow key={block.id} block={block} />
        ))}
      </div>
    </section>
  );
}
