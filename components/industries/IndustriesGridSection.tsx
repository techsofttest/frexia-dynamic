import Link from "next/link";
import type { Industry } from "@/lib/industries";

interface IndustriesGridSectionProps {
  industries: Industry[];
  titleFirst: string | null;
  titleHighlight: string | null;
}

export default function IndustriesGridSection({
  industries,
  titleFirst,
  titleHighlight,
}: IndustriesGridSectionProps) {
  console.log("=== IndustriesGridSection ===");
  console.log("titleFirst:", titleFirst);
  console.log("titleHighlight:", titleHighlight);
  console.log("industries:", industries);

  return (
    <section className="w-full bg-gray-50 text-frexia-dark py-20 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        {/* ==================================================
            SECTION HEADING
        ================================================== */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-frexia-blue text-xs font-bold tracking-widest uppercase mb-3 block">
            Sectors We Empower
          </span>

          <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-800">
            {titleFirst}
            {titleFirst && titleHighlight ? " " : ""}
            <span className="text-frexia-blue">{titleHighlight}</span>
          </h2>
        </div>

        {/* ==================================================
            INDUSTRIES GRID
        ================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {industries && industries.length > 0 ? (
            industries.map((industry) => {
              const slug =
                industry.slug ||
                industry.title
                  ?.toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "");

              return (
                <div
                  key={industry.id}
                  className="group flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 shadow-md sm:shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                >
                  {/* ==================================================
                      IMAGE
                  ================================================== */}
                  <Link
                    href={`/industries/${slug}`}
                    className="relative h-36 sm:h-56 w-full flex items-center justify-center bg-frexia-blue-light/40 overflow-hidden p-3 sm:p-6 block"
                  >
                    {industry.image ? (
                      <img
                        src={industry.image}
                        alt={industry.title || "Industry"}
                        className="w-full h-full object-contain p-2 sm:p-4 transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-gray-400 text-sm">
                        No image available
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-frexia-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>

                  {/* ==================================================
                      CONTENT
                  ================================================== */}
                  <div className="p-3.5 sm:p-7 flex flex-col gap-2 sm:gap-4 flex-1">
                    <h3 className="font-heading font-bold text-base sm:text-2xl text-frexia-dark group-hover:text-frexia-blue transition-colors line-clamp-1">
                      <Link href={`/industries/${slug}`}>{industry.title}</Link>
                    </h3>

                    <p className="text-gray-700 text-xs sm:text-base leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {industry.description}
                    </p>

                    {/* ==================================================
                        FIND OUT MORE
                    ================================================== */}
                    <Link
                      href={`/industries/${slug}`}
                      className="flex items-center justify-center gap-1.5 sm:gap-2 w-full bg-frexia-blue text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 rounded-md hover:bg-frexia-blue-hover active:scale-95 transition-all duration-300 mt-auto"
                    >
                      Find Out More
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="shrink-0"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-10 text-gray-400">
              No industries available
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
