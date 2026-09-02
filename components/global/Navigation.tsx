"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getServices } from "@/lib/services";
import type { Service } from "@/lib/services";

import { getIndustries } from "@/lib/industries";
import type { Industry } from "@/lib/industries";

import { getContact } from "@/lib/contact";
import type { Contact } from "@/lib/contact";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  // Dynamic services
  const [services, setServices] = useState<Service[]>([]);

  // Dynamic industries
  const [industries, setIndustries] = useState<Industry[]>([]);

  // Dynamic contact
  const [contact, setContact] = useState<Contact>({});

  const pathname = usePathname();

  // --------------------------------------------------
  // Fetch Services
  // --------------------------------------------------
  useEffect(() => {
    const loadServices = async () => {
      const result = await getServices();

      setServices(result.data ?? []);
    };

    loadServices();
  }, []);

  // --------------------------------------------------
  // Fetch Industries
  // --------------------------------------------------

  useEffect(() => {
    const loadIndustries = async () => {
      const result = await getIndustries();

      setIndustries(result.data ?? []);
    };

    loadIndustries();
  }, []);

  // --------------------------------------------------
  // Fetch Contact
  // --------------------------------------------------
  useEffect(() => {
    const loadContact = async () => {
      console.log("Loading contact data...");
      console.log("API URL:", `${process.env.NEXT_PUBLIC_API_URL}/contact`);

      try {
        const result = await getContact();
        setContact(result.data ?? {});
      } catch (error) {
        console.error("Navigation Contact Error:", error);
      }
    };

    loadContact();
  }, []);

  // --------------------------------------------------
  // Close mobile drawer on route change
  // --------------------------------------------------
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  }, [pathname]);

  // --------------------------------------------------
  // Handle scroll hiding
  // --------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* ==================================================
          TOP BLUE STRIP
      ================================================== */}
      <div className="w-full bg-frexia-blue text-white py-2 px-4 sm:px-8 md:px-16 lg:px-24 flex items-center justify-between gap-2 text-xs font-semibold border-b border-white/10">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-4 md:gap-6 overflow-hidden">
          <div className="flex items-center gap-1.5 truncate">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="shrink-0"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="truncate">{contact.address}</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 shrink-0">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="shrink-0"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>

            {contact.email && (
              <a href={`mailto:${contact.email}`} className="hover:underline">
                {contact.email}
              </a>
            )}
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-3 border-l border-white/20 pl-3 shrink-0">
          {contact.twitter && (
            <a
              href={contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          )}

          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* ==================================================
          MAIN NAVIGATION
      ================================================== */}
      <nav className="w-full flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-3 sm:py-4 bg-white text-frexia-dark shadow-sm">
        {/* Logo */}
        <Link href="/" className="font-heading shrink-0">
          <Image
            src="/logo/logo.png"
            alt="Frexia Logistics Logo"
            width={180}
            height={80}
            className="w-auto h-11 sm:h-14 md:h-16"
            priority
          />
        </Link>

        {/* ==================================================
            DESKTOP NAVIGATION
        ================================================== */}
        <div className="hidden lg:flex gap-7 xl:gap-9 items-center font-bold text-base tracking-wide">
          <Link href="/" className="hover:text-frexia-blue transition-colors">
            Home
          </Link>

          <Link
            href="/about-us"
            className="hover:text-frexia-blue transition-colors"
          >
            About Us
          </Link>

          {/* ==================================================
              DYNAMIC SERVICES DROPDOWN
          ================================================== */}
          <div className="relative group py-2">
            <Link
              href="/services"
              className="flex items-center gap-1 hover:text-frexia-blue transition-colors cursor-pointer"
            >
              Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform duration-200 group-hover:rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>

            <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-100 rounded-xl shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-50 text-gray-800 flex flex-col gap-1">
              {services.length > 0 ? (
                services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="px-4 py-2.5 hover:bg-frexia-blue-light hover:text-frexia-blue rounded-lg transition-colors text-sm font-semibold"
                  >
                    {service.title}
                  </Link>
                ))
              ) : (
                <div className="px-4 py-2.5 text-sm text-gray-400">
                  No services available
                </div>
              )}
            </div>
          </div>

          {/* ==================================================
              DYNAMIC INDUSTRIES DROPDOWN
          ================================================== */}

          <div className="relative group py-2">
            <Link
              href="/industries"
              className="flex items-center gap-1 hover:text-frexia-blue transition-colors cursor-pointer"
            >
              Industries
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform duration-200 group-hover:rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>

            <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-100 rounded-xl shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-50 text-gray-800 flex flex-col gap-1">
              {industries.length > 0 ? (
                industries.map((industry) => (
                  <Link
                    key={industry.id}
                    href={`/industries/${industry.slug}`}
                    className="px-4 py-2.5 hover:bg-frexia-blue-light hover:text-frexia-blue rounded-lg transition-colors text-sm font-semibold"
                  >
                    {industry.title}
                  </Link>
                ))
              ) : (
                <div className="px-4 py-2.5 text-sm text-gray-400">
                  No industries available
                </div>
              )}
            </div>
          </div>

          <Link
            href="/careers"
            className="hover:text-frexia-blue transition-colors"
          >
            Careers
          </Link>

          <Link
            href="/contact-us"
            className="hover:text-frexia-blue transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* ==================================================
            HOTLINE + MOBILE BUTTON
        ================================================== */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={contact.phone ? `tel:${contact.phone}` : "#"}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-frexia-blue text-white flex items-center justify-center hover:bg-frexia-blue-hover active:scale-95 transition-all duration-300 animate-pulse-ring shrink-0"
              aria-label="Call Hotline"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="animate-shake-bell"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>

            <div className="hidden md:flex flex-col text-left leading-tight">
              <span className="text-gray-900 text-xs font-bold font-heading">
                Hotline
              </span>

              <a
                href={`tel:${contact.phone}`}
                className="text-slate-700 text-sm xl:text-base font-bold hover:underline transition-colors mt-0.5 whitespace-nowrap"
              >
                {contact.phone}
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-gray-100 focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ==================================================
          MOBILE MENU
      ================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-2xl px-6 py-6 flex flex-col gap-4 max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="font-bold text-slate-800 hover:text-frexia-blue py-2 border-b border-gray-100 text-base"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            onClick={() => setMobileMenuOpen(false)}
            className="font-bold text-slate-800 hover:text-frexia-blue py-2 border-b border-gray-100 text-base"
          >
            About Us
          </Link>
          {/* ==================================================
              MOBILE SERVICES - DYNAMIC
          ================================================== */}
          <div className="border-b border-gray-100 py-2">
            <div className="flex items-center justify-between">
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-slate-800 hover:text-frexia-blue text-base"
              >
                Services
              </Link>

              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="p-1 text-slate-500 hover:text-frexia-blue focus:outline-none"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>

            {mobileServicesOpen && (
              <div className="pl-4 pt-3 pb-1 flex flex-col gap-2.5 text-sm font-semibold text-gray-600">
                {services.length > 0 ? (
                  services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-frexia-blue"
                    >
                      {service.title}
                    </Link>
                  ))
                ) : (
                  <span className="text-gray-400">No services available</span>
                )}
              </div>
            )}
          </div>
          {/* ==================================================
              MOBILE INDUSTRIES
          ================================================== */}

          <div className="border-b border-gray-100 py-2">
            <div className="flex items-center justify-between">
              <Link
                href="/industries"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-slate-800 hover:text-frexia-blue text-base"
              >
                Industries
              </Link>

              <button
                type="button"
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="p-1 text-slate-500 hover:text-frexia-blue focus:outline-none"
                aria-label="Toggle industries menu"
                aria-expanded={mobileIndustriesOpen}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`transition-transform duration-200 ${
                    mobileIndustriesOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>

            {mobileIndustriesOpen && (
              <div className="pl-4 pt-3 pb-1 flex flex-col gap-2.5 text-sm font-semibold text-gray-600">
                {industries.length > 0 ? (
                  industries.map((industry) => (
                    <Link
                      key={industry.id}
                      href={`/industries/${industry.slug}`}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileIndustriesOpen(false);
                      }}
                      className="hover:text-frexia-blue transition-colors"
                    >
                      {industry.title}
                    </Link>
                  ))
                ) : (
                  <span className="text-gray-400">No industries available</span>
                )}
              </div>
            )}
          </div>

          <Link
            href="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className="font-bold text-slate-800 hover:text-frexia-blue py-2 border-b border-gray-100 text-base"
          >
            Careers
          </Link>
          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="font-bold text-slate-800 hover:text-frexia-blue py-2 border-b border-gray-100 text-base"
          >
            Contact Us
          </Link>
          {/* Hotline */}
          <a
            href={`tel:${contact.phone}`}
            className="mt-2 flex items-center justify-center gap-2 bg-frexia-blue text-white font-bold text-sm py-3.5 rounded-xl shadow-md"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Hotline: {contact.phone}
          </a>
        </div>
      )}
    </div>
  );
}
