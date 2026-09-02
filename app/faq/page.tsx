import type { Metadata } from "next";

import InnerPageBanner from "@/components/global/InnerPageBanner";
import FAQ from "@/components/home/FAQ";
import GetInTouch from "@/components/home/GetInTouch";

import { getServices } from "@/lib/services";
import { getContact } from "@/lib/contact";

// --------------------------------------------------
// FAQ API
// --------------------------------------------------

async function getFAQPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/faq`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch FAQ page");
  }

  const result = await res.json();

  return result.data ?? {};
}

// --------------------------------------------------
// Dynamic SEO
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const faqData = await getFAQPage();

  const seo = faqData?.seo ?? {};

  const description = (seo.meta_description || "")
    .replace(/<[^>]*>/g, "")
    .trim();

  return {
    title:
      seo.meta_title ||
      "Frequently Asked Questions (FAQ) | Frexia Logistic LLC",

    description,

    keywords: seo.meta_keywords || "",

    openGraph: {
      title:
        seo.meta_title ||
        "Frequently Asked Questions (FAQ) | Frexia Logistic LLC",

      description,

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title:
        seo.meta_title ||
        "Frequently Asked Questions (FAQ) | Frexia Logistic LLC",

      description,
    },
  };
}

// --------------------------------------------------
// FAQ PAGE
// --------------------------------------------------

export default async function FAQPage() {
  // FAQ data
  const faqData = await getFAQPage();

  // Services
  const servicesPage = await getServices();

  const allServices = Array.isArray(servicesPage?.data)
    ? servicesPage.data
    : [];

  // Contact
  const contact = await getContact();

  // --------------------------------------------------
  // Dynamic API Data
  // --------------------------------------------------

  const banner = faqData?.banner ?? {};

  const faqs = Array.isArray(faqData?.faqs) ? faqData.faqs : [];

  return (
    <main className="flex flex-col min-h-screen w-full bg-white font-sans">
      {/* 1. Inner Page Banner */}
      <InnerPageBanner
        title={banner.title_first || ""}
        titleHighlight={banner.title_highlight || ""}
        description={banner.content || ""}
        bgImage={banner.image || ""}
      />

      {/* 2. Dynamic FAQ */}
      <FAQ faqs={faqs} />

      {/* 3. Get In Touch */}
      <GetInTouch contact={contact?.data} services={allServices} />
    </main>
  );
}
