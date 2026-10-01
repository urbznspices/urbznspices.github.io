// Mirrors Resume/master_experience.md (the single source of truth).
// Update that file first, then copy changes here.

export interface Role {
  org: string;
  unit?: string;
  title: string;
  dates: string;
  location: string;
  summary?: string;
  bullets: string[];
  link?: { href: string; label: string };
}

export const experience: Role[] = [
  {
    org: 'UAH IDEAS Lab',
    unit: 'ChargerSat-2 · 12U CubeSat',
    title: 'Lead Systems Engineer & Communications Lead',
    dates: 'Feb 2026 – Present',
    location: 'Huntsville, AL',
    summary: 'NASA Class D technology-demonstration CubeSat, currently in Phase A.',
    bullets: [
      'Coordinate interfaces, requirements decomposition and verification-matrix closure across 8 subsystem teams, preparing for the Phase A MDR/SRR gate review.',
      'Own the end-to-end communications architecture. My link analysis closed a 50 Mbps X-band LEO downlink at +4.04 dB margin and kept a marginal 100 Mbps option (+2.03 dB) from being baselined.',
      'Found a frequency-allocation constraint that led the cislunar architecture to be re-planned around S-band, with FCC Part 5 Experimental licensing as the primary regulatory path.',
      'Authored the Universal Payload ICD (mechanical envelope, mass, power and data interfaces) and set up the controlled Phase A document set.',
    ],
    link: { href: '/projects/chargersat-2', label: 'ChargerSat-2 project' },
  },
  {
    org: 'UAH IDEAS Lab',
    unit: 'INTREPID · NASA-funded lunar CubeSat program',
    title: 'Research Assistant: Curriculum, Hardware & Test',
    dates: 'May 2026 – Present',
    location: 'Huntsville, AL',
    summary: '17-week program in which high-school teams design, build and test a lunar CubeSat payload.',
    bullets: [
      'Authored the Sensor Team and Testing Team curricula: 17 weeks of student guides, teacher notes and slide decks, generated from a reusable document pipeline.',
      'Designed the student payload PCB in KiCad (95 × 95 mm, 2-layer, RP2040 + IMU + thermistor) and took it to a fabrication-ready package in about one week.',
      'Led a deployer velocity test campaign. It showed the IMU under-reported true separation velocity by 27% and traced the cause to fixture impact.',
      'Built offline classroom tools (a deployment physics simulator and a CircuitPython IDE for Chromebooks) and provide on-site instruction at partner high schools.',
    ],
    link: { href: '/projects/intrepid-payload-pcb', label: 'INTREPID payload PCB' },
  },
  {
    org: 'UAH Space Hardware Club',
    unit: 'CanSat Competition 2024 · Team Shockwave',
    title: 'Team Lead',
    dates: 'Oct 2023 – Jun 2024',
    location: 'Huntsville, AL',
    summary: 'Took 2nd place internationally and was the top U.S. team at the 2024 AAS CanSat Competition.',
    bullets: [
      'Led a 10-person team through PDR, CDR, environmental testing, flight and post-flight review as a first-year student, managing the mechanical and electrical/software subteams.',
      'Ran documented trade studies to select sensors, actuators and the mechanical architecture against mission requirements.',
      'Designed the flight PCB through seven revisions in KiCad (Teensy 4.1, BMP390, BNO055, XBee telemetry).',
    ],
    link: { href: '/projects/cansat-shockwave', label: 'CanSat Shockwave project' },
  },
  {
    org: 'UAH College of Engineering',
    unit: 'EGR 101 · Introduction to Computing for Engineers',
    title: 'Teaching Assistant',
    dates: 'Aug 2025 – May 2026',
    location: 'Huntsville, AL',
    bullets: [
      'Supported about 20 students per section in lectures and office hours, debugging Python and MATLAB and coaching problem decomposition.',
      'Graded about 40 assignments a week with detailed written feedback.',
    ],
  },
  {
    org: 'UAH Enhanced Teaching & Learning Center',
    title: 'Student Specialist',
    dates: 'Oct 2024 – May 2025',
    location: 'Huntsville, AL',
    bullets: [
      'Diagnosed and resolved A/V failures across 130 technology-enabled classrooms, and did preventive maintenance to minimize downtime.',
    ],
  },
];

export const skills: { area: string; items: string[] }[] = [
  {
    area: 'Systems Engineering',
    items: ['NASA SE lifecycle (SP-2016-6105)', 'Requirements & VCRM', 'Interface control documents', 'Trade studies', 'Risk management (5×5)', 'Configuration management', 'Design reviews (PDR/CDR/MDR/SRR)'],
  },
  {
    area: 'RF & Communications',
    items: ['Link budgets & margin analysis', 'TT&C architecture', 'Ground-station contact planning', 'Spectrum & licensing (FCC Part 5)', 'Power & duty-cycle budgets'],
  },
  {
    area: 'Hardware & Test',
    items: ['PCB design (KiCad, 5+ boards)', 'Embedded sensors (IMU, baro, load cell)', 'Test planning & data reduction', 'Instrumentation & DAQ', 'Soldering (THT/SMD)', 'Autodesk Inventor, Onshape'],
  },
  {
    area: 'Software & Analysis',
    items: ['Python (NumPy, SciPy, matplotlib)', 'MATLAB', 'C/C++ (Arduino, Teensy)', 'CircuitPython', 'TypeScript, React, Svelte', 'Git'],
  },
];

export const education = {
  school: 'The University of Alabama in Huntsville',
  degree: 'B.S. Aerospace Engineering',
  dates: 'Aug 2023 – May 2027 (expected)',
  gpa: '3.85 / 4.00',
  honors: ["President's List (Fall 2023, Spring 2024)", "Dean's List (Fall 2024 – Fall 2025)", 'UAH Merit Scholarship'],
  coursework: [
    'Mission Design (capstone)',
    'Introduction to Astrodynamics',
    'Rocket Propulsion (graduate level)',
    'Aircraft Stability & Control (graduate level)',
    'Systems & Controls',
    'Measurement & Instrumentation',
    'Aerospace Structures',
    'Compressible Aerodynamics',
    'Engineering Economy',
  ],
  awards: [
    { title: '2nd place international, top U.S. team', detail: 'AAS CanSat Competition 2024 (Team Lead)' },
  ],
};
