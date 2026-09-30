import React, { useState } from 'react';
import type { ProjectIdea, Level } from '../types';
import { ExternalLink, Database, Check, ChevronDown } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

interface ProjectsSectionProps {
  projects: ProjectIdea[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [difficultyFilter, setDifficultyFilter] = useState<'All' | Level>('All');
  const [expandedProjectIds, setExpandedProjectIds] = useState<Set<string>>(new Set());

  const toggleExpandProject = (id: string) => {
    setExpandedProjectIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredProjects = projects.filter((proj) => {
    if (difficultyFilter === 'All') return true;
    return proj.difficulty === difficultyFilter;
  });

  return (
    <section id="projects" className="relative py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimateIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-300 text-xs font-medium mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                <span>Portfolio</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Capstone Projects
              </h2>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed">
                Build real projects at each milestone to solidify your skills and grow your portfolio.
              </p>
            </div>

            <div className="flex items-center p-0.5 rounded-lg bg-zinc-900/80 border border-white/[0.08] text-xs self-start sm:self-auto overflow-x-auto max-w-full">
              {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setDifficultyFilter(lvl)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md transition-all cursor-pointer whitespace-nowrap text-xs ${
                    difficultyFilter === lvl
                      ? 'bg-white/[0.12] text-white font-semibold border border-white/20'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, idx) => {
            const isExpanded = expandedProjectIds.has(project.id);
            const isLong = project.description.length > 90;
            const displayedOutcomes = isExpanded
              ? project.learningOutcomes
              : project.learningOutcomes.slice(0, 2);

            return (
              <AnimateIn key={project.id} delay={idx * 60}>
                <div className="flex flex-col justify-between h-full rounded-2xl border border-white/[0.08] bg-zinc-950/80 hover:bg-zinc-900/80 hover:border-white/20 p-5 sm:p-6 lift transition-all">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <span className="text-xs font-mono text-zinc-400">
                        {project.phase.split(':')[0]}
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.05] text-zinc-200 border border-white/[0.08]">
                        {project.difficulty}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-zinc-100 mb-2">{project.title}</h3>
                    <p className={`text-[13px] text-zinc-300 leading-relaxed transition-all ${isExpanded ? '' : 'line-clamp-2'}`}>
                      {project.description}
                    </p>
                    {isLong && (
                      <button
                        onClick={() => toggleExpandProject(project.id)}
                        className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-zinc-100 mt-2 transition-colors cursor-pointer"
                      >
                        <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}

                    {project.datasetName && (
                      <div className="mt-3.5 p-2.5 rounded-lg bg-zinc-900/70 border border-white/[0.08] text-xs text-zinc-300 flex items-center justify-between font-mono">
                        <div className="flex items-center gap-1.5 truncate">
                          <Database className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                          <span className="truncate">{project.datasetName}</span>
                        </div>
                        {project.datasetUrl && (
                          <a
                            href={project.datasetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white ml-2 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    )}

                    <div className="mt-3.5 space-y-2">
                      {displayedOutcomes.map((outcome, oIdx) => (
                        <div key={oIdx} className="flex items-start gap-2.5 text-[13px] text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{outcome}</span>
                        </div>
                      ))}
                      {!isExpanded && project.learningOutcomes.length > 2 && (
                        <button
                          onClick={() => toggleExpandProject(project.id)}
                          className="text-xs font-mono text-zinc-400 hover:text-zinc-100 pl-6 transition-colors cursor-pointer block mt-1"
                        >
                          +{project.learningOutcomes.length - 2} more outcome{project.learningOutcomes.length - 2 > 1 ? 's' : ''} (expand)
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.05] text-zinc-300 border border-white/[0.08] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
