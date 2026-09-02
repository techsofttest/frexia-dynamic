"use client";

import { useState } from "react";

interface Career {
  id: number;
  division: string;
  location: string;
  employment_type: string;
  experience: string;
  title: string;
  description: string;
  key_requirements: string[];
  status: boolean;
}

interface JobApplicationModalProps {
  selectedJob: Career | null;

  formData: {
    fullName: string;
    email: string;
    phone: string;
    coverNote: string;
    resumeFile: File | null;
  };

  setFormData: React.Dispatch<
    React.SetStateAction<{
      fullName: string;
      email: string;
      phone: string;
      coverNote: string;
      resumeFile: File | null;
    }>
  >;

  handleCloseModal: () => void;
}

export default function JobApplicationModal({
  selectedJob,
  formData,
  setFormData,
  handleCloseModal,
}: JobApplicationModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!selectedJob) return null;

  /**
   * Submit job application
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage("");

    // Check career
    if (!selectedJob.id) {
      setErrorMessage("Invalid career selected.");
      return;
    }

    // Check resume
    if (!formData.resumeFile) {
      setErrorMessage("Please upload your resume.");
      return;
    }

    // Check file size - 5MB
    if (formData.resumeFile.size > 5 * 1024 * 1024) {
      setErrorMessage("Resume file must be less than 5MB.");
      return;
    }

    // Check file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(formData.resumeFile.type)) {
      setErrorMessage("Only PDF, DOC, and DOCX files are allowed.");
      return;
    }

    try {
      setIsSubmitting(true);

      const data = new FormData();

      // Career ID
      data.append("career_id", String(selectedJob.id));

      // Applicant details
      data.append("full_name", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);

      // Optional cover note
      data.append("cover_note", formData.coverNote || "");

      // Resume
      data.append("resume", formData.resumeFile);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/job-applications`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: data,
        },
      );

      const result = await response.json();

      if (!response.ok) {
        // Laravel validation errors
        if (response.status === 422 && result.errors) {
          const firstError = Object.values(result.errors)
            .flat()
            .find((error): error is string => typeof error === "string");

          setErrorMessage(firstError || "Please check the form and try again.");
        } else {
          setErrorMessage(
            result.message ||
              "Unable to submit your application. Please try again.",
          );
        }

        return;
      }

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(result.message || "Unable to submit your application.");
      }
    } catch (error) {
      console.error("Job application error:", error);

      setErrorMessage(
        "Unable to connect to the server. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Close modal and reset form
   */
  const handleClose = () => {
    setIsSubmitted(false);
    setErrorMessage("");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      coverNote: "",
      resumeFile: null,
    });

    handleCloseModal();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white text-frexia-dark rounded-3xl max-w-2xl w-full p-8 md:p-10 shadow-2xl relative border border-gray-100 my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Close modal"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Job Information */}
            <div>
              <span className="text-frexia-blue text-xs font-bold uppercase tracking-widest block mb-1">
                Job Application
              </span>

              <h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-800 pr-10">
                {selectedJob.title}
              </h3>

              <p className="text-gray-500 text-xs mt-1">
                {selectedJob.division} • {selectedJob.location}
              </p>

              <p className="text-gray-500 text-xs mt-1">
                {selectedJob.employment_type} • {selectedJob.experience}
              </p>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3">
                <p className="text-sm text-red-600">{errorMessage}</p>
              </div>
            )}

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Full Name *
                </label>

                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="e.g. John Doe"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fullName: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-frexia-blue text-sm text-slate-800 disabled:bg-gray-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Email Address *
                </label>

                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-frexia-blue text-sm text-slate-800 disabled:bg-gray-100"
                />
              </div>
            </div>

            {/* Phone & Resume */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  required
                  disabled={isSubmitting}
                  placeholder="+971 50 123 4567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-frexia-blue text-sm text-slate-800 disabled:bg-gray-100"
                />
              </div>

              {/* Resume */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Upload Resume (PDF/DOC) *
                </label>

                <input
                  type="file"
                  required
                  disabled={isSubmitting}
                  accept=".pdf,.doc,.docx"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      resumeFile: e.target.files?.[0] ?? null,
                    })
                  }
                  className="w-full text-xs text-gray-500 file:mr-3 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-frexia-blue-light file:text-frexia-blue hover:file:bg-frexia-blue hover:file:text-white file:transition-colors file:cursor-pointer disabled:opacity-50"
                />

                <p className="text-[11px] text-gray-400 mt-1">
                  Maximum file size: 5MB
                </p>
              </div>
            </div>

            {/* Cover Note */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Cover Note / Brief Pitch (Optional)
              </label>

              <textarea
                rows={3}
                disabled={isSubmitting}
                placeholder="Briefly introduce yourself and why you're a great fit for this role..."
                value={formData.coverNote}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    coverNote: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-frexia-blue text-sm text-slate-800 disabled:bg-gray-100"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="px-6 py-3 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-frexia-blue text-white rounded-xl font-bold text-sm hover:bg-frexia-blue-hover active:scale-95 transition-all shadow-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Success Confirmation */
          <div className="flex flex-col items-center text-center gap-4 py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-2xl">
              <svg
                width="28"
                height="28"
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

            <h3 className="font-heading font-bold text-3xl text-slate-800">
              Application Submitted!
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Thank you{" "}
              <span className="font-bold text-slate-800">
                {formData.fullName}
              </span>
              . We have received your application for{" "}
              <span className="font-bold text-frexia-blue">
                {selectedJob.title}
              </span>
              . Our recruitment team will review your resume and be in touch
              soon.
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="mt-4 px-8 py-3 bg-frexia-blue text-white rounded-xl font-bold text-sm hover:bg-frexia-blue-hover transition-colors shadow-md cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
