import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/posts";

export default function Blog() {
  const articles = blogPosts;

  return (
    <section className="bg-gray-50 text-frexia-dark w-full py-20 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <span className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-3 block">Updates</span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-800">
            What&apos;s New at <span className="text-slate-700">Frexia</span>
          </h2>
          <Link
            href="/blog"
            className="shrink-0 inline-flex items-center gap-2 text-frexia-blue font-bold text-sm hover:gap-4 transition-all duration-300 border-b border-frexia-blue/30 pb-1"
          >
            All Articles
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.slice(0, 3).map((post) => (
            <div
              key={post.slug}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <Link href={`/blog/${post.slug}`} className="relative h-56 w-full overflow-hidden block">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-frexia-blue text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  {post.category}
                </div>
              </Link>

              {/* Content */}
              <div className="p-7 flex flex-col gap-4 flex-1">
                <span className="text-xs text-gray-500 font-semibold">{post.date}</span>
                <h3 className="font-heading font-bold text-xl text-slate-800 group-hover:text-frexia-blue transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-frexia-blue font-bold text-sm hover:underline mt-2"
                >
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
