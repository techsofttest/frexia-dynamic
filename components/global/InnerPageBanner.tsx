"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface InnerPageBannerProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  bgImage?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function InnerPageBanner({
  badge,
  title,
  titleHighlight,
  description,
  bgImage = "/banner/b2.jpg",
  ctaText,
  ctaHref = "#contact",
}: InnerPageBannerProps) {
  return (
    <section className="relative w-full min-h-[55vh] sm:min-h-[65vh] md:h-[80vh] flex items-stretch overflow-hidden bg-frexia-dark">
      {/* ── Background image with dark gradient overlay ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* Dark gradient overlay on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 via-black/50 to-transparent" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 flex items-center justify-start pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 min-h-[50vh] sm:min-h-[65vh] md:min-h-[80vh]">
        <div className="w-full md:w-3/5 flex flex-col gap-6 justify-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-[44px] leading-[1.05] tracking-tight text-white uppercase whitespace-pre-line"
          >
            {title}
            {"\n"}
            {titleHighlight && (
              <span className="text-slate-100 italic font-semibold">
                {titleHighlight}
              </span>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-white/80 text-base md:text-lg leading-relaxed max-w-lg font-medium"
          >
            {description}
          </motion.p>

          {/* Optional CTA button */}
          {ctaText && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2.5 bg-frexia-blue text-white px-8 py-3.5 rounded-md font-semibold text-sm tracking-wide hover:bg-frexia-blue-hover active:scale-95 transition-all duration-300"
              >
                {ctaText}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
