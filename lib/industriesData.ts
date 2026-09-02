export interface IndustryDetail {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  highlights: string[];
  capabilities: string[];
}

export const industriesData: Record<string, IndustryDetail> = {
  "aircraft-spare-aog": {
    slug: "aircraft-spare-aog",
    title: "Aircraft Spare & AOG",
    shortDesc: "Your trusted partner for specialized aerospace logistics, from routine aircraft spare parts to 24/7 AOG emergency response.",
    fullDesc:
      "Aircraft on Ground (AOG) situations demand immediate, flawless execution. Frexia Logistic LLC provides 24/7/365 emergency aerospace logistics, expediting critical flight components, engines, landing gear, and avionics to ground sites worldwide. Our dedicated AOG desk guarantees rapid customs pre-clearance, flight charters, and hand-carry onboard courier services to minimize aircraft downtime.",
    image: "/industries-img/Aerospace Logistics.png",
    highlights: [
      "24/7/365 Dedicated AOG Emergency Response Desk",
      "Hand-carry Onboard Courier (OBC) & Charter Flight options",
      "Pre-cleared expedited customs clearance at major international airports",
      "Traceable handling for high-value engines, avionics & structural parts",
    ],
    capabilities: [
      "Engine & oversized aerospace component transport",
      "Hazardous materials & oxygen bottle air transport",
      "Temperature-controlled cabin interior & composite part delivery",
      "Direct apron drop-off & tarmac delivery coordination",
    ],
  },
  "healthcare-pharmaceuticals": {
    slug: "healthcare-pharmaceuticals",
    title: "Healthcare & Pharmaceuticals",
    shortDesc: "Securing cold-chain integrity and regulatory compliance for sensitive medical supplies and life-saving pharmaceuticals.",
    fullDesc:
      "Temperature-sensitive medical supplies, vaccines, and active pharmaceutical ingredients require uncompromised cold-chain integrity. Frexia Logistic delivers end-to-end GDP-compliant cold chain transport, real-time temperature tracking, and sterile packaging handling. We navigate strict international health regulations to guarantee your critical medical cargo arrives safely.",
    image: "/industries-img/Healthcare & Pharmaceuticals.png",
    highlights: [
      "GDP (Good Distribution Practice) compliant logistics corridors",
      "Active & passive temperature control (+2°C to +8°C, +15°C to +25°C, -20°C, -80°C)",
      "Real-time IoT temperature logging & GPS tracking alert systems",
      "Priority customs clearance for urgent medical diagnostic kits & drugs",
    ],
    capabilities: [
      "Biopharmaceutical & vaccine cold chain transportation",
      "Medical device & surgical equipment distribution",
      "Clinical trial sample shipping with dry ice packaging",
      "Customs health authority permit management & compliance",
    ],
  },
  "oil-gas": {
    slug: "oil-gas",
    title: "Oil & Gas",
    shortDesc: "Moving heavy machinery and hazardous materials safely to remote locations under strict global safety protocols.",
    fullDesc:
      "Energy and extraction logistics require robust, heavy-lift transport capable of reaching remote onshore rigs and offshore platforms. Frexia Logistic provides specialized heavy haulage, charter vessel operations, and hazardous material management tailored to the Oil & Gas industry, upholding stringent HSSE (Health, Safety, Security, Environment) standards.",
    image: "/industries-img/Oil & Gas.png",
    highlights: [
      "Heavy-lift & out-of-gauge (OOG) energy equipment transport",
      "Offshore supply vessel & remote land rig transport coordination",
      "Certified dangerous goods & hazardous materials compliance",
      "Rig move coordination & dedicated site project logistics",
    ],
    capabilities: [
      "Drill pipe, valve & heavy turbine transport",
      "Expedited replacement part delivery for operational downtime",
      "Onsite logistics management & crane heavy-rigging teams",
      "Multi-modal cross-border transit across remote energy corridors",
    ],
  },
  "technology-manufacturing": {
    slug: "technology-manufacturing",
    title: "Technology & Manufacturing",
    shortDesc: "Protecting high-value electronics and semiconductors with high-security transit and rapid global distribution networks.",
    fullDesc:
      "High-tech electronics, microchips, and precision manufacturing components require ultra-secure, shock-monitored, and rapid transit. Frexia Logistic offers high-security freight forwarding for high-value technology brands, implementing GPS tracking, tamper-evident seals, and express air/land transport solutions to keep tech supply chains moving.",
    image: "/industries-img/Technology & Manufacturing.png",
    highlights: [
      "High-security freight forwarding with 24/7 GPS route monitoring",
      "Cleanroom-grade handling & shock/vibration sensitive cargo protection",
      "Time-critical component delivery for just-in-time (JIT) assembly lines",
      "Serialized inventory tracking & secure warehouse storage",
    ],
    capabilities: [
      "Semiconductor & microchip air freight distribution",
      "Consumer electronics, server & telecom equipment shipping",
      "Automated assembly machinery & robotics transport",
      "Reverse logistics & high-value RMA returns management",
    ],
  },
  "manufacturing": {
    slug: "manufacturing",
    title: "Manufacturing",
    shortDesc: "Streamlining raw material flow and finished goods distribution with precise, just-in-time delivery schedules.",
    fullDesc:
      "Continuous industrial manufacturing relies on synchronized raw material intake and prompt finished goods distribution. Frexia Logistic designs custom supply chain workflows, combining overland FTL/LTL freight, ocean container shipping, and bonded warehousing to optimize plant throughput and eliminate production line stoppages.",
    image: "/industries-img/Manufacturing.png",
    highlights: [
      "Just-In-Time (JIT) & Just-In-Sequence (JIS) raw material delivery",
      "End-to-end multimodal transport for industrial machinery & parts",
      "Vendor managed inventory (VMI) & regional warehouse staging",
      "Customs tariff classification & duty drawback optimization",
    ],
    capabilities: [
      "Bulk raw material intake (metals, plastics, textiles, chemicals)",
      "Finished product warehousing & global export distribution",
      "Heavy industrial machinery installation & rigging support",
      "Consolidated freight logistics reducing inventory overhead",
    ],
  },
  "automotive": {
    slug: "automotive",
    title: "Automotive",
    shortDesc: "Managing complex multi-tier supply chains, time-critical spare parts logistics, and finished vehicle shipping.",
    fullDesc:
      "Automotive supply chains operate on tight production windows where a single missing component can pause an assembly plant. Frexia Logistic offers specialized automotive logistics, ranging from emergency spare parts air charters to Ro-Ro vehicle transport and multi-tier supplier freight consolidation.",
    image: "/industries-img/Automotive.png",
    highlights: [
      "Emergency automotive parts transport & charter solutions",
      "Roll-on/Roll-off (Ro-Ro) & containerized vehicle shipping",
      "Tier-1 & Tier-2 automotive supplier freight consolidation",
      "Aftermarket spare parts warehousing & regional distribution",
    ],
    capabilities: [
      "EV battery & hazardous automotive component transport",
      "Finished vehicle fleet logistics & enclosed car transport",
      "Stamping, engine block & body panel freight forwarding",
      "Cross-border land transport connecting regional auto hubs",
    ],
  },
  "construction": {
    slug: "construction",
    title: "Construction",
    shortDesc: "Delivering oversized equipment, raw materials, and structural components directly to active jobsites on time.",
    fullDesc:
      "Large-scale infrastructure and commercial construction projects require timely jobsite deliveries of heavy equipment, structural steel, and building supplies. Frexia Logistic coordinates site-specific deliveries, heavy haulage permits, and multi-modal freight transport to keep mega-projects running on schedule.",
    image: "/industries-img/Construction.png",
    highlights: [
      "Direct jobsite delivery for heavy machinery & building materials",
      "Specialized flatbed, lowbed & heavy-haul transport permits",
      "Staging & consolidation for structural steel & pre-cast components",
      "Route survey planning & police escort coordination for oversized loads",
    ],
    capabilities: [
      "Excavator, crane & heavy construction fleet transport",
      "Building material bulk shipping (cement, glass, steel, lumber)",
      "Modular pre-fabricated building unit delivery",
      "Jobsite logistics coordination minimizing city traffic delays",
    ],
  },
  "food-beverage": {
    slug: "food-beverage",
    title: "Food & Beverage",
    shortDesc: "Preventing spoilage with cross-docking solutions and temperature-monitored transport to maximize shelf life.",
    fullDesc:
      "Perishable food products, fresh produce, meat, dairy, and beverages require swift, temperature-regulated transport to maintain freshness and maximize shelf life. Frexia Logistic delivers cold-chain reefer shipping, rapid customs health inspections, and cross-docking solutions across sea, air, and land.",
    image: "/industries-img/Food & Beverage.png",
    highlights: [
      "Reefer container shipping with multi-temp zone controls",
      "Fast-track agricultural & food safety customs clearance",
      "Perishable air freight for fresh seafood, meat & fruits",
      "HACCP certified cold storage & cross-docking facilities",
    ],
    capabilities: [
      "Fresh & frozen produce import/export freight forwarding",
      "Beverage & bulk liquid flexitank container shipping",
      "Temperature-controlled overland refrigerated trucking",
      "Food health authority registration & inspection support",
    ],
  },
  "dangerous-goods": {
    slug: "dangerous-goods",
    title: "Dangerous Goods",
    shortDesc: "We ensure secure, regulatory-compliant global transport for all categories of dangerous goods.",
    fullDesc:
      "Transporting hazardous materials, chemicals, batteries, and flammable substances demands certified expertise and strict regulatory adherence. Frexia Logistic features IATA/IMDG/ADR certified hazmat specialists who oversee UN-certified packaging, labeling, safety documentation, and compliant transport across all modes.",
    image: "/industries-img/Dangerous Goods.png",
    highlights: [
      "IATA, IMDG & ADR certified dangerous goods handling specialists",
      "UN-approved hazardous cargo packaging, labeling & documentation",
      "Class 1-9 hazmat shipping across Air, Ocean, and Land transport",
      "Emergency response protocols & safety compliance management",
    ],
    capabilities: [
      "Lithium-ion battery & energy storage shipping compliance",
      "Industrial chemical, paint & solvent bulk transport",
      "Gas cylinder & compressed chemical freight forwarding",
      "Customs hazardous cargo declaration & environmental permits",
    ],
  },
};
