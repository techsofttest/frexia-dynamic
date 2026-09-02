import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServiceHeaderBanner from "@/components/services/ServiceHeaderBanner";
import ServiceContentBody from "@/components/services/ServiceContentBody";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import GetInTouch from "@/components/home/GetInTouch";

import { getServiceBySlug, getServices } from "@/lib/services";
import { getContact } from "@/lib/contact";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// --------------------------------------------------
// Dynamic SEO
// --------------------------------------------------

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;

  const service = await getServiceBySlug(resolvedParams.slug);

  if (!service) {
    return {
      title: "Service Not Found | Frexia Logistic LLC",
    };
  }

  return {
    title: service.seo.meta_title || `${service.title} | Frexia Logistic LLC`,

    description: service.seo.meta_desc || service.shortDesc,

    keywords: service.seo.meta_key || "",
  };
}

// --------------------------------------------------
// Generate Static Params
// --------------------------------------------------

export async function generateStaticParams() {
  const servicesPage = await getServices();

  return servicesPage.data.map((service) => ({
    slug: service.slug,
  }));
}

// --------------------------------------------------
// Service Detail Page
// --------------------------------------------------

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;

  // --------------------------------------------------
  // Get Current Service
  // --------------------------------------------------

  const service = await getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  // --------------------------------------------------
  // Get All Services
  // --------------------------------------------------

  const servicesPage = await getServices();

  const allServices = servicesPage.data;

  // --------------------------------------------------
  // Get Contact
  // --------------------------------------------------

  const contactPage = await getContact();

  const contact = contactPage.data;

  // --------------------------------------------------
  // Return Service Detail Page
  // --------------------------------------------------

  return (
    <main className="flex flex-col min-h-screen w-full bg-white font-sans">
      {/* -------------------------------------------------- */}
      {/* Service Header Banner */}
      {/* -------------------------------------------------- */}

      <ServiceHeaderBanner title={service.title} />

      {/* -------------------------------------------------- */}
      {/* Service Content */}
      {/* -------------------------------------------------- */}

      <section className="w-full py-20 px-6 sm:px-12 md:px-16 lg:px-24 bg-white text-frexia-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content */}

          <ServiceContentBody service={service} />

          {/* Sidebar */}

          <ServiceSidebar
            currentSlug={service.slug}
            allServices={allServices}
          />
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* Get In Touch */}
      {/* -------------------------------------------------- */}

      <GetInTouch
        contact={contact}
        services={allServices}
        selectedServiceId={service.id}
      />
    </main>
  );
}
