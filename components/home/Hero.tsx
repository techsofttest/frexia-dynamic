"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  id: number;
  title: string;
  slug: string;
}

interface Slider {
  id: number;
  image_url: string | null;
  main_title: string;
  content: string;
  button_text: string;
  service: Service | null;
}

interface HeroProps {
  sliders: Slider[];
}

export default function Hero({ sliders }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  /*
  |--------------------------------------------------------------------------
  | Reset current slide if slider data changes
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (current >= sliders.length) {
      setCurrent(0);
    }
  }, [sliders.length, current]);

  /*
  |--------------------------------------------------------------------------
  | Go To Slide
  |--------------------------------------------------------------------------
  */

  const goTo = useCallback((idx: number, dir: number) => {
    setDirection(dir);
    setCurrent(idx);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Previous Slide
  |--------------------------------------------------------------------------
  */

  const prev = useCallback(() => {
    if (sliders.length <= 1) return;

    goTo((current - 1 + sliders.length) % sliders.length, -1);
  }, [current, sliders.length, goTo]);

  /*
  |--------------------------------------------------------------------------
  | Next Slide
  |--------------------------------------------------------------------------
  */

  const next = useCallback(() => {
    if (sliders.length <= 1) return;

    goTo((current + 1) % sliders.length, 1);
  }, [current, sliders.length, goTo]);

  /*
  |--------------------------------------------------------------------------
  | Auto Advance
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (sliders.length <= 1) return;

    const timer = setInterval(() => {
      next();
    }, 5500);

    return () => clearInterval(timer);
  }, [next, sliders.length]);

  /*
  |--------------------------------------------------------------------------
  | No Sliders
  |--------------------------------------------------------------------------
  */

  if (!sliders || sliders.length === 0) {
    return null;
  }

  const slide = sliders[current];

  /*
  |--------------------------------------------------------------------------
  | Animation Variants
  |--------------------------------------------------------------------------
  */

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 80 : -80,
    }),

    center: {
      opacity: 1,
      x: 0,
    },

    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -80 : 80,
    }),
  };

  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[75vh] md:min-h-[92vh] flex items-stretch overflow-hidden bg-frexia-dark">
      {/* ── Background image ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${slide.id}`}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
        >
          {slide.image_url && (
            <img
              src={slide.image_url}
              alt={
                slide.service?.title || slide.main_title || "Frexia Logistics"
              }
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          )}

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 via-black/10 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* ── LEFT arrow (Bottom-right on Mobile, Left-centered on Desktop) ── */}
      {sliders.length > 1 && (
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute bottom-6 right-20 md:right-auto md:left-4 lg:md:left-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-30 w-10 h-10 md:w-11 md:h-11 rounded-full backdrop-blur-sm bg-white/10 border border-white/10 text-white hover:text-frexia-blue flex items-center justify-center hover:bg-white transition-all duration-300 cursor-pointer"
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
      )}

      {/* ── RIGHT arrow (Bottom-right on Mobile, Right-centered on Desktop) ── */}
      {sliders.length > 1 && (
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute bottom-6 right-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-30 w-10 h-10 md:w-11 md:h-11 rounded-full backdrop-blur-sm bg-white/10 border border-white/10 text-white hover:text-frexia-blue flex items-center justify-center bg-white/10 hover:bg-white transition-all duration-300 cursor-pointer"
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
      )}

      {/* ── Main content ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 flex items-center justify-start pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 min-h-[60vh] sm:min-h-[75vh] md:min-h-[92vh]">
        <div className="w-full md:w-3/5 flex flex-col gap-6 justify-center">
          {/* ── Headline ── */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.h1
              key={`title-${slide.id}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.05,
              }}
              className="font-heading font-black text-4xl md:text-[52px] leading-[1.05] tracking-tight text-white uppercase whitespace-pre-line"
            >
              {slide.main_title}
            </motion.h1>
          </AnimatePresence>

          {/* ── Description ── */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.p
              key={`desc-${slide.id}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1,
              }}
              className="text-orange-100 text-base md:text-lg leading-relaxed max-w-lg font-medium"
            >
              {slide.content}
            </motion.p>
          </AnimatePresence>

          {/* CTA button */}
          {slide.service && (
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`cta-${slide.id}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              >
                <Link
                  href={`/services/${slide.service.slug}`}
                  className="inline-flex items-center gap-2.5 bg-frexia-blue text-white px-8 py-3.5 rounded-md font-semibold text-sm tracking-wide hover:bg-frexia-blue-hover active:scale-95 transition-all duration-300"
                >
                  {slide.button_text}

                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
