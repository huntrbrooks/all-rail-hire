"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/images/hero/slide-1.jpg",
  "/images/hero/slide-2.jpg",
  "/images/hero/slide-3.jpg",
  "/images/hero/slide-4.jpg",
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative h-[52vh] min-h-[340px] w-full overflow-hidden bg-brand-dark md:h-[68vh]">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/25 to-transparent" />
        </div>
      ))}

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === index ? "bg-brand-accent" : "bg-white/60 hover:bg-white"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
