"use client";

import Image from "next/image";

export default function ChairmanMessage() {
  return (
    <section className="w-full bg-white text-frexia-dark py-20 px-6 sm:px-12 md:px-16 lg:px-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left image of Chairman / Leadership with brand color gradient circle */}
        <div className="w-full lg:w-5/12 relative flex items-center justify-center">
          {/* Brand color gradient circle behind image */}
          <div className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-tr from-frexia-blue via-frexia-blue/80 to-amber-400/40 opacity-90 blur-sm pointer-events-none -z-0" />

          <div className="relative h-[480px] w-full overflow-hidden z-10">
            <Image
              src="/about-page/albin3.png"
              alt="Chairman & CEO Message - Frexia Logistic"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Right message text */}
        <div className="w-full lg:w-7/12 flex flex-col gap-6">
          <div>
            <span className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-3 block">
              Leadership Insight
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight mb-4 text-slate-800">
              Chairman&apos;s <span className="text-slate-700">Message</span>
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed font-normal">
            {/* <p className="italic text-slate-800 font-semibold border-l-4 border-frexia-blue pl-4 py-1">
              &quot;Welcome to Frexia Logistic LLC. In an interconnected world where supply chains form the backbone of global commerce, our mission is simple: to make freight shipping seamless, secure, and stress-free.&quot;
            </p> */}
            <p>
              Since our inception, Frexia Logistic has evolved into a trusted logistics provider with a robust network spanning continents. We combine state-of-the-art tracking technologies with deep industry experience to solve complex supply chain challenges for businesses of all scales.
            </p>
            <p>
              Our success rests upon a single foundation: our people and our shared values of integrity, customer dedication, and operational excellence. We continuously invest in expanding our air, sea, and land capabilities while remaining focused on delivering tailor-made solutions that empower our clients to reach new horizons.
            </p>
            {/* <p>
              Thank you for trusting Frexia Logistic LLC as your logistics partner. We look forward to powering your growth across every trade lane.
            </p> */}
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col">
            <span className="font-heading font-bold text-xl text-slate-900">Board of Directors</span>
            <span className="text-slate-500 text-sm font-medium">Frexia Logistic LLC</span>
          </div>
        </div>
      </div>
    </section>
  );
}
