import React from 'react';
import type { DomainConfig } from '../types';
import { AnimateIn } from './AnimateIn';
import { AsciiHandsCanvas } from './AsciiHandsCanvas';
import {
  ArrowRight,
  ArrowDown,
  Search,
  Cpu,
  Layout,
  Server,
  Cloud,
  Layers,
  Sparkles,
  ListChecks,
  Milestone,
  BookOpen,
  Users,
} from 'lucide-react';

interface LandingPageProps {
  domains: DomainConfig[];
  onSelectDomain: (slug: string) => void;
  onOpenCommandPalette?: () => void;
}

const getDomainIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case 'cpu':
      return <Cpu className="w-5 h-5 text-white" />;
    case 'layout':
      return <Layout className="w-5 h-5 text-white" />;
    case 'server':
      return <Server className="w-5 h-5 text-white" />;
    case 'cloud':
      return <Cloud className="w-5 h-5 text-white" />;
    default:
      return <Layers className="w-5 h-5 text-white" />;
  }
};

export const LandingPage: React.FC<LandingPageProps> = ({
  domains,
  onSelectDomain,
  onOpenCommandPalette,
}) => {
  const scrollToTracks = () => {
    document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' });
  };

  const totalPhases = domains.reduce((acc, d) => acc + d.roadmapData.length, 0);
  const totalProjects = domains.reduce((acc, d) => acc + d.projectsData.length, 0);
  const totalResources = domains.reduce((acc, d) => acc + d.resourcesData.length, 0);

  return (
    <div className="relative w-full bg-[#000000] text-zinc-100 overflow-hidden">
      {/* =========================================================================
          1. MASTER HERO SECTION
         ========================================================================= */}
      <section className="relative pt-10 pb-12 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 overflow-hidden text-center select-none w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Eyebrow badge */}
          <AnimateIn delay={30}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-zinc-200 text-xs font-mono tracking-widest uppercase mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Peer-to-Peer Engineering Platform</span>
            </div>
          </AnimateIn>

          {/* Master Headline */}
          <AnimateIn delay={60}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] sm:leading-[1.1] px-1 [text-wrap:balance]">
              Open-Source Engineering Roadmaps
              <span className="block mt-2 sm:mt-3 text-zinc-300 font-bold">
                For Tomorrow's Developers
              </span>
            </h1>
          </AnimateIn>

          {/* Subtext description */}
          <AnimateIn delay={120}>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-200 max-w-2xl mx-auto font-normal leading-relaxed">
              Vetted roadmaps, hands-on milestone projects, verified resources, and step-by-step topic trackers.
            </p>
          </AnimateIn>

          {/* Action CTAs */}
          <AnimateIn delay={180}>
            <div className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={scrollToTracks}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.45)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Explore All 5 Tracks</span>
                <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {onOpenCommandPalette && (
                <button
                  onClick={onOpenCommandPalette}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-zinc-200 hover:text-white border border-white/10 text-xs sm:text-sm font-mono transition-all cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Search Curriculum</span>
                  <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] bg-white/[0.08] text-zinc-400 border border-white/10">
                    ⌘K
                  </kbd>
                </button>
              )}
            </div>
          </AnimateIn>
        </div>

        {/* Central Signature ASCII Hands Canvas — Enhanced Size */}
        <AnimateIn delay={240} className="w-full mt-8 sm:mt-12 overflow-hidden px-2 sm:px-4">
          <div className="relative w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto flex flex-col items-center sm:scale-105 lg:scale-110 origin-center transition-transform">
            <AsciiHandsCanvas />
          </div>
        </AnimateIn>

        {/* Quick Platform Metrics Banner */}
        <AnimateIn delay={300}>
          <div className="max-w-4xl mx-auto px-4 mt-8 sm:mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-zinc-950/80 border border-white/[0.08] backdrop-blur-xl">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">5</div>
                <div className="text-xs text-zinc-300 mt-0.5">Technical Tracks</div>
              </div>
              <div className="text-center border-l border-white/[0.06]">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">{totalPhases}+</div>
                <div className="text-xs text-zinc-300 mt-0.5">Phased Milestones</div>
              </div>
              <div className="text-center border-t sm:border-t-0 sm:border-l border-white/[0.06] pt-2 sm:pt-0">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">{totalResources}+</div>
                <div className="text-xs text-zinc-300 mt-0.5">Curated Resources</div>
              </div>
              <div className="text-center border-t sm:border-t-0 border-l border-white/[0.06] pt-2 sm:pt-0">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">{totalProjects}+</div>
                <div className="text-xs text-zinc-300 mt-0.5">Capstone Projects</div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Subtle separator */}
        <div className="mt-12 sm:mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-5xl mx-auto px-4" />
      </section>

      {/* =========================================================================
          2. THE 5 TECHNICAL DOMAINS SHOWCASE
         ========================================================================= */}
      <section id="tracks" className="relative py-14 sm:py-20 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono tracking-widest uppercase mb-3">
                <Layers className="w-3.5 h-3.5 text-zinc-300" />
                <span>Technical Disciplines</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Choose Your Engineering Path
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-zinc-200 leading-relaxed">
                Each domain features an independent curriculum, topic checklists, milestone projects, and curated learning materials. Select a track to dive in.
              </p>
            </div>
          </AnimateIn>

          {/* 5 Tracks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {domains.map((domain, idx) => (
              <AnimateIn key={domain.slug} delay={idx * 70}>
                <div
                  onClick={() => onSelectDomain(domain.slug)}
                  className="group relative flex flex-col justify-between h-full rounded-2xl border border-white/[0.08] hover:border-white/30 bg-zinc-950/80 hover:bg-zinc-900/90 p-6 lift transition-all cursor-pointer shadow-lg hover:shadow-[0_0_35px_rgba(255,255,255,0.06)]"
                >
                  <div>
                    {/* Top Header: Track # */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-xl bg-white/[0.08] border border-white/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        {getDomainIcon(domain.iconName)}
                      </div>
                      <span className="text-xs font-mono text-zinc-300 font-semibold">
                        Track 0{idx + 1}
                      </span>
                    </div>

                    {/* Domain Title & Headline */}
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                      {domain.name}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-1">/{domain.slug}</p>
                    <p className="text-xs sm:text-[13px] text-zinc-200 mt-3 leading-relaxed">
                      {domain.heroTagline}
                    </p>

                    {/* Curriculum Stats Grid */}
                    <div className="mt-5 pt-4 border-t border-white/[0.06] grid grid-cols-3 gap-2 text-center text-xs font-mono">
                      <div className="bg-white/[0.04] px-2 py-2 rounded-lg border border-white/[0.08]">
                        <div className="text-white font-bold text-sm">{domain.roadmapData.length}</div>
                        <div className="text-[10px] text-zinc-400 mt-0.5">Phases</div>
                      </div>
                      <div className="bg-white/[0.04] px-2 py-2 rounded-lg border border-white/[0.08]">
                        <div className="text-white font-bold text-sm">{domain.projectsData.length}</div>
                        <div className="text-[10px] text-zinc-400 mt-0.5">Projects</div>
                      </div>
                      <div className="bg-white/[0.04] px-2 py-2 rounded-lg border border-white/[0.08]">
                        <div className="text-white font-bold text-sm">{domain.resourcesData.length}</div>
                        <div className="text-[10px] text-zinc-400 mt-0.5">Resources</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-300 group-hover:text-white transition-colors">
                      Explore Curriculum
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:translate-x-1 transition-transform">
                      <span>Enter Track</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Small Note: Video Editing Track */}
          <AnimateIn delay={300}>
            <div className="mt-8 sm:mt-10 flex items-center justify-center">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-300 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse" />
                <span>Note: Video editing will be added soon</span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* =========================================================================
          3. PLATFORM METHODOLOGY & PILLARS
         ========================================================================= */}
      <section id="methodology" className="relative py-14 sm:py-20 md:py-24 border-t border-white/[0.06] bg-zinc-950/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono tracking-widest uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
                <span>Our Engineering Pedagogy</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                How DEVs P2P Works
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-zinc-200 leading-relaxed">
                Designed specifically for collegiate builders and independent developers aiming for real production proficiency.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <AnimateIn delay={40}>
              <div className="rounded-2xl border border-white/[0.08] bg-zinc-950/80 p-6 lift">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-4">
                  <ListChecks className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">1. Day-1 Baseline Prerequisites</h3>
                <p className="text-xs sm:text-[13px] text-zinc-200 leading-relaxed">
                  Every track opens with transparent baseline checkpoints so you know exactly what tools, math, or syntax you need. Phase 01 always reviews core foundations step-by-step.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={80}>
              <div className="rounded-2xl border border-white/[0.08] bg-zinc-950/80 p-6 lift">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-4">
                  <Milestone className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">2. Phased Roadmaps with Local Persistence</h3>
                <p className="text-xs sm:text-[13px] text-zinc-200 leading-relaxed">
                  Step-by-step milestones with interactive topic checklists. Your progress is saved automatically into browser localStorage with zero logins, accounts, or friction.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={120}>
              <div className="rounded-2xl border border-white/[0.08] bg-zinc-950/80 p-6 lift">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">3. Curated Resource Library</h3>
                <p className="text-xs sm:text-[13px] text-zinc-200 leading-relaxed">
                  Strictly vetted textbooks, official documentation, open-source repositories, and verified YouTube tutorials. Zero low-effort AI slop or clickbait tutorials.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={160}>
              <div className="rounded-2xl border border-white/[0.08] bg-zinc-950/80 p-6 lift">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-4">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">4. Peer-to-Peer Community</h3>
                <p className="text-xs sm:text-[13px] text-zinc-200 leading-relaxed">
                  Built by students for students. Collaborate with peers, share project walkthroughs, study together, and build open-source proof-of-work repositories.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. BOTTOM CALLOUT / READY TO BUILD
         ========================================================================= */}
      <section className="relative py-16 sm:py-20 border-t border-white/[0.06] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateIn>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Ready to Build Production Systems?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-zinc-200 leading-relaxed max-w-xl mx-auto">
              Choose any of the 5 tracks above to access the full milestone roadmap, interactive topic trackers, and proof-of-work capstones.
            </p>
            <div className="mt-8">
              <button
                onClick={scrollToTracks}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Select a Technical Track</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
};
