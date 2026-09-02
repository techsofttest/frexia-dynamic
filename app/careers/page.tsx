import type { Metadata } from "next";

import CareersPageContent from "./CareersPageContent";
import { getServices } from "@/lib/services";
import { getContact } from "@/lib/contact";

// --------------------------------------------------
// Fetch Careers Page Data
// --------------------------------------------------

async function getCareersPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/career`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch careers");
  }

  return response.json();
}

// --------------------------------------------------
// SEO Metadata
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const careersPage = await getCareersPage();

  return {
    title: careersPage?.seo?.meta_title || "Careers | Frexia Logistic LLC",

    description:
      careersPage?.seo?.meta_desc ||
      "Join Frexia Logistic LLC and build your career in global logistics and supply chain technology.",

    keywords:
      careersPage?.seo?.meta_key ||
      "careers, jobs, Frexia Logistic LLC, logistics jobs, freight forwarding jobs",
  };
}

// --------------------------------------------------
// Careers Page
// --------------------------------------------------

export default async function CareersPage() {
  // --------------------------------------------------
  // Fetch Careers Page
  // --------------------------------------------------

  const careersPage = await getCareersPage();

  const careers = Array.isArray(careersPage?.data) ? careersPage.data : [];

  // --------------------------------------------------
  // Fetch Services
  // --------------------------------------------------

  const servicesPage = await getServices();

  const services = Array.isArray(servicesPage?.data) ? servicesPage.data : [];

  // --------------------------------------------------
  // Career Section
  // --------------------------------------------------

  const careerSection = careersPage?.career_section ?? null;
  console.log("Career Section from API:", careerSection);

  // --------------------------------------------------
  // Fetch Contact
  // --------------------------------------------------

  const contactPage = await getContact();

  const contact = contactPage.data;

  // --------------------------------------------------
  // Return Careers Page
  // --------------------------------------------------

  return (
    <CareersPageContent
      banner={careersPage?.banner ?? null}
      careerSection={careerSection}
      careers={careers}
      services={services}
      contact={contact}
    />
  );
}
