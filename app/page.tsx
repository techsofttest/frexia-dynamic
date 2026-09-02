import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GlobalReach from "@/components/home/GlobalReach";
import OurServices from "@/components/home/OurServices";
import IndustriesServe from "@/components/home/IndustriesServe";
import MissionTech from "@/components/home/MissionTech";
import CoreValues from "@/components/home/CoreValues";
import OurCommitment from "@/components/home/OurCommitment";
import GetInTouch from "@/components/home/GetInTouch";

import { getServices } from "@/lib/services";
import { getIndustries } from "@/lib/industries";
import { getContact } from "@/lib/contact";

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

export async function generateMetadata(): Promise<Metadata> {
  const homeData = await getHomePage();

  const seo = homeData?.seo ?? {};

  const description = (seo.meta_description || "")
    .replace(/<[^>]*>/g, "")
    .trim();

  return {
    title: seo.meta_title || "Home",
    description,
    keywords: seo.meta_keywords || "",

    openGraph: {
      title: seo.meta_title || "Home",
      description,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: seo.meta_title || "Home",
      description,
    },
  };
}

export default async function Home() {
  const homeData = await getHomePage();

  // Fetch services
  const servicesPage = await getServices();

  // --------------------------------------------------
  // Fetch Industries
  // --------------------------------------------------
  const industriesPage = await getIndustries();

  // Fetch contact information
  const contact = await getContact();

  // Get all services
  const allServices = Array.isArray(servicesPage?.data)
    ? servicesPage.data
    : [];

  // Only 6 services for OurServices section
  const services = allServices.slice(0, 6);

  console.log("Services for OurServices:", services);
  console.log("All services for GetInTouch:", allServices);

  // --------------------------------------------------
  // Industries
  // --------------------------------------------------

  const industries = Array.isArray(industriesPage?.data)
    ? industriesPage.data
    : [];

  return (
    <main className="flex flex-col min-h-screen w-full bg-white font-sans overflow-x-hidden">
      <Hero sliders={homeData.sliders ?? []} />
      <WhyChooseUs
        companyAchievements={homeData?.company_achievements ?? []}
        whyChooseUs={homeData?.why_choose_us ?? {}}
      />
      <GlobalReach ourNetwork={homeData?.our_network ?? {}} />
      {/* Only first 6 services */}
      <OurServices
        services={services}
        whatWeDo={servicesPage?.what_we_do ?? []}
      />
      {/* All industries */} <IndustriesServe industries={industries} />
      <CoreValues whatDrivesUs={homeData?.what_drives_us ?? {}} />
      <MissionTech
        visionMissionCommitment={homeData?.vision_mission_commitment ?? {}}
      />
      <OurCommitment ourCommitment={homeData?.our_commitment ?? {}} />
      {/* ALL services */}
      <GetInTouch contact={contact.data} services={allServices} />
    </main>
  );
}
