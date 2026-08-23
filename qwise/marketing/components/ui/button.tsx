import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--accent)] text-white hover:bg-[var(--accent-deep)] hover:-translate-y-0.5 shadow-[0_8px_20px_-6px_rgba(0,102,255,0.5)]",
        outline:
          "border border-[var(--line)] bg-transparent text-[var(--text)] hover:border-[var(--text)] hover:-translate-y-0.5",
        dark: "bg-[var(--ink)] text-white hover:-translate-y-0.5 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4)]",
        ghost: "bg-transparent text-[var(--text-soft)] hover:text-[var(--text)]",
        "outline-inverse":
          "border border-white/30 bg-transparent text-white hover:border-white",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[13.5px]",
        lg: "h-12 px-8 text-[15px]",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
