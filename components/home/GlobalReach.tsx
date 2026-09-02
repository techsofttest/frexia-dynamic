interface NetworkFeature {
  title: string;
  description: string;
}

interface GlobalReachProps {
  ourNetwork: {
    content1?: {
      image?: string | null;
      title?: string | null;
      description?: string | null;
    };
    content2?: NetworkFeature[];
  };
}

const perkIcons = [
  "/global-reach-icons/Global Coverage.png",
  "/global-reach-icons/Real-time Tracking.png",
  "/global-reach-icons/Customs Professionals.png",
  "/global-reach-icons/Competitive Pricing.png",
];

export default function GlobalReach({ ourNetwork }: GlobalReachProps) {
  const content1 = ourNetwork?.content1 ?? {};
  const features = ourNetwork?.content2 ?? [];

  return (
    <section className="bg-white text-frexia-dark w-full py-16 sm:py-20 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          <div className="relative rounded-2xl overflow-hidden min-h-[400px] sm:min-h-[420px] shadow-xl">
            {content1.image ? (
              <img
                src={content1.image}
                alt={content1.title || "Global Shipping Network"}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                No Image Available
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-b from-frexia-blue/90 via-frexia-blue/40 to-transparent" />

            <div className="absolute top-0 left-0 p-6 sm:p-10 text-white">
              <span className="text-orange-200 text-xs font-bold tracking-widest uppercase mb-2 sm:mb-3 block">
                Our Network
              </span>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none mb-3 sm:mb-4">
                {content1.title || "Global Reach"}
              </h2>

              {content1.description && (
                <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-md">
                  {content1.description}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:gap-6">
            {features.map((perk, index) => (
              <div
                key={`${perk.title}-${index}`}
                className="bg-frexia-blue-light border border-orange-100 rounded-2xl p-6 sm:p-7 flex items-center gap-5 sm:gap-6 hover:shadow-lg hover:border-frexia-blue/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={perkIcons[index % perkIcons.length]}
                    alt={perk.title}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-800 mb-1 sm:mb-1.5 group-hover:text-slate-900 transition-colors">
                    {perk.title}
                  </h3>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
