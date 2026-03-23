"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MapEmbedProps {
  embedUrl: string;
  title?: string;
  className?: string;
}

const MapEmbed: React.FC<MapEmbedProps> = ({
  embedUrl,
  title = "Location Map",
  className,
}) => {
  return (
    <div className={cn("relative w-full h-full overflow-hidden group", className)}>
        {/* Map Container */}
        <div className="w-full h-full bg-neutral-100 dark:bg-neutral-900">
            <iframe
                src={embedUrl}
                title={title}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
        </div>

        {/* Floating Label */}
        <div className="absolute top-4 left-4 z-20 px-4 py-2 bg-white dark:bg-[#050505] border border-neutral-200 dark:border-white/10 shadow-sm pointer-events-none rounded-[4px]">
            <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005596] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#005596]"></span>
                </span>
                <span className="text-[10px] font-contact-tech uppercase tracking-[0.2em] font-semibold text-neutral-900 dark:text-white">
                    RVCE Campus
                </span>
            </div>
        </div>
    </div>
  );
};

export default MapEmbed;