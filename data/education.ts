export interface EducationRecord {
  institution: string;
  degree: string;
  period: string;
  location?: string;
  gpa?: string;
  stage: string;
  story: string;
  coursework?: string[];
  notes?: string[];
}

export const education: EducationRecord[] = [
  {
    institution: "University of Illinois Urbana-Champaign",
    degree: "M.S. Industrial Engineering",
    period: "Aug 2025 — May 2027",
    location: "Urbana-Champaign, Illinois",
    gpa: "3.60 / 4.00",
    stage: "Operations & Decisions",
    story: "Graduate study centered on optimization, analytics, manufacturing systems, and the mathematical structure of operational decisions.",
    coursework: [
      "Integer Programming",
      "Algorithms for Data Analytics",
      "Optimization of Large Systems",
      "Operations Research for Manufacturing Systems",
      "Data Science for Manufacturing Quality Control",
    ],
  },
  {
    institution: "College of Engineering Guindy, Anna University",
    degree: "B.E. Mechanical Engineering · Minor in Cybersecurity",
    period: "Nov 2021 — Jul 2025",
    location: "Chennai, India",
    gpa: "8.53 / 10",
    stage: "Physical Systems",
    story: "Mechanical engineering established the physical-system foundation: manufacturing, machine tools, dynamics, design, metrology, and experimental engineering.",
    notes: ["Undergraduate research resulted in a peer-reviewed Production Engineering publication."],
  },
  {
    institution: "Indian Institute of Technology Madras",
    degree: "B.S. Programming and Data Science — in progress · Diploma in Data Science completed Jul 2024",
    period: "Sep 2021 — Dec 2026",
    stage: "Data & Computation",
    story: "Parallel data-science study added programming, databases, machine learning, application systems, and quantitative analysis to the mechanical-engineering foundation.",
    notes: ["Course projects include Ship Operations Cost & Resource Optimization, Vehicle Parking Management, and Quiz Management."],
  },
];

export const completedCredentials = ["Six Sigma White Belt"];
