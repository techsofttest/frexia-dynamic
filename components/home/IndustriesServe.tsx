"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { Industry } from "@/lib/industries";

interface IndustriesServeProps {
  industries: Industry[];
}

export default function IndustriesServe({ industries }: IndustriesServeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // --------------------------------------------------
  // Auto Slide
  // --------------------------------------------------

  useEffect(() => {
    if (industries.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % industries.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [industries.length]);

  // --------------------------------------------------
  // No Industries
  // --------------------------------------------------

  if (!industries.length) {
    return null;
  }

  // --------------------------------------------------
  // Current Industry
  // --------------------------------------------------

  const currentIndustry = industries[currentSlide] ?? industries[0];

  // --------------------------------------------------
  // Previous
  // --------------------------------------------------

  const handlePrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + industries.length) % industries.length,
    );
  };

  // --------------------------------------------------
  // Next
  // --------------------------------------------------

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % industries.length);
  };

  return (
    <section className="bg-frexia-blue text-white w-full py-16 sm:py-20 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* ==================================================
            LEFT: IMAGE CAROUSEL
        ================================================== */}

        <div className="w-full md:w-1/2 relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center">
          {/* Circular glow behind image */}
          <div className="absolute w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full bg-white/10 blur-2xl pointer-events-none" />

          {industries.map((industry, idx) => (
            <div
              key={industry.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
                idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="relative w-full h-full max-w-[280px] max-h-[280px] sm:max-w-[340px] sm:max-h-[340px] md:max-w-[380px] md:max-h-[380px]">
                {industry.image ? (
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                ) : (
                  <div className="w-full h-full bg-white/10 rounded-xl" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ==================================================
            RIGHT: CONTENT
        ================================================== */}

        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          {/* Section Label */}
          <span className="text-white/90 text-xs font-bold tracking-widest uppercase">
            Industries We Serve
          </span>

          {/* Current Industry */}
          <div className="min-h-[200px] sm:min-h-[180px] flex flex-col justify-start">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
              {currentIndustry.title}
            </h2>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed line-clamp-3">
              {currentIndustry.description}
            </p>
          </div>

          {/* ==================================================
              NAVIGATION
          ================================================== */}

          <div className="flex flex-col-reverse sm:flex-row items-center gap-6 sm:gap-5 pt-6 border-t border-white/20">
            {/* Dots */}
            <div className="flex gap-2 flex-1 flex-wrap">
              {industries.map((industry, idx) => (
                <button
                  key={industry.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentSlide
                      ? "bg-white w-7"
                      : "w-1.5 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to ${industry.title}`}
                />
              ))}
            </div>

            {/* Previous / Next */}
            <div className="flex gap-3">
              {/* Previous */}
              <button
                type="button"
                onClick={handlePrevious}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer"
                aria-label="Previous industry"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={handleNext}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-frexia-blue flex items-center justify-center hover:bg-orange-50 transition-all duration-300 cursor-pointer"
                aria-label="Next industry"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
