import type { ProjectDetailContent } from "../types/projectDetail";

export const projectDetails: Record<string, ProjectDetailContent> = {
  "airline-operations-intelligence": {
    intro: "A research program for understanding how delay, disruption, aircraft rotations, recovery behavior, and network structure interact across the U.S. airline system.",
    context: "The work uses public U.S. DOT / BTS operating data rather than a toy airline dataset. The current research architecture retains the source breadth needed for later operational questions instead of reducing the data to a narrow dashboard schema.",
    decisionQuestion: "Where does disruption propagate, how does recovery differ across operating patterns, and which operational structures deserve intervention or deeper study?",
    approach: [
      { title: "Ingest", description: "Validate and normalize longitudinal BTS operating records while preserving the meaningful source fields." },
      { title: "Reconstruct", description: "Connect flight legs, aircraft/tail activity, airports, carriers, and timing behavior into operational sequences." },
      { title: "Analyze", description: "Measure delay propagation, turn-time behavior, carrier/network differences, and recovery patterns." },
      { title: "Interrogate", description: "Use the analytical layer and LLM-assisted querying to move from aggregate metrics toward operational questions." }
    ],
    architecture: ["BTS / DOT source data", "validation + normalization", "operational feature layer", "rotation / network reconstruction", "delay + recovery analytics", "research interface + analytical querying"],
    evidence: [
      { value: "~59M", label: "longitudinal U.S. flight records in the research corpus", confidence: "Reported" },
      { value: "101", label: "months represented in the longitudinal study corpus", confidence: "Reported" },
      { value: "660,674", label: "April 2026 records used in a validated rebuild slice", confidence: "Verified" },
      { value: "119", label: "meaningful BTS source columns retained in the rebuild architecture", confidence: "Verified" }
    ],
    validation: ["April 2026 ingestion/analysis slice validated on 660,674 flights.", "Source-schema review retained 119 meaningful BTS columns rather than silently dropping fields.", "Current research rebuild is being re-audited before final public screenshots and claims are frozen."],
    contribution: ["Designed the public-data ingestion and normalization direction around the full BTS schema.", "Built the analytical framing for delay propagation, rotations, recovery, and network behavior.", "Kept research observations separate from future intervention or optimization claims."],
    limitations: ["This is active research; conclusions and interface architecture can change as the study evolves.", "Public BTS data cannot expose every operational decision or proprietary airline constraint.", "The current portfolio page intentionally separates validated observations from future optimization or intervention claims."],
    nextUpdates: ["Freeze the latest research architecture after repository re-audit.", "Add final charts, rotation/network visuals, and reproducible analysis outputs.", "Replace provisional research-status language with the latest study results once they are formally ready."]
  },

  "dual-mode-four-jaw-lathe-chuck": {
    intro: "Published mechanical-engineering research on a dual-mode four-jaw lathe chuck designed to combine synchronized self-centering behavior with independent jaw control.",
    context: "The work bridges analytical machine-tool design and finite-element validation rather than presenting the mechanism as a CAD-only concept.",
    approach: [
      { title: "Requirement", description: "Address the trade-off between synchronized centering and independent workholding for irregular geometries." },
      { title: "Mechanics", description: "Develop the jaw/gear arrangement and analytical relationships governing motion, load, and clamping behavior." },
      { title: "FEA", description: "Evaluate stress, deformation, and modal behavior using finite-element simulation." },
      { title: "Publish", description: "Document the design and analytical/FEA evaluation in peer-reviewed Production Engineering research." }
    ],
    architecture: ["workholding requirement", "dual-mode mechanism", "analytical mechanics", "CAD model", "ANSYS stress / deformation / modal evaluation", "peer-reviewed publication"],
    evidence: [{ value: "Published", label: "Production Engineering · Springer", confidence: "Verified" }],
    contribution: ["Developed the dual-mode mechanism concept to combine self-centering convenience with independent jaw control.", "Supported the analytical, CAD, stress, deformation, and modal-evaluation path.", "Carried the design through peer-reviewed Production Engineering publication."],
    publication: { venue: "Production Engineering · Springer", year: "2026", doi: "10.1007/s11740-025-01376-5" },
    limitations: ["Portfolio coverage focuses on the published engineering contribution rather than reproducing the full paper.", "Only claims supported by the publication and project records should be surfaced publicly."],
    nextUpdates: ["Add publication figures/CAD/FEA visuals that can be shown publicly.", "Add a concise contribution breakdown and selected analytical equations from the published work."]
  },

  "virtual-ed-independent-study": {
    intro: "The formal UIUC independent study focused on Virtual ED / emergency-care operations.",
    context: "This page is intentionally conservative while the study is active. The public narrative will be populated from the introduction, study protocol, IRB materials, analysis, and the user's documented contribution—not from assumptions about healthcare operations.",
    approach: [
      { title: "Study context", description: "Establish the Virtual ED setting and the operational/research question from the approved study materials." },
      { title: "Protocol", description: "Translate the study protocol and IRB-approved scope into the analytical plan." },
      { title: "Analysis", description: "Add data definitions, methods, and findings only as the independent study work is completed." },
      { title: "Contribution", description: "Make the user's specific academic contribution explicit rather than implying ownership of the whole study." }
    ],
    architecture: ["study materials", "protocol / IRB scope", "data + definitions", "analysis", "findings", "academic outputs"],
    contribution: ["The user's exact study contribution is intentionally kept update-ready until the approved study materials and completed analysis are documented.", "No adjacent healthcare-project result is attributed to the study.", "IRB-sensitive material remains outside the public portfolio."],
    limitations: ["Active study: no unverified findings are presented.", "IRB-sensitive or non-public information will not be published.", "Methods and results remain update-ready until the actual analysis is completed."],
    nextUpdates: ["Populate the exact study question and public-safe protocol summary.", "Add the user's specific contribution and analysis workflow.", "Add findings only after they are supported by the completed study work."]
  },

  "rehab-ai": {
    intro: "A research-grade rehabilitation decision-intelligence platform built around a patient-specific digital twin, multimodal movement evidence, and safe adaptive intervention search.",
    context: "REHAB AI treats rehabilitation as a sequential decision problem: each intervention changes the patient's state while also revealing information about how that patient responds. All included model benchmarks and patient scenarios remain synthetic validation, not clinical efficacy evidence.",
    decisionQuestion: "Which safe intervention should be selected next when recovery, treatment burden, uncertainty, and information value all matter?",
    approach: [
      { title: "Reconstruct", description: "Combine IMU, pose, assessment, and session evidence into a patient-specific movement state." },
      { title: "Estimate", description: "Use biomechanics and an Unscented Kalman Filter to track latent motor capacity and uncertainty." },
      { title: "Learn", description: "Model phenotype and treatment response with synthetic holdout validation and uncertainty-aware predictors." },
      { title: "Adapt", description: "Use APACE to search safe, informative interventions and return a clinician-reviewable counterfactual trajectory." }
    ],
    architecture: ["IMU / pose / assessment", "biomechanics", "UKF latent state", "phenotype + GP response", "APACE dual-control search", "clinician review"],
    evidence: [
      { value: "V0.95", label: "full rehabilitation intelligence platform", confidence: "Reported" },
      { value: "8", label: "integrated product workspaces", confidence: "Reported" },
      { value: "APACE", label: "risk-sensitive adaptive search algorithm", confidence: "Reported" },
      { value: "64", label: "tests in the product registry", confidence: "Verified" }
    ],
    validation: ["The current final local acceptance gate passed across the product's registered workspaces.", "Biomechanics, latent-state estimation, treatment-response modeling, and APACE search are tested on synthetic/reference cases.", "The platform includes an exact small-instance oracle for the adaptive search logic; external clinical validation remains pending and clinician review is required."],
    contribution: ["Integrated movement evidence, biomechanics, latent-state estimation, response modeling, and adaptive search into one workflow.", "Designed the APACE dual-control framing so intervention value includes both recovery and information gain.", "Added clinician-review and safety-envelope boundaries to keep the system decision-support oriented."],
    limitations: ["Synthetic patient scenarios do not establish clinical efficacy.", "The platform is not clinically validated and must not be used for autonomous care.", "External rehabilitation data, device validation, and clinician workflow validation remain open."],
    nextUpdates: ["Add public-safe movement visualizations and a reproducible benchmark summary.", "Document the user's specific research contribution.", "Keep clinical claims gated on external validation and clinician review."]
  },

  "volterra-ev-charging": {
    intro: "An EV charging-network and grid decision-intelligence platform that combines real public infrastructure data with queueing, routing, resilience, optimization, and simulation.",
    context: "VOLTERRA treats charging as a network operations problem. Public station, corridor, vehicle, weather, energy, and utility data feed an analytical warehouse; station demand and queue behavior are labeled as modeled where they are not directly observed.",
    decisionQuestion: "How should charging capacity, routing, storage, and operating guidance adapt across a constrained EV network?",
    approach: [
      { title: "Ingest", description: "Collect public station, corridor, vehicle, energy, weather, and utility data into versioned analytical snapshots." },
      { title: "Model", description: "Represent charging service, queueing, reliability, routes, and network criticality across real locations." },
      { title: "Optimize", description: "Solve capacity, storage, routing, and traffic-assignment decisions under service and grid constraints." },
      { title: "Operate", description: "Expose network and demand views plus a tool-grounded operations copilot for what-if questions." }
    ],
    architecture: ["public data ingestion", "DuckDB warehouse", "queueing + simulation", "graph / resilience", "Julia optimization + routing", "Go API + Angular map"],
    evidence: [
      { value: "17", label: "real charging sites analyzed", confidence: "Reported" },
      { value: "994", label: "real EV corridor segments aligned", confidence: "Reported" },
      { value: "1,189", label: "public EV variants used in scenario analysis", confidence: "Reported" },
      { value: "442", label: "documented module tests across the stack", confidence: "Reported" },
      { value: "100%", label: "DQN success in the paired real-site result", confidence: "Reported" }
    ],
    validation: ["The multi-module stack has completed its documented phase roadmap with tests across optimization, simulation, graph, routing, ML, and backend modules.", "In the documented paired real-site episode, the DQN policy reached 100% success with 6.111 h completion time; this is a modeled policy comparison, not a field trial.", "Real public sources are kept separate from modeled station-demand and queueing assumptions."],
    contribution: ["Connected public station, corridor, vehicle, energy, weather, and utility sources into a network-analysis workflow.", "Built the queueing, routing, resilience, and optimization layers around station and corridor decisions.", "Separated observed infrastructure facts from modeled demand and policy comparisons."],
    limitations: ["Station-level demand is modeled because Tesla does not publish it at that granularity.", "The project is independent and not affiliated with Tesla.", "Live-model copilot tool selection, real demand forecasting, and some future planning layers remain open."],
    nextUpdates: ["Add the strongest network-map and queueing visuals.", "Freeze a compact comparison of route, queue, and storage decisions.", "Document the most defensible real-data result for recruiter review."]
  },

  "apex-vehicle-architecture": {
    intro: "A vehicle-level engineering optimization platform that searches architectures across performance, range, packaging, cost, mass, thermal behavior, and robustness requirements.",
    context: "APEX optimizes the vehicle architecture itself rather than only the manufacturing process. It reuses a first-principles evaluation kernel across Pareto search, uncertainty propagation, surrogate modeling, and active learning.",
    decisionQuestion: "Which vehicle architectures remain feasible and attractive when requirements conflict and operating conditions vary?",
    approach: [
      { title: "Evaluate", description: "Run longitudinal dynamics, battery, motor, mass, cost, and requirement calculations from a common physics kernel." },
      { title: "Search", description: "Explore mixed continuous/discrete architecture choices with a real NSGA-II Pareto search." },
      { title: "Stress", description: "Propagate payload, temperature, grade, wear, and battery-health uncertainty into chance-constrained feasibility." },
      { title: "Accelerate", description: "Train Gaussian-process and random-forest surrogates, then use active learning to select the next informative designs." }
    ],
    architecture: ["vehicle physics kernel", "mixed-variable design space", "NSGA-II Pareto search", "Monte Carlo robust design", "GP / RF surrogates", "active-learning loop"],
    evidence: [
      { value: "Phase 10", label: "benchmark, stress-test, and acceptance release", confidence: "Reported" },
      { value: "4", label: "core vehicle objectives compared", confidence: "Reported" },
      { value: "3", label: "service layers: Python, Rust, SvelteKit", confidence: "Reported" },
      { value: "232", label: "Python tests in the Phase 10 suite", confidence: "Reported" },
      { value: "0.91–1.00", label: "held-out surrogate R² range across objectives", confidence: "Reported" }
    ],
    validation: ["The physics, design, Pareto, robustness, surrogate, active-learning, agent, and platform phases are implemented in the repository.", "Boundary-corner, memory-pressure, concurrency, clean-environment, and container checks are part of the Phase 10 release.", "Results are physics-model evidence, not certification of a manufactured vehicle."],
    contribution: ["Built the shared vehicle and battery evaluation kernel used by design search, robustness, and surrogate workflows.", "Connected mixed-variable NSGA-II search to chance-constrained Monte Carlo evaluation.", "Carried the engineering model through Python, Rust orchestration, and SvelteKit platform acceptance."],
    limitations: ["The design space and uncertainty distributions are documented engineering assumptions.", "No physical vehicle test or regulatory certification is claimed.", "Production deployment and validation against a real vehicle program remain outside the current evidence."],
    nextUpdates: ["Add one Pareto-front visualization and a representative architecture comparison.", "Show how the uncertainty model changes feasible design choices.", "Document the user's engineering contribution across the scientific core and workstation."]
  },

  "fab-yield-capacity-intelligence": {
    intro: "A semiconductor manufacturing decision-intelligence platform connecting real fab yield data, re-entrant capacity analysis, discrete-event simulation, and lot-release optimization.",
    context: "The project uses real SECOM sensor and pass/fail data for yield-risk analysis and the published SMT2020 benchmark for realistic re-entrant fab routes, tool groups, reliability, and demand. Simulation and optimization outputs are labeled as modeled benchmark evidence rather than named-plant results.",
    decisionQuestion: "Which lots should be released and which dispatch/release policy best protects capacity, service, yield, and cycle time?",
    approach: [
      { title: "Predict yield risk", description: "Train a leakage-controlled Random Forest on real SECOM sensor data and pair it with classical semiconductor yield theory." },
      { title: "Find the bottleneck", description: "Apply Little's Law, Kingman's G/G/m approximation, utilization, and route topology to the published fab benchmark." },
      { title: "Simulate policy", description: "Compare FIFO/Critical-Ratio dispatch and uncontrolled/CONWIP release with stochastic processing and tool failures." },
      { title: "Optimize release", description: "Solve weekly and multi-period lot-release decisions with Gurobi under finite capacity and service commitments." }
    ],
    architecture: ["SECOM yield data", "SMT2020 fab topology", "yield + SPC", "Little's Law / Kingman", "SimPy fab twin", "Gurobi release MILP"],
    evidence: [
      { value: "1,567", label: "real SECOM fab lots", confidence: "Reported" },
      { value: "590", label: "real sensor signals per lot", confidence: "Reported" },
      { value: "10", label: "SMT2020 products modeled", confidence: "Reported" },
      { value: "0.71", label: "yield-model ROC-AUC on the real SECOM slice", confidence: "Reported" },
      { value: "~29%", label: "simulated cycle-time improvement from CONWIP / CR", confidence: "Reported" }
    ],
    validation: ["The repository documents 30 tests covering deterministic math, optimizer behavior, and FastAPI integration.", "The application exposes four live what-if scenarios over the yield, capacity, simulation, and optimization pipeline.", "The yield score is reported on real SECOM data; the cycle-time improvement is a modeled simulation result on the published fab benchmark, not a realized plant outcome.", "The current evidence boundary distinguishes real public data, published benchmark data, modeled simulation, and optimization results."],
    contribution: ["Joined a real semiconductor yield dataset to a published re-entrant fab benchmark instead of treating yield and capacity as separate analyses.", "Implemented the yield-risk, bottleneck, dispatch-policy, simulation, and lot-release decision path.", "Made the real-data, benchmark, simulated, and optimization boundaries visible in the product narrative."],
    limitations: ["The SMT2020 fab is a published academic benchmark, not a named company's proprietary fab.", "The simulation uses modeled operating policies and a fixed horizon; it is not a realized production result.", "Site-specific MES, tool, and operator validation remain pending."],
    nextUpdates: ["Add a compact bottleneck-to-release-decision visualization.", "Show one policy comparison with explicit modeled/simulated labels.", "Document the user's strongest contribution to the yield and capacity pipeline."]
  },

  "minco": {
    intro: "An independent hospital-operations decision-intelligence system connecting patient-flow simulation, forecasting, regime detection, scenarios, robust optimization, and explainable recommendations.",
    context: "MINCO is designed around operational decisions rather than prediction alone: forecasting and classification feed simulation and optimization so capacity/policy choices can be tested under uncertainty.",
    decisionQuestion: "How should hospital capacity and operating policies adapt when arrivals, blocking, and operating regimes are uncertain?",
    approach: [
      { title: "Forecast", description: "Estimate blocked-arrival behavior and other operational signals." },
      { title: "Detect regime", description: "Classify operating conditions so recommendations are conditioned on system state." },
      { title: "Simulate", description: "Evaluate patient-flow and capacity behavior across scenarios." },
      { title: "Optimize", description: "Select robust policies under uncertainty rather than optimizing only an average case." },
      { title: "Explain", description: "Turn model output into decision support with explicit assumptions and trade-offs." }
    ],
    architecture: ["operational inputs", "forecasting + regime detection", "scenario generation", "patient-flow simulation", "robust optimization", "recommendation + explanation layer"],
    evidence: [
      { value: "R² 0.839", label: "blocked-arrival forecaster", confidence: "Reported" },
      { value: "MAE 1.915", label: "blocked-arrival forecast error", confidence: "Reported" },
      { value: "80.7%", label: "regime-classifier accuracy", confidence: "Reported" },
      { value: "4 / 5", label: "evaluation scenarios where robust policy improved unsafe excess", confidence: "Reported" },
      { value: "63", label: "tests in the current product registry", confidence: "Verified" }
    ],
    validation: ["Headline forecasting/classification/robust-policy results are documented from the project benchmark.", "The current final local acceptance gate passed, with the registered product suite completing successfully.", "The reference network and synthetic benchmark remain explicit; this is operations research software, not a clinical deployment."],
    contribution: ["Designed the hospital-flow representation across forecasting, regime detection, simulation, and capacity decisions.", "Connected forecast uncertainty to robust policy selection rather than presenting prediction as the final output.", "Built the scenario/evaluation framing and kept the synthetic reference-network boundary explicit."],
    limitations: ["Independent engineering project, not a clinical deployment or clinical decision system.", "Data provenance and the real-vs-synthetic mix must remain explicit on the final page.", "No claim of prospective clinical validation is made."],
    nextUpdates: ["Re-run the current repository and reproduce headline metrics.", "Add final architecture and scenario screenshots.", "Document current data provenance and Claude model-routing implementation once validated."]
  },

  "supply-chain-vulnerability": {
    intro: "A multi-echelon supply-chain resilience system combining network fragility, correlated-disruption Monte Carlo simulation, and Gurobi mixed-integer procurement decisions.",
    context: "The project focuses on a common failure mode in resilience planning: a sourcing plan can look inexpensive and feasible under expected conditions while carrying severe correlated tail risk.",
    decisionQuestion: "Which suppliers should be activated and how should sourcing be allocated when service, cost, fragility, and disruption risk all matter?",
    approach: [
      { title: "Map", description: "Represent suppliers, components, plants, distribution centers, and relationships as a network." },
      { title: "Stress", description: "Generate correlated supplier/region disruption scenarios rather than independent single-node failures." },
      { title: "Score", description: "Quantify structural fragility and single-point-of-failure exposure." },
      { title: "Optimize", description: "Solve a fragility-aware mixed-integer sourcing model with Gurobi." }
    ],
    architecture: ["supplier network", "fragility analytics", "correlated Monte Carlo scenarios", "service / tail-risk evaluation", "Gurobi MILP", "sourcing recommendation"],
    evidence: [
      { value: "35", label: "suppliers", confidence: "Verified" },
      { value: "81", label: "supply-network relationships", confidence: "Verified" },
      { value: "500", label: "correlated-disruption scenarios", confidence: "Verified" },
      { value: "~64%", label: "reduction in worst-case tail risk versus probability-only visibility", confidence: "Reported" },
      { value: "8 / 8", label: "control-tower evidence checks passing", confidence: "Verified" },
      { value: "100%", label: "final local acceptance coverage", confidence: "Verified" }
    ],
    validation: ["The current final local acceptance gate passed, including the control-tower evidence checks.", "Fragility-aware Gurobi MILP results are available and the portfolio records the reported tail-risk comparison.", "The network remains a reference/scenario environment; no enterprise supplier graph or realized savings claim is made."],
    contribution: ["Modeled suppliers, components, plants, and relationships as a disruption-aware network.", "Implemented correlated stress scenarios and fragility measures for single-point-of-failure visibility.", "Translated the stress results into a constrained Gurobi sourcing recommendation."],
    limitations: ["The network is a portfolio modeling environment, not a proprietary enterprise supplier graph.", "Scenario probabilities and correlations must be interpreted as modeling assumptions unless tied to external data."],
    nextUpdates: ["Re-run the final repository against real/public data inputs where available.", "Add network visualization and mathematical formulation.", "Publish clean acceptance/reproducibility commands and updated screenshots."]
  },

  "circular-manufacturing": {
    intro: "A circular-manufacturing decision system balancing cost, carbon, service feasibility, and material recovery through multi-objective mixed-integer optimization.",
    decisionQuestion: "How should material flows and recovery choices be allocated when economic, environmental, and service objectives conflict?",
    approach: [
      { title: "Model flows", description: "Represent material balance, demand, recovery, capacity, and service constraints." },
      { title: "Trade off objectives", description: "Optimize cost and carbon without hiding feasibility/service consequences." },
      { title: "Solve", description: "Use Gurobi multi-objective MILP to produce feasible material-flow decisions." },
      { title: "Validate", description: "Run a Windows final gate that records solver status, gap, feasibility, and objective outputs." }
    ],
    architecture: ["material / demand inputs", "flow + service constraints", "multi-objective MILP", "Gurobi solve", "cost / carbon / service outputs", "decision interface"],
    evidence: [
      { value: "OPTIMAL", label: "recorded final solver status", confidence: "Verified" },
      { value: "0.0", label: "MIP gap in the Phase 10 final gate", confidence: "Verified" },
      { value: "~0.105 s", label: "recorded final-gate solver runtime", confidence: "Verified" },
      { value: "~17.16M", label: "recorded cost objective in the validated scenario", confidence: "Verified" },
      { value: "120,000", label: "synthetic enterprise benchmark rows", confidence: "Reported" },
      { value: "EPA GHGRP 2023", label: "public facility extract included", confidence: "Reported" }
    ],
    validation: ["The current final local acceptance gate passed across the product workflow.", "Gurobi reported an optimal multi-objective solution with zero MIP gap.", "Service/shortage tolerances were explicitly checked; the enterprise-scale benchmark is synthetic and the public facility extract is kept separate from modeled results."],
    contribution: ["Formulated the circular material-flow, recovery, service, carbon, and cost trade-offs as a multi-objective MILP.", "Built the acceptance path around solver status, gap, feasibility, tolerances, and objective outputs.", "Kept synthetic enterprise scenarios separate from the public EPA facility extract."],
    limitations: ["Final launch should explain the realism and provenance of the material-flow inputs.", "The validated scenario is evidence of model correctness under that configuration, not a universal industrial benchmark."],
    nextUpdates: ["Add the strongest current UI screenshots.", "Add a compact formulation and objective-trade-off visualization.", "Refresh results if the latest repository changes model assumptions or data." ]
  },

  "manufacturing-digital-twin": {
    intro: "An event-driven computational factory twin for reconstructing operational state, testing scenarios, locating bottlenecks, and evaluating intervention decisions before changing the real system.",
    decisionQuestion: "Which bottlenecks and interventions improve flow, lateness, and capacity performance under the current system state?",
    approach: [
      { title: "Reconstruct", description: "Convert operational events into a current representation of jobs, resources, queues, and flow state." },
      { title: "Simulate", description: "Roll the system forward under alternative operating assumptions." },
      { title: "Diagnose", description: "Identify bottlenecks, lateness, and capacity pressure." },
      { title: "Intervene", description: "Evaluate/optimize candidate interventions rather than stopping at descriptive dashboards." }
    ],
    architecture: ["event inputs", "state reconstruction", "factory twin", "scenario engine", "bottleneck / lateness analytics", "optimization + decision layer"],
    evidence: [
      { value: "150,000", label: "synthetic operational scenarios replayed", confidence: "Reported" },
      { value: "80", label: "columns in the operational scenario schema", confidence: "Reported" },
      { value: "FT06", label: "public OR-Library job-shop benchmark included", confidence: "Reported" },
      { value: "4", label: "AI tasks: risk, cycle time, bottleneck, anomaly", confidence: "Reported" }
    ],
    validation: ["The current final local acceptance gate passed for the product runtime and engineering checks.", "The V1 workflow exercises event reconstruction, simulation, bottleneck/lateness analysis, and optimization against synthetic operational scenarios and the public FT06 benchmark.", "Digital-twin evidence is benchmark/synthetic validation; external plant shadow validation remains pending."],
    contribution: ["Designed the event-to-state reconstruction layer for jobs, resources, queues, and operational flow.", "Connected synthetic scenario replay and the FT06 benchmark to bottleneck, lateness, and intervention analysis.", "Carried the twin beyond a dashboard into simulation and decision evaluation."],
    limitations: ["The 150,000-scenario workload is synthetic and does not establish a deployed-factory result.", "Digital-twin fidelity depends on the quality and completeness of event/state inputs.", "External plant data and shadow-mode validation remain open."],
    nextUpdates: ["Add the strongest current twin-state and bottleneck visuals.", "Freeze one intervention comparison with explicit benchmark/synthetic labels.", "Document the user's contribution across state reconstruction, simulation, and optimization."]
  },

  "predictive-maintenance": {
    intro: "A maintenance decision system that moves beyond failure probability toward intervention planning under risk, uncertainty, and limited maintenance capacity.",
    decisionQuestion: "Which assets should be serviced first, when, and under what risk/capacity constraints?",
    approach: [
      { title: "Predict", description: "Estimate asset condition/failure risk from available maintenance data." },
      { title: "Stress", description: "Test intervention policies under uncertainty through the Stress Lab." },
      { title: "Price tail risk", description: "Use CVaR/risk-aversion settings to expose severe maintenance outcomes." },
      { title: "Plan", description: "Optimize intervention decisions subject to bay/capacity constraints." }
    ],
    architecture: ["maintenance data", "predictive risk model", "scenario / stress engine", "CVaR risk layer", "Gurobi intervention planner", "maintenance decision UI"],
    evidence: [
      { value: "18.33", label: "NASA C-MAPSS RUL RMSE in cycles", confidence: "Reported" },
      { value: "0.805", label: "NASA C-MAPSS RUL R²", confidence: "Reported" },
      { value: "1,516,948", label: "real MetroPT telemetry observations", confidence: "Reported" },
      { value: "15", label: "MetroPT sensor signals", confidence: "Reported" },
      { value: "300", label: "simulations in a recorded Stress Lab run", confidence: "Verified" }
    ],
    validation: ["The current final local acceptance gate passed for the product runtime and engineering checks.", "On NASA C-MAPSS FD001, the documented model reports 18.33-cycle RMSE versus 33.34 for the age-only baseline; this is benchmark evidence, not field accuracy.", "The real MetroPT-3 path preserves 1,516,948 observations and 15 sensor signals, but certified row-level RUL remains intentionally unclaimed."],
    contribution: ["Connected benchmark RUL modeling, real telemetry integrity, stress scenarios, and capacity-constrained maintenance planning.", "Built the decision framing around intervention timing, maintenance capacity, and tail risk—not prediction alone.", "Separated benchmark performance from the real-data ingestion path and its still-open field validation."],
    limitations: ["NASA C-MAPSS is a benchmark/simulated turbofan dataset, not a deployed asset population.", "MetroPT telemetry is real, but full field-performance claims require locally acquired source acceptance and operational context.", "Maintenance recommendations remain decision support and require human reliability review."],
    nextUpdates: ["Add the current benchmark-vs-real-data evidence split to the UI.", "Freeze one capacity-constrained intervention comparison.", "Document the user's contribution across reliability modeling, stress testing, and maintenance optimization."]
  },

  "kaizen-ai": {
    intro: "A Lean Six Sigma decision-intelligence workspace that connects statistical evidence, hypotheses, experimentation, optimization, and grounded AI assistance across a DMAIC-style improvement workflow.",
    decisionQuestion: "Given process evidence, which hypothesis or improvement action deserves the next experiment or decision?",
    approach: [
      { title: "Measure", description: "Capture process evidence and diagnostics." },
      { title: "Analyze", description: "Use statistics and causal gates to challenge competing hypotheses." },
      { title: "Experiment", description: "Structure DOE-style tests and compare improvement alternatives." },
      { title: "Optimize", description: "Use OR methods where the improvement decision is constrained." },
      { title: "Explain", description: "Ground Gemini output in tools/evidence so the LLM cannot invent calculations." }
    ],
    architecture: ["process evidence", "statistical diagnostics", "hypothesis / causal gate", "DOE + optimization", "grounded Gemini tools", "improvement recommendation"],
    evidence: [
      { value: "74", label: "tests in the current product registry", confidence: "Verified" },
      { value: "64", label: "exact improvement portfolios checked against an MILP oracle", confidence: "Reported" },
      { value: "6", label: "sealed causal disturbances in the validation set", confidence: "Reported" },
      { value: "PASS", label: "current final local acceptance gate", confidence: "Verified" }
    ],
    validation: ["The current final local acceptance gate passed for the product workflow.", "The exact 64-portfolio nonlinear oracle is checked against a MILP formulation, and six sealed causal disturbances exercise the evidence flow.", "Grounded tool-based AI design keeps Gemini above deterministic statistics, DOE, and optimization tools rather than letting the language model replace calculations."],
    contribution: ["Connected DMAIC, statistics, DOE, causal gates, optimization, and AI explanation into one improvement workflow.", "Built the deterministic tool/evidence boundary that keeps the AI layer from inventing calculations.", "Used oracle checks and sealed disturbances to make improvement decisions reviewable."],
    limitations: ["The portfolio must distinguish validated software behavior from real-world process-improvement impact.", "Final page should use only quantified operational outcomes that are reproduced from current runs."],
    nextUpdates: ["Re-run latest release and capture current test/diagnostic totals.", "Add concise screenshots of the investigation workflow.", "Strengthen the page with the latest IE/OR mathematics added after the validated baseline."]
  },

  "aurum": {
    intro: "An AI-native quantitative research environment combining constrained portfolio optimization, regime modeling, Monte Carlo simulation, public financial data, and analytical querying.",
    decisionQuestion: "How should capital be allocated when return, covariance, tail risk, views, regimes, and allocation constraints all matter?",
    approach: [
      { title: "Estimate", description: "Build market/risk inputs from public financial data." },
      { title: "Optimize", description: "Compare minimum-variance, mean-variance, CVaR, Black-Litterman, and LP-CVaR allocations." },
      { title: "Detect regime", description: "Use a three-state Gaussian HMM to condition analysis on changing market states." },
      { title: "Stress", description: "Use Monte Carlo paths and VaR/CVaR views to examine downside behavior." }
    ],
    architecture: ["public market + macro data", "feature / return layer", "HMM regime model", "portfolio optimizers", "10,000-path digital twin", "risk + research interface"],
    evidence: [
      { value: "5", label: "constrained optimization approaches", confidence: "Verified" },
      { value: "3", label: "HMM market regimes", confidence: "Verified" },
      { value: "10,000", label: "Monte Carlo paths in the digital twin", confidence: "Verified" },
      { value: "106 / 106", label: "release checks passing", confidence: "Verified" },
      { value: "1,260", label: "public market rows in the evidence bundle", confidence: "Reported" },
      { value: "99.55%", label: "AI-live contract coverage in validation", confidence: "Reported" }
    ],
    validation: ["The current final local acceptance gate passed; the release evidence bundle records 106/106 checks and six public evidence sources.", "The public-data bundle contains 1,260 market rows with chronological return/volatility/drawdown and no-lookahead checks.", "AI-live validation reports 99.55% contract coverage while external live connectors remain disabled."],
    contribution: ["Implemented the research loop across public-data evidence, regime modeling, constrained optimization, and tail-risk simulation.", "Connected multiple portfolio formulations to a common reviewable risk workflow.", "Kept human gating, no-lookahead checks, and research-only promotion boundaries explicit."],
    limitations: ["Research platform, not investment advice or a production trading system.", "Walk-forward promotion is explicitly research-only and the production gate remains blocked without immutable image/deployment controls.", "Portfolio framing should keep the project as method diversity rather than the center of the IE identity."],
    nextUpdates: ["Add the current risk/optimizer evidence bundle and one regime-aware allocation comparison.", "Show the human-gated review loop in the interface.", "Keep any future performance language tied to reproducible public-data runs."]
  },

  "manufacturing-quality-intelligence": {
    intro: "An implemented quality-engineering workbench that connects measurement-system analysis, capability, SPC, DOE, PFMEA, defect prediction, and evidence-grounded decisions.",
    context: "The product is built as an evidence chain: diagnose the measurement system, quantify process capability, detect instability, test hypotheses, and only then recommend an intervention.",
    decisionQuestion: "Which quality signal is trustworthy, what is driving the defect pattern, and which intervention should be tested next?",
    approach: [
      { title: "Trust data", description: "Check schema, missingness, measurement behavior, and data quality before analysis." },
      { title: "Diagnose", description: "Combine MSA, capability, SPC, and defect-pattern evidence." },
      { title: "Experiment", description: "Use DOE and PFMEA-style reasoning to compare causes and actions." },
      { title: "Decide", description: "Return an auditable quality recommendation with model and evidence boundaries." }
    ],
    architecture: ["quality data gateway", "MSA + capability", "SPC diagnostics", "DOE + PFMEA", "defect prediction", "quality decision evidence"],
    evidence: [
      { value: "59", label: "tests in the current product registry", confidence: "Verified" },
      { value: "100%", label: "final local acceptance coverage", confidence: "Verified" },
      { value: "PASS", label: "current Windows final acceptance gate", confidence: "Verified" }
    ],
    validation: ["The current final local acceptance gate passed for the product workflow.", "The registered tests cover deterministic quality calculations, product behavior, and the evidence/decision path.", "The acceptance result validates the software workflow; it does not claim a realized defect reduction at a named plant."],
    contribution: ["Built the evidence-first quality workflow across MSA, capability, SPC, DOE, PFMEA, and defect analysis.", "Connected deterministic quality calculations to the product decision path.", "Kept plant impact and AI assistance subordinate to approved data and human review."],
    limitations: ["Quality impact is not presented as a production KPI improvement without an approved plant dataset and before/after study.", "Model thresholds and process limits require domain calibration.", "AI assistance remains subordinate to deterministic quality calculations and human review."],
    nextUpdates: ["Add one end-to-end capability/SPC/defect investigation screenshot.", "Show the evidence chain from measurement validation to recommended experiment.", "Attach a safe benchmark dataset and freeze the headline quality metrics."]
  },

  "autonomous-process-parameter-optimization": {
    intro: "A Phase D2 process-development workbench that turns safe sequential experiments into uncertain surrogate models, robust recipe candidates, and qualification-ready evidence.",
    context: "TRUST-DOE is implemented around a controlled experiment loop: the system tracks what was tried, what the surrogate believes, what is uncertain, and what can safely be tested next. Machine write-back remains blocked.",
    decisionQuestion: "Which process setting should be tested next when the budget is limited, the response surface is uncertain, and unsafe regions must be excluded?",
    approach: [
      { title: "Design", description: "Generate factorial, CCD, Box-Behnken, LHS, and active-learning candidates." },
      { title: "Learn", description: "Compare RSM, tree/boosting, and Gaussian-process surrogates with uncertainty and conformal bounds." },
      { title: "Optimize", description: "Search feasible robust and Pareto recipe candidates under finite experiment budgets." },
      { title: "Qualify", description: "Route the recommendation through stress, readiness, drift, and evidence-ledger gates." }
    ],
    architecture: ["experiment ledger", "DOE candidate generation", "surrogate + uncertainty", "safe acquisition", "robust recipe optimization", "qualification / evidence gate"],
    evidence: [
      { value: "61", label: "tests in the current product registry", confidence: "Verified" },
      { value: "D2", label: "interactive process-development release", confidence: "Reported" },
      { value: "100%", label: "final local acceptance coverage", confidence: "Verified" }
    ],
    validation: ["The current final local acceptance gate passed for the product workflow.", "The registered tests cover experiment design, surrogate/uncertainty behavior, optimization, readiness gates, and product integration.", "The workbench is ready for controlled shadow use; physical machine write-back and external AM Bench validation remain pending."],
    contribution: ["Built the experiment-to-surrogate-to-recipe workflow with safe acquisition and qualification gates.", "Connected DOE, uncertainty, conformal bounds, robust optimization, and active experimentation into one workbench.", "Kept machine write-back blocked until the recommendation is qualified by a process owner."],
    limitations: ["The current results establish the software and benchmark workflow, not a realized physical-process improvement.", "Synthetic additive-manufacturing data and external benchmark validation must remain labeled separately.", "Recommendations require a qualified process owner before experimentation."],
    nextUpdates: ["Add one uncertainty-aware acquisition plot and recipe comparison.", "Show the qualification gate/evidence ledger in the interface.", "Validate a benchmark or approved process dataset before making outcome claims."]
  },

  "semiconductor-fab-simulation": {
    intro: "A discrete-event semiconductor fabrication model centered on re-entrant process routes, tool contention, stochastic processing, queues, and dispatching decisions.",
    decisionQuestion: "How do dispatching and capacity policies change cycle time, congestion, tool utilization, and throughput in a re-entrant fab?",
    approach: [
      { title: "Route", description: "Represent repeated lithography, etch, deposition, metrology, and other process visits." },
      { title: "Simulate", description: "Model stochastic processing times, queues, and shared tool groups." },
      { title: "Dispatch", description: "Compare policies such as FIFO and SPT." },
      { title: "Measure", description: "Track flow, congestion, bottlenecks, and throughput outcomes." }
    ],
    architecture: ["wafer routes", "tool groups + stochastic times", "SimPy DES", "dispatching policy", "queue / utilization metrics", "experiment comparison"],
    evidence: [
      { value: "V7.1", label: "flagship fab-operations acceptance release", confidence: "Reported" },
      { value: "92", label: "tests in the current product registry", confidence: "Verified" },
      { value: "100%", label: "final local acceptance coverage", confidence: "Verified" },
      { value: "17", label: "operator workspaces in the documented platform", confidence: "Reported" }
    ],
    validation: ["The current final local acceptance gate passed for the fab-operations stack.", "V7.1 records canonical events, synthetic MES replay, deterministic state reconstruction, wafer genealogy, equipment digital threads, SPC, simulation/optimization, recovery, REST, persistence, and operator-console workflows.", "The evidence is synthetic/reference validation; live-fab calibration and deployment remain pending."],
    contribution: ["Built the coupled fab state, genealogy, equipment-thread, SPC, simulation, and recovery architecture.", "Connected canonical events and synthetic MES replay to operational decisions rather than isolated analytics.", "Carried the platform through persistence, REST, and operator-console acceptance while keeping live-fab claims gated."],
    limitations: ["The current model is not a calibrated copy of a proprietary semiconductor line.", "Synthetic MES replay and modeled policy results do not establish a realized fab KPI improvement.", "Site-specific data, controls, and operator validation remain open."],
    nextUpdates: ["Add a concise event-to-decision architecture visual.", "Show one dispatch/recovery comparison with explicit simulation labels.", "Document the user's contribution across the fab twin, optimization, and operator workflow."]
  },

  "tafe-casting-optimization": {
    intro: "Industrial engineering work from TAFE focused on redesigning a casting/mould configuration to improve throughput, preparation burden, and material utilization under production constraints.",
    context: "This is industry work, so the page emphasizes operational context and quantified process impact instead of forcing it into a software-product template.",
    decisionQuestion: "How should the mould/pattern configuration change to increase output while reducing preparation burden and improving material utilization?",
    approach: [
      { title: "Understand constraint", description: "Analyze furnace, pouring-window, mould-preparation, yield, and order requirements." },
      { title: "Compare configurations", description: "Evaluate alternative castings-per-mould arrangements." },
      { title: "Redesign", description: "Translate the quantitative comparison into a higher-output mould/pattern configuration." },
      { title: "Quantify", description: "Measure output, preparation-time, and sand-to-metal implications." }
    ],
    evidence: [
      { value: "6 → 16", label: "components per mould", confidence: "Reported" },
      { value: "68.75 h → 23.4 h", label: "reported mould-preparation requirement", confidence: "Reported" },
      { value: "15.48 → 5.81", label: "reported sand-to-metal ratio", confidence: "Reported" }
    ],
    contribution: ["Analyzed the production/casting constraints and alternative mould configurations.", "Translated quantitative comparison into an engineering redesign recommendation.", "Worked with real industrial production context rather than a synthetic case."],
    limitations: ["Public portfolio presentation will avoid proprietary TAFE data or drawings.", "Reported internship metrics are presented as historical project outcomes rather than newly reproduced software results."],
    nextUpdates: ["Add a clean process/mould diagram that does not expose proprietary information.", "Confirm which supporting charts or calculations can be published." ]
  },

  "vdart-recruitment-intelligence": {
    intro: "An industry recruitment-operations MVP that converts semi-structured recruiting communication into validated structured records, classification, and recruiter-facing operational visibility.",
    decisionQuestion: "How can repetitive recruiting communication be converted into a reliable data layer for faster classification and operational analysis?",
    approach: [
      { title: "Collect", description: "Read semi-structured recruiting messages and submissions." },
      { title: "Classify", description: "Identify technology/category and message type while handling replies, forwards, duplicates, and older records." },
      { title: "Validate", description: "Normalize results into a structured schema/database." },
      { title: "Expose", description: "Serve recruiter/technology counts and raw records through backend/dashboard layers." }
    ],
    architecture: ["semi-structured email", "parsing + classification", "validation / dedupe", "SQLite / MySQL", "FastAPI", "recruitment analytics"],
    evidence: [{ value: "99", label: "emails in one documented operating snapshot", confidence: "Reported" }],
    contribution: ["Built structured-data/backend components for the recruitment workflow.", "Implemented classification/validation logic around semi-structured operational information.", "Kept the public portfolio sanitized around company data."],
    limitations: ["Company/private message content is not published.", "Repository availability and exact data volumes may remain private or sanitized."],
    nextUpdates: ["Refresh the page from the latest internship build.", "Add sanitized architecture and dashboard screenshots.", "Use only metrics that are approved and safe to disclose." ]
  },

  "solver-based-classification": {
    intro: "A UIUC optimization project that formulates L1-regularized hinge-loss classification directly as a linear program and then solves the same problem using Benders decomposition.",
    approach: [
      { title: "Formulate", description: "Translate hinge-loss classification and L1 regularization into LP variables and constraints." },
      { title: "Solve directly", description: "Use Gurobi as the monolithic baseline." },
      { title: "Decompose", description: "Implement a Benders master/subproblem structure." },
      { title: "Compare", description: "Track convergence and classification performance." }
    ],
    architecture: ["training data", "LP formulation", "direct Gurobi solve", "Benders master + subproblem", "convergence", "classification output"],
    evidence: [
      { value: "87.5%", label: "reported training accuracy", confidence: "Reported" },
      { value: "19", label: "reported Benders master iterations to convergence", confidence: "Reported" }
    ],
    contribution: ["Formulated L1-regularized hinge-loss classification as a linear program.", "Implemented the monolithic Gurobi formulation and the Benders master/subproblem comparison.", "Used convergence and accuracy as separate checks rather than treating one score as the whole result."],
    limitations: ["Course project scope; the purpose is to demonstrate optimization formulation/decomposition rather than compete with production ML classifiers."],
    nextUpdates: ["Add the exact mathematical formulation and convergence plot from the course artifacts.", "Add the course name/semester once verified from source material." ]
  },

  "weld-quality-classification": {
    intro: "A UIUC course project comparing statistical classification approaches for manufacturing weld-quality outcomes.",
    approach: [
      { title: "Prepare", description: "Normalize and structure weld-quality features." },
      { title: "Classify", description: "Compare KNN, LDA, and QDA models." },
      { title: "Validate", description: "Use cross-validation and confusion-matrix/error analysis." },
      { title: "Interpret", description: "Inspect feature sensitivity and model behavior." }
    ],
    architecture: ["weld-quality data", "normalization", "KNN / LDA / QDA", "cross-validation", "confusion/error analysis", "model comparison"],
    contribution: ["Prepared the weld-quality features for comparable statistical classifiers.", "Compared KNN, LDA, and QDA through cross-validation and error analysis.", "Interpreted feature sensitivity and model behavior within the course scope."],
    limitations: ["Exact course, dataset, and final metrics should be refreshed from the original UIUC source files before launch."],
    nextUpdates: ["Recover final notebook/report and freeze model metrics.", "Add the exact UIUC course context and one concise comparison visualization." ]
  },

  "ship-operations-optimization": {
    intro: "An IIT Madras course project on operational cost/resource decisions across ship telemetry, fuel, routing, weather, and maintenance considerations.",
    context: "The project is kept in the academic/course section rather than presented as industry deployment.",
    architecture: ["operational inputs", "cost / resource model", "scenario assumptions", "optimization / comparison", "operational savings estimate"],
    contribution: ["Structured the ship-operations problem around cost, fuel, routing, weather, maintenance, and resource trade-offs.", "Compared operational alternatives within the course modeling scope.", "Kept any savings language tied to the source analysis rather than presenting it as fleet impact."],
    limitations: ["Exact source data, formulation, and reported savings need to be rechecked against the original IIT Madras project files before final public launch."],
    nextUpdates: ["Recover the original project artifacts.", "Replace broad method labels with the exact implemented optimization/modeling approach.", "Verify any savings figure before featuring it prominently." ]
  },

  "vehicle-parking-management": {
    intro: "An IIT Madras application-system project for managing users, vehicles, lots, reservations, payments, and finite parking capacity through a relational web backend.",
    approach: [
      { title: "Model", description: "Represent users, vehicles, lots, reservations, and payments relationally." },
      { title: "Allocate", description: "Handle parking assignment under finite lot capacity." },
      { title: "Expose", description: "Provide REST APIs for operational workflows." },
      { title: "Operate", description: "Support booking/payment tracking and administrative views." }
    ],
    architecture: ["web client", "Flask API", "SQLAlchemy domain model", "relational database", "reservation / payment logic", "admin reporting"],
    contribution: ["Modeled users, vehicles, lots, reservations, payments, and finite-capacity allocation as a relational workflow.", "Built the Flask/API and domain-model path for booking and administrative operations.", "Kept the project framed as an academic application system rather than commercial deployment."],
    limitations: ["Course application project; no claim of commercial deployment is made."],
    nextUpdates: ["Add original screenshots and exact database choice/version from the course repository.", "Document the assignment scope and individual contribution if team-based." ]
  },

  "quiz-management-application": {
    intro: "An IIT Madras web-application project centered on role-based quiz creation, automated scoring, and learner performance reporting.",
    architecture: ["role-based users", "quiz / question management", "attempt workflow", "automated scoring", "performance reporting"],
    contribution: ["Structured the role-based quiz, question, attempt, scoring, and reporting workflow.", "Implemented the application logic needed to move from quiz creation to learner feedback.", "Kept the page concise because the project is supporting academic work."],
    limitations: ["Course-project page will stay concise and will not be inflated into a flagship engineering system."],
    nextUpdates: ["Recover the original stack/screenshots and course context.", "Add the exact implemented feature set and individual contribution." ]
  },

  "adaptive-tool-holding": {
    intro: "An undergraduate capstone exploring adaptive chatter suppression using an MR-fluid boring-bar concept, MEMS sensing, feedback logic, vibration modeling, and classification.",
    decisionQuestion: "Can the tool-holder adapt when chatter is detected strongly enough to improve vibration and surface quality during machining?",
    approach: [
      { title: "Model", description: "Use stability-lobe and SDOF vibration concepts to understand chatter behavior." },
      { title: "Sense", description: "Measure vibration with MEMS sensing." },
      { title: "Adapt", description: "Use the MR-fluid boring-bar concept and feedback logic to alter damping behavior." },
      { title: "Test", description: "Compare vibration and surface-quality outcomes across operating conditions." }
    ],
    architecture: ["machining process", "MEMS sensing", "chatter detection", "feedback control", "MR-fluid tool holder", "vibration / surface validation"],
    evidence: [
      { value: ">16g → ~8g", label: "reported vibration reduction in testing", confidence: "Reported" },
      { value: "~1.5 μm → ~0.5 μm", label: "reported surface-waviness improvement", confidence: "Reported" }
    ],
    contribution: ["Developed the vibration/chatter framing around SDOF dynamics and stability-lobe behavior.", "Integrated MEMS sensing, MR-fluid damping, feedback logic, and classification into the prototype direction.", "Compared vibration and surface-quality behavior across the reported test conditions."],
    limitations: ["Portfolio results are reported from the undergraduate project record; final page should add the original experimental plots/photos before launch."],
    nextUpdates: ["Add prototype photos, vibration plots, and test setup.", "Add the exact decision-tree classification evidence and experimental conditions." ]
  },

  "nanoscale-metrology": {
    intro: "An undergraduate precision-engineering project combining microstepping, mechanical reduction, a fine-pitch lead screw, optical sensing, and calibration to explore extremely fine commanded displacement.",
    approach: [
      { title: "Reduce motion", description: "Combine microstepping, worm gearing, and lead-screw pitch to derive a theoretical displacement increment." },
      { title: "Sense", description: "Use IR/laser sensing for measurement feedback." },
      { title: "Build", description: "Integrate Arduino control with the mechanical drive." },
      { title: "Calibrate", description: "Evaluate repeatability and practical measurement behavior separately from theoretical resolution." }
    ],
    architecture: ["Arduino command", "microstepping", "worm-gear reduction", "fine-pitch lead screw", "optical sensing", "calibration / repeatability"],
    evidence: [{ value: "~2.5 nm", label: "theoretical displacement resolution", confidence: "Reported" }],
    contribution: ["Derived the theoretical displacement increment from microstepping, mechanical reduction, and lead-screw pitch.", "Integrated Arduino control and optical sensing into the precision-motion concept.", "Separated theoretical resolution from practical repeatability and measurement accuracy."],
    limitations: ["The ~2.5 nm value is theoretical commanded resolution, not a claim of independently verified nanometer measurement accuracy.", "Practical accuracy depends on backlash, stiffness, calibration, sensing, and environmental effects."],
    nextUpdates: ["Add the original mechanical/electronics diagram and calibration results.", "Make the distinction between theoretical resolution, repeatability, and accuracy visually explicit." ]
  }
};
