import type { Metadata } from "next";

import InnerPageBanner from "@/components/global/InnerPageBanner";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/home/CoreValues";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GlobalReach from "@/components/home/GlobalReach";
import OurCommitment from "@/components/home/OurCommitment";
import GetInTouch from "@/components/home/GetInTouch";

import { getServices } from "@/lib/services";
import { getContact } from "@/lib/contact";

// --------------------------------------------------
// Get About Page
// --------------------------------------------------

async function getAboutPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch about page");
  }

  const result = await res.json();

  return result.data ?? {};
}

// --------------------------------------------------
// Get Home Page
// Used for About page shared sections
// --------------------------------------------------

async function getHomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home-page`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch home page");
  }

  const result = await res.json();

  return result.data ?? {};
}

// --------------------------------------------------
// Dynamic SEO
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const aboutData = await getAboutPage();

  const seo = aboutData?.seo ?? {};

  const description = (seo.meta_description || "")
    .replace(/<[^>]*>/g, "")
    .trim();

  return {
    title: seo.meta_title || "About Us | Frexia Logistic LLC",

    description,

    keywords: seo.meta_keywords || "",

    openGraph: {
      title: seo.meta_title || "About Us | Frexia Logistic LLC",

      description,

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: seo.meta_title || "About Us | Frexia Logistic LLC",

      description,
    },
  };
}

// --------------------------------------------------
// About Us Page
// --------------------------------------------------

export default async function AboutUsPage() {
  // --------------------------------------------------
  // Fetch About Data
  // --------------------------------------------------

  const aboutData = await getAboutPage();

  // --------------------------------------------------
  // Fetch Home Data
  // Used for shared About sections
  // --------------------------------------------------

  const homeData = await getHomePage();

  // --------------------------------------------------
  // Fetch Services
  // --------------------------------------------------

  const servicesPage = await getServices();

  const allServices = Array.isArray(servicesPage?.data)
    ? servicesPage.data
    : [];

  // --------------------------------------------------
  // Fetch Contact
  // --------------------------------------------------

  const contact = await getContact();

  // --------------------------------------------------
  // About Banner
  // --------------------------------------------------

  const banner = aboutData?.banner ?? {};

  // --------------------------------------------------
  // Mission & Vision
  // --------------------------------------------------

  const missionVision = aboutData?.mission_vision ?? {};

  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  return (
    <main className="flex flex-col min-h-screen w-full bg-white font-sans overflow-x-hidden">
      {/* 1. Dynamic Inner Page Banner */}

      <InnerPageBanner
        title={banner.title_first || ""}
        titleHighlight={banner.title_highlight || ""}
        description={banner.content || ""}
        bgImage={banner.image || ""}
      />

      {/* 2. Dynamic Why Choose Us */}

      <WhyChooseUs
        companyAchievements={homeData?.company_achievements ?? []}
        whyChooseUs={homeData?.why_choose_us ?? {}}
      />

      {/* 3. Dynamic Global Reach */}

      <GlobalReach ourNetwork={homeData?.our_network ?? {}} />

      {/* 4. Dynamic Core Values */}

      <CoreValues whatDrivesUs={homeData?.what_drives_us ?? {}} />

      {/* 5. Dynamic Mission & Vision */}

      <MissionVision missionVision={missionVision} />

      {/* 6. Dynamic Our Commitment */}

      <OurCommitment ourCommitment={homeData?.our_commitment ?? {}} />

      {/* 7. Dynamic Contact */}

      <GetInTouch contact={contact?.data} services={allServices} />
    </main>
  );
}
