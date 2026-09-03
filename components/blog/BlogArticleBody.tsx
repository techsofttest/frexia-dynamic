import Link from "next/link";

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

interface BlogArticleBodyProps {
  post: BlogPost;
}

// --------------------------------------------------
// Blog Article Body
// --------------------------------------------------

export default function BlogArticleBody({ post }: BlogArticleBodyProps) {
  return (
    <article className="lg:col-span-8 flex flex-col gap-8">
      {/* Metadata Badges */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Tag */}
        {post.tag && (
          <span className="px-3.5 py-1 bg-frexia-blue-light text-frexia-blue text-xs font-bold rounded-full">
            {post.tag}
          </span>
        )}

        {/* Created Date */}
        {post.created_at && (
          <span className="text-slate-500 text-xs font-semibold flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-slate-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>

            {post.created_at}
          </span>
        )}
      </div>

      {/* Featured Image */}
      <div className="relative h-80 md:h-[460px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <span className="text-gray-500 text-sm">No Image Available</span>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="prose lg:prose-lg max-w-none text-gray-700 leading-relaxed font-medium space-y-6">
        {/* Overview */}
        {post.overview && <p>{post.overview}</p>}

        {/* Second Overview */}
        {post.overview_second && <p>{post.overview_second}</p>}

        {/* Features */}
        {post.features_title && (
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-800 mt-8">
            {post.features_title}
          </h2>
        )}

        {post.features?.length > 0 && (
          <ul className="space-y-3">
            {post.features.map((feature, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
            ))}
          </ul>
        )}
      </div>

      {/* Return Link */}
      <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-frexia-blue hover:text-white rounded-xl text-slate-700 font-bold text-sm transition-all duration-300"
        >
          ← Back to All Articles
        </Link>
      </div>
    </article>
  );
}
