import { EngineeringPrinciple } from '../types/portfolio';

/**
 * Verified Engineering Philosophy for Souvik Konar.
 * Sourced from Master Specification Section 15:
 * "I don't start with the framework. I start with the constraint."
 */
export const engineeringApproachData: readonly EngineeringPrinciple[] = [
  {
    stepNumber: '01',
    name: 'Understand',
    coreQuestion: 'What actually needs solving?',
    explanation: 
      'Isolate the core operational problem before selecting tools. Avoid premature framework adoption and clarify real constraints, inputs, and failure thresholds.'
  },
  {
    stepNumber: '02',
    name: 'Model',
    coreQuestion: 'What are the system boundaries?',
    explanation: 
      'Define data contracts, state machines, and interface boundaries. Establish where security risks, network failures, or data corruption can occur.'
  },
  {
    stepNumber: '03',
    name: 'Build',
    coreQuestion: 'What is the smallest reliable implementation?',
    explanation: 
      'Implement the minimal coherent system that completely satisfies the requirements. Favor native browser capabilities, strict typing, and defensive design over heavy dependencies.'
  },
  {
    stepNumber: '04',
    name: 'Test',
    coreQuestion: 'Where does it fail?',
    explanation: 
      'Stress the implementation against real constraints: slow networks, throttled CPUs, malformed payloads, keyboard-only navigation, and unexpected user behaviors.'
  },
  {
    stepNumber: '05',
    name: 'Iterate',
    coreQuestion: 'What should change after observing reality?',
    explanation: 
      'Refactor based on empirical evidence, profiling metrics, and observed failure modes rather than subjective assumptions or aesthetic trends.'
  }
];
