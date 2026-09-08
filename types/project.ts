export type Origin =
  | "Research"
  | "Independent Study"
  | "Independent Project"
  | "Industry"
  | "UIUC Course"
  | "IIT Madras Course"
  | "Undergraduate Engineering";

export type EngineeringStatus =
  | "Validated"
  | "Implemented"
  | "Prototype"
  | "In Development"
  | "Planning / Specification";

export type AcademicStatus =
  | "Published"
  | "Active Research"
  | "Analysis in Progress"
  | "Active Study"
  | "Completed Study"
  | "Completed";

export type IndustryStatus = "Active" | "Completed" | "Implemented";

export type ProjectStatus = EngineeringStatus | AcademicStatus | IndustryStatus;

export type EvidenceConfidence = "Verified" | "Reported" | "Target";

export interface ProjectEvidence {
  value: string;
  label: string;
  context?: string;
  confidence: EvidenceConfidence;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export type ProjectGithubLink = ProjectLink;

export interface ProjectScreenshot {
  src: string;
  alt: string;
  label: string;
  caption: string;
}

export interface ProjectRecord {
  title: string;
  shortTitle: string;
  slug: string;
  githubLinks?: ProjectGithubLink[];
  liveLinks?: ProjectLink[];
  screenshot?: ProjectScreenshot;
  origin: Origin;
  institutionOrCompany?: string;
  period?: string;
  status: ProjectStatus;
  primaryDomain: string;
  secondaryDomains: string[];
  problem: string;
  decision?: string;
  whyItMatters?: string;
  methods: string[];
  ieConcepts: string[];
  mathMethods: string[];
  techStack: string[];
  aiData: string[];
  dataProfile?: {
    type: string;
    source?: string;
    scale?: string;
  };
  strongestEvidence?: ProjectEvidence;
  currentState: string;
  homepageFeatured?: boolean;
  currentWork?: boolean;
}
