"use client";

import { useState } from "react";
import type { Contact } from "@/lib/contact";

interface ContactFormProps {
  contact?: Contact | null;
}

export default function ContactForm({ contact }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    console.log("Contact Form Data:", {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });

    try {
      // Replace this with your Laravel API endpoint
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
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
        data.message ||
          "Thank you for your message! We will get back to you soon.",
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-frexia-dark font-heading mb-6">
        Send us a Message
      </h2>
      {/* Success Message */}{" "}
      {successMessage && (
        <div className="mb-6 rounded-md bg-green-500/20 border border-green-300/40 px-4 py-3 text-sm text-green-700 flex items-center justify-between gap-3">
          {" "}
          <span>{successMessage}</span>{" "}
          <button
            type="button"
            onClick={() => setSuccessMessage("")}
            className="text-green-700/80 hover:text-green-900 text-xl leading-none font-bold transition-colors"
            aria-label="Close success message"
          >
            {" "}
            ×{" "}
          </button>{" "}
        </div>
      )}{" "}
      {/* Error Message */}{" "}
      {errorMessage && (
        <div className="mb-6 rounded-md bg-red-500/20 border border-red-300/40 px-4 py-3 text-sm text-red-700 flex items-center justify-between gap-3">
          {" "}
          <span>{errorMessage}</span>{" "}
          <button
            type="button"
            onClick={() => setErrorMessage("")}
            className="text-red-700/80 hover:text-red-900 text-xl leading-none font-bold transition-colors"
            aria-label="Close error message"
          >
            {" "}
            ×{" "}
          </button>{" "}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>

            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="block w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder:text-gray-400 focus:ring-frexia-blue focus:border-frexia-blue transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>

            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="block w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder:text-gray-400 focus:ring-frexia-blue focus:border-frexia-blue transition"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subject
          </label>

          <input
            type="text"
            name="subject"
            id="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="How can we help you?"
            className="block w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder:text-gray-400 focus:ring-frexia-blue focus:border-frexia-blue transition"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>

          <textarea
            name="message"
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="block w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder:text-gray-400 focus:ring-frexia-blue focus:border-frexia-blue transition"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-frexia-blue hover:bg-frexia-blue-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-frexia-blue transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
