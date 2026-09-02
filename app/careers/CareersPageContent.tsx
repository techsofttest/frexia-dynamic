"use client";

import { useState } from "react";

import InnerPageBanner from "@/components/global/InnerPageBanner";
import GetInTouch from "@/components/home/GetInTouch";
import JobOpeningsList from "@/components/careers/JobOpeningsList";
import JobApplicationModal from "@/components/careers/JobApplicationModal";

import type { Contact } from "@/lib/contact";
import type { Service } from "@/lib/services";

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

interface CareerBanner {
  title_first: string;
  title_highlight: string;
  content: string;
  image: string | null;
}

interface CareerSection {
  title_first: string;
  title_highlight: string;
  content: string;
}

interface CareersPageContentProps {
  services: Service[];
  careers: Career[];
  banner: CareerBanner | null;
  careerSection: CareerSection | null;
  contact: Contact | null;
}

export default function CareersPageContent({
  services,
  careers,
  banner,
  careerSection,
  contact,
}: CareersPageContentProps) {
  console.log("Career Section:", careerSection);

  const [selectedJob, setSelectedJob] = useState<Career | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverNote: "",
    resumeFile: null as File | null,
  });

  const handleApplyClick = (job: Career) => {
    setSelectedJob(job);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      coverNote: "",
      resumeFile: null,
    });
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  return (
    <main className="flex flex-col min-h-screen w-full bg-white font-sans overflow-x-hidden">
      {/* -------------------------------------------------- */}
      {/* Dynamic Careers Banner */}
      {/* -------------------------------------------------- */}

      <InnerPageBanner
        title={banner?.title_first || "Build Your Career at"}
        titleHighlight={banner?.title_highlight || "Frexia Logistic LLC"}
        description={
          banner?.content ||
          "Join a dynamic team of global logistics professionals powering international trade across Air, Sea, Land, and Supply Chain technology."
        }
        bgImage={banner?.image || "/banner/b1.jpg"}
      />

      {/* -------------------------------------------------- */}
      {/* Dynamic Job Openings */}
      {/* -------------------------------------------------- */}

      <JobOpeningsList
        jobs={careers}
        careerSection={careerSection}
        onApplyClick={handleApplyClick}
      />

      {/* -------------------------------------------------- */}
      {/* Job Application Modal */}
      {/* -------------------------------------------------- */}

      <JobApplicationModal
        selectedJob={selectedJob}
        formData={formData}
        setFormData={setFormData}
        handleCloseModal={handleCloseModal}
      />

      {/* -------------------------------------------------- */}
      {/* Dynamic Get In Touch */}
      {/* -------------------------------------------------- */}

      <GetInTouch contact={contact} services={services} />
    </main>
  );
}
