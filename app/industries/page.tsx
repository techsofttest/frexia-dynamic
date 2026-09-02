import type { Metadata } from "next";

import InnerPageBanner from "@/components/global/InnerPageBanner";
import IndustriesGridSection from "@/components/industries/IndustriesGridSection";
import GetInTouch from "@/components/home/GetInTouch";

import { getIndustries } from "@/lib/industries";
import { getServices } from "@/lib/services";
import { getContact } from "@/lib/contact";

// --------------------------------------------------
// SEO Metadata
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const industriesPage = await getIndustries();

  return {
    title:
      industriesPage.seo.meta_title ||
      "Industries We Serve | Frexia Logistic LLC",

    description:
      industriesPage.seo.meta_desc ||
      "Specialized logistics solutions across global industries.",

    keywords: industriesPage.seo.meta_key || "",
  };
}

// --------------------------------------------------
// Industries Page
// --------------------------------------------------

export default async function IndustriesPage() {
  // --------------------------------------------------
  // Fetch Industries
  // --------------------------------------------------

  const industriesPage = await getIndustries();

  // --------------------------------------------------
  // Fetch Services
  // --------------------------------------------------

  const servicesPage = await getServices();

  // --------------------------------------------------
  // Fetch Contact
  // --------------------------------------------------

  const contactPage = await getContact();

  const contact = contactPage.data;

  // --------------------------------------------------
  // Return Industries Page
  // --------------------------------------------------

  return (
    <main className="flex flex-col min-h-screen w-full bg-white font-sans overflow-x-hidden">
      {/* -------------------------------------------------- */}
      {/* 1. Dynamic Industries Banner */}
      {/* -------------------------------------------------- */}

      <InnerPageBanner
        title={industriesPage.banner.title_first}
        titleHighlight={industriesPage.banner.title_highlight}
        description={industriesPage.banner.content}
        bgImage={industriesPage.banner.image || "/banner/industries.png"}
      />

      {/* -------------------------------------------------- */}
      {/* 2. Dynamic Industries Section */}
      {/* -------------------------------------------------- */}

      <IndustriesGridSection
        industries={industriesPage.data}
        titleFirst={industriesPage.sectors_we_empower.title_first}
        titleHighlight={industriesPage.sectors_we_empower.title_highlight}
      />

      {/* -------------------------------------------------- */}
      {/* 3. Contact / Get In Touch */}
      {/* -------------------------------------------------- */}

      <GetInTouch contact={contact} services={servicesPage.data} />
    </main>
  );
}
