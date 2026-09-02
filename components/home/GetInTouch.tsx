"use client";

import Image from "next/image";
import { useState } from "react";

import type { Contact } from "@/lib/contact";
import type { Service } from "@/lib/services";

interface GetInTouchProps {
  contact?: Contact | null;
  services?: Service[] | null;
  selectedServiceId?: number | null;
}

export default function GetInTouch({
  contact,
  services = [],
  selectedServiceId = null,
}: GetInTouchProps) {
  const safeContact = contact ?? null;
  const safeServices = services ?? [];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service_id: selectedServiceId ? String(selectedServiceId) : "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/quote-request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            service_id: formData.service_id
              ? Number(formData.service_id)
              : null,
            message: formData.message || null,
          }),
        },
      );
      const data = await response.json();
      if (!response.ok) {
        if (data.errors) {
          const firstError = Object.values(data.errors)[0];
          throw new Error(
            Array.isArray(firstError) ? firstError[0] : String(firstError),
          );
        }
        throw new Error(data.message || "Something went wrong.");
      }
      setSuccessMessage(
        data.message || "Your quote request has been submitted successfully.",
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        service_id: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col md:flex-row min-h-[640px]"
    >
      {/* LEFT: Blue form panel */}
      <div className="w-full md:w-1/2 bg-frexia-blue text-white px-6 sm:px-10 md:px-12 lg:px-16 py-16 flex flex-col justify-center gap-8">
        <div>
          <span className="text-orange-200 text-xs font-bold tracking-widest uppercase mb-3 block">
            Request a Quote
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl leading-tight mb-2">
            Get a Quote Today
          </h2>
          <p className="text-white text-base">
            Tell us about your cargo and we&apos;ll respond with a competitive
            rate within 2 business hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Success Message */}
          {successMessage && (
            <div className="rounded-md bg-green-500/20 border border-green-300/40 px-4 py-3 text-sm text-white flex items-center justify-between gap-3">
              <span>{successMessage}</span>

              <button
                type="button"
                onClick={() => setSuccessMessage("")}
                className="text-white/80 hover:text-white text-xl leading-none font-bold transition-colors"
                aria-label="Close success message"
              >
                ×
              </button>
            </div>
          )}
          {/* Error Message */}
          {errorMessage && (
            <div className="rounded-md bg-red-500/20 border border-red-300/40 px-4 py-3 text-sm text-white flex items-center justify-between gap-3">
              <span>{errorMessage}</span>

              <button
                type="button"
                onClick={() => setErrorMessage("")}
                className="text-white/80 hover:text-white text-xl leading-none font-bold transition-colors"
                aria-label="Close error message"
              >
                ×
              </button>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-white text-xs font-semibold uppercase tracking-wide">
                Full Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="bg-white/10 border border-white/60 rounded-md px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/60 focus:bg-white/15 transition-colors"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-email"
                className="text-white text-xs font-semibold uppercase tracking-wide"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="bg-white/10 border border-white/60 rounded-md px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/60 focus:bg-white/15 transition-colors"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-phone"
                className="text-white text-xs font-semibold uppercase tracking-wide"
              >
                Phone Number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+971 55 000 0000"
                className="bg-white/10 border border-white/60 rounded-md px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/60 focus:bg-white/15 transition-colors"
              />
            </div>
            {/* Service */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-service"
                className="text-white text-xs font-semibold uppercase tracking-wide"
              >
                Service Type
              </label>

              <select
                id="contact-service"
                name="service_id"
                value={formData.service_id}
                onChange={handleChange}
                className="bg-white/10 border border-white/60 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-white/60 focus:bg-white/15 transition-colors appearance-none cursor-pointer"
                required
              >
                <option value="" className="bg-frexia-blue">
                  Select a service
                </option>

                {safeServices.map((service) => (
                  <option
                    key={service.id}
                    value={service.id}
                    className="bg-frexia-blue"
                  >
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-message"
              className="text-white text-xs font-semibold uppercase tracking-wide"
            >
              Message / Cargo Details
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Describe your shipment requirements..."
              className="bg-white/10 border border-white/60 rounded-md px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/60 focus:bg-white/15 transition-colors resize-none"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            id="contact-submit-btn"
            disabled={isSubmitting}
            className="w-full bg-white text-frexia-blue font-bold py-3.5 rounded-md hover:bg-orange-50 transition-colors duration-300 text-sm tracking-wide mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Request"}
          </button>
        </form>
      </div>

      {/* RIGHT: Dark panel with ship image */}
      <div className="w-full md:w-1/2 relative flex flex-col justify-end min-h-[420px] md:min-h-full overflow-hidden">
        {/* Background image */}
        <Image
          src="/banner/b2.jpg"
          alt="Partner with Frexia for Logistics"
          fill
          sizes="50vw"
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Content overlay at bottom */}
        <div className="relative z-10 p-10 md:p-16 flex flex-col gap-6">
          {/* Icon */}
          <div className="w-16 h-16 bg-frexia-blue rounded-xl flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight">
            Partner with us for{" "}
            <span className="italic text-slate-300">Boundless</span> Logistics
            Solutions
          </h3>
          <p className="text-white text-base leading-relaxed max-w-md">
            Join 500+ businesses worldwide who trust Frexia to move their most
            critical cargo — reliably, efficiently, and on time.
          </p>
          {/* Contact details */}{" "}
          <div className="flex flex-col gap-3 pt-2 border-t border-white/20">
            {" "}
            {/* Phone */}{" "}
            {safeContact?.phone && (
              <a
                href={`tel:${safeContact.phone}`}
                className="flex items-center gap-3 text-white hover:text-white transition-colors text-sm font-medium"
              >
                {" "}
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  {" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {" "}
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />{" "}
                  </svg>{" "}
                </div>{" "}
                {safeContact.phone}{" "}
              </a>
            )}{" "}
            {/* Email */}{" "}
            {safeContact?.email && (
              <a
                href={`mailto:${safeContact.email}`}
                className="flex items-center gap-3 text-white hover:text-white transition-colors text-sm font-medium"
              >
                {" "}
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  {" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {" "}
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                    <polyline points="22,6 12,13 2,6" />{" "}
                  </svg>{" "}
                </div>{" "}
                {safeContact.email}
              </a>
            )}{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
