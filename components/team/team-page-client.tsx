"use client";

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { TeamMember, TeamData } from '@/lib/types/team';
import TeamHeader from '@/components/team/team-header';
import TeamYearSelector from '@/components/team/team-selector';
import TeamCategoryTabs from '@/components/team/tabs';
import TeamMembersGrid from '@/components/team/team-grid';
import FoundingTeam from '@/components/team/founding-team';
import FoundersBanner from '@/components/team/founders-banner';
import { teamData as hardcodedTeamData } from '@/lib/config/teamData';

const FOUNDING_YEAR = "2024";

interface TeamPageClientProps {
  teamMembers: TeamMember[];
  years: string[];
}

export const TeamPageClient: React.FC<TeamPageClientProps> = ({ teamMembers, years }) => {
  const [selectedYear, setSelectedYear] = useState<string>(years[years.length - 1] || "2025");
  const [activeTab, setActiveTab] = useState<"core" | "junior">("core");
  const { theme } = useTheme();
  
  const availableYears = React.useMemo(() => (years.length > 0 ? years : ["2025"]), [years]);
  
  const teamData: TeamData = React.useMemo(() => {
    const data: TeamData = {};
    
    availableYears.forEach(year => {
      data[year] = { core: [], junior: [] };
    });
    
    if (availableYears.length === 0 && selectedYear) {
      data[selectedYear] = { core: [], junior: [] };
    }
    
    if (teamMembers && Array.isArray(teamMembers)) {
      teamMembers.forEach(member => {
        const year = member.year || selectedYear;
        const category = member.category || 'core';
        
        if (!data[year]) {
          data[year] = { core: [], junior: [] };
        }
        
        if (category === 'core' || category === 'junior') {
          data[year][category].push(member);
        } else {
          data[year].core.push(member);
        }
      });
    }
    
    Object.keys(data).forEach(year => {
      data[year].core.sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        return a.name.localeCompare(b.name);
      });
      
      data[year].junior.sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        return a.name.localeCompare(b.name);
      });
    });
    
    return data;
  }, [teamMembers, selectedYear, availableYears]);

  // Get founding core members (from Sanity or hardcoded fallback)
  const foundingCoreMembers: TeamMember[] = React.useMemo(() => {
    // Try Sanity data first
    if (teamMembers && Array.isArray(teamMembers)) {
      const sanityFounders = teamMembers
        .filter(m => m.year === FOUNDING_YEAR && (m.category === 'core' || !m.category))
        .sort((a, b) => {
          if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
          return a.name.localeCompare(b.name);
        });
      if (sanityFounders.length > 0) return sanityFounders;
    }

    // Fallback to hardcoded data
    const fallback = hardcodedTeamData[FOUNDING_YEAR];
    if (fallback?.core) {
      return fallback.core.map(m => ({
        ...m,
        image: m.image.replace(/\\\\/g, '/'),
      }));
    }
    return [];
  }, [teamMembers]);

  const isFoundingCoreView = selectedYear === FOUNDING_YEAR && activeTab === "core";
  const showFoundingSection = !isFoundingCoreView;

  return (
    <div className="min-h-screen py-12 pt-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <TeamHeader />
        <TeamYearSelector 
          years={availableYears} 
          selectedYear={selectedYear} 
          setSelectedYear={setSelectedYear} 
        />
        <TeamCategoryTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />

        {/* Show founders banner when viewing 2024 core team */}
        {isFoundingCoreView && <FoundersBanner />}

        <TeamMembersGrid 
          teamData={teamData} 
          selectedYear={selectedYear} 
          activeTab={activeTab} 
        />

        {/* Show founding team section at bottom for all other views */}
        {showFoundingSection && (
          <FoundingTeam members={foundingCoreMembers} />
        )}
      </div>
    </div>
  );
};
