import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Circle,
  Clock,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Award,
} from 'lucide-react';
import type { RoadmapPhase } from '../types';

interface PhaseCardProps {
  phase: RoadmapPhase;
  completedTopics: string[];
  onToggleTopic: (topicId: string) => void;
  defaultExpanded?: boolean;
}

export const PhaseCard: React.FC<PhaseCardProps> = ({
  phase,
  completedTopics,
  onToggleTopic,
  defaultExpanded = false,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  useEffect(() => {
    setExpanded(defaultExpanded);
  }, [defaultExpanded]);

  const totalTopics = phase.topics.length;
  const completedCount = phase.topics.filter((t) => completedTopics.includes(t.id)).length;
  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
  const isComplete = totalTopics > 0 && completedCount === totalTopics;

  return (
    <div
      id={phase.id}
      className={`rounded-2xl border transition-all duration-200 lift ${
        isComplete
          ? 'border-emerald-500/25 bg-emerald-500/[0.03]'
          : 'border-white/[0.08] bg-zinc-950/80 hover:border-white/20'
      }`}
    >
      {/* Header */}
      <div className="p-3.5 sm:p-5 flex items-start justify-between gap-3 sm:gap-4">
        <div className="flex items-start gap-3 sm:gap-4 min-w-0 flex-1">
          {/* Phase number badge */}
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs sm:text-sm shrink-0 border mt-0.5 sm:mt-0 ${
              isComplete
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                : 'bg-white/[0.06] text-white border-white/[0.1]'
            }`}
          >
            0{phase.phaseNumber}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                {phase.title}
              </h3>
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 text-[11px] text-zinc-200 bg-white/[0.06] px-2 py-0.5 rounded-md border border-white/10 font-medium">
                  <Clock className="w-3 h-3 text-zinc-300" />
                  {phase.duration}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.06] text-zinc-200 border border-white/10 font-medium">
                  {phase.difficulty}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-[13px] text-zinc-200 mt-1 leading-relaxed">
              {phase.tagline}
            </p>

            {/* Inline progress bar */}
            {completedCount > 0 && (
              <div className="flex items-center gap-2 mt-2">
                <div className="w-20 sm:w-24 h-1 rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      isComplete ? 'bg-emerald-400' : 'bg-white/60'
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-zinc-300 font-medium">
                  {completedCount}/{totalTopics}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Expand button */}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 text-xs font-medium text-zinc-200 hover:text-white transition-all cursor-pointer shrink-0 mt-0.5"
        >
          <span className="hidden sm:inline">{expanded ? 'Collapse' : 'Expand'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5 text-zinc-300" /> : <ChevronDown className="w-3.5 h-3.5 text-zinc-300" />}
        </button>
      </div>

      {/* Expanded Topics */}
      {expanded && (
        <div className="px-3.5 sm:px-5 pb-4 sm:pb-5 pt-1 border-t border-white/[0.04] space-y-3 sm:space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 pt-3">
            {phase.topics.map((topic) => {
              const isTopicDone = completedTopics.includes(topic.id);
              return (
                <div
                  key={topic.id}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
                    isTopicDone
                      ? 'bg-emerald-500/[0.03] border-emerald-500/20'
                      : 'bg-zinc-900/60 border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => onToggleTopic(topic.id)}
                      className="mt-0.5 transition-transform hover:scale-110 active:scale-95 cursor-pointer shrink-0"
                      aria-label={isTopicDone ? `Mark ${topic.name} as incomplete` : `Mark ${topic.name} as complete`}
                    >
                      {isTopicDone ? (
                        <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald-400" />
                      ) : (
                        <Circle className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-zinc-500 hover:text-zinc-300" />
                      )}
                    </button>

                    <div className="flex-1 min-w-0">
                      <h4
                        className={`text-xs sm:text-sm font-bold leading-snug ${
                          isTopicDone ? 'text-zinc-500 line-through' : 'text-white'
                        }`}
                      >
                        {topic.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-zinc-200 mt-1.5 leading-relaxed">
                        {topic.summary}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1 mt-2.5">
                        {topic.keySkills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.08] text-zinc-100 border border-white/[0.1] font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Recommended resource */}
                      {topic.recommendedResources.length > 0 && (
                        <a
                          href={topic.recommendedResources[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-200 hover:text-white transition-colors font-medium"
                        >
                          <span className="truncate max-w-[220px]">
                            {topic.recommendedResources[0].title}
                          </span>
                          <ExternalLink className="w-3 h-3 text-zinc-300" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Milestone */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/80 border border-white/[0.1] flex items-center gap-2.5 sm:gap-3 text-xs sm:text-[13px]">
            <Award className="w-4 h-4 text-zinc-200 shrink-0" />
            <div className="min-w-0">
              <span className="text-zinc-300 text-xs font-mono">Milestone Project: </span>
              <span className="font-bold text-white text-xs sm:text-[13px]">
                {phase.milestoneProject.title}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
