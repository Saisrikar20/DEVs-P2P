import React, { useState } from 'react';
import type { DomainPrerequisites } from '../types';
import { ListChecks, ArrowDown, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

interface PrerequisitesSectionProps {
  domainName: string;
  prerequisites: DomainPrerequisites;
}

export const PrerequisitesSection: React.FC<PrerequisitesSectionProps> = ({
  domainName,
  prerequisites,
}) => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? prerequisites.items : prerequisites.items.slice(0, 3);
  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Essential':
        return 'bg-white/[0.08] text-white border-white/20';
      case 'Recommended':
        return 'bg-white/[0.04] text-zinc-300 border-white/10';
      default:
        return 'bg-white/[0.02] text-zinc-400 border-white/[0.06]';
    }
  };

  const scrollToRoadmap = () => {
    document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="prerequisites" className="relative pt-12 sm:pt-16 pb-8 sm:pb-12 overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-400 text-xs font-mono tracking-widest uppercase mb-3 sm:mb-4">
              <ListChecks className="w-3.5 h-3.5 text-zinc-300" />
              <span>Prerequisites</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Before You Start: {domainName}
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl mx-auto px-2">
              {prerequisites.overview}
            </p>
          </div>
        </AnimateIn>

        {/* Prerequisites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visibleItems.map((item, idx) => (
            <AnimateIn key={idx} delay={idx * 80}>
              <div className="flex flex-col justify-between h-full rounded-2xl border border-white/[0.08] bg-zinc-950/80 hover:bg-zinc-900/80 hover:border-white/20 p-5 sm:p-6 lift transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="text-xs font-mono text-zinc-400">Requirement 0{idx + 1}</span>
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border ${getLevelBadgeClass(
                        item.level
                      )}`}
                    >
                      {item.level}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-zinc-100 mb-2">{item.title}</h3>
                  <p className="text-[13px] text-zinc-300 leading-relaxed">{item.description}</p>
                </div>

                {item.skills && item.skills.length > 0 && (
                  <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.05] text-zinc-300 border border-white/[0.08]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Show More / Show Less Toggle Button */}
        {prerequisites.items.length > 3 && (
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95"
            >
              {showAll ? (
                <>
                  <span>Show Less Requirements</span>
                  <ChevronUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  <span>Show All Requirements (+{prerequisites.items.length - 3} more)</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Reassurance & Fast-Forward Bar */}
        <AnimateIn delay={250}>
          <div className="mt-6 sm:mt-8 p-4 rounded-xl border border-white/[0.08] bg-zinc-950/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-[13px] text-zinc-300">
            <div className="flex items-center gap-2.5 text-center sm:text-left">
              <Sparkles className="w-4 h-4 text-zinc-200 shrink-0 hidden sm:block" />
              <span>
                Don't meet all of these yet? Phase 01 of the curriculum is designed to review the core foundations step-by-step.
              </span>
            </div>
            <button
              onClick={scrollToRoadmap}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-mono text-xs transition-all cursor-pointer whitespace-nowrap active:scale-95"
            >
              <span>Explore Curriculum</span>
              <ArrowDown className="w-3 h-3 text-zinc-400" />
            </button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};
