import Link from "next/link";
import Image from "next/image";

interface CommitmentItem {
  value: string;
  label: string;
}

interface OurCommitmentProps {
  ourCommitment: {
    content1?: {
      title?: string | null;
      description?: string | null;
      items?: CommitmentItem[];
    };
  };
}

export default function OurCommitment({ ourCommitment }: OurCommitmentProps) {
  const content1 = ourCommitment?.content1 ?? {};
  const items = content1.items ?? [];

  return (
    <section className="w-full flex flex-col md:flex-row min-h-[480px]">
      {/* Left: full-height warehouse image */}{" "}
      <div className="w-full md:w-[42%] relative min-h-[260px] sm:min-h-[340px] md:min-h-full">
        {" "}
        <Image
          src="/warehouse/woman-safety-equipment-working.jpg"
          alt="Frexia Logistics Operations"
          fill
          quality={95}
          sizes="(max-width: 768px) 100vw, 42vw"
          className="object-cover object-center"
        />{" "}
      </div>
      {/* Right: white panel */}
      <div className="w-full md:w-[58%] bg-white text-frexia-dark flex flex-col justify-center border-y md:border-y-0 md:border-r border-gray-200">
        {/* Top: commitment text */}
        <div className="px-6 sm:px-10 md:px-12 py-10 sm:py-14 border-b border-gray-200">
          <span className="text-slate-500 text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4 block">
            Our Commitment
          </span>

          {content1.title && (
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 sm:mb-5 text-slate-800">
              {content1.title}
            </h2>
          )}

          {content1.description && (
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-medium">
              {content1.description}
            </p>
          )}
        </div>

        {/* Bottom: 2 tiles side by side */}
        <div className="flex-1 grid grid-cols-2 divide-x divide-gray-200">
          {items.map((item, index) => {
            const isCommodities = index === 0;

            return (
              <div
                key={`${item.value}-${index}`}
                className="flex flex-col px-4 sm:px-8 py-6 sm:py-10 gap-3 sm:gap-5 hover:bg-orange-50/50 transition-colors duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-frexia-orange/30 text-frexia-orange flex items-center justify-center group-hover:border-frexia-orange group-hover:bg-frexia-orange group-hover:text-white transition-all duration-300 shrink-0">
                  {isCommodities ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="sm:w-6 sm:h-6"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="sm:w-6 sm:h-6"
                    >
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                    </svg>
                  )}
                </div>

                <div>
                  <p className="text-slate-500 text-[10px] sm:text-[12px] font-bold tracking-widest uppercase mb-0.5 sm:mb-1">
                    {item.value}
                  </p>

                  <h3 className="font-heading font-bold text-lg sm:text-2xl text-slate-800 mb-1 sm:mb-2">
                    {item.label}
                  </h3>
                </div>

                <Link
                  href={isCommodities ? "/industries" : "/services"}
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-frexia-orange text-white px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-md font-semibold text-[11px] sm:text-xs hover:bg-frexia-orange-hover transition-colors w-fit mt-auto"
                >
                  {isCommodities ? "Commodities" : "Services"}

                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
