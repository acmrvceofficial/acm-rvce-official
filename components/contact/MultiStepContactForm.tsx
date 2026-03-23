"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Loader2 } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function MultiStepContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Form submission failed");

      setFormStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-transparent border-b border-neutral-300 dark:border-white/15 py-4 text-base text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors duration-300";
  const labelClasses =
    "block text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-500 mb-1.5 font-contact-tech";

  if (formStatus === "success") {
    return (
      <div className="py-16 flex flex-col items-center text-center">
        <div className="h-16 w-16 rounded-full border-2 border-neutral-900 dark:border-white flex items-center justify-center mb-6">
          <Check className="w-7 h-7 text-neutral-900 dark:text-white" strokeWidth={2.5} />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
          Message Received
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-sm">
          Thank you for reaching out. We&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => {
            setFormStatus("idle");
          }}
          className="text-sm font-contact-tech uppercase tracking-widest text-neutral-900 dark:text-white border-b border-neutral-900 dark:border-white pb-0.5 hover:opacity-60 transition-opacity"
        >
          Send Another
        </button>
      </div>
    );
  }

  if (formStatus === "error") {
    return (
      <div className="py-16 flex flex-col items-center text-center">
        <div className="h-16 w-16 rounded-full border-2 border-red-500 flex items-center justify-center mb-6">
          <span className="text-red-500 text-2xl font-bold">!</span>
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
          Something went wrong
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-sm">
          We couldn&apos;t send your message. Please try again or reach out directly via email.
        </p>
        <button
          onClick={() => setFormStatus("idle")}
          className="text-sm font-contact-tech uppercase tracking-widest text-neutral-900 dark:text-white border-b border-neutral-900 dark:border-white pb-0.5 hover:opacity-60 transition-opacity"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div className="relative group">
          <label htmlFor="fullName" className={labelClasses}>
            Full Name <span className="text-neutral-400">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            minLength={3}
            maxLength={50}
            value={formData.fullName}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("fullName")}
            onBlur={() => setFocusedField(null)}
            placeholder="Your name"
            className={cn(
              inputClasses,
              focusedField === "fullName" && "border-neutral-900 dark:border-white"
            )}
          />
        </div>

        <div className="relative group">
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-neutral-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            placeholder="you@example.com"
            className={cn(
              inputClasses,
              focusedField === "email" && "border-neutral-900 dark:border-white"
            )}
          />
        </div>
      </div>

      {/* Row 2: Phone & Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 mt-0">
        <div className="relative group">
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("phone")}
            onBlur={() => setFocusedField(null)}
            placeholder="+91 XXXXX XXXXX"
            className={cn(
              inputClasses,
              focusedField === "phone" && "border-neutral-900 dark:border-white"
            )}
          />
        </div>

        <div className="relative group">
          <label htmlFor="subject" className={labelClasses}>
            Subject <span className="text-neutral-400">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            minLength={5}
            maxLength={100}
            value={formData.subject}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("subject")}
            onBlur={() => setFocusedField(null)}
            placeholder="What's this about?"
            className={cn(
              inputClasses,
              focusedField === "subject" && "border-neutral-900 dark:border-white"
            )}
          />
        </div>
      </div>

      {/* Row 3: Message */}
      <div className="relative group mt-0">
        <label htmlFor="message" className={labelClasses}>
          Message <span className="text-neutral-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={500}
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          placeholder="Tell us what you have in mind..."
          className={cn(
            inputClasses,
            "resize-none",
            focusedField === "message" && "border-neutral-900 dark:border-white"
          )}
        />
      </div>

      {/* Submit */}
      <div className="pt-8 w-full md:w-auto">
        <button
          type="submit"
          disabled={formStatus === "submitting"}
          className="group inline-flex items-center justify-center gap-3 w-full md:w-auto bg-[#005596] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-[#004071] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,85,150,0.3)] hover:shadow-[0_0_25px_rgba(0,85,150,0.5)]"
        >
          {formStatus === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}