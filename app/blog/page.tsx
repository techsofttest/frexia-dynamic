import type { Metadata } from "next";

import InnerPageBanner from "@/components/global/InnerPageBanner";
import BlogGrid from "@/components/blog/BlogGrid";
import GetInTouch from "@/components/home/GetInTouch";

import { getServices } from "@/lib/services";
import { getContact } from "@/lib/contact";

// --------------------------------------------------
// Types
// --------------------------------------------------

interface Blog {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string | null;
}

interface BlogPageData {
  success: boolean;

  seo: {
    meta_title: string;
    meta_desc: string;
    meta_key: string;
  };

  banner: {
    title_first: string;
    title_highlight: string;
    content: string;
    image: string | null;
  };

  news_industry: {
    title_first: string;
    title_highlight: string;
  };

  data: Blog[];
}

// --------------------------------------------------
// Fetch Blogs
// --------------------------------------------------

async function getBlogs(): Promise<BlogPageData> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return response.json();
}

// --------------------------------------------------
// SEO Metadata
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const blogPage = await getBlogs();

  return {
    title: blogPage.seo.meta_title || "Blog & Insights | Frexia Logistic LLC",

    description:
      blogPage.seo.meta_desc ||
      "Stay updated with the latest news, logistics insights, air/sea freight trends, and trade updates from Frexia Logistic LLC.",

    keywords: blogPage.seo.meta_key || "",
  };
}

// --------------------------------------------------
// Blog Page
// --------------------------------------------------

export default async function BlogListingPage() {
  // --------------------------------------------------
  // Fetch Blog Data
  // --------------------------------------------------

  const blogPage = await getBlogs();

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
  // Return Blog Page
  // --------------------------------------------------

  return (
    <main className="flex flex-col min-h-screen w-full bg-white font-sans overflow-x-hidden">
      {/* -------------------------------------------------- */}
      {/* 1. Dynamic Blog Banner */}
      {/* -------------------------------------------------- */}

      <InnerPageBanner
        title={blogPage.banner.title_first}
        titleHighlight={blogPage.banner.title_highlight}
        description={blogPage.banner.content}
        bgImage={blogPage.banner.image || "/banner/b1.jpg"}
      />

      {/* -------------------------------------------------- */}
      {/* 2. Dynamic Blog Section */}
      {/* -------------------------------------------------- */}

      <BlogGrid
        blogs={blogPage.data}
        titleFirst={blogPage.news_industry.title_first}
        titleHighlight={blogPage.news_industry.title_highlight}
      />

      {/* -------------------------------------------------- */}
      {/* 3. Contact / Get In Touch */}
      {/* -------------------------------------------------- */}

      <GetInTouch contact={contact} services={servicesPage.data} />
    </main>
  );
}
