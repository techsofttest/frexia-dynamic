import Image from "next/image";
import Link from "next/link";

// --------------------------------------------------
// Types
// --------------------------------------------------

interface Blog {
  id: number;
  tag: string;
  created_at: string;
  title: string;
  slug: string;
  description: string;
  image: string | null;
}

interface BlogGridProps {
  blogs: Blog[];
  titleFirst: string;
  titleHighlight: string;
}

// --------------------------------------------------
// Blog Grid
// --------------------------------------------------

export default function BlogGrid({
  blogs,
  titleFirst,
  titleHighlight,
}: BlogGridProps) {
  return (
    <section className="w-full bg-gray-50 text-frexia-dark py-16 sm:py-20 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-frexia-blue text-xs font-bold tracking-widest uppercase mb-2 sm:mb-3 block">
            Latest Articles
          </span>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-slate-800">
            {titleFirst}{" "}
            <span className="text-frexia-blue">{titleHighlight}</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {blogs.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <Link
                href={`/blog/${post.slug}`}
                className="relative aspect-[16/10] w-full overflow-hidden block"
              >
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">No Image</span>
                  </div>
                )}

                {/* Category / Tag */}
                <div className="absolute top-4 left-4 bg-frexia-blue text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  {post.tag}
                </div>
              </Link>

              {/* Content */}
              <div className="p-4 sm:p-7 flex flex-col gap-3 sm:gap-4 flex-1">
                {/* Date */}
                <span className="text-xs text-gray-500 font-semibold hidden sm:block">
                  {post.created_at}
                </span>

                {/* Title */}
                <h3 className="font-heading font-bold text-base sm:text-xl text-slate-800 group-hover:text-frexia-blue transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-1 line-clamp-3">
                  {post.description}
                </p>

                {/* Read Article */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-frexia-blue font-bold text-xs sm:text-sm hover:underline mt-auto"
                >
                  Read Article
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {blogs.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">
              No articles available at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
