interface CoreValue {
  title: string;
  description: string;
}

interface CoreValuesProps {
  whatDrivesUs: {
    content1?: {
      title?: string | null;
      highlight?: string | null;
      description?: string | null;
    };
    content2?: CoreValue[];
  };
}

const valueIcons = [
  <svg
    key="integrity"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,

  <svg
    key="reliability"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>,

  <svg
    key="customer-focus"
    width="36"
    height="36"
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
    key="innovation"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>,

  <svg
    key="safety"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>,

  <svg
    key="excellence"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>,
];

export default function CoreValues({ whatDrivesUs }: CoreValuesProps) {
  const content1 = whatDrivesUs?.content1 ?? {};
  const values = whatDrivesUs?.content2 ?? [];

  return (
    <section className="bg-gray-50 text-frexia-dark w-full py-16 sm:py-20 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-2 sm:mb-3 block">
            What Drives Us
          </span>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-slate-800">
            {content1.title || "Our Core"}{" "}
            {content1.highlight && (
              <span className="text-gray-600">{content1.highlight}</span>
            )}
          </h2>

          {content1.description && (
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {content1.description}
            </p>
          )}
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div
              key={`${value.title}-${index}`}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer flex flex-col gap-4 sm:gap-6"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-frexia-blue-light text-frexia-blue flex items-center justify-center transition-colors duration-300 group-hover:bg-frexia-blue group-hover:text-white shrink-0">
                {valueIcons[index % valueIcons.length]}
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-frexia-dark mb-2 sm:mb-3 group-hover:text-frexia-blue transition-colors">
                  {value.title}
                </h3>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
