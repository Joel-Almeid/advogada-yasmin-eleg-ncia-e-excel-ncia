import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
  delay?: number;
}

const AnimatedSection = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const getAnimationClasses = () => {
    const baseTransition = "transition-all duration-700 ease-out";
    
    switch (animation) {
      case "fade-up":
        return cn(
          baseTransition,
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        );
      case "fade-left":
        return cn(
          baseTransition,
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-8"
        );
      case "fade-right":
        return cn(
          baseTransition,
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-8"
        );
      case "scale":
        return cn(
          baseTransition,
          isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95"
        );
      default:
        return baseTransition;
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClasses(), className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
