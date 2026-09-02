import Link from "next/link";
import Image from "next/image";
import { getServices } from "@/lib/services";
import { getIndustries } from "@/lib/industries";
import { getContact } from "@/lib/contact";

export default async function Footer() {
  const servicesPage = await getServices();
  const services = servicesPage.data;

  const industriesPage = await getIndustries();
  const industries = industriesPage.data ?? [];

  const contactPage = await getContact();
  const contact = contactPage.data ?? {};

  return (
    <footer className="bg-white text-frexia-dark w-full pt-28 pb-20 px-6 sm:px-12 md:px-16 lg:px-24 relative z-10 overflow-hidden">
      {/* Brand name faded background fill */}
      <div className="absolute right-0 bottom-0 select-none pointer-events-none z-0 translate-y-1/4 translate-x-10 opacity-15">
        <h1 className="font-heading font-black text-[180px] md:text-[300px] leading-none tracking-tighter text-frexia-blue uppercase whitespace-nowrap">
          FREXIA
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-12 mb-16 relative z-10">
        {/* Column 1: Company Logo & Info */}
        <div className="flex flex-col gap-4">
          <div className="font-heading font-semibold text-2xl tracking-tighter">
            <Image
              src="/logo/logo2.png"
              alt="logo"
              width={200}
              height={200}
              className="mb-2"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          <p className="text-sm text-frexia-dark leading-relaxed font-medium">
            Your trusted global logistics partner delivering reliable,
            efficient, and custom-tailored supply chain and freight forwarding
            solutions worldwide.
          </p>
        </div>
        {/* Column 2: Contact Info */}
        <div>
          <h4 className="font-heading font-bold text-sm text-frexia-blue tracking-wider uppercase mb-6 font-black">
            Contact Us
          </h4>

          <ul className="flex flex-col gap-3 text-sm text-frexia-dark font-semibold">
            {/* Phone */}{" "}
            {contact.phone && (
              <li className="flex flex-col gap-0.5">
                {" "}
                <span className="text-[10px] text-frexia-blue uppercase tracking-wider font-bold">
                  {" "}
                  Phone{" "}
                </span>{" "}
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-frexia-blue transition-colors text-frexia-dark font-bold"
                >
                  {" "}
                  {contact.phone}{" "}
                </a>{" "}
              </li>
            )}
            {/* Email */}{" "}
            {contact.email && (
              <li className="flex flex-col gap-0.5">
                {" "}
                <span className="text-[10px] text-frexia-blue uppercase tracking-wider font-bold">
                  {" "}
                  Email{" "}
                </span>{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-frexia-blue transition-colors text-frexia-dark font-bold"
                >
                  {" "}
                  {contact.email}{" "}
                </a>{" "}
              </li>
            )}
            <li className="flex flex-col gap-0.5">
              <span className="text-[10px] text-frexia-blue uppercase tracking-wider font-bold">
                Web
              </span>

              <a
                href="https://www.frexialogisticllc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-frexia-blue transition-colors text-frexia-dark font-bold"
              >
                www.frexialogisticllc.com
              </a>
            </li>
          </ul>
        </div>
        {/* Column 3: Dynamic Services */}
        <div>
          <h4 className="font-heading font-bold text-sm text-frexia-blue tracking-wider uppercase mb-6 font-black">
            Our Services
          </h4>

          <ul className="flex flex-col gap-3 text-sm text-frexia-dark font-bold">
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-frexia-blue transition-colors"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Column 4: Dynamic Industries */}
        <div>
          {" "}
          <h4 className="font-heading font-bold text-sm text-frexia-blue tracking-wider uppercase mb-6 font-black">
            {" "}
            Industries Served{" "}
          </h4>{" "}
          <ul className="flex flex-col gap-3 text-sm text-frexia-dark font-bold">
            {" "}
            {industries.length > 0 ? (
              industries.slice(0, 5).map((industry) => (
                <li key={industry.id}>
                  {" "}
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="hover:text-frexia-blue transition-colors"
                  >
                    {" "}
                    {industry.title}{" "}
                  </Link>{" "}
                </li>
              ))
            ) : (
              <li className="text-gray-400"> No industries available </li>
            )}{" "}
          </ul>{" "}
        </div>

        {/* Column 5: Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-sm text-frexia-blue tracking-wider uppercase mb-6 font-black">
            Quick Links
          </h4>

          <ul className="flex flex-col gap-3 text-sm text-frexia-dark font-bold">
            <li>
              <Link
                href="/about-us"
                className="hover:text-frexia-blue transition-colors"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/careers"
                className="hover:text-frexia-blue transition-colors"
              >
                Careers
              </Link>
            </li>

            <li>
              <Link
                href="/faq"
                className="hover:text-frexia-blue transition-colors"
              >
                FAQ
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                className="hover:text-frexia-blue transition-colors"
              >
                Contact Support
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="hover:text-frexia-blue transition-colors"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-frexia-blue/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-frexia-dark relative z-10">
        <div>
          &copy; {new Date().getFullYear()} FREXIA LOGISTIC LLC. All rights
          reserved.
        </div>

        <div className="flex gap-6 mt-4 md:mt-0">
          <Link
            href="/privacy-policy"
            className="hover:text-frexia-blue transition-colors"
          >
            PRIVACY POLICY
          </Link>

          {/* <span>|</span>

          <Link
            href="/terms-of-service"
            className="hover:text-frexia-blue transition-colors"
          >
            TERMS OF SERVICE
          </Link>

          <span>|</span>

          <Link
            href="/security"
            className="hover:text-frexia-blue transition-colors"
          >
            SECURITY
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
