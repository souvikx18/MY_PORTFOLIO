/**
 * Strict data contracts for Souvik Konar's Engineering Portfolio.
 * Operating Directive #07: No fabricated details, metrics, or credentials.
 */

export type ProjectStatus = 'HOSTED' | 'IN DEVELOPMENT' | 'NOT YET DEPLOYED';

export type ProjectCategory = 
  | 'AI & Systems'
  | 'Full-Stack Workflow'
  | 'Interactive Engine'
  | 'Predictive ML';

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly status: ProjectStatus;
  readonly category: ProjectCategory;
  readonly featured: boolean;
  readonly githubUrl: string;
  readonly liveUrl?: string;
  readonly tags: readonly string[];
  readonly role: string;
  readonly architectureOverview: string;
  readonly engineeringFocus: readonly string[];
  readonly isPendingDetails?: boolean;
}

export interface EducationRecord {
  readonly degree: string;
  readonly institution: string;
  readonly timeline: string;
  readonly cgpaCurrent: string;
  readonly cgpaFirstYear: string;
  readonly higherSecondary: { readonly board: string; readonly year: string; readonly percentage: string };
  readonly secondary: { readonly board: string; readonly year: string; readonly percentage: string };
}

export interface InternshipRecord {
  readonly organization: string;
  readonly role: string;
  readonly description: string;
  readonly keyTakeaways: readonly string[];
}

export interface ContactEndpoints {
  readonly email: string;
  readonly phone: string;
  readonly telegramUsername: string;
  readonly telegramUrl: string;
  readonly linkedinUrl: string;
  readonly githubUrl: string;
  readonly resumePath: string;
}

export interface PersonalProfile {
  readonly name: string;
  readonly shortName: string;
  readonly initials: string;
  readonly eyebrow: string;
  readonly headline: readonly string[];
  readonly positioningStatement: string;
  readonly bio: string;
  readonly locationCity: string;
  readonly locationCountry: string;
  readonly education: EducationRecord;
  readonly internship: InternshipRecord;
  readonly contact: ContactEndpoints;
}

export interface SkillCategory {
  readonly title: string;
  readonly description: string;
  readonly skills: readonly string[];
}

export interface EngineeringPrinciple {
  readonly stepNumber: string;
  readonly name: string;
  readonly coreQuestion: string;
  readonly explanation: string;
}
