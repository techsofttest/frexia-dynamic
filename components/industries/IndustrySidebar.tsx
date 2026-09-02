import Link from "next/link";

import type { Industry } from "@/lib/industries";

// --------------------------------------------------
// Props
// --------------------------------------------------

interface IndustrySidebarProps {
  currentSlug: string;
  allIndustries: Industry[];
}

// --------------------------------------------------
// Industry Sidebar
// --------------------------------------------------

export default function IndustrySidebar({
  currentSlug,
  allIndustries,
}: IndustrySidebarProps) {
  // --------------------------------------------------
  // Get Current Industry
  // --------------------------------------------------

  const currentIndustry = allIndustries.find(
    (industry) => industry.slug === currentSlug,
  );

  return (
    <aside className="lg:col-span-4 sticky top-28 h-fit self-start flex flex-col gap-8">
      {/* -------------------------------------------------- */}
      {/* Industries Sidebar Menu */}
      {/* -------------------------------------------------- */}

      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h3 className="font-heading font-bold text-xl text-slate-800 mb-4 pb-3 border-b border-gray-200">
          All Industry Sectors
        </h3>

        <div className="flex flex-col gap-2">
          {allIndustries.length > 0 ? (
            allIndustries.map((item) => {
              const isActive = item.slug === currentSlug;

              return (
                <Link
                  key={item.slug}
                  href={`/industries/${item.slug}`}
                  className={`flex items-center justify-between p-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-frexia-blue text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-frexia-blue-light hover:text-frexia-blue border border-gray-100"
                  }`}
                >
                  <span className="line-clamp-1">{item.title}</span>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })
          ) : (
            <p className="text-gray-400 text-sm py-3">
              No industries available.
            </p>
          )}
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* Quick Contact Card */}
      {/* -------------------------------------------------- */}

      <div className="bg-frexia-blue text-white rounded-2xl p-8 relative overflow-hidden shadow-xl flex flex-col gap-4">
        {/* Decorative Circle */}

        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        {/* Label */}

        <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
          Sector Specialist
        </span>

        {/* Current Industry */}

        <h4 className="font-heading font-bold text-2xl text-white">
          Need {currentIndustry?.title || "Industry"} Logistics Support?
        </h4>

        {/* Description */}

        <p className="text-white/90 text-sm leading-relaxed">
          Connect with our dedicated industry freight team for custom proposals
          and route planning.
        </p>

        {/* Phone */}

        <a
          href="tel:+97142244022"
          className="mt-2 inline-flex items-center justify-center gap-2 bg-white text-frexia-blue px-6 py-3 rounded-xl font-bold text-sm hover:bg-orange-50 transition-colors shadow-md"
        >
          Call +971 4 224 4022
        </a>
      </div>
    </aside>
  );
}
