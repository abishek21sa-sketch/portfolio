export type ExperienceKind = "Teaching" | "Industry" | "Operations";

export interface ExperienceMetric {
  value: string;
  label: string;
  note?: string;
}

export interface ExperienceRecord {
  slug: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  kind: ExperienceKind;
  headline: string;
  summary: string;
  focus: string[];
  contributions: string[];
  methods: string[];
  metrics?: ExperienceMetric[];
  confidentiality?: string;
  prominence: "primary" | "secondary";
}

export const experiences: ExperienceRecord[] = [
  {
    slug: "uiuc-ie360-ta",
    organization: "University of Illinois Urbana-Champaign",
    role: "Teaching Assistant — IE 360: Facilities Planning and Design",
    period: "Fall 2026",
    location: "Urbana, Illinois",
    kind: "Teaching",
    headline: "Helping students move from facilities concepts to computational decision models.",
    summary:
      "Supporting IE 360 instruction in facilities planning and design, including lab delivery, grading, and student support as the course moves toward Python- and Gurobi-based computational work.",
    focus: [
      "Facilities planning & design",
      "Optimization-oriented computational labs",
      "Technical communication",
      "Student support & grading",
    ],
    contributions: [
      "Conduct lab sessions and support students as they translate facilities-planning concepts into computational workflows.",
      "Grade course work and reinforce the reasoning behind models, assumptions, and solution approaches.",
      "Support the course transition toward Python and Gurobi for optimization-oriented lab work.",
    ],
    methods: ["Python", "Gurobi", "Facilities Planning", "Optimization", "Teaching"],
    prominence: "primary",
  },
  {
    slug: "vdart-recruitment-analytics",
    organization: "VDart",
    role: "Recruitment Analytics / Gen AI Intern",
    period: "Summer 2026 — Present",
    location: "Remote",
    kind: "Industry",
    headline: "Turning semi-structured recruiting information into validated, queryable operational data.",
    summary:
      "Building data and backend components for recruitment-intelligence workflows that transform semi-structured email and recruiter information into structured records, technology classifications, and operational analytics.",
    focus: [
      "Information extraction",
      "Schema validation",
      "Recruiter analytics",
      "Backend systems",
    ],
    contributions: [
      "Designed ingestion logic that distinguishes usable recruiting records from replies, forwards, duplicates, and other non-target messages.",
      "Built structured storage and API components for recruiter- and technology-level analysis.",
      "Developed technology classification and normalized data structures to make previously messy operational information easier to query and analyze.",
    ],
    methods: ["Python", "FastAPI", "SQLite / MySQL", "Data Validation", "Information Extraction"],
    confidentiality:
      "Public portfolio material is limited to sanitized architecture, workflow, and implementation details; private company data and messages are not exposed.",
    prominence: "primary",
  },
  {
    slug: "tafe-engineering-intern",
    organization: "Tractor and Farm Equipment Ltd. (TAFE)",
    role: "Engineering Intern",
    period: "Jun — Jul 2023",
    location: "Chennai, India",
    kind: "Industry",
    headline: "Reframing a casting constraint as a throughput, material-use, and process-design problem.",
    summary:
      "Analyzed casting operations and redesigned the mould/pattern approach around furnace capacity, pouring-time, yield, and production constraints to increase output per mould while reducing preparation burden and material intensity.",
    focus: [
      "Casting operations",
      "Throughput improvement",
      "Yield & material utilization",
      "Process redesign",
    ],
    contributions: [
      "Mapped the operational constraints governing furnace loading, pouring time, mould preparation, and casting output.",
      "Compared alternative mould configurations and translated production constraints into a redesigned higher-output pattern approach.",
      "Quantified the effect of the redesign on components per mould, preparation requirements, and sand-to-metal usage.",
    ],
    methods: ["Industrial Engineering", "Process Analysis", "Capacity", "Yield", "Manufacturing"],
    metrics: [
      { value: "6 → 16", label: "components per mould", note: "redesigned casting configuration" },
      { value: "68.75 h → 23.4 h", label: "mould-preparation requirement", note: "for comparable production demand" },
      { value: "15.48 → 5.81", label: "sand-to-metal ratio", note: "material-use improvement" },
    ],
    prominence: "primary",
  },
  {
    slug: "uiuc-dining",
    organization: "University of Illinois Dining",
    role: "Student Worker",
    period: "Sep 2025 — Present",
    location: "Urbana-Champaign, Illinois",
    kind: "Operations",
    headline: "Frontline operating experience inside a high-volume university service system.",
    summary:
      "Part-time campus work supporting day-to-day dining operations alongside graduate study and technical appointments.",
    focus: ["Service operations", "Team coordination", "Operational reliability"],
    contributions: [
      "Support recurring frontline operating tasks in a time-sensitive service environment.",
      "Coordinate with team members during changing demand and operational conditions.",
    ],
    methods: ["Operations", "Teamwork", "Service Systems"],
    prominence: "secondary",
  },
];
