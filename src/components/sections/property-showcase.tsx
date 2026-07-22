"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { showcaseProperty } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export function PropertyShowcase() {
  const [activeImage, setActiveImage] = useState(0);
  const total = showcaseProperty.images.length;

  const next = () => setActiveImage((prev) => (prev + 1) % total);
  const prev = () => setActiveImage((p) => (p - 1 + total) % total);

  return (
    <section id="showcase" className="section-space overflow-x-hidden bg-foreground">
      <div className="site-container">
        <SectionHeader
          light
          eyebrow="Signature Residence"
          title="Villa Serenity"
          description="A Pacific Palisades masterwork — light, horizon, and absolute privacy."
        />

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={showcaseProperty.images[activeImage]}
                      alt={`${showcaseProperty.title}, view ${activeImage + 1} of ${total}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={75}
                      loading="lazy"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 sm:p-4">
                  <button
                    type="button"
                    onClick={prev}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} aria-hidden />
                  </button>
                  <div className="flex gap-1.5" role="tablist" aria-label="Gallery slides">
                    {showcaseProperty.images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        role="tab"
                        aria-selected={i === activeImage}
                        onClick={() => setActiveImage(i)}
                        className={`h-2 rounded-full transition-all ${
                          i === activeImage ? "w-7 bg-gold" : "w-2 bg-white/40"
                        }`}
                        aria-label={`Show image ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={next}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} aria-hidden />
                  </button>
                </div>
              </div>

              <div className="mt-3 hidden grid-cols-4 gap-2 sm:grid sm:gap-2.5">
                {showcaseProperty.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`relative aspect-video overflow-hidden rounded-xl transition-opacity ${
                      i === activeImage
                        ? "opacity-100 ring-2 ring-gold"
                        : "opacity-50"
                    }`}
                    aria-label={`Thumbnail ${i + 1}`}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="120px"
                      quality={60}
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div>
              <p className="section-eyebrow mb-3">{showcaseProperty.subtitle}</p>
              <h3 className="font-display text-[1.75rem] font-light text-white sm:text-3xl lg:text-4xl">
                {showcaseProperty.title}
              </h3>
              <p className="mt-2 text-sm text-white/50 sm:text-base">
                {showcaseProperty.location}
              </p>
              <p className="mt-5 font-display text-[1.75rem] text-gold sm:mt-6 sm:text-3xl">
                {formatPrice(showcaseProperty.price)}
              </p>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-white/65 sm:mt-6 sm:text-base">
                {showcaseProperty.description}
              </p>

              <ul className="mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2">
                {showcaseProperty.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-white/60"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20">
                      <Check size={11} className="text-gold" aria-hidden />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
                <Button variant="gold" size="lg" className="h-12 w-full sm:w-auto">
                  Schedule Private Tour
                </Button>
                <Button variant="glass" size="lg" className="h-12 w-full sm:w-auto">
                  Download Brochure
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
