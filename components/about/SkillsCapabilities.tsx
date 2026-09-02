"use client";

const skillsList = [
  {
    category: "Air Freight Excellence",
    desc: "Priority routing, charter flights, AOG urgent handling, and express cargo handling.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.5-.1-1 .1-1.3.5l-.8.8c-.4.4-.3 1.1.2 1.4l5.3 3.5-3.5 3.5-2.3-.8c-.4-.1-.9.1-1.1.5l-.4.4c-.3.4-.2 1 .2 1.2l3.4 2.3 2.3 3.4c.3.4.9.5 1.2.2l.4-.4c.4-.3.6-.8.5-1.1l-.8-2.3 3.5-3.5 3.5 5.3c.3.5 1 .6 1.4.2l.8-.8c.4-.3.6-.8.5-1.3z" />
      </svg>
    ),
  },
  {
    category: "Ocean Cargo & Container Logistics",
    desc: "Full Container Load (FCL), Less Than Container Load (LCL), breakbulk & reefers.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.03" />
        <path d="M19 9V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v5" />
      </svg>
    ),
  },
  {
    category: "Customs Brokerage & Compliance",
    desc: "Duty classification, import/export clearance, HS coding, and tariff consulting.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    category: "Overland Transport & Fleet Network",
    desc: "Cross-border trucking, FTL/LTL road freight, cold chain, and last-mile delivery.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    category: "Cross Trade & International Routing",
    desc: "Third-country logistics routing directly between overseas origins and destinations.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    category: "Supply Chain & Real-Time Tracking Tech",
    desc: "Integrated GPS tracking, inventory management, automated alerts, and analytics.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
];

export default function SkillsCapabilities() {
  return (
    <section className="w-full bg-white text-frexia-dark py-20 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-3 block">
            Core Competencies
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-slate-800">
            Skills &amp; <span className="text-slate-700">Capabilities</span>
          </h2>
          {/* <p className="text-gray-700 text-lg leading-relaxed">
            Our operational mastery spans every discipline of global freight forwarding, backed by industry expertise, certified processes, and smart digital systems.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsList.map((skill) => (
            <div
              key={skill.category}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex flex-col gap-5 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-frexia-blue-light text-frexia-blue flex items-center justify-center shrink-0 group-hover:bg-frexia-blue group-hover:text-white transition-all duration-300">
                {skill.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-800 group-hover:text-frexia-blue transition-colors">
                {skill.category}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
