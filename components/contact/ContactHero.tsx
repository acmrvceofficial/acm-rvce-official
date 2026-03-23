"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ContactHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <section
      className={cn(
        "relative w-full pt-32 pb-16 lg:pt-44 lg:pb-24 px-6 lg:px-12 flex flex-col items-start justify-end",
        className
      )}
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="relative z-20">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#005596]" />
            <span className="font-contact-tech text-[11px] font-semibold uppercase tracking-[0.2em] text-[#005596]">
              Contact
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-neutral-900 dark:text-white leading-[0.95] mb-6">
            Get in <br />
            <span className="text-neutral-400 dark:text-neutral-600">Touch</span>
          </h1>

          <p className="max-w-md text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;