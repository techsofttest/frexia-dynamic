import type { Metadata } from "next";

import InnerPageBanner from "@/components/global/InnerPageBanner";
import OurServices from "@/components/home/OurServices";
import GetInTouch from "@/components/home/GetInTouch";

import { getServices } from "@/lib/services";
import { getContact } from "@/lib/contact";

// --------------------------------------------------
// SEO Metadata
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const servicesPage = await getServices();

  return {
    title: servicesPage.seo.meta_title || "Services | Frexia Logistic LLC",

    description:
      servicesPage.seo.meta_desc ||
      "Explore our global freight forwarding and logistics services.",

    keywords: servicesPage.seo.meta_key || "",
  };
}

// --------------------------------------------------
// Services Page
// --------------------------------------------------

export default async function ServicesPage() {
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
  // Return Services Page
  // --------------------------------------------------

  return (
    <main className="flex flex-col min-h-screen w-full bg-white font-sans overflow-x-hidden">
      {/* -------------------------------------------------- */}
      {/* 1. Dynamic Services Banner */}
      {/* -------------------------------------------------- */}

      <InnerPageBanner
        title={servicesPage.banner.title_first}
        titleHighlight={servicesPage.banner.title_highlight}
        description={servicesPage.banner.content}
        bgImage={servicesPage.banner.image || "/banner/services.png"}
      />

      {/* -------------------------------------------------- */}
      {/* 2. Dynamic Services Section */}
      {/* -------------------------------------------------- */}

      <OurServices
        services={servicesPage.data}
        whatWeDo={servicesPage.what_we_do}
      />

      {/* -------------------------------------------------- */}
      {/* 3. Contact / Get In Touch */}
      {/* -------------------------------------------------- */}

      <GetInTouch contact={contact} services={servicesPage.data} />
    </main>
  );
}
