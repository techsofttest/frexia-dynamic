import type { Metadata } from "next";

import InnerPageBanner from "@/components/global/InnerPageBanner";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactMapSection from "@/components/contact/ContactMapSection";
import ContactFormSection from "@/components/contact/ContactFormSection";

import { getContact } from "@/lib/contact";

// --------------------------------------------------
// Dynamic SEO
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const contactPage = await getContact();

  return {
    title: contactPage.seo.meta_title || "Contact Us | Frexia Logistic LLC",

    description:
      contactPage.seo.meta_desc ||
      "Get in touch with Frexia Logistic LLC. We are here to help with any questions about our freight forwarding and logistics services.",

    keywords: contactPage.seo.meta_key || "",
  };
}

// --------------------------------------------------
// Contact Page
// --------------------------------------------------

export default async function ContactUsPage() {
  const contactPage = await getContact();

  return (
    <main className="flex flex-col min-h-screen w-full bg-white font-sans">
      {/* ---------------------------------------- */}
      {/* Dynamic Contact Banner */}
      {/* ---------------------------------------- */}

      <InnerPageBanner
        title={contactPage.banner.title_first || "Get in Touch With"}
        titleHighlight={
          contactPage.banner.title_highlight || "Our Logistics Experts"
        }
        description={
          contactPage.banner.content ||
          "We are here to help with any questions about our services. Reach out and we’ll respond as soon as we can."
        }
        bgImage={contactPage.banner.image || "/banner/contact.png"}
      />

      {/* ---------------------------------------- */}
      {/* Contact Information */}
      {/* ---------------------------------------- */}

      <ContactInfoSection contact={contactPage.data} />

      {/* ---------------------------------------- */}
      {/* Contact Map */}
      {/* ---------------------------------------- */}

      <ContactMapSection contact={contactPage.data} />

      {/* ---------------------------------------- */}
      {/* Contact Form */}
      {/* ---------------------------------------- */}

      <ContactFormSection contact={contactPage.data} />
    </main>
  );
}
