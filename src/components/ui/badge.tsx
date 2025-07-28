import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Define the badge variants using class-variance-authority (CVA)

/* Base styles breakdown:
   These classes define the default appearance and behavior of the badge. */

/*
1. `inline-flex`:
   - Makes the badge behave like an inline element but still allows flexbox layout.
   - Useful for aligning icons or text within the badge.

2. `items-center`:
   - Vertically centers the content inside the flex container.

3. `rounded-md`:
   - Applies medium-rounded corners to give the badge a softer look.

4. `border`:
   - Adds a border to the badge.
   - The actual border style is determined by the variant (e.g., `border-transparent` in most variants).

5. `px-2`:
   - Horizontal padding of 2 Tailwind units (usually 0.5rem).
   - Ensures spacing between the text and the edges of the badge.

6. `py-0.5`:
   - Vertical padding of 0.5 Tailwind units (usually 0.125rem).
   - Balances height and spacing for a compact appearance.

7. `text-xs`:
   - Sets the font size to extra small, ideal for badges.

8. `font-semibold`:
   - Applies a semi-bold font weight to make the text stand out.

9. `font-mono`:
   - Uses a monospace font, often used for technical or stylistic purposes.

10. `transition-colors`:
    - Enables smooth transitions when background or text colors change (e.g., on hover).

11. `focus:outline-none`:
    - Removes the default browser outline for better control over focus styling.

12. `focus:ring-2`:
    - Adds a 2px-wide focus ring for accessibility and visual clarity when focused.

13. `focus:ring-ring`:
    - Colors the focus ring using the `ring` color from the theme.

14. `focus:ring-offset-2`:
    - Adds a 2px offset between the element and the focus ring for better visibility.

15. `text-nowrap`:
    - Prevents text from wrapping, keeping the badge's content on a single line.
*/

const badgeVariants = cva(
  // Base styles for the badge component with enhanced animations and mobile responsiveness
  "inline-flex items-center rounded-lg border px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap hover:scale-105 hover:shadow-lg",
  {
    variants: {
      variant: {
        default:
          // Default badge: primary background with gradient, enhanced hover
          "border-transparent bg-gradient-to-r from-secondary to-primary text-white hover:from-secondary/90 hover:to-primary/90 shadow-md",
        secondary:
          // Secondary badge: enhanced secondary styling with subtle gradient
          "border-transparent bg-gradient-to-r from-card to-secondary/20 text-card-foreground hover:from-card/90 hover:to-secondary/30 shadow-sm",
        destructive:
          // Destructive badge: enhanced destructive styling
          "border-transparent bg-gradient-to-r from-destructive to-destructive/80 text-white hover:from-destructive/90 hover:to-destructive/70 shadow-md",
        outline: 
          // Outline badge: enhanced outline with hover effects
          "text-foreground border-border hover:bg-card hover:border-border/80",
        special:
          // Special variant for highlighting
          "border-transparent bg-gradient-to-r from-accent to-secondary text-white hover:from-accent/90 hover:to-secondary/90 shadow-md animate-pulse-glow",
      },
    },
    defaultVariants: {
      // Default variant applied when no specific variant is specified
      variant: "outline",
    },
  }
);



// Define the props interface for the Badge component
interface BadgeProps extends VariantProps<typeof badgeVariants> {
  className?: string;
  src?: string;
  tooltip?: string; // Add a tooltip prop
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ className, variant, src, tooltip, children, ...props }) => {
  return (
    <div className={cn(badgeVariants({ variant }), "relative group", className)} {...props}>
      {/* Conditionally render the image if src is provided */}
      {src && <Image src={src} alt="Badge icon" width={64} height={64} className="transition-transform transform hover:scale-110 h-16 w-16" />}
      {children}

      {/* Tooltip element */}
      {tooltip && (
        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:block bg-primary text-foreground text-xs rounded-md py-1 px-2 z-10">
          {tooltip}
        </span>
      )}
    </div>
  );
};

export { Badge };
