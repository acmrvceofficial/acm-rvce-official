"use client";

import React from "react";
import { motion, useInView, Variants } from "framer-motion";

interface TimelineContentProps {
  as?: React.ElementType | string;
  children: React.ReactNode;
  className?: string;
  animationNum?: number;
  timelineRef?: React.RefObject<any>;
  customVariants?: Variants;
  [key: string]: any;
}

export const TimelineContent = ({
  as = "div",
  children,
  className,
  animationNum = 0,
  timelineRef,
  customVariants,
  ...props
}: TimelineContentProps) => {
  const isInView = useInView(timelineRef || { current: null }, { once: true, margin: "-100px" });
  
  // @ts-ignore
  const Component = (motion as any)[as as keyof typeof motion] || motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants}
      custom={animationNum}
      {...props}
    >
      {children}
    </Component>
  );
};
