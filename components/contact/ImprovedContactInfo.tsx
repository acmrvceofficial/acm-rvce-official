"use client";

import React from "react";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

interface ContactInfoProps {
  items: Array<{
    icon: string;
    label: string;
    value: string;
    link?: string;
  }>;
  socialLinks: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
  className?: string;
}

export default function ImprovedContactInfo({
  items,
  socialLinks,
  className,
}: ContactInfoProps) {
  
  // Helper to dynamically render Lucide icons
  const renderIcon = (iconName: string, className?: string) => {
    const Icon = (Icons as any)[iconName] || Icons.HelpCircle;
    return <Icon className={className} />;
  };

  return (
    <div className={cn("w-full space-y-8", className)}>
      
      {/* 1. Primary Contact Details */}
      <div className="grid grid-cols-1 gap-6">
        {items.map((item, index) => (
          <div 
            key={item.label}
            className="group flex items-start gap-5"
          >
            <div className="flex flex-col">
                <span className="font-contact-tech text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-2 border-b border-transparent inline-block pb-1">
                    {item.label}
                </span>
                {item.link ? (
                    <a href={item.link} className="text-base font-medium text-neutral-900 dark:text-white hover:opacity-60 transition-opacity">
                        {item.value}
                    </a>
                ) : (
                    <p className="text-base font-medium text-neutral-900 dark:text-white max-w-xs leading-relaxed">
                        {item.value}
                    </p>
                )}
            </div>
          </div>
        ))}
      </div>

      {/* 2. Social Connect */}
      <div className="pt-8 border-t border-neutral-200 dark:border-white/10">
         <h4 className="font-contact-tech text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-6">
            Digital Presence
         </h4>
         <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
               <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center h-12 w-12 rounded-full border border-neutral-200 dark:border-white/15 bg-transparent text-neutral-600 dark:text-neutral-400 hover:border-[#005596] hover:text-[#005596] dark:hover:border-[#005596] dark:hover:text-[#005596] transition-all duration-300"
                  aria-label={link.platform}
               >
                  {renderIcon(link.icon, "w-4 h-4")}
               </a>
            ))}
         </div>
      </div>
    </div>
  );
}