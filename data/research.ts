export interface ResearchRecord {
  slug: string;
  title: string;
  type: "Active Research" | "Published Research" | "Independent Study";
  domain: string;
  period: string;
  question: string;
  summary: string;
  methods: string[];
  evidence: { value: string; label: string }[];
  currentState: string;
  projectHref: string;
  externalHref?: string;
}

export const researchRecords: ResearchRecord[] = [
  {
    slug: "airline-operations-intelligence",
    title: "Airline Operations Intelligence",
    type: "Active Research",
    domain: "Transportation & Mobility",
    period: "2026 — Present",
    question: "How do delay, aircraft rotation, network structure, and recovery behavior interact across large-scale U.S. airline operations?",
    summary: "A longitudinal operational research effort built on public BTS/DOT data to study disruption propagation, recovery, carrier behavior, aircraft rotations, and network-level operating patterns.",
    methods: ["Operational Analytics", "Network Analysis", "Delay Propagation", "Data Engineering", "AI-assisted Querying"],
    evidence: [
      { value: "~59M", label: "flight records in the longitudinal research corpus" },
      { value: "101", label: "months represented in the current longitudinal scope" },
      { value: "119", label: "meaningful BTS source fields retained in the rebuild architecture" },
    ],
    currentState: "Active research and platform development. Current work continues to deepen operational analysis, recovery modeling, and deployable research tooling.",
    projectHref: "/projects/airline-operations-intelligence/",
  },
  {
    slug: "dual-mode-four-jaw-lathe-chuck",
    title: "Design and Evaluation of a Novel Dual-Mode Four-Jaw Lathe Chuck Using Analytical Methods and FEA-Based Simulations",
    type: "Published Research",
    domain: "Mechanical & Manufacturing Systems",
    period: "Published 2026",
    question: "Can a four-jaw chuck architecture support both synchronous self-centering and independent jaw control while remaining mechanically viable under analytical and FEA evaluation?",
    summary: "Peer-reviewed mechanical-engineering research combining workholding mechanism design, analytical force/stress reasoning, and ANSYS-based stress, deformation, and modal evaluation.",
    methods: ["Analytical Mechanics", "Machine Tool Design", "FEA", "Stress / Deformation", "Modal Analysis"],
    evidence: [
      { value: "2026", label: "Production Engineering publication" },
      { value: "DOI", label: "10.1007/s11740-025-01376-5" },
    ],
    currentState: "Published research. The portfolio page focuses on the engineering question, mechanism, analytical reasoning, and simulation evidence without overstating implementation beyond the published work.",
    projectHref: "/projects/dual-mode-four-jaw-lathe-chuck/",
    externalHref: "https://doi.org/10.1007/s11740-025-01376-5",
  },
  {
    slug: "virtual-ed-independent-study",
    title: "Virtual ED",
    type: "Independent Study",
    domain: "Healthcare Operations",
    period: "Fall 2026",
    question: "The exact operational/research question is governed by the independent-study protocol and will be updated as the study work progresses.",
    summary: "Formal UIUC independent-study work in the Virtual ED / healthcare-operations space. This is intentionally presented separately from Research so the academic provenance stays precise.",
    methods: ["Study Protocol", "Healthcare Operations", "Research Data", "Analysis in Progress"],
    evidence: [],
    currentState: "Active independent study. Public claims will be updated from the study materials and completed analysis rather than inferred from adjacent healthcare projects.",
    projectHref: "/projects/virtual-ed-independent-study/",
  },
];
