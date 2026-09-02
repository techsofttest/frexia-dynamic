import type { Metadata } from "next";

import InnerPageBanner from "@/components/global/InnerPageBanner";
import GetInTouch from "@/components/home/GetInTouch";

import { getServices } from "@/lib/services";
import { getContact } from "@/lib/contact";

// --------------------------------------------------
// Privacy Policy API
// --------------------------------------------------

async function getPrivacyPolicy() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/privacy-policy`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch privacy policy");
  }

  const result = await res.json();

  return result.data ?? {};
}

// --------------------------------------------------
// Dynamic SEO Metadata
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const privacyData = await getPrivacyPolicy();

  const seo = privacyData?.seo ?? {};

  const description = (seo.meta_description || "")
    .replace(/<[^>]*>/g, "")
    .trim();

  return {
    title: seo.meta_title || "Privacy Policy | Frexia Logistic LLC",

    description,

    keywords: seo.meta_keywords || "",

    openGraph: {
      title: seo.meta_title || "Privacy Policy | Frexia Logistic LLC",

      description,

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: seo.meta_title || "Privacy Policy | Frexia Logistic LLC",

      description,
    },
  };
}

// --------------------------------------------------
// Privacy Policy Page
// --------------------------------------------------

export default async function PrivacyPolicyPage() {
  const privacyData = await getPrivacyPolicy();

  // --------------------------------------------------
  // Services
  // --------------------------------------------------

  const servicesPage = await getServices();

  const allServices = Array.isArray(servicesPage?.data)
    ? servicesPage.data
    : [];

  // --------------------------------------------------
  // Contact
  // --------------------------------------------------

  const contact = await getContact();

  // --------------------------------------------------
  // API Data
  // --------------------------------------------------

  const banner = privacyData?.banner ?? {};

  const privacyPolicy = privacyData?.privacy_policy ?? {};

  const content = privacyPolicy?.content1 ?? "";

  return (
    <main className="flex flex-col min-h-screen w-full bg-white font-sans overflow-x-hidden">
      {/* --------------------------------------------------
          1. Inner Page Banner
      -------------------------------------------------- */}

      <InnerPageBanner
        title={banner.title_first || ""}
        titleHighlight={banner.title_highlight || ""}
        description={banner.content || ""}
        bgImage={banner.image || ""}
      />

      {/* --------------------------------------------------
          2. Privacy Policy Content
      -------------------------------------------------- */}

      <section className="w-full bg-white text-frexia-dark py-20 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 prose lg:prose-lg">
          {content ? (
            <div
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          ) : (
            <p>Privacy Policy content is currently unavailable.</p>
          )}
        </div>
      </section>

      {/* --------------------------------------------------
          3. Get In Touch
      -------------------------------------------------- */}

      <GetInTouch contact={contact?.data} services={allServices} />
    </main>
  );
}
