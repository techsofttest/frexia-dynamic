"use client";

import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  faqs?: FAQItem[];
}

export default function FAQ({ faqs = [] }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white text-frexia-dark w-full py-20 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Centered Section Header */}
        {/* <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-frexia-blue text-xs font-bold tracking-widest uppercase mb-3 block">
            Got Questions?
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight mb-4 text-slate-800">
            Frequently Asked <span className="text-frexia-blue">Questions</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Everything you need to know about our global shipping, customs brokerage, and tracking services.
          </p>
        </div> */}

        {/* Minimal Centered Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-frexia-blue/40 bg-gray-50/50 shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-6 p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <span
                    className={`font-heading font-bold text-lg md:text-xl leading-snug transition-colors ${
                      isOpen ? "text-frexia-blue" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-frexia-blue text-white rotate-180"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className="px-6 pb-6 pt-0 text-gray-600 text-base leading-relaxed prose prose-gray max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: faq.answer || "",
                    }}
                  />
                </div>
              </div>
            );
          })}

          {/* No FAQ Data */}
          {faqs.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              No frequently asked questions available.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
