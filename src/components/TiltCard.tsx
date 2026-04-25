import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

/** Subtle 3D tilt on hover — pointer follows the card and tilts on X/Y axes. */
export const TiltCard = ({ children, className, intensity = 6 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * intensity).toFixed(2)}deg) rotateY(${(x * intensity).toFixed(2)}deg) translateY(-6px)`;
  };

  const handleLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "relative rounded-2xl bg-card border border-border/60 shadow-elevated overflow-hidden",
        "transition-[transform,box-shadow] duration-300 ease-out hover:shadow-premium",
        "[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};
