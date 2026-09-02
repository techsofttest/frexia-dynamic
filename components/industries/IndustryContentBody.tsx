import Image from "next/image";

import type { IndustryDetail } from "@/lib/industries";

// --------------------------------------------------
// Props
// --------------------------------------------------

interface IndustryContentBodyProps {
  industry: IndustryDetail;
}

// --------------------------------------------------
// Industry Content Body
// --------------------------------------------------

export default function IndustryContentBody({
  industry,
}: IndustryContentBodyProps) {
  return (
    <div className="lg:col-span-8 flex flex-col gap-8">
      {/* -------------------------------------------------- */}
      {/* Featured Image */}
      {/* -------------------------------------------------- */}

      <div className="relative h-80 md:h-[420px] w-full overflow-hidden bg-frexia-blue-light/30 p-6 flex items-center justify-center rounded-2xl border border-gray-100">
        {industry.image ? (
          <img
            src={industry.image}
            alt={industry.title || "Industry"}
            className="w-full h-full object-contain p-4"
          />
        ) : (
          <div className="text-gray-400 text-sm">No image available</div>
        )}
      </div>

      {/* -------------------------------------------------- */}
      {/* Overview */}
      {/* -------------------------------------------------- */}

      <div>
        <span className="text-frexia-blue text-xs font-bold tracking-widest uppercase mb-2 block">
          Specialized Sector Logistics
        </span>

        <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-800 mb-6">
          Overview of <span className="text-frexia-blue">{industry.title}</span>
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed font-medium">
          {industry.overview}
        </p>
      </div>

      {/* -------------------------------------------------- */}
      {/* Sector Highlights */}
      {/* -------------------------------------------------- */}

      {industry.sector_highlights.length > 0 && (
        <div className="pt-6 border-t border-gray-100">
          <h3 className="font-heading font-bold text-2xl text-slate-800 mb-6">
            Sector Highlights &amp; Standards
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industry.sector_highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-gray-50 border border-gray-100/80"
              >
                <div className="w-6 h-6 rounded-full bg-frexia-blue text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <span className="text-gray-700 text-sm font-semibold leading-snug">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* -------------------------------------------------- */}
      {/* Specialized Supply Chain Capabilities */}
      {/* -------------------------------------------------- */}

      {industry.supply_chain_capabilities.length > 0 && (
        <div className="pt-6 border-t border-gray-100">
          <h3 className="font-heading font-bold text-2xl text-slate-800 mb-6">
            Specialized Supply Chain Capabilities
          </h3>

          <div className="space-y-4">
            {industry.supply_chain_capabilities.map((capability, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-frexia-blue-light border border-frexia-blue/15 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-frexia-blue text-white flex items-center justify-center shrink-0 font-bold">
                  {idx + 1}
                </div>

                <p className="text-slate-800 text-base font-semibold">
                  {capability}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
