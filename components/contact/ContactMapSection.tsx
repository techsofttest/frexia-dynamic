import type { Contact } from "@/lib/contact";

interface ContactMapSectionProps {
  contact?: Contact | null;
}

export default function ContactMapSection({ contact }: ContactMapSectionProps) {
  const mapLink = contact?.map_link || "";

  return (
    <section className="w-full bg-white pt-0 pb-20 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-frexia-blue text-xs font-bold tracking-widest uppercase mb-3 block">
            Our Location
          </span>

          <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-800">
            Find Us on the <span className="text-frexia-blue">Map</span>
          </h2>
        </div>

        <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-gray-100">
          {mapLink ? (
            <iframe
              src={mapLink}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Frexia Logistics Location"
            ></iframe>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
              Map location is currently unavailable.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
