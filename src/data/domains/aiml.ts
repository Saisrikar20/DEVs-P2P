import type { DomainConfig } from '../../types';
import { roadmapData } from '../roadmapData';
import { eventHostsData } from '../hostsData';
import { resourcesData } from '../resourcesData';
import { projectsData } from '../projectsData';

export const aimlDomain: DomainConfig = {
  id: 'aiml',
  slug: 'aiml',
  name: 'AI & Machine Learning',
  shortName: 'AI/ML',
  badge: 'Core Track',
  iconName: 'Cpu',
  heroHeadline: 'When intelligence reaches out to instinct, the future takes shape',
  heroTagline: 'an unlikely alliance · where human intuition and algorithmic precision move as one',
  heroCtaText: 'Explore AI/ML Roadmap',
  roadmapData,
  hostsData: eventHostsData,
  resourcesData,
  projectsData,
  prerequisites: {
    overview:
      'Recommended mathematical intuition and programming baseline before tackling neural network architectures, autograd engines, and local inference.',
    items: [
      {
        title: 'Python Programming Foundations',
        description:
          'Familiarity with variables, control flow, functions, lists, dictionaries, list comprehensions, and basic object-oriented programming concepts.',
        level: 'Essential',
        skills: ['Python Syntax', 'Functions & Loops', 'Data Structures', 'Basic OOP'],
      },
      {
        title: 'Mathematical Intuition',
        description:
          'High-school algebra, vectors and matrix multiplication, understanding derivatives (slope/gradients), and introductory probability concepts.',
        level: 'Essential',
        skills: ['Linear Algebra Basics', 'Matrix Operations', 'Calculus (Derivatives)', 'Basic Probability'],
      },
      {
        title: 'Terminal & Environment Hygiene',
        description:
          'Navigating terminal directories, running Python scripts via CLI, creating virtual environments, and cloning Git repositories.',
        level: 'Recommended',
        skills: ['CLI Navigation', 'Virtual Environments', 'Pip Packages', 'Git Basics'],
      },
    ],
  },
};
