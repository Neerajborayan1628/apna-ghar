import { type ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  children?: ReactNode;
  height?: "sm" | "md";
}

export const PageHero = ({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  children,
  height = "md",
}: PageHeroProps) => {
  const heightClass = height === "sm" ? "min-h-[44vh] md:min-h-[52vh]" : "min-h-[58vh] md:min-h-[68vh]";
  return (
    <section className={`relative isolate overflow-hidden ${heightClass} flex items-center`}>
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="container-page py-16 md:py-20 text-white">
        <Reveal>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 text-xs font-semibold tracking-wide">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-tight max-w-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl text-white/85 max-w-2xl">{subtitle}</p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
};
