"use client";

interface Career {
  id: number;
  division: string;
  location: string;
  employment_type: string;
  experience: string;
  title: string;
  description: string;
  key_requirements: string[];
  status: boolean;
}

interface CareerSection {
  title_first: string;
  title_highlight: string;
  content: string;
}

interface JobOpeningsListProps {
  jobs: Career[];
  careerSection: CareerSection | null;
  onApplyClick: (job: Career) => void;
}

export default function JobOpeningsList({
  jobs,
  careerSection,
  onApplyClick,
}: JobOpeningsListProps) {
  return (
    <section className="w-full bg-gray-50 text-frexia-dark py-20 px-6 sm:px-12 md:px-16 lg:px-24">
      {" "}
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-frexia-blue text-xs font-bold tracking-widest uppercase mb-3 block">
            Join Our Team
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-800">
            {" "}
            {careerSection?.title_first || "Current Career"}{" "}
            <span className="text-frexia-blue">
              {" "}
              {careerSection?.title_highlight || "Opportunities"}{" "}
            </span>{" "}
          </h2>{" "}
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            {" "}
            {careerSection?.content ||
              "Explore our current job openings below and take the next step in your logistics career."}{" "}
          </p>
        </div>

        {/* Job List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {Array.isArray(jobs) && jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="flex-grow flex flex-col gap-5">
                  {/* Department & Metadata Tags */}
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Division */}
                    <span className="px-3.5 py-1 bg-frexia-blue-light text-frexia-blue text-xs font-bold rounded-full whitespace-nowrap">
                      {job.division}
                    </span>

                    {/* Location */}
                    <span className="text-slate-500 text-xs font-semibold flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5 text-frexia-blue shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21c-4.418 0-8-7.582-8-12a8 8 0 1 1 16 0c0 4.418-3.582 12-8 12z"
                        />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>

                      {job.location}
                    </span>

                    {/* Employment Type */}
                    <span className="text-slate-500 text-xs font-semibold flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5 text-frexia-blue shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>

                      {job.employment_type}
                    </span>

                    {/* Experience */}
                    <span className="text-slate-500 text-xs font-semibold flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5 text-frexia-blue shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="2"
                          y="7"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>

                      {job.experience}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="font-heading font-bold text-2xl text-slate-800 leading-snug">
                      {job.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  {/* Key Requirements */}
                  <div className="pt-2 space-y-2">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Key Requirements:
                    </span>

                    <div className="space-y-1.5">
                      {Array.isArray(job.key_requirements) &&
                        job.key_requirements.map((requirement, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 text-xs text-gray-600"
                          >
                            <span className="text-frexia-blue font-bold mt-0.5">
                              •
                            </span>

                            <span className="leading-normal">
                              {requirement}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => onApplyClick(job)}
                    className="w-full px-7 py-3.5 bg-frexia-blue text-white rounded-xl font-bold text-sm hover:bg-frexia-blue-hover active:scale-95 transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    Apply Now
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
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No career opportunities are currently available.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
