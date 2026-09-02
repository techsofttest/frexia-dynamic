import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServiceHeaderBanner from "@/components/services/ServiceHeaderBanner";
import BlogArticleBody from "@/components/blog/BlogArticleBody";
import BlogSidebar from "@/components/blog/BlogSidebar";
import GetInTouch from "@/components/home/GetInTouch";

import { getServices } from "@/lib/services";
import { getContact } from "@/lib/contact";

// --------------------------------------------------
// Types
// --------------------------------------------------

interface BlogPost {
  id: number;
  tag: string;
  created_at: string;
  title: string;
  slug: string;
  image: string | null;
  overview: string;
  overview_second: string;
  features_title: string;
  features: string[];
}

interface BlogDetailResponse {
  success: boolean;

  seo: {
    meta_title: string;
    meta_desc: string;
    meta_key: string;
  };

  data: BlogPost;
}

interface BlogListItem {
  id: number;
  tag: string;
  created_at: string;
  title: string;
  slug: string;
  description: string;
  image: string | null;
}

interface BlogListResponse {
  success: boolean;

  data: BlogListItem[];
}

// --------------------------------------------------
// Props
// --------------------------------------------------

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// --------------------------------------------------
// Fetch Blog Detail
// --------------------------------------------------

async function getBlogBySlug(slug: string): Promise<BlogDetailResponse | null> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs/${encodeURIComponent(slug)}`,
    {
      cache: "no-store",
    },
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }

  return response.json();
}

// --------------------------------------------------
// Fetch All Blogs
// --------------------------------------------------

async function getBlogs(): Promise<BlogListResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return response.json();
}

// --------------------------------------------------
// Metadata
// --------------------------------------------------

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;

  const blogPage = await getBlogBySlug(resolvedParams.slug);

  if (!blogPage) {
    return {
      title: "Post Not Found | Frexia Logistic LLC",
    };
  }

  return {
    title:
      blogPage.seo?.meta_title ||
      `${blogPage.data.title} | Frexia Logistic LLC`,

    description: blogPage.seo?.meta_desc || blogPage.data.overview || "",

    keywords: blogPage.seo?.meta_key || "",
  };
}

// --------------------------------------------------
// Blog Detail Page
// --------------------------------------------------

export default async function BlogPostDetailPage({
  params,
}: BlogPostPageProps) {
  const resolvedParams = await params;

  // Blog detail
  const blogPage = await getBlogBySlug(resolvedParams.slug);

  if (!blogPage || !blogPage.data) {
    notFound();
  }

  const post = blogPage.data;

  // Recent blogs
  const blogsPage = await getBlogs();

  const recentPosts = blogsPage.data
    .filter((blog) => blog.slug !== post.slug)
    .slice(0, 4);

  // GetInTouch data
  const servicesPage = await getServices();
  const contactPage = await getContact();

  const contact = contactPage.data;

  return (
    <main className="flex flex-col min-h-screen w-full bg-white font-sans overflow-x-hidden">
      {/* Banner */}
      <ServiceHeaderBanner title={post.title} categoryName={post.tag} />

      {/* Blog Content */}
      <section className="w-full py-20 px-6 sm:px-12 md:px-16 lg:px-24 bg-white text-frexia-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Article */}
          <BlogArticleBody post={post} />

          {/* Sidebar */}
          <BlogSidebar recentPosts={recentPosts} />
        </div>
      </section>

      {/* Get In Touch */}
      <GetInTouch contact={contact} services={servicesPage.data} />
    </main>
  );
}
