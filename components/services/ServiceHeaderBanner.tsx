"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceHeaderBannerProps {
  title: string;
  categoryName?: string;
}

export default function ServiceHeaderBanner({
  title,
  categoryName = "Services",
}: ServiceHeaderBannerProps) {
  return (
    <section className="w-full bg-frexia-blue text-white pt-48 pb-16 px-6 sm:px-12 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 relative z-10">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-white/80"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-white/60">/</span>
          <Link href="/services" className="hover:text-white transition-colors">
            {categoryName}
          </Link>
          <span className="text-white/60">/</span>
          <span className="text-white font-bold">{title}</span>
        </motion.nav>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight text-white"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
