import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Check,
  Cpu,
  Layout,
  Server,
  Cloud,
  Layers,
  Home,
} from 'lucide-react';
import type { DomainConfig } from '../types';

interface NavbarProps {
  completedCount: number;
  totalTopics: number;
  currentSlug: string;
  currentDomain: DomainConfig;
  domains: DomainConfig[];
  onSelectDomain: (slug: string) => void;
  onOpenContribute: () => void;
  onOpenCommandPalette?: () => void;
  isLandingPage?: boolean;
}

const getDomainIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case 'cpu':
      return <Cpu className="w-3.5 h-3.5 text-zinc-300" />;
    case 'layout':
      return <Layout className="w-3.5 h-3.5 text-zinc-300" />;
    case 'server':
      return <Server className="w-3.5 h-3.5 text-zinc-300" />;
    case 'cloud':
      return <Cloud className="w-3.5 h-3.5 text-zinc-300" />;
    default:
      return <Layers className="w-3.5 h-3.5 text-zinc-300" />;
  }
};

export const Navbar: React.FC<NavbarProps> = ({
  completedCount,
  totalTopics,
  currentSlug,
  currentDomain,
  domains,
  onSelectDomain,
  onOpenCommandPalette,
  isLandingPage = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [domainDropdownOpen, setDomainDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const links = isLandingPage
    ? [
        { href: '#tracks', label: 'All 5 Tracks' },
        { href: '#methodology', label: 'Methodology' },
      ]
    : [
        { href: '#roadmap', label: 'Roadmap' },
        { href: '#resources', label: 'Resources' },
        { href: '#projects', label: 'Projects' },
        { href: '#hosts', label: 'Mentors' },
      ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDomainDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDomainChange = (slug: string) => {
    onSelectDomain(slug);
    setDomainDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#000000]/85 backdrop-blur-2xl border-b border-white/[0.08] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Dynamic Track Selector */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => handleDomainChange('')}
              className="flex items-center gap-2 group cursor-pointer focus:outline-none"
              title="DEVs P2P Home"
            >
              <img
                src="/devs-logo.png"
                alt="DEVS"
                className="h-6 sm:h-7 w-auto object-contain transition-opacity group-hover:opacity-80"
              />
            </button>

            <div className="h-4 w-px bg-white/10 hidden sm:block" />

            {/* Back to Home quick pill when inside a specific track */}
            {!isLandingPage && (
              <button
                type="button"
                onClick={() => handleDomainChange('')}
                className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer"
                title="Back to Landing Page"
              >
                <Home className="w-3 h-3 text-zinc-400" />
                <span>All Tracks</span>
              </button>
            )}

            {/* Dynamic Domain Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDomainDropdownOpen(!domainDropdownOpen)}
                className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-xs font-mono text-zinc-200 transition-all cursor-pointer group"
                title="Select Technical Track"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white tracking-wide text-xs">
                  {isLandingPage ? 'All Tracks (5)' : currentDomain.shortName}
                </span>
                <ChevronDown
                  className={`w-3 h-3 text-zinc-400 group-hover:text-white transition-transform ${
                    domainDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {domainDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-zinc-950/95 border border-white/15 shadow-2xl backdrop-blur-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-zinc-400 border-b border-white/[0.06] mb-1 font-semibold">
                    Select Technical Track
                  </div>
                  <div className="space-y-1">
                    {/* Home / All Tracks option */}
                    <button
                      onClick={() => handleDomainChange('')}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-xl text-left text-xs font-mono transition-all cursor-pointer ${
                        isLandingPage
                          ? 'bg-white text-black font-semibold shadow-md'
                          : 'text-zinc-300 hover:text-white hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={isLandingPage ? 'text-black' : 'text-zinc-400'}>
                          <Home className="w-3.5 h-3.5" />
                        </span>
                        <div>
                          <div className="font-medium tracking-tight">Overview · All 5 Tracks</div>
                          <div
                            className={`text-[10px] ${
                              isLandingPage ? 'text-zinc-700' : 'text-zinc-500'
                            }`}
                          >
                            /
                          </div>
                        </div>
                      </div>
                      {isLandingPage ? (
                        <Check className="w-3.5 h-3.5 text-black shrink-0" />
                      ) : (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                          Home
                        </span>
                      )}
                    </button>

                    <div className="h-px bg-white/[0.06] my-1" />

                    {/* Domain list */}
                    {domains.map((d) => {
                      const isActive = !isLandingPage && d.slug === currentSlug;
                      return (
                        <button
                          key={d.slug}
                          onClick={() => handleDomainChange(d.slug)}
                          className={`flex items-center justify-between w-full px-3 py-2 rounded-xl text-left text-xs font-mono transition-all cursor-pointer ${
                            isActive
                              ? 'bg-white text-black font-semibold shadow-md'
                              : 'text-zinc-300 hover:text-white hover:bg-white/[0.05]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className={isActive ? 'text-black' : 'text-zinc-400'}>
                              {getDomainIcon(d.iconName)}
                            </span>
                            <div>
                              <div className="font-medium tracking-tight">{d.name}</div>
                              <div
                                className={`text-[10px] ${
                                  isActive ? 'text-zinc-700' : 'text-zinc-500'
                                }`}
                              >
                                /{d.slug}
                              </div>
                            </div>
                          </div>
                          {isActive && (
                            <Check className="w-3.5 h-3.5 text-black shrink-0" />
                          )}
                        </button>
                      );
                    })}
                    <div className="mt-2 pt-2 border-t border-white/[0.06] px-2.5 py-1 text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                      <span>Video editing will be added soon</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Floating Pill Center Menu */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-white/15 backdrop-blur-xl shadow-inner">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-1 rounded-full text-xs font-semibold text-zinc-200 hover:text-white hover:bg-white/[0.1] transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs text-zinc-200 hover:text-white transition-all cursor-pointer font-mono"
                title="Search tracks, roadmap & mentors (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-zinc-300" />
                <kbd className="px-1.5 py-0.2 rounded bg-zinc-800 text-[10px] font-mono text-zinc-200 border border-zinc-600">
                  ⌘K
                </kbd>
              </button>
            )}

            {!isLandingPage && progressPercent > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-[11px] font-mono text-zinc-100 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{progressPercent}%</span>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="p-2 text-zinc-300 hover:text-white cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-black/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-4">
          <div className="pt-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-300 mb-2 font-semibold">
              Select Track
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => handleDomainChange('')}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-left text-xs font-mono transition-all ${
                  isLandingPage
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'bg-white/[0.05] text-zinc-200 border border-white/10 hover:text-white'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span className="truncate">All Tracks</span>
              </button>
              {domains.map((d) => {
                const isActive = !isLandingPage && d.slug === currentSlug;
                return (
                  <button
                    key={d.slug}
                    onClick={() => handleDomainChange(d.slug)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-left text-xs font-mono transition-all ${
                      isActive
                        ? 'bg-white text-black font-semibold shadow-md'
                        : 'bg-white/[0.05] text-zinc-200 border border-white/10 hover:text-white'
                    }`}
                  >
                    <span>{getDomainIcon(d.iconName)}</span>
                    <span className="truncate">{d.shortName}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-2 text-[11px] font-mono text-zinc-400 flex items-center gap-1.5 px-1">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
              <span>Video editing will be added soon</span>
            </div>
          </div>

          <div className="h-px bg-white/15" />

          <div className="space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-100 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
