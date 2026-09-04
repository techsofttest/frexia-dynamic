"use client";

interface Stat {
  value: string;
  label: string;
}

interface Feature {
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  companyAchievements: Stat[];
  whyChooseUs: {
    content1?: {
      image?: string | null;
      title?: {
        before?: string | null;
        highlight?: string | null;
        after?: string | null;
      } | null;
      description?: string | null;
      experience?: {
        value: string;
        label: string;
      } | null;
    };

    content2?: Feature[];
    content3?: Feature[];
  };
}

const sidebarIcons = [
  <svg
    key="globe"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>,

  <svg
    key="shield"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,

  <svg
    key="clock"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>,

  <svg
    key="digital"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>,

  <svg
    key="briefcase"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>,

  <svg
    key="leaf"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.58 0 8a7 7 0 0 1-7.7 9.8Z" />
    <path d="M9 22v-4" />
  </svg>,
];

const bottomIcons = [
  <svg
    key="globe"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>,

  <svg
    key="shield"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,

  <svg
    key="clock"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>,

  <svg
    key="users"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,

  <svg
    key="chart"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M23 6l-9.5 9.5-5-5L1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>,
];

export default function WhyChooseUs({
  companyAchievements,
  whyChooseUs,
}: WhyChooseUsProps) {
  const content1 = whyChooseUs?.content1 ?? {};

  const sidebarFeatures = (whyChooseUs?.content2 ?? []).map(
    (feature, index) => ({
      ...feature,
      icon: sidebarIcons[index % sidebarIcons.length],
    }),
  );

  const bottomFeatures = (whyChooseUs?.content3 ?? []).map(
    (feature, index) => ({
      ...feature,
      icon: bottomIcons[index % bottomIcons.length],
    }),
  );

  return (
    <section className="bg-white text-frexia-dark w-full">
      <div className="bg-frexia-blue w-full py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {companyAchievements.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-0.5 sm:gap-1 py-1.5 sm:py-2"
            >
              <span className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white">
                {stat.value}
              </span>

              <span className="text-orange-200 text-xs sm:text-sm font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-full md:w-1/2 relative pt-12 sm:pt-16 md:pt-20">
          <div className="relative h-[300px] sm:h-[380px] md:h-[460px] w-full rounded-2xl bg-gray-50/50">
            {content1.image ? (
              <img
                src={content1.image}
                alt={"Frexia Logistics Experts"}
                className="absolute inset-0 w-full h-full object-contain object-bottom"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                No Image Available
              </div>
            )}
          </div>

          {content1.experience && (
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-frexia-blue text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl z-10">
              <div className="font-heading font-bold text-2xl sm:text-4xl">
                {content1.experience.value}
              </div>

              <div className="text-orange-200 text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">
                {content1.experience.label}
              </div>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-8">
          <div>
            <span className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-2 sm:mb-3 block">
              Why Choose Us
            </span>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-3 sm:mb-4 text-slate-800">
              {content1.title?.before || "People Driven By"}{" "}
              <span className="text-slate-700">
                {content1.title?.highlight || "Expertise"}
                {content1.title?.after || "."}
              </span>
            </h2>

            {content1.description && (
              <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
                {content1.description}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row min-h-[440px]">
        <div className="w-full md:w-[42%] relative min-h-[260px] sm:min-h-[340px] md:min-h-full">
          <img
            src="/warehouse/young-man-working-warehouse-with-boxes.jpg"
            alt="Frexia Logistics Operations"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        <div className="w-full md:w-[58%] bg-frexia-blue text-white grid grid-cols-2 divide-x divide-y divide-white/15">
          {sidebarFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center gap-2.5 sm:gap-4 p-5 sm:px-8 sm:py-10 lg:px-10 lg:py-12 hover:bg-white/10 transition-colors duration-300 cursor-pointer group"
            >
              <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-full border-2 border-white/30 text-white flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300 shrink-0">
                <div className="scale-75 sm:scale-100 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xs sm:text-base lg:text-lg text-white mb-1 sm:mb-2.5 group-hover:text-orange-200 transition-colors leading-tight">
                  {feature.title}
                </h3>

                <p className="text-white text-xs sm:text-sm leading-relaxed max-w-xs">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-white/15 border-t border-white/15 items-stretch bg-frexia-blue">
          {bottomFeatures.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-center gap-3 sm:gap-4 bg-frexia-blue text-white p-4 sm:p-6 lg:p-8 rounded-none hover:bg-frexia-blue-hover transition-all duration-300 text-left ${
                index === bottomFeatures.length - 1
                  ? "col-span-2 sm:col-span-2 md:col-span-1"
                  : ""
              }`}
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/10">
                <div className="scale-75 sm:scale-100 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              <div className="flex flex-col">
                <h5 className="font-heading font-bold text-[11px] sm:text-xs text-white tracking-wider uppercase leading-tight">
                  {item.title}
                </h5>

                <p className="text-white text-[11px] sm:text-xs mt-1 leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
