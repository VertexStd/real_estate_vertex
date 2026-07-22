"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/fade-in";
import { MotionCard } from "@/components/animations/motion-card";
import { SectionHeader } from "@/components/ui/section-header";
import { testimonials } from "@/lib/data";
import { EASE_PREMIUM } from "@/lib/motion";

export function Testimonials() {
  return (
    <section
      className="section-space bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="site-container">
        <SectionHeader
          id="testimonials-heading"
          eyebrow="In Their Words"
          title="Client reflections"
          description="Measured praise from those who entrusted us with consequential homes."
        />

        <StaggerContainer
          className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author} className="h-full">
              <MotionCard
                as="article"
                className="group flex h-full flex-col rounded-[1.5rem] border border-foreground/[0.06] bg-background p-6 sm:rounded-[1.75rem] sm:bg-white sm:p-7 lg:p-8"
                lift={5}
              >
                <motion.div
                  initial={{ opacity: 0.5, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE_PREMIUM }}
                >
                  <Quote
                    size={26}
                    strokeWidth={1.25}
                    className="mb-4 text-gold/30 transition-colors duration-300 group-hover:text-gold/55 sm:mb-5"
                    aria-hidden
                  />
                </motion.div>

                <div
                  className="mb-4 flex gap-1 sm:mb-5"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.05 * i,
                        duration: 0.35,
                        ease: EASE_PREMIUM,
                      }}
                    >
                      <Star
                        size={13}
                        className={
                          i < testimonial.rating
                            ? "fill-gold text-gold"
                            : "fill-foreground/10 text-foreground/10"
                        }
                        aria-hidden
                      />
                    </motion.span>
                  ))}
                </div>

                <blockquote className="mb-6 flex-1 font-display text-[1.05rem] font-light italic leading-relaxed text-foreground/85 sm:mb-7 sm:text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <footer className="flex items-center gap-3.5 border-t border-foreground/[0.06] pt-5">
                  <motion.div
                    className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-foreground/5"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                  >
                    <Image
                      src={testimonial.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="48px"
                      quality={60}
                      loading="lazy"
                    />
                  </motion.div>
                  <div className="min-w-0">
                    <cite className="not-italic font-medium text-foreground">
                      {testimonial.author}
                    </cite>
                    <p className="mt-0.5 truncate text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </footer>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
