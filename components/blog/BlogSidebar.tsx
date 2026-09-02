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
  description: string;
  image: string | null;
}

interface BlogSidebarProps {
  recentPosts: BlogPost[];
}

// --------------------------------------------------
// Blog Sidebar
// --------------------------------------------------

export default function BlogSidebar({ recentPosts }: BlogSidebarProps) {
  return (
    <aside className="lg:col-span-4 sticky top-28 h-fit self-start flex flex-col gap-8">
      {/* Recent Articles */}
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h3 className="font-heading font-bold text-xl text-slate-800 mb-6 pb-3 border-b border-gray-200">
          Recent Articles
        </h3>

        <div className="flex flex-col gap-5">
          {recentPosts.map((item) => (
            <Link
              key={item.id}
              href={`/blog/${item.slug}`}
              className="group flex gap-4 items-center"
            >
              {/* Image */}
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-gray-100">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <span className="text-[10px] text-gray-500">No Image</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 flex-1">
                {/* Tag */}
                {item.tag && (
                  <span className="text-[11px] font-bold text-frexia-blue">
                    {item.tag}
                  </span>
                )}

                {/* Title */}
                <h4 className="font-heading font-bold text-sm text-slate-800 group-hover:text-frexia-blue transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h4>

                {/* Date */}
                {item.created_at && (
                  <span className="text-[11px] text-gray-400 font-medium">
                    {item.created_at}
                  </span>
                )}
              </div>
            </Link>
          ))}

          {/* Empty State */}
          {recentPosts.length === 0 && (
            <p className="text-sm text-gray-500">
              No recent articles available.
            </p>
          )}
        </div>
      </div>

      {/* Quick Consultation CTA */}
      <div className="bg-frexia-blue text-white rounded-2xl p-8 relative overflow-hidden shadow-xl flex flex-col gap-4">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
          Global Trade Advisory
        </span>

        <h4 className="font-heading font-bold text-2xl text-white">
          Have Shipping Questions?
        </h4>

        <p className="text-white/90 text-sm leading-relaxed">
          Connect with our freight forwarding specialists today for personalized
          trade advice and instant quotes.
        </p>

        <Link
          href="/contact-us"
          className="mt-2 inline-flex items-center justify-center gap-2 bg-white text-frexia-blue px-6 py-3 rounded-xl font-bold text-sm hover:bg-orange-50 transition-colors shadow-md"
        >
          Contact Us
        </Link>
      </div>
    </aside>
  );
}
