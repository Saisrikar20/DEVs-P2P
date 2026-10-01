import { useState, useEffect, useCallback } from 'react';
import type { DomainConfig } from '../types';
import {
  domainsRegistry,
  getDomainBySlug,
  isValidDomainSlug,
} from '../data/domains';

function parseSlugFromLocation(): string {
  if (typeof window === 'undefined') return '';

  // 1. Try parsing from hash (e.g. #/frontend, #frontend)
  const hash = window.location.hash.replace(/^#\/?/, '').split('/')[0]?.toLowerCase().trim();
  if (hash === '' || hash === 'home' || hash === 'landing') {
    return '';
  }
  if (hash && isValidDomainSlug(hash)) {
    return hash;
  }

  // 2. Try parsing from pathname (e.g. /frontend, /aiml)
  const pathname = window.location.pathname.replace(/^\//, '').split('/')[0]?.toLowerCase().trim();
  if (pathname === '' || pathname === 'home' || pathname === 'landing') {
    // If hash specified a domain (e.g. /#frontend), respect hash
    if (hash && isValidDomainSlug(hash)) return hash;
    return '';
  }
  if (pathname && isValidDomainSlug(pathname)) {
    return pathname;
  }

  return '';
}

export function useDomainRouter() {
  const [currentSlug, setCurrentSlug] = useState<string>(() => parseSlugFromLocation());

  const isLandingPage = currentSlug === '';
  const currentDomain: DomainConfig = isLandingPage ? domainsRegistry[0] : getDomainBySlug(currentSlug);

  // Sync document title with current domain or landing page
  useEffect(() => {
    if (isLandingPage) {
      document.title = 'DEVs P2P · Peer-to-Peer Engineering Platform | All 5 Domains';
    } else {
      document.title = `DEVs P2P · ${currentDomain.name} | Complete Roadmap & Mentors`;
    }
  }, [currentDomain, isLandingPage]);

  // Navigate to a specific domain slug or back to landing page
  const setDomain = useCallback((newSlug: string) => {
    const slug = (newSlug || '').toLowerCase().trim();
    if (slug === '' || slug === 'home' || slug === 'landing') {
      setCurrentSlug('');
      if (typeof window !== 'undefined') {
        try {
          if (window.location.pathname !== '/') {
            window.history.pushState(null, '', '/');
          }
        } catch {
          window.location.hash = '#/';
        }
      }
      return;
    }

    if (!isValidDomainSlug(slug)) return;

    setCurrentSlug(slug);

    if (typeof window !== 'undefined') {
      try {
        const targetPath = `/${slug}`;
        if (window.location.pathname !== targetPath) {
          window.history.pushState({ domain: slug }, '', targetPath);
        }
      } catch {
        // Fallback to hash if pushState fails in certain restricted iframe environments
        window.location.hash = `#/${slug}`;
      }
    }
  }, []);

  // Listen to popstate and hashchange events for browser back/forward buttons
  useEffect(() => {
    const handleLocationChange = () => {
      const detectedSlug = parseSlugFromLocation();
      if (detectedSlug !== currentSlug) {
        setCurrentSlug(detectedSlug);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, [currentSlug]);

  return {
    currentDomain,
    currentSlug,
    setDomain,
    domains: domainsRegistry,
    isLandingPage,
  };
}
