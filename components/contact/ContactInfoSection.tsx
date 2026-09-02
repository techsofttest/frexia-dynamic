import Image from "next/image";

import type { Contact } from "@/lib/contact";

interface ContactInfoSectionProps {
  contact?: Contact | null;
}

export default function ContactInfoSection({
  contact,
}: ContactInfoSectionProps) {
  const safeContact = contact ?? {};

  return (
    <section className="w-full bg-white py-20 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ---------------------------------------- */}
        {/* Image */}
        {/* ---------------------------------------- */}

        <div className="relative w-full h-80 lg:h-full rounded-2xl overflow-hidden">
          <Image
            src="/ship/aerial-view-cargo-ship-cargo-container-harbor.jpg"
            alt="Frexia Logistics Office"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* ---------------------------------------- */}
        {/* Contact Information */}
        {/* ---------------------------------------- */}

        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-frexia-dark font-heading">
              Contact Information
            </h2>

            {/* ---------------------------------------- */}
            {/* Address */}
            {/* ---------------------------------------- */}

            {safeContact.address && (
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-frexia-blue-light text-frexia-blue flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-bold text-frexia-dark">Our Office</h3>

                  <p className="text-gray-600 text-sm mt-1">
                    {safeContact.address.replace(/<[^>]*>/g, "").trim()}
                  </p>
                </div>
              </div>
            )}

            {/* ---------------------------------------- */}
            {/* Email */}
            {/* ---------------------------------------- */}

            {safeContact.email && (
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-frexia-blue-light text-frexia-blue flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-bold text-frexia-dark">Email Us</h3>

                  <a
                    href={`mailto:${safeContact.email}`}
                    className="text-gray-600 text-sm mt-1 hover:text-frexia-blue hover:underline"
                  >
                    {safeContact.email}
                  </a>
                </div>
              </div>
            )}

            {/* ---------------------------------------- */}
            {/* Phone */}
            {/* ---------------------------------------- */}

            {safeContact.phone && (
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-frexia-blue-light text-frexia-blue flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-bold text-frexia-dark">Call Us</h3>

                  <a
                    href={`tel:${safeContact.phone}`}
                    className="text-gray-600 text-sm mt-1 hover:text-frexia-blue hover:underline"
                  >
                    {safeContact.phone}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
