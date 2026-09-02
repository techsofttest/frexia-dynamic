"use client";

interface MissionVisionItem {
  title?: string;
  description?: string;
}

interface MissionVisionProps {
  missionVision?: {
    content1?: MissionVisionItem[];
  };
}

export default function MissionVision({ missionVision }: MissionVisionProps) {
  const points = (missionVision?.content1 ?? []).map((item, index) => ({
    title: index === 0 ? "OUR MISSION" : "OUR VISION",
    subtitle: item.title || "",
    text: item.description || "",
    icon:
      index === 0 ? (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ) : (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
  }));

  return (
    <section className="w-full bg-frexia-blue text-white py-14 sm:py-20 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Background glow graphics */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-white/80 text-xs font-bold tracking-widest uppercase mb-2 sm:mb-3 block">
            Guiding Principles
          </span>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-tight sm:leading-none mb-3 sm:mb-4 text-white">
            Our Mission{" "}
            <span className="font-normal text-white/90">&amp; Vision</span>
          </h2>
        </div>

        {/* 2 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {points.map((point) => (
            <div
              key={point.title}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col gap-4 sm:gap-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-frexia-blue-light text-frexia-blue flex items-center justify-center shrink-0 shadow-sm group-hover:bg-frexia-blue group-hover:text-white transition-all duration-300">
                <div className="scale-75 sm:scale-100 flex items-center justify-center">
                  {point.icon}
                </div>
              </div>

              <div>
                <span className="text-frexia-blue text-xs font-bold uppercase tracking-widest block mb-1.5 sm:mb-2">
                  {point.title}
                </span>

                {/* Dynamic subtitle */}
                <h3 className="font-heading font-bold text-xl sm:text-3xl text-slate-800 mb-2.5 sm:mb-4 leading-snug">
                  {point.subtitle}
                </h3>

                {/* Dynamic text */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
