export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export const jobOpenings: JobPosting[] = [
  {
    id: "job-1",
    title: "Senior Air Freight Operations Executive",
    department: "Air Cargo Division",
    location: "Dubai, UAE",
    type: "Full-Time",
    experience: "4-6 Years",
    description:
      "We are seeking an experienced Air Freight Operations Specialist to manage priority booking, airline carrier negotiations, charter freight clearance, and time-critical AOG shipments.",
    requirements: [
      "4+ years experience in air freight cargo forwarding and airport customs procedures.",
      "In-depth knowledge of IATA regulations and dangerous goods handling.",
      "Proven track record managing airline booking and rate negotiation.",
    ],
  },
  {
    id: "job-2",
    title: "Ocean Freight Pricing & Procurement Manager",
    department: "Sea Logistics Division",
    location: "Dubai, UAE",
    type: "Full-Time",
    experience: "5+ Years",
    description:
      "Drive strategic ocean carrier relationships, FCL/LCL rate procurement, and container shipment optimization across global trade routes.",
    requirements: [
      "Extensive background in ocean carrier procurement & contract management.",
      "Strong understanding of FCL/LCL container shipping dynamics.",
      "Excellent analytical skills and client relationship management.",
    ],
  },
  {
    id: "job-3",
    title: "Customs Clearance & Documentation Specialist",
    department: "Compliance & Brokerage",
    location: "Dubai Ports & Airports",
    type: "Full-Time",
    experience: "3-5 Years",
    description:
      "Responsible for preparing import/export clearance documentation, HS code classification, and liaison with customs border authorities for rapid cargo release.",
    requirements: [
      "Certified UAE customs clearance card / experience with Mirsal 2 / port portals.",
      "Expert knowledge of HS code classifications and duty structure.",
      "Ability to handle time-sensitive customs clearance under tight deadlines.",
    ],
  },
  {
    id: "job-4",
    title: "Key Account Manager - Supply Chain Logistics",
    department: "Business Development",
    location: "Dubai, UAE",
    type: "Full-Time",
    experience: "3+ Years",
    description:
      "Expand our strategic enterprise client base in Aerospace, Energy, and Pharma sectors while delivering custom 3PL/4PL supply chain proposals.",
    requirements: [
      "Proven B2B sales track record in freight forwarding or logistics.",
      "Strong communication skills and consultative selling approach.",
      "Bachelor's degree in Logistics, Business Admin, or related field.",
    ],
  },
];
