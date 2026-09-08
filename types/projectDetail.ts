import type { ProjectEvidence } from "./project";

export interface DetailStep {
  title: string;
  description: string;
}

export interface ProjectDetailContent {
  intro?: string;
  context?: string;
  decisionQuestion?: string;
  approach?: DetailStep[];
  architecture?: string[];
  evidence?: ProjectEvidence[];
  validation?: string[];
  contribution?: string[];
  limitations?: string[];
  nextUpdates?: string[];
  publication?: {
    venue?: string;
    year?: string;
    doi?: string;
  };
}
