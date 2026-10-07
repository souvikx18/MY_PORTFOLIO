import { PersonalProfile } from '../types/portfolio';

/**
 * Verified personal information for Souvik Konar.
 * Operating Directive #07: Sourced directly from verified resume and user directive.
 * Zero fabricated data.
 */
export const profileData: PersonalProfile = {
  name: 'Souvik Konar',
  shortName: 'Souvik',
  initials: 'S.K.',
  eyebrow: 'Computer Science & Engineering',
  headline: [
    'I build software that',
    'solves real problems.'
  ],
  positioningStatement: 
    'Full-stack developer focused on building reliable web applications, clean backend architectures, and practical AI tools.',
  bio: 
    '3rd-year B.Tech Computer Science student at Brainware University with a strong interest in software development and systems engineering. Hands-on experience in cybersecurity through a NASSCOM internship, with practical focus on Data Structures & Algorithms, full-stack web architectures, and threat-aware software design.',
  locationCity: 'Kolkata',
  locationCountry: 'India',
  education: {
    degree: 'B.Tech, Computer Science & Engineering',
    institution: 'Brainware University',
    timeline: '2024 – 2028 (3rd Year)',
    cgpaCurrent: '8.64 (2nd Yr)',
    cgpaFirstYear: '7.91 (1st Yr)',
    higherSecondary: {
      board: 'WBCHSE Board',
      year: '2024',
      percentage: '68.4%'
    },
    secondary: {
      board: 'WBBSE Board',
      year: '2022',
      percentage: '53.43%'
    }
  },
  internship: {
    organization: 'NASSCOM',
    role: 'Cybersecurity & CyberOOP Intern',
    description: 'Completed a structured internship covering core cybersecurity concepts and secure object-oriented programming (CyberOOP) practices.',
    keyTakeaways: [
      'Threat-aware software design and defensive programming practices',
      'Hands-on exposure to cybersecurity fundamentals and vulnerability mitigation',
      'Principles of secure object-oriented architecture in practical environments'
    ]
  },
  contact: {
    email: 'skonar566@gmail.com',
    phone: '+91 9907488093',
    telegramUsername: '@asyncX18',
    telegramUrl: 'https://t.me/asyncX18',
    linkedinUrl: 'https://www.linkedin.com/in/souvik-konarx18',
    githubUrl: 'https://github.com/souvikx18',
    resumePath: '/resume.pdf'
  }
};
