"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bed,
  Bath,
  Maximize,
  MapPin,
  Star,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/fade-in";
import { MotionCard } from "@/components/animations/motion-card";
import { RevealImage } from "@/components/animations/reveal-image";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { featuredProperties } from "@/lib/data";
import { cn, formatPrice } from "@/lib/utils";
import { EASE_PREMIUM } from "@/lib/motion";

function PropertyCard({
  property,
}: {
  property: (typeof featuredProperties)[number];
}) {
  const [favorited, setFavorited] = useState(false);

  return (
    <MotionCard
      as="article"
      className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-foreground/[0.05] bg-card sm:rounded-[1.5rem]"
      lift={6}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <RevealImage
          src={property.image}
          alt={property.title}
          className="absolute inset-0"
          imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/45 via-transparent to-transparent"
          aria-hidden
        />

        <Badge
          variant="glass"
          className="absolute left-3 top-3 z-10 tracking-[0.12em] sm:left-4 sm:top-4"
        >
          {property.tag}
        </Badge>

        <motion.button
          type="button"
          aria-label={favorited ? "Remove from favorites" : "Save property"}
          aria-pressed={favorited}
          onClick={() => setFavorited((prev) => !prev)}
          className={cn(
            "absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md sm:right-4 sm:top-4 sm:h-12 sm:w-12",
            favorited
              ? "border-gold/40 bg-gold text-white"
              : "border-white/30 bg-white/20 text-white"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.25, ease: EASE_PREMIUM }}
        >
          <Heart
            size={17}
            className={cn(favorited && "fill-current")}
            strokeWidth={1.75}
            aria-hidden
          />
        </motion.button>

        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-2.5 py-1 backdrop-blur-md sm:bottom-4 sm:left-4">
          <Star size={11} className="fill-gold text-gold" aria-hidden />
          <span className="text-[11px] font-medium tabular-nums text-white">
            {property.rating.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-[1.2rem] font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-gold sm:text-[1.3rem]">
              {property.title}
            </h3>
            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin size={13} className="shrink-0 text-gold" aria-hidden />
              <span className="truncate">{property.location}</span>
            </p>
          </div>
          <p className="shrink-0 font-display text-lg font-medium tabular-nums text-ink-soft">
            {formatPrice(property.price)}
          </p>
        </div>

        <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-foreground/[0.05] py-3.5 text-[13px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Bed size={14} className="text-gold" aria-hidden />
            {property.beds}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={14} className="text-gold" aria-hidden />
            {property.baths}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize size={14} className="text-gold" aria-hidden />
            {property.sqft.toLocaleString()} ft²
          </span>
        </div>

        <Button
          variant="outline"
          className="mt-auto h-12 w-full rounded-full border-foreground/10 text-[11px] font-medium tracking-[0.14em] uppercase transition-colors group-hover:border-gold/35 group-hover:bg-gold group-hover:text-white"
        >
          View Residence
          <ArrowUpRight size={14} aria-hidden />
        </Button>
      </div>
    </MotionCard>
  );
}

export function FeaturedProperties() {
  return (
    <section id="properties" className="section-space bg-background">
      <div className="site-container">
        <SectionHeader
          eyebrow="Private Collection"
          title="Selected Residences"
          description="Six addresses from our current portfolio — each distinguished by architecture, setting, and quiet exclusivity."
        />

        <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {featuredProperties.map((property) => (
            <StaggerItem key={property.id} className="h-full">
              <PropertyCard property={property} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 flex justify-center sm:mt-14">
          <Button
            variant="outline"
            size="lg"
            className="h-12 w-full max-w-xs rounded-full border-foreground/12 px-8 tracking-[0.08em] sm:w-auto"
          >
            View full portfolio
            <ArrowUpRight size={15} aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  );
}
