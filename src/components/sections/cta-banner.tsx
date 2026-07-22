"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { RevealImage } from "@/components/animations/reveal-image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion";

export function CTABanner() {
  return (
    <section className="section-space bg-background">
      <div className="site-container">
        <FadeIn>
          <div className="relative min-h-[400px] overflow-hidden rounded-[1.25rem] sm:min-h-[440px] sm:rounded-[1.5rem] md:min-h-[480px]">
            <RevealImage
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=85"
              alt=""
              className="absolute inset-0"
              sizes="(max-width: 1280px) 100vw, 1216px"
            />
            <div
              className="absolute inset-0 z-[2] bg-gradient-to-t from-black/88 via-black/50 to-black/20 sm:bg-gradient-to-r sm:from-black/82 sm:via-black/45 sm:to-transparent"
              aria-hidden
            />

            <div className="relative z-10 flex min-h-[400px] items-end p-7 sm:min-h-[440px] sm:items-center sm:p-12 md:min-h-[480px] md:p-16 lg:p-20">
              <div className="max-w-lg">
                <motion.p
                  className="section-eyebrow mb-4 text-gold"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE_PREMIUM }}
                >
                  Private Concierge
                </motion.p>
                <motion.h2
                  className="mb-5 font-display text-[1.85rem] font-light leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.06, ease: EASE_PREMIUM }}
                >
                  Shall we find your
                  <br />
                  <span className="italic">next address?</span>
                </motion.h2>
                <motion.p
                  className="mb-8 text-[0.9375rem] leading-relaxed text-white/60 sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.12, ease: EASE_PREMIUM }}
                >
                  A confidential conversation with our advisory team —
                  no obligation, absolute discretion.
                </motion.p>
                <motion.div
                  className="flex flex-col gap-3 sm:flex-row"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.18, ease: EASE_PREMIUM }}
                >
                  <Button
                    variant="gold"
                    size="lg"
                    className="h-12 w-full sm:w-auto"
                    asChild
                  >
                    <a href="#agents">
                      Arrange a consultation
                      <ArrowRight size={16} aria-hidden />
                    </a>
                  </Button>
                  <Button
                    variant="glass"
                    size="lg"
                    className="h-12 w-full sm:w-auto"
                    asChild
                  >
                    <a href="tel:+13105550192">+1 (310) 555-0192</a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
