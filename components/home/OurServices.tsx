import Link from "next/link";
import type { Service, ServicesWhatWeDo } from "@/lib/services";

interface OurServicesProps {
  services: Service[];
  whatWeDo: ServicesWhatWeDo;
}

export default function OurServices({ services, whatWeDo }: OurServicesProps) {
  return (
    <section
      id="services"
      className="bg-gray-50 text-frexia-dark w-full py-16 sm:py-20 px-6 sm:px-12 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <span className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-2 sm:mb-3 block">
              What We Do
            </span>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-slate-800">
              {whatWeDo.title_first}{" "}
              <span className="text-slate-700">{whatWeDo.title_highlight}</span>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-3 sm:mt-4 max-w-2xl">
              {whatWeDo.content}
            </p>
          </div>

          <Link
            href="/services"
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-transparent sm:bg-frexia-blue text-frexia-blue sm:text-white border border-frexia-blue sm:border-transparent px-5 sm:px-7 py-2.5 sm:py-3 rounded-md font-semibold text-xs sm:text-sm hover:bg-frexia-blue hover:text-white sm:hover:bg-frexia-blue-hover transition-colors duration-300"
          >
            All Services
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="shrink-0"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 shadow-md sm:shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <Link
                href={`/services/${service.slug}`}
                className="relative aspect-[4/3] w-full overflow-hidden block"
              >
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-frexia-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* Content */}
              <div className="p-4 sm:p-7 flex flex-col gap-3 sm:gap-4 flex-1">
                <h3 className="font-heading font-bold text-base sm:text-xl text-frexia-dark group-hover:text-frexia-blue transition-colors line-clamp-1">
                  <Link href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h3>

                <p className="text-gray-700 text-xs sm:text-base leading-relaxed flex-1 line-clamp-2 sm:line-clamp-3">
                  {service.description}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center justify-center gap-1.5 sm:gap-2 w-full bg-frexia-blue text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 rounded-md hover:bg-frexia-blue-hover active:scale-95 transition-all duration-300 mt-auto"
                >
                  Find Out More
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="shrink-0"
                  >
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
