import Link from "next/link";
import type { Service } from "@/lib/services";

interface ServiceSidebarProps {
  currentSlug: string;
  allServices: Service[];
}

export default function ServiceSidebar({
  currentSlug,
  allServices,
}: ServiceSidebarProps) {
  return (
    <div className="lg:col-span-4 sticky top-28 h-fit self-start flex flex-col gap-8">
      {/* ------------------------------------------ */}
      {/* Services Sidebar Menu */}
      {/* ------------------------------------------ */}

      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h3 className="font-heading font-bold text-xl text-slate-800 mb-4 pb-3 border-b border-gray-200">
          All Logistics Services
        </h3>

        <div className="flex flex-col gap-2">
          {allServices.map((item) => {
            const isActive = item.slug === currentSlug;

            return (
              <Link
                key={item.id}
                href={`/services/${item.slug}`}
                className={`flex items-center justify-between p-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-frexia-blue text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-frexia-blue-light hover:text-frexia-blue border border-gray-100"
                }`}
              >
                <span>{item.title}</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ------------------------------------------ */}
      {/* Quick Contact Sidebar Card */}
      {/* ------------------------------------------ */}

      <div className="bg-frexia-blue text-white rounded-2xl p-8 relative overflow-hidden shadow-xl flex flex-col gap-4">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
          Need Fast Quote?
        </span>

        <h4 className="font-heading font-bold text-2xl text-white">
          Book Your Cargo Today
        </h4>

        <p className="text-white/90 text-sm leading-relaxed">
          Contact our freight forwarding specialists for custom rates and
          tailored logistics solutions.
        </p>

        <a
          href="tel:+97142244022"
          className="mt-2 inline-flex items-center justify-center gap-2 bg-white text-frexia-blue px-6 py-3 rounded-xl font-bold text-sm hover:bg-orange-50 transition-colors shadow-md"
        >
          Call +971 4 224 4022
        </a>
      </div>
    </div>
  );
}
