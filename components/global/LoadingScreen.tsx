"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isRendered, setIsRendered] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Prevent body scroll during load
    document.body.style.overflow = "hidden";

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Wait for the truck to zoom off completely (400ms) before fading screen
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              setIsRendered(false);
              document.body.style.overflow = ""; // restore body scroll
            }, 300);
          }, 450);
          return 100;
        }
        const increment = Math.floor(Math.random() * 5) + 2;
        const next = prev + increment;
        return next > 100 ? 100 : next;
      });
    }, 15);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isRendered) return null;

  // Truck position mirrors loading progress.
  // Moves from right (110%) to left (-110%) during loading.
  // Once progress hits 100%, the truck completes its path to the far left.
  const truckX = progress < 100 ? `${110 - (progress * 2.2)}%` : "-110%";

  return (
    <div
      className={`fixed inset-0 z-[999] bg-frexia-blue flex flex-col items-center justify-between py-24 transition-all duration-300 ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Top: Brand Header */}
      <div className="text-xl font-bold tracking-[0.4em] text-white/70 uppercase font-heading z-10">
        Frexia Logistics
      </div>

      {/* Center: Minimalist Truck & Path */}
      <div className="relative w-full max-w-2xl px-12 flex flex-col items-center justify-center z-10">
        <div className="relative w-full h-52 overflow-hidden flex items-center justify-center">
          {/* Subtle thin path line */}
          <div className="absolute bottom-4 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          <motion.div
            animate={{ x: truckX }}
            transition={{
              type: "tween",
              ease: progress === 100 ? "easeIn" : "easeInOut",
              duration: progress === 100 ? 0.4 : 0.05,
            }}
            className="absolute w-[440px] h-[205px]"
          >
            <Image
              src="/box-truck/truck.png"
              alt="Loading Truck"
              fill
              sizes="440px"
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom: Modern Progress Counter */}
      <div className="flex flex-col items-center gap-3 z-10">
        <div className="text-7xl font-light text-white font-mono tracking-tighter">
          {progress}
          <span className="text-white/45 text-4xl font-light ml-1">%</span>
        </div>
        <div className="text-[11px] font-bold text-white/60 tracking-[0.35em] uppercase font-heading">
          Dispatching Cargo...
        </div>
      </div>
    </div>
  );
}
