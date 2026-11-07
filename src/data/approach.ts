import { EngineeringPrinciple } from '../types/portfolio';

/**
 * Verified Engineering Philosophy for Souvik Konar.
 * Core Philosophy: "I care about what happens beyond the code"
 */
export interface ApproachPrinciple {
  readonly stepNumber: string;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly iconType: 'target' | 'layers' | 'shield' | 'chart';
}

export const approachPrinciples: readonly ApproachPrinciple[] = [
  {
    stepNumber: '01',
    category: 'PROBLEM',
    title: 'Understand before building',
    description: 'Identify the real problem, user needs and constraints before choosing a solution.',
    iconType: 'target'
  },
  {
    stepNumber: '02',
    category: 'ARCHITECTURE',
    title: 'Design for clarity',
    description: 'Choose simple, maintainable structures with clear responsibilities and data flow.',
    iconType: 'layers'
  },
  {
    stepNumber: '03',
    category: 'RELIABILITY',
    title: 'Build for real conditions',
    description: 'Consider validation, failure cases, security and performance—not just the happy path.',
    iconType: 'shield'
  },
  {
    stepNumber: '04',
    category: 'IMPROVEMENT',
    title: 'Measure and refine',
    description: 'Test assumptions, learn from failures and improve based on evidence.',
    iconType: 'chart'
  }
];

export const approachMindset = {
  eyebrow: 'ENGINEERING PRINCIPLES',
  heading: 'I care about what happens beyond the code',
  subtitle: 'HOW I APPROACH SOFTWARE ENGINEERING',
  panelLabel: 'ENGINEERING MINDSET',
  headline: 'Simple solutions.\nThoughtful decisions.',
  body: "I don't choose technologies just because they are popular. I evaluate the problem, constraints, trade-offs and long-term maintainability before making technical decisions.",
  priorityLabel: 'PRIORITY',
  priorityValue: 'Clarity over complexity'
} as const;

export const engineeringApproachData: readonly EngineeringPrinciple[] = [
  {
    stepNumber: '01',
    name: 'Problem',
    coreQuestion: 'Understand before building',
    explanation: 'Identify the real problem, user needs and constraints before choosing a solution.'
  },
  {
    stepNumber: '02',
    name: 'Architecture',
    coreQuestion: 'Design for clarity',
    explanation: 'Choose simple, maintainable structures with clear responsibilities and data flow.'
  },
  {
    stepNumber: '03',
    name: 'Reliability',
    coreQuestion: 'Build for real conditions',
    explanation: 'Consider validation, failure cases, security and performance—not just the happy path.'
  },
  {
    stepNumber: '04',
    name: 'Improvement',
    coreQuestion: 'Measure and refine',
    explanation: 'Test assumptions, learn from failures and improve based on evidence.'
  }
];
