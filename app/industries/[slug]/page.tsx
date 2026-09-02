import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceHeaderBanner from "@/components/services/ServiceHeaderBanner";
import IndustryContentBody from "@/components/industries/IndustryContentBody";
import IndustrySidebar from "@/components/industries/IndustrySidebar";
import GetInTouch from "@/components/home/GetInTouch";

import { getIndustryBySlug, getIndustries } from "@/lib/industries";
import { getServices } from "@/lib/services";
import { getContact } from "@/lib/contact";

// --------------------------------------------------
// Page Props
// --------------------------------------------------

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// --------------------------------------------------
// Dynamic SEO
// --------------------------------------------------

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const resolvedParams = await params;

  // --------------------------------------------------
  // Get Current Industry
  // --------------------------------------------------

  const industry = await getIndustryBySlug(resolvedParams.slug);

  // --------------------------------------------------
  // Industry Not Found
  // --------------------------------------------------

  if (!industry) {
    return {
      title: "Industry Not Found | Frexia Logistic LLC",
    };
  }

  // --------------------------------------------------
  // Return Dynamic SEO
  // --------------------------------------------------

  return {
    title:
      industry.seo.meta_title ||
      `${industry.title} Logistics | Frexia Logistic LLC`,

    description: industry.seo.meta_desc || "",

    keywords: industry.seo.meta_key || "",
  };
}

// --------------------------------------------------
// Generate Static Params
// --------------------------------------------------

export async function generateStaticParams() {
  const industriesPage = await getIndustries();

  return industriesPage.data.map((industry) => ({
    slug: industry.slug,
  }));
}

// --------------------------------------------------
// Industry Detail Page
// --------------------------------------------------

export default async function IndustryDetailPage({
  params,
}: IndustryPageProps) {
  const resolvedParams = await params;

  // --------------------------------------------------
  // Get Current Industry
  // --------------------------------------------------

  const industry = await getIndustryBySlug(resolvedParams.slug);

  // --------------------------------------------------
  // Industry Not Found
  // --------------------------------------------------

  if (!industry) {
    notFound();
  }

  // --------------------------------------------------
  // Get All Industries
  // --------------------------------------------------

  const industriesPage = await getIndustries();

  const allIndustries = industriesPage.data;

  // --------------------------------------------------
  // Get Services
  // --------------------------------------------------

  const servicesPage = await getServices();

  const allServices = servicesPage.data;

  // --------------------------------------------------
  // Get Contact
  // --------------------------------------------------

  const contactPage = await getContact();

  const contact = contactPage.data;

  // --------------------------------------------------
  // Return Industry Detail Page
  // --------------------------------------------------

  return (
    <main className="flex flex-col min-h-screen w-full bg-white font-sans">
      {/* -------------------------------------------------- */}
      {/* Industry Header Banner */}
      {/* -------------------------------------------------- */}

      <ServiceHeaderBanner title={industry.title} categoryName="Industries" />

      {/* -------------------------------------------------- */}
      {/* Industry Content */}
      {/* -------------------------------------------------- */}

      <section className="w-full py-20 px-6 sm:px-12 md:px-16 lg:px-24 bg-white text-frexia-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content */}

          <IndustryContentBody industry={industry} />

          {/* Sidebar */}

          <IndustrySidebar
            currentSlug={industry.slug}
            allIndustries={allIndustries}
          />
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* Get In Touch */}
      {/* -------------------------------------------------- */}

      <GetInTouch contact={contact} services={allServices} />
    </main>
  );
}
