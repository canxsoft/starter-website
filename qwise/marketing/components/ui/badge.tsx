import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "bg-[var(--accent-soft)] text-[var(--accent-deep)]",
        gradient:
          "bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-white",
        outline: "border border-[var(--line)] text-[var(--text-soft)] bg-white",
        dark: "bg-[var(--ink)] text-white",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
