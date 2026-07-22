"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[transform,colors,box-shadow] duration-300 will-change-transform hover:scale-[1.015] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer relative overflow-hidden sm:w-auto",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background shadow-soft hover:shadow-elevated",
        gold: "bg-gold text-white shadow-soft hover:bg-gold-dark hover:shadow-elevated",
        outline:
          "border border-foreground/15 bg-transparent hover:bg-foreground/[0.03] hover:border-foreground/30",
        ghost: "hover:bg-foreground/5",
        glass:
          "bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/18 shadow-glass",
      },
      size: {
        default: "h-12 min-h-12 px-7 py-2",
        sm: "h-11 min-h-11 rounded-full px-5 text-xs",
        lg: "h-12 min-h-12 rounded-full px-7 text-[0.9375rem] sm:px-8",
        icon: "h-12 w-12 min-h-12 min-w-12 sm:w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const [ripples, setRipples] = React.useState<
      { x: number; y: number; id: number }[]
    >([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const id = Date.now();
      setRipples((prev) => [
        ...prev,
        { x: e.clientX - rect.left, y: e.clientY - rect.top, id },
      ]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 550);
      onClick?.(e);
    };

    const classes = cn(buttonVariants({ variant, size, className }));

    if (asChild) {
      return (
        <Slot className={classes} ref={ref} onClick={onClick} {...props}>
          {children}
        </Slot>
      );
    }

    return (
      <button
        className={classes}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="pointer-events-none absolute rounded-full bg-white/35 animate-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 4,
              height: 4,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
