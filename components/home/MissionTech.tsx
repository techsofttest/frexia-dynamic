interface MissionItem {
  title: string;
  description: string;
}

interface MissionTechProps {
  visionMissionCommitment: {
    content1?: MissionItem[];
  };
}

const icons = [
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    {" "}
    <circle cx="12" cy="12" r="10" />{" "}
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />{" "}
  </svg>,
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    {" "}
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />{" "}
  </svg>,
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.58 0 8a7 7 0 0 1-7.7 9.8Z" />{" "}
    <path d="M9 22v-4" />{" "}
  </svg>,
];

export default function MissionTech({
  visionMissionCommitment,
}: MissionTechProps) {
  const points = visionMissionCommitment?.content1 ?? [];

  return (
    <section className="w-full bg-frexia-blue text-white grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
      {points.map((point, index) => (
        <div
          key={`${point.title}-${index}`}
          className="flex flex-col items-center text-center gap-4 sm:gap-5 px-6 sm:px-10 py-12 sm:py-16 hover:bg-white/10 transition-colors duration-300 cursor-pointer group"
        >
          {" "}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white/30 text-white flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300 shrink-0">
            {" "}
            <div className="scale-90 sm:scale-100 flex items-center justify-center">
              {icons[index % icons.length]}{" "}
            </div>{" "}
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2 sm:mb-2.5 group-hover:text-orange-200 transition-colors">
              {point.title}
            </h3>

            <p className="text-white/90 text-sm leading-relaxed max-w-xs mx-auto">
              {point.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
