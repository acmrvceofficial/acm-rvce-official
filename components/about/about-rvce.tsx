"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { ArrowRight, Globe, Building2, MapPin } from "lucide-react";
import { useRef } from "react";
import { rvceSectionConfig } from "@/lib/config/about-page-config";
import Image from "next/image";

export default function AboutRVCE() {
  const heroRef = useRef<any>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  return (
    <section className="relative w-full py-16 md:py-24 px-6 lg:px-12 bg-neutral-50 dark:bg-[#0a0a0a] overflow-hidden" ref={heroRef}>
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="relative mb-16 md:mb-24">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 md:mb-8 w-[95%] md:w-[85%] lg:absolute lg:top-4 md:top-0 z-10">
            <div className="flex items-center gap-2 text-xl bg-white/80 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-200 dark:border-white/10">
              <span className="text-[#005596] animate-spin">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-xs font-contact-tech font-semibold tracking-widest text-neutral-900 dark:text-white uppercase"
              >
                {rvceSectionConfig.heading}
              </TimelineContent>
            </div>

            <div className="hidden sm:flex gap-3">
              {[
                { icon: Globe, link: "https://www.rvce.edu.in/" },
                { icon: MapPin, link: "https://maps.app.goo.gl/8KQBrSzCvofJTyN48" }    
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <TimelineContent
                    as="a"
                    key={index}
                    animationNum={index + 1}
                    timelineRef={heroRef}
                    customVariants={revealVariants}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 md:w-10 md:h-10 border border-neutral-200 dark:border-white/15 bg-white dark:bg-neutral-900 rounded-lg flex items-center justify-center cursor-pointer text-neutral-600 dark:text-neutral-400 hover:text-[#005596] dark:hover:text-[#005596] hover:border-[#005596] transition-colors"
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </TimelineContent>
                );
              })}
            </div>
          </div>

          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group"
          >
            <svg
              className="w-full drop-shadow-2xl dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              width={"100%"}
              height={"100%"}
              viewBox="0 0 100 60"
            >
              <defs>
                <clipPath
                  id="clip-inverted"
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width={"100%"}
                height={"100%"}
                xlinkHref={rvceSectionConfig.image.src}
              ></image>
            </svg>
          </TimelineContent>

          {/* Stats mapped from RVCE config */}
          {rvceSectionConfig.stats && rvceSectionConfig.stats.length >= 2 && (
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:justify-start justify-between sm:items-center py-4 text-sm px-2">
              <TimelineContent
                as="div"
                animationNum={5}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex gap-4"
              >
                <div className="flex items-center gap-2 mb-2 sm:text-base text-sm">
                  <span className="text-[#005596] font-bold text-xl drop-shadow-md">{rvceSectionConfig.stats[0].value}</span>
                  <span className="text-neutral-600 dark:text-neutral-400">{rvceSectionConfig.stats[0].label}</span>
                  <span className="text-neutral-300 dark:text-neutral-700 mx-2 hidden sm:block">|</span>
                </div>
                <div className="flex items-center gap-2 mb-2 sm:text-base text-sm">
                  <span className="text-[#005596] font-bold text-xl drop-shadow-md">{rvceSectionConfig.stats[1].value}</span>
                  <span className="text-neutral-600 dark:text-neutral-400">{rvceSectionConfig.stats[1].label}</span>
                </div>
              </TimelineContent>
              {rvceSectionConfig.stats.length > 2 && (
                <div className="lg:absolute right-0 bottom-16 lg:bottom-12 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4">
                  <TimelineContent
                    as="div"
                    animationNum={6}
                    timelineRef={heroRef}
                    customVariants={revealVariants}
                    className="flex lg:text-3xl sm:text-2xl text-xl items-center gap-3 mb-2 px-4 py-2 bg-white/50 dark:bg-black/50 backdrop-blur border border-white/20 rounded-xl lg:px-0 lg:py-0 lg:bg-transparent lg:border-none lg:backdrop-filter-none"
                  >
                    <span className="text-[#005596] font-semibold">{rvceSectionConfig.stats[2].value}</span>
                    <span className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base uppercase tracking-wider font-contact-tech">{rvceSectionConfig.stats[2].label}</span>
                  </TimelineContent>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 px-2">
          <div className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] !leading-[1.1] font-bold tracking-tight text-neutral-900 dark:text-white mb-8">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 2.5,
                }}
              >
                Pioneering education and research since 1963.
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid sm:grid-cols-2 gap-8 text-neutral-600 dark:text-neutral-400"
            >
              {rvceSectionConfig.descriptionParagraphs.map((paragraph, idx) => (
                <TimelineContent
                  key={idx}
                  as="div"
                  animationNum={10 + idx}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="sm:text-base text-sm"
                >
                  <p className="leading-relaxed">
                    {paragraph}
                  </p>
                </TimelineContent>
              ))}
            </TimelineContent>
          </div>

          <div className="lg:col-span-1">
            <div className="text-left lg:text-right border-t border-neutral-200 dark:border-white/10 pt-8 lg:border-none lg:pt-0">
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-[#005596] text-xl font-bold mb-2 font-contact-tech uppercase tracking-widest"
              >
                AUTONOMOUS
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-neutral-500 dark:text-neutral-400 text-sm mb-6 font-medium"
              >
                Affiliated to VTU Belagavi
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-8"
              >
                <p className="text-neutral-900 dark:text-white font-medium mb-4 leading-relaxed lg:ml-auto max-w-xs">
                  {rvceSectionConfig.achievements.subheading}
                </p>
                <div className="flex flex-col gap-3 lg:items-end">
                    {rvceSectionConfig.achievements.list.slice(0, 2).map((achievement, i) => (
                        <p key={i} className="text-xs text-neutral-500 dark:text-neutral-400 leading-normal max-w-[280px]">
                            • {achievement}
                        </p>
                    ))}
                </div>
              </TimelineContent>

              <TimelineContent
                as="a"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://rvce.edu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-[#005596] dark:hover:bg-[#005596] dark:hover:text-white flex w-fit lg:ml-auto gap-3 hover:gap-5 transition-all duration-300 ease-in-out px-6 py-3.5 rounded-full cursor-pointer font-semibold shadow-lg shadow-neutral-900/5 dark:shadow-white/5 disabled:opacity-50"
              >
                EXPLORE CAMPUS <ArrowRight className="w-5 h-5" />
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
