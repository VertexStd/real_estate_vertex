"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const EASE = [0.25, 0.4, 0.25, 1] as const;

function NavLink({
  href,
  label,
  light,
  onClick,
}: {
  href: string;
  label: string;
  light: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={cn(
        "relative px-1 py-2 text-[13px] font-medium tracking-[0.14em] uppercase",
        light ? "text-white/85" : "text-foreground/80"
      )}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.span
        className="relative z-10 block"
        variants={{
          rest: { y: 0, opacity: 1 },
          hover: { y: -1, opacity: 1 },
        }}
        transition={{ duration: 0.3, ease: EASE }}
      >
        {label}
      </motion.span>
      <motion.span
        className="absolute bottom-0 left-0 right-0 mx-auto h-px max-w-full bg-gold"
        variants={{
          rest: { scaleX: 0, opacity: 0 },
          hover: { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: 0.4, ease: EASE }}
        style={{ originX: 0.5 }}
      />
    </motion.a>
  );
}

function Logo({ light }: { light: boolean }) {
  return (
    <a href="#" className="group flex shrink-0 items-center gap-2.5 sm:gap-3">
      <div
        className={cn(
          "relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full sm:h-11 sm:w-11",
          light
            ? "bg-white/15 ring-1 ring-white/25"
            : "bg-foreground ring-1 ring-foreground/10"
        )}
      >
        <span
          className={cn(
            "font-display text-[15px] font-semibold",
            light ? "text-white" : "text-background"
          )}
        >
          A
        </span>
      </div>

      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[15px] font-medium tracking-[0.06em] transition-colors duration-500 sm:text-[17px]",
            light ? "text-white" : "text-foreground"
          )}
        >
          AURELIUS
        </span>
        <span
          className={cn(
            "mt-0.5 text-[8px] tracking-[0.28em] uppercase transition-colors duration-500 sm:mt-1 sm:text-[9px]",
            light ? "text-white/55" : "text-muted-foreground"
          )}
        >
          Realty
        </span>
      </div>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 40;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const light = !scrolled && !mobileOpen;

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        className="pointer-events-none fixed top-0 right-0 left-0 z-50"
      >
        <div className="site-container pt-[max(0.75rem,env(safe-area-inset-top))] sm:pt-5">
          <motion.nav
            aria-label="Main navigation"
            animate={{
              backgroundColor: scrolled
                ? "rgba(250, 248, 245, 0.88)"
                : "rgba(255, 255, 255, 0.12)",
              borderColor: scrolled
                ? "rgba(255, 255, 255, 0.7)"
                : "rgba(255, 255, 255, 0.22)",
              boxShadow: scrolled
                ? "0 12px 40px -12px rgba(0, 0, 0, 0.12)"
                : "0 8px 32px -8px rgba(0, 0, 0, 0.14)",
            }}
            transition={{ duration: 0.45, ease: EASE }}
            className="pointer-events-auto relative rounded-full border px-3 backdrop-blur-2xl backdrop-saturate-150 sm:px-6 lg:px-8"
            style={{ WebkitBackdropFilter: "blur(24px)" }}
          >
            <div className="grid h-14 grid-cols-[1fr_auto] items-center gap-3 sm:h-[60px] lg:grid-cols-[1fr_auto_1fr]">
              <div className="justify-self-start">
                <Logo light={light} />
              </div>

              <div className="hidden items-center justify-center gap-8 xl:gap-11 lg:flex">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    light={light}
                  />
                ))}
              </div>

              <div className="flex items-center justify-self-end gap-2">
                <div className="hidden lg:block">
                  <Button
                    variant={light ? "glass" : "gold"}
                    className={cn(
                      "h-11 px-6 text-[12px] font-medium tracking-[0.12em] uppercase",
                      !light && "shadow-soft"
                    )}
                    asChild
                  >
                    <a href="#agents">
                      Inquire
                      <ArrowRight size={14} aria-hidden />
                    </a>
                  </Button>
                </div>

                <motion.button
                  type="button"
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full transition-colors lg:hidden",
                    light
                      ? "border border-white/20 bg-white/10 text-white"
                      : "border border-foreground/10 bg-foreground/5 text-foreground"
                  )}
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open menu"
                  aria-expanded={mobileOpen}
                  whileTap={{ scale: 0.94 }}
                >
                  <Menu size={22} strokeWidth={1.5} aria-hidden />
                </motion.button>
              </div>
            </div>
          </motion.nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-[60] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="absolute inset-0 bg-foreground/95 backdrop-blur-2xl" />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="relative z-10 flex h-full flex-col"
            >
              <div className="flex items-center justify-between px-5 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-6">
                <Logo light />
                <motion.button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
                  whileTap={{ scale: 0.94 }}
                >
                  <X size={22} strokeWidth={1.5} aria-hidden />
                </motion.button>
              </div>

              <nav className="flex flex-1 flex-col items-center justify-center gap-1 px-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 + i * 0.05,
                      duration: 0.45,
                      ease: EASE,
                    }}
                    className="min-h-12 py-3 font-display text-[2.5rem] font-light text-white/90 transition-colors active:text-gold sm:text-5xl"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.45, ease: EASE }}
                className="px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-8"
              >
                <div className="mx-auto max-w-sm space-y-3">
                  <p className="text-center text-[11px] tracking-[0.28em] uppercase text-white/40">
                    Private Consultation
                  </p>
                  <Button
                    variant="gold"
                    className="h-12 w-full text-[12px] tracking-[0.12em] uppercase"
                    asChild
                  >
                    <a href="#agents" onClick={() => setMobileOpen(false)}>
                      Inquire Now
                      <ArrowRight size={16} aria-hidden />
                    </a>
                  </Button>
                  <a
                    href="tel:+13105550192"
                    className="block py-2 text-center text-sm text-white/45"
                  >
                    +1 (310) 555-0192
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
