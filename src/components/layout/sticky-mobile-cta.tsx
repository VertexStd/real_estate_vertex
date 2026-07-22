"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EASE_PREMIUM } from "@/lib/motion";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const nearBottom =
          window.innerHeight + y >= document.documentElement.scrollHeight - 360;
        const next = y > window.innerHeight * 0.6 && !nearBottom;
        setVisible((prev) => (prev === next ? prev : next));
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 72, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 72, opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE_PREMIUM }}
          className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 lg:hidden"
        >
          <div className="mx-auto flex max-w-lg items-center gap-3 rounded-[1.25rem] border border-white/60 bg-[#fffcf8]/92 p-2 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
            <div className="min-w-0 flex-1 pl-3">
              <p className="truncate text-[10px] font-medium tracking-[0.16em] uppercase text-gold">
                Concierge
              </p>
              <p className="truncate text-sm text-foreground">
                Request a private viewing
              </p>
            </div>
            <Button
              variant="gold"
              className="h-11 shrink-0 rounded-full px-5 text-[11px] tracking-[0.1em] uppercase"
              asChild
            >
              <a href="#agents">
                Inquire
                <ArrowRight size={14} aria-hidden />
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
