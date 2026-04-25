import { useCallback, useEffect, useRef, useState } from "react";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export const BeforeAfter = ({
  before,
  after,
  beforeAlt = "Before",
  afterAlt = "After",
  className,
}: BeforeAfterProps) => {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      updateFromX(x);
    };
    const stop = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, [updateFromX]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full select-none overflow-hidden rounded-2xl shadow-premium border border-border/60 bg-muted",
        "aspect-[16/10]",
        className
      )}
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromX(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        updateFromX(e.touches[0].clientX);
      }}
    >
      {/* AFTER (full base) */}
      <img
        src={after}
        alt={afterAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        draggable={false}
      />
      {/* BEFORE clipped */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
        aria-hidden={false}
      >
        <img
          src={before}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${(100 / Math.max(pos, 0.01)) * 100}%`, maxWidth: "none" }}
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 rounded-full bg-foreground/85 text-background text-xs font-bold px-3 py-1 backdrop-blur">
        Before
      </span>
      <span className="absolute top-3 right-3 rounded-full bg-primary text-primary-foreground text-xs font-bold px-3 py-1 shadow-elevated">
        After
      </span>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)] pointer-events-none"
        style={{ left: `${pos}%` }}
      />

      {/* Handle */}
      <button
        type="button"
        aria-label="Drag to compare"
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-white text-primary shadow-premium border border-border/60 flex items-center justify-center cursor-ew-resize transition-transform hover:scale-110"
        style={{ left: `${pos}%` }}
        onMouseDown={(e) => {
          e.stopPropagation();
          dragging.current = true;
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          dragging.current = true;
        }}
      >
        <GripVertical className="h-5 w-5" />
      </button>

      {/* Range fallback for keyboard */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Before and after comparison"
        className="absolute inset-0 h-full w-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
};
