import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "highlighted" | "special";
}

export function Section({ className, variant = "default", ...props }: SectionProps) {
  const baseClasses = "flex min-h-0 flex-col gap-y-6 mb-8";
  
  const variantClasses = {
    default: "",
    highlighted: "p-6 bg-gradient-to-br from-card to-secondary/20 rounded-xl border border-border",
    special: "p-6 bg-gradient-to-br from-accent/10 via-card to-secondary/10 rounded-xl border border-accent/30 shadow-sm relative overflow-hidden"
  };

  return (
    <section
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {variant === "special" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-secondary/5 pointer-events-none" />
        </>
      )}
      <div className="relative">
        {props.children}
      </div>
    </section>
  );
}
