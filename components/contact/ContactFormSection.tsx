import Image from "next/image";

import ContactForm from "@/components/contact/ContactForm";
import type { Contact } from "@/lib/contact";

interface ContactFormSectionProps {
  contact?: Contact | null;
}

export default function ContactFormSection({
  contact,
}: ContactFormSectionProps) {
  return (
    <section className="w-full bg-gray-50 py-20 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="lg:order-last relative w-full h-80 lg:h-full rounded-2xl overflow-hidden">
          <Image
            src="/news/compliance.jpg"
            alt="Customer Support"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Contact Form */}
        <div className="lg:order-first">
          <ContactForm contact={contact} />
        </div>
      </div>
    </section>
  );
}
