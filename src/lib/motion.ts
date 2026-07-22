export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_SOFT = [0.25, 0.4, 0.25, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_SOFT },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: EASE_PREMIUM },
  },
};

export const staggerContainer = (delay = 0.08) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: delay,
      delayChildren: 0.06,
    },
  },
});

export const cardHover = {
  rest: {
    y: 0,
    boxShadow: "0 4px 24px -6px rgba(0, 0, 0, 0.06)",
  },
  hover: {
    y: -6,
    boxShadow: "0 20px 48px -16px rgba(0, 0, 0, 0.12)",
    transition: { duration: 0.45, ease: EASE_PREMIUM },
  },
};

export const imageZoom = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.85, ease: EASE_OUT },
  },
};
