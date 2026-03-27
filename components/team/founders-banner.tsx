"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FoundersBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-amber-500/5 px-8 py-6">
        {/* Subtle shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
        
        <div className="relative flex items-center gap-4">
          {/* Star icon */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              The Founding Team
              <span className="text-xs font-semibold tracking-widest uppercase text-amber-600 dark:text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                Est. 2024
              </span>
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              The visionaries who established ACM RVCE Student Chapter and laid the foundation for our community.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FoundersBanner;
