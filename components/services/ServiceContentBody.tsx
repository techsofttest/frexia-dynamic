import Image from "next/image";
import { ServiceDetail } from "@/lib/services";

interface ServiceContentBodyProps {
  service: ServiceDetail;
}

export default function ServiceContentBody({
  service,
}: ServiceContentBodyProps) {
  return (
    <div className="lg:col-span-8 flex flex-col gap-8">
      {/* ---------------------------------------- */}
      {/* Featured Image */}
      {/* ---------------------------------------- */}

      {service.image && (
        <div className="relative h-80 md:h-[440px] w-full rounded-2xl overflow-hidden border border-gray-100">
          <img
            src={service.image}
            alt={service.name}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      )}

      {/* ---------------------------------------- */}
      {/* Overview */}
      {/* ---------------------------------------- */}

      <div>
        <span className="text-frexia-blue text-xs font-bold tracking-widest uppercase mb-2 block">
          Comprehensive Solutions
        </span>

        <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-800 mb-6">
          Overview of <span className="text-frexia-blue">{service.name}</span>
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed font-medium">
          {service.overview}
        </p>
      </div>

      {/* ---------------------------------------- */}
      {/* Key Features */}
      {/* ---------------------------------------- */}

      {service.features.length > 0 && (
        <div className="pt-6 border-t border-gray-100">
          <h3 className="font-heading font-bold text-2xl text-slate-800 mb-6">
            Key Features &amp; Capabilities
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-gray-50 border border-gray-100/80"
              >
                {/* Check Icon */}
                <div className="w-6 h-6 rounded-full bg-frexia-blue text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <span className="text-gray-700 text-sm font-semibold leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------------------------------- */}
      {/* Business Benefits */}
      {/* ---------------------------------------- */}

      {service.benefits.length > 0 && (
        <div className="pt-6 border-t border-gray-100">
          <h3 className="font-heading font-bold text-2xl text-slate-800 mb-6">
            Why Partner With Us For {service.name}?
          </h3>

          <div className="space-y-4">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-frexia-blue-light border border-frexia-blue/15 flex items-center gap-4"
              >
                {/* Number */}
                <div className="w-10 h-10 rounded-xl bg-frexia-blue text-white flex items-center justify-center shrink-0 font-bold">
                  {idx + 1}
                </div>

                <p className="text-slate-800 text-base font-semibold">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
