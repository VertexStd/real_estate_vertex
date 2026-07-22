"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Home,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { ParallaxHero } from "@/components/animations/parallax";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { propertyTypes, locations, priceRanges } from "@/lib/data";
import { EASE_PREMIUM } from "@/lib/motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE_PREMIUM },
});

export function Hero() {
  return (
    <section
      className="relative w-full overflow-x-clip lg:min-h-[100dvh]"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <ParallaxHero className="absolute inset-0 scale-[1.04]">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
            alt="Luxury villa with infinity pool overlooking the ocean"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-[center_28%] sm:object-center"
            sizes="100vw"
            quality={80}
          />
        </ParallaxHero>
        <div className="absolute inset-0 bg-black/25" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/75"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex min-h-[100dvh] flex-col">
        <div className="flex flex-1 items-end pb-2 sm:items-center sm:pb-0">
          <div className="site-container w-full pt-24 sm:pt-28 lg:pt-32">
            <div className="max-w-4xl">
              {/* Brand as hero-level signal */}
              <motion.p
                {...fadeUp(0.2)}
                className="mb-5 font-display text-[0.7rem] font-medium tracking-[0.42em] text-white/90 sm:mb-6 sm:text-xs"
              >
                AURELIUS
              </motion.p>

              <motion.h1
                {...fadeUp(0.35)}
                className="font-display text-[2.5rem] font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-[4.75rem]"
              >
                Where Vision
                <br className="hidden sm:block" />{" "}
                Meets Address
              </motion.h1>

              <motion.p
                {...fadeUp(0.55)}
                className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-white/65 sm:mt-6 sm:text-base md:max-w-lg"
              >
                Private estates and architectural residences, quietly curated
                for a discerning few.
              </motion.p>

              <motion.div
                {...fadeUp(0.7)}
                className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:max-w-md sm:flex-row"
              >
                <Button
                  variant="gold"
                  size="lg"
                  className="h-12 w-full sm:w-auto"
                  asChild
                >
                  <a href="#properties">
                    View Residences
                    <ArrowRight size={16} aria-hidden />
                  </a>
                </Button>
                <Button
                  variant="glass"
                  size="lg"
                  className="h-12 w-full sm:w-auto"
                  asChild
                >
                  <a href="#agents">Request a Viewing</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.95, ease: EASE_PREMIUM }}
          className="site-container w-full pb-6 pt-10 sm:pb-8 sm:pt-12 lg:pb-10"
        >
          <form
            className="rounded-[1.25rem] border border-white/35 bg-[#fffcf8]/92 p-5 shadow-[0_24px_64px_-24px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:rounded-[1.5rem] sm:p-6 lg:p-7"
            onSubmit={(e) => e.preventDefault()}
            role="search"
            aria-label="Property search"
          >
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="section-eyebrow mb-1.5">Portfolio search</p>
                <h2 className="font-display text-xl font-light tracking-tight text-foreground sm:text-2xl">
                  Find a residence
                </h2>
              </div>
              <p className="hidden text-xs text-muted-foreground sm:block">
                177 private listings
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.2fr_auto] lg:items-end lg:gap-3">
              <div className="space-y-2">
                <label
                  htmlFor="hero-location"
                  className="flex items-center gap-1.5 text-[10px] font-medium tracking-[0.14em] uppercase text-muted-foreground"
                >
                  <MapPin size={12} className="text-gold" aria-hidden />
                  Location
                </label>
                <Select defaultValue="All Locations">
                  <SelectTrigger
                    id="hero-location"
                    className="h-12 min-h-12 rounded-xl border-foreground/8 bg-white"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="hero-type"
                  className="flex items-center gap-1.5 text-[10px] font-medium tracking-[0.14em] uppercase text-muted-foreground"
                >
                  <Home size={12} className="text-gold" aria-hidden />
                  Type
                </label>
                <Select defaultValue="All Types">
                  <SelectTrigger
                    id="hero-type"
                    className="h-12 min-h-12 rounded-xl border-foreground/8 bg-white"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="hero-price"
                  className="flex items-center gap-1.5 text-[10px] font-medium tracking-[0.14em] uppercase text-muted-foreground"
                >
                  <DollarSign size={12} className="text-gold" aria-hidden />
                  Price
                </label>
                <Select defaultValue="Any Price">
                  <SelectTrigger
                    id="hero-price"
                    className="h-12 min-h-12 rounded-xl border-foreground/8 bg-white"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                <label
                  htmlFor="hero-keywords"
                  className="flex items-center gap-1.5 text-[10px] font-medium tracking-[0.14em] uppercase text-muted-foreground"
                >
                  <Search size={12} className="text-gold" aria-hidden />
                  Keywords
                </label>
                <Input
                  id="hero-keywords"
                  placeholder="Ocean view, pool…"
                  className="h-12 min-h-12 rounded-xl border-foreground/8 bg-white"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                className="mt-1 h-12 min-h-12 w-full rounded-xl text-[11px] tracking-[0.12em] uppercase sm:col-span-2 lg:col-span-1 lg:mt-0"
              >
                <Search size={15} aria-hidden />
                Search
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
