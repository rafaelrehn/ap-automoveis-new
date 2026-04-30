"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type VehicleGalleryProps = {
  images: string[];
  alt: string;
};

export function VehicleGallery({ images, alt }: VehicleGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div className="min-w-0 space-y-4">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-elegant">
        <div className="absolute top-4 right-4 z-10 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur">
          {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>
        <Image
          src={activeImage}
          alt={`${alt} - imagem ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="min-w-0 max-w-full overflow-x-auto overflow-y-hidden">
        <div className="-mx-1 flex w-max min-w-full gap-3 px-1 pb-1 lg:mx-0 lg:grid lg:w-full lg:grid-cols-6 lg:px-0 lg:pb-0">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "group relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-2xl border bg-white/5 transition-smooth lg:w-auto",
              index === activeIndex
                ? "border-highlight shadow-card"
                : "border-white/10 hover:border-white/25",
            )}
            aria-label={`Ver imagem ${index + 1} de ${alt}`}
            aria-pressed={index === activeIndex}
          >
            <Image
              src={image}
              alt={`${alt} - miniatura ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 33vw, 10vw"
              className="h-full w-full object-cover transition-smooth group-hover:scale-105"
            />
            <div
              className={cn(
                "absolute inset-0 bg-black/10 transition-smooth",
                index === activeIndex ? "bg-black/0" : "group-hover:bg-black/0",
              )}
            />
          </button>
        ))}
        </div>
      </div>
    </div>
  );
}
