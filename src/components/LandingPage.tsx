import React from 'react';
import type { DomainConfig, EventHost } from '../types';
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
  Mail,
  Check,
  ChevronRight,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

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
  const [copiedEmail, setCopiedEmail] = React.useState<string | null>(null);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 1800);
    } catch (err) {
      console.warn('Copy failed:', err);
    }
  };

  const scrollToTracks = () => {
    document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Compile all mentors across all domains without duplicates
  const allMentors: Array<{ host: EventHost; domainName: string; domainSlug: string }> = [];
  const seenMentorNames = new Set<string>();

  domains.forEach((d) => {
    d.hostsData.forEach((host) => {
      if (!seenMentorNames.has(host.name)) {
        seenMentorNames.add(host.name);
        allMentors.push({ host, domainName: d.shortName, domainSlug: d.slug });
      }
    });
  });

  const totalPhases = domains.reduce((acc, d) => acc + d.roadmapData.length, 0);
  const totalProjects = domains.reduce((acc, d) => acc + d.projectsData.length, 0);

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
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] sm:leading-[1.1] px-1">
              5 Technical Disciplines.<br />
              <span className="text-zinc-300 font-medium">Zero Fluff. Built by Engineers.</span>
            </h1>
          </AnimateIn>

          {/* Subtitle */}
          <AnimateIn delay={120}>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-zinc-200 tracking-normal max-w-2xl mx-auto leading-relaxed px-2">
              Comprehensive open curricula curated by student engineers and practitioners.
              Explore step-by-step milestones, capstone projects, curated textbooks, and connect directly with mentors across all 5 technical domains.
            </p>
          </AnimateIn>

          {/* Action Buttons */}
          <AnimateIn delay={180}>
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={scrollToTracks}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.45)] hover:scale-105 active:scale-95 cursor-pointer touch-manipulation min-h-[44px]"
              >
                <span>Explore All 5 Tracks</span>
                <ArrowDown className="w-3.5 h-3.5 text-black transition-transform group-hover:translate-y-0.5" />
              </button>

              {onOpenCommandPalette && (
                <button
                  onClick={onOpenCommandPalette}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 text-xs sm:text-sm font-mono text-zinc-200 hover:text-white transition-all cursor-pointer shadow-lg active:scale-95 min-h-[44px]"
                >
                  <Search className="w-3.5 h-3.5 text-zinc-300" />
                  <span>Search Anything</span>
                  <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-300 border border-zinc-700">
                    ⌘K
                  </kbd>
                </button>
              )}
            </div>
          </AnimateIn>
        </div>

        {/* Central Signature ASCII Hands Canvas */}
        <AnimateIn delay={240} className="w-full mt-8 sm:mt-12 overflow-hidden px-0">
          <div className="relative w-full flex flex-col items-center">
            <AsciiHandsCanvas />
          </div>
        </AnimateIn>

        {/* Quick Platform Metrics Banner */}
        <AnimateIn delay={300}>
          <div className="max-w-4xl mx-auto px-4 mt-8 sm:mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-zinc-950/80 border border-white/[0.08] backdrop-blur-xl">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">5</div>
                <div className="text-xs text-zinc-300 mt-0.5">Active Tracks</div>
              </div>
              <div className="text-center border-l border-white/[0.06]">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">{totalPhases}+</div>
                <div className="text-xs text-zinc-300 mt-0.5">Phased Milestones</div>
              </div>
              <div className="text-center border-t sm:border-t-0 sm:border-l border-white/[0.06] pt-2 sm:pt-0">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">{allMentors.length}</div>
                <div className="text-xs text-zinc-300 mt-0.5">Student Mentors</div>
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
                Each domain features an independent curriculum, topic checklists, milestone projects, and dedicated mentors. Select a track to dive in.
              </p>
            </div>
          </AnimateIn>

          {/* 5 Tracks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {domains.map((domain, idx) => {
              const leadMentors = domain.hostsData.slice(0, 3);
              return (
                <AnimateIn key={domain.slug} delay={idx * 70}>
                  <div
                    onClick={() => onSelectDomain(domain.slug)}
                    className="group relative flex flex-col justify-between h-full rounded-2xl border border-white/[0.08] hover:border-white/30 bg-zinc-950/80 hover:bg-zinc-900/90 p-6 lift transition-all cursor-pointer shadow-lg hover:shadow-[0_0_35px_rgba(255,255,255,0.06)]"
                  >
                    <div>
                      {/* Top Header: Track # & Badge */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-white/[0.08] border border-white/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            {getDomainIcon(domain.iconName)}
                          </div>
                          <span className="text-xs font-mono text-zinc-300 font-semibold">
                            Track 0{idx + 1}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/[0.06] text-zinc-200 border border-white/10">
                          {domain.badge}
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

                      {/* Curriculum Stats Pills */}
                      <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-zinc-300">
                        <div className="flex items-center gap-1.5 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.08]">
                          <Milestone className="w-3 h-3 text-zinc-300" />
                          <span>{domain.roadmapData.length} Phases</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.08]">
                          <BookOpen className="w-3 h-3 text-zinc-300" />
                          <span>{domain.projectsData.length} Projects</span>
                        </div>
                      </div>

                      {/* Mentors Avatar Preview */}
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center -space-x-2">
                          {leadMentors.map((m) => (
                            <img
                              key={m.id}
                              src={m.avatarUrl}
                              alt={m.name}
                              className="w-7 h-7 rounded-full object-cover border-2 border-zinc-950 shrink-0"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-[11px] font-mono text-zinc-300">
                          {leadMentors.map((m) => m.name.split(' ')[0]).join(', ')}
                        </span>
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
              );
            })}
          </div>
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
                <h3 className="text-base font-bold text-white mb-2">4. 1-on-1 Student Peer Mentorship</h3>
                <p className="text-xs sm:text-[13px] text-zinc-200 leading-relaxed">
                  Every track is anchored by active student leads with transparent GitHub profiles, LinkedIn links, emails, and personal portfolios you can connect with directly.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. ALL MENTORS DIRECTORY
         ========================================================================= */}
      <section id="mentors" className="relative py-14 sm:py-20 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono tracking-widest uppercase mb-3">
                <Users className="w-3.5 h-3.5 text-zinc-300" />
                <span>The Community</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Meet the Mentors Across All 5 Tracks
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-zinc-200 leading-relaxed">
                Student engineers, open-source contributors, and track leads dedicated to peer-to-peer technical growth.
              </p>
            </div>
          </AnimateIn>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allMentors.map(({ host, domainName, domainSlug }, idx) => (
              <AnimateIn key={host.id} delay={idx * 50}>
                <div className="flex flex-col justify-between h-full rounded-2xl border border-white/[0.08] hover:border-white/20 bg-zinc-950/80 p-5 sm:p-6 lift transition-all">
                  <div>
                    {/* Header: Photo + Name + Track */}
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 p-0.5 shrink-0 shadow-md">
                        <img
                          src={host.avatarUrl}
                          alt={host.name}
                          className="w-full h-full object-cover rounded-full"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center font-mono font-bold text-xs text-zinc-400 bg-zinc-900 -z-10">
                          {host.initials}
                        </div>
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-base font-bold text-white tracking-tight truncate">
                          {host.name}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <button
                            onClick={() => onSelectDomain(domainSlug)}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] hover:bg-white/[0.12] text-zinc-200 hover:text-white border border-white/10 transition-colors cursor-pointer"
                          >
                            {domainName}
                          </button>
                          <span className="text-xs text-zinc-400 truncate">{host.role}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-200 font-medium leading-snug mb-2.5">
                      {host.headline}
                    </p>

                    <p className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed italic border-t border-white/[0.06] pt-2.5">
                      "{host.bio}"
                    </p>
                  </div>

                  {/* Social Buttons */}
                  <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {host.socials.github && (
                        <a
                          href={host.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-zinc-300 hover:text-white transition-colors"
                          title="GitHub"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {host.socials.linkedin && (
                        <a
                          href={host.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-zinc-300 hover:text-white transition-colors"
                          title="LinkedIn"
                        >
                          <LinkedinIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {host.socials.instagram && (
                        <a
                          href={host.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-zinc-300 hover:text-white transition-colors"
                          title="Instagram"
                        >
                          <InstagramIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {host.socials.email && (
                        <button
                          type="button"
                          onClick={() => handleCopyEmail(host.socials.email!)}
                          className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-zinc-300 hover:text-white transition-colors cursor-pointer"
                          title={`Copy email: ${host.socials.email}`}
                        >
                          {copiedEmail === host.socials.email ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Mail className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>

                    <button
                      onClick={() => onSelectDomain(domainSlug)}
                      className="inline-flex items-center gap-1 text-xs font-mono text-zinc-300 hover:text-white cursor-pointer transition-colors"
                    >
                      <span>View Track</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. BOTTOM CALLOUT / READY TO BUILD
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
