"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '@/lib/types/team';
import { socialButtonVariants } from '@/lib/config/animations';
import { LinkedInIcon, GitHubIcon, EmailIcon } from './social-icons';
import Image from 'next/image';

interface FoundingTeamProps {
  members: TeamMember[];
}

const FoundingMemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.15 } }}
      className="group relative"
    >
      {/* Subtle glow on hover */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-amber-400/50 via-yellow-500/30 to-orange-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-[1px]" />
      
      <div className="relative rounded-2xl overflow-hidden bg-card border border-amber-500/15 shadow-md">
        {/* Image */}
        <div className="h-52 relative overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Info */}
        <div className="p-4 relative">
          <h3 className="text-base font-bold mb-0.5 text-foreground">{member.name}</h3>
          <p className="text-sm mb-3 text-amber-500 dark:text-amber-400 font-medium">{member.role}</p>

          <div className="flex space-x-2">
            {member.linkedin && (
              <motion.a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-card hover:bg-blue-600 hover:text-white transition-colors duration-300 border border-border shadow-sm"
                variants={socialButtonVariants}
                initial="rest"
                whileHover="hover"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon />
              </motion.a>
            )}
            
            {member.github && (
              <motion.a 
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-card hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 border border-border shadow-sm"
                variants={socialButtonVariants}
                initial="rest"
                whileHover="hover"
                aria-label="GitHub profile"
              >
                <GitHubIcon />
              </motion.a>
            )}
            
            {member.email && (
              <motion.a 
                href={`mailto:${member.email}`}
                className="p-1.5 rounded-full bg-card hover:bg-green-600 hover:text-white transition-colors duration-300 border border-border shadow-sm"
                variants={socialButtonVariants}
                initial="rest"
                whileHover="hover"
                aria-label="Email"
              >
                <EmailIcon />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FoundingTeam: React.FC<FoundingTeamProps> = ({ members }) => {
  if (!members || members.length === 0) return null;

  return (
    <section className="mt-24 mb-12 relative">
      {/* Section divider */}
      <div className="flex items-center gap-4 mb-12">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </motion.div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-600 dark:text-amber-400">
            Est. 2024
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
          Founding Team
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-base">
          The visionaries who established ACM RVCE Student Chapter and laid the foundation for a thriving computing community.
        </p>
      </motion.div>

      {/* Founding members grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {members.map((member, index) => (
          <FoundingMemberCard
            key={member._id || member.id || `founding-${member.name}-${index}`}
            member={member}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default FoundingTeam;
