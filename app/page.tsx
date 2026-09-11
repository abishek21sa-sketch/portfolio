import { featuredWork, currentWork, independentProjects, projects } from "../data/projects";
import { ProjectFeature } from "../components/ProjectFeature";
import { SectionShell } from "../components/SectionShell";

const evidence = [
  { value: "~59M", label: "U.S. flight records modeled", origin: "Research", project: "Airline Operations Intelligence", slug: "airline-operations-intelligence", accent: "blue" },
  { value: "0.619", label: "test PR-AUC for severe-crash risk", origin: "Independent Project", project: "Automotive Decision Intelligence", slug: "automotive-decision-intelligence", accent: "orange" },
  { value: "0.402", label: "net annualized Sharpe · PSR 0.94", origin: "Independent Project", project: "Alpha Desk", slug: "alpha-desk", accent: "lime" },
  { value: "~29%", label: "simulated cycle-time improvement from CONWIP / CR", origin: "Independent Project", project: "Fab Yield & Capacity", slug: "fab-yield-capacity-intelligence", accent: "white" }
];

const decisionStages = [
  ["OBSERVE", "Operational data", "Public records · system states · measurements"],
  ["MODEL", "Represent the system", "Networks · forecasts · statistical models"],
  ["EXPERIMENT", "Test uncertainty", "Monte Carlo · DES · scenarios"],
  ["OPTIMIZE", "Search feasible actions", "LP / MILP · robust · multi-objective"],
  ["DECIDE", "Make the result usable", "Trade-offs · explanations · decision support"]
];

const domainOrder = [
  ["Manufacturing & Quality", ["Manufacturing Systems"]],
  ["Healthcare Operations", ["Healthcare Operations"]],
  ["Supply Chain & Resilience", ["Supply Chain & Resilience"]],
  ["Semiconductor Systems", ["Semiconductor Systems"]],
  ["Quantitative Risk", ["Quantitative Risk"]],
  ["Automotive & EV", ["Automotive & EV"]]
];

export default function Home() {
  const airline = projects.find((p) => p.slug === "airline-operations-intelligence")!;
  const chuck = projects.find((p) => p.slug === "dual-mode-four-jaw-lathe-chuck")!;
  const virtualED = projects.find((p) => p.slug === "virtual-ed-independent-study")!;

  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Industrial Engineering × Operations Research × AI</p>
            <h1><span>Abishek</span><small>Singanur Aswan Kumar</small></h1>
            <p className="hero-statement">I build computational systems that turn operational complexity into <em>better decisions.</em></p>
            <p className="hero-disciplines">Optimization · Simulation · Data · AI · Engineering Systems</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#selected-work">Explore my work</a>
              <a className="btn btn-ghost" href="/Abishek_Kumar_Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
            </div>
            <div className="hero-context">
              <strong>M.S. Industrial Engineering</strong>
              <span>University of Illinois Urbana-Champaign</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Portrait and decision-system motif">
            <div className="signal signal-1"><span>DATA</span></div>
            <div className="signal signal-2"><span>MODEL</span></div>
            <div className="signal signal-3"><span>SIMULATE</span></div>
            <div className="signal signal-4"><span>OPTIMIZE</span></div>
            <div className="signal signal-5"><span>DECIDE</span></div>
            <div className="portrait-frame">
              <img src="/abishek-professional.jpg" alt="Abishek Singanur Aswan Kumar" width="896" height="1195" fetchPriority="high" decoding="async" />
              <div className="portrait-overlay"><span>ME / OR / AI</span><strong>BUILDING<br />BETTER SYSTEMS</strong></div>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#decision-system">Scroll to the system ↓</a>
      </section>

      <SectionShell eyebrow="How I work" title={<>From operational data to <em>better decisions.</em></>} className="decision-section">
        <div id="decision-system" className="decision-flow">
          {decisionStages.map(([stage, label, detail], i) => (
            <div className="decision-stage" key={stage}>
              <div className="stage-top"><span className="stage-number">0{i + 1}</span><span className="stage-arrow">→</span></div>
              <h3>{stage}</h3>
              <strong>{label}</strong>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <section className="evidence-section">
        <div className="section-inner">
          <p className="eyebrow light">Evidence from the work</p>
          <h2>Proof is in the system.</h2>
          <div className="evidence-wall">
            {evidence.map((item) => (
              <a key={item.slug} href={`/projects/${item.slug}/`} className={`evidence-item evidence-${item.accent}`} aria-label={`Open ${item.project}`}>
                <strong>{item.value}</strong>
                <p>{item.label}</p>
                <div className="evidence-source">
                  <span>{item.origin}</span>
                  <b>{item.project} →</b>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SectionShell eyebrow="Selected work" title={<>Different systems. Different mathematics. <em>Same decision mindset.</em></>} className="selected-work">
        <div id="selected-work" className="feature-grid">
          {featuredWork.slice(0, 5).map((project, index) => <ProjectFeature key={project.slug} project={project} index={index} />)}
        </div>
        <div className="section-action"><a className="btn btn-dark" href="/projects/">Explore all {projects.length} projects →</a></div>
      </SectionShell>

      <SectionShell eyebrow="Experience" title={<>Engineering in <em>classrooms, operations, and software.</em></>} className="experience-section">
        <div className="experience-list">
          <article><span>Fall 2026</span><div><p>University of Illinois Urbana-Champaign</p><h3>Teaching Assistant — IE 360</h3><small>Facilities Planning and Design · Python · Gurobi · student instruction</small></div></article>
          <article><span>2026 — present</span><div><p>VDart</p><h3>Recruitment Analytics / Gen AI</h3><small>Semi-structured operational information → structured systems</small></div></article>
          <article><span>2023</span><div><p>Tractor and Farm Equipment Ltd.</p><h3>Engineering Intern</h3><small>Casting operations · throughput · yield · process redesign</small></div></article>
        </div>
        <div className="section-action"><a className="text-link" href="/experience/">Full experience →</a></div>
      </SectionShell>

      <section className="currently-section">
        <div className="section-inner">
          <p className="eyebrow light">Currently</p>
          <h2>The work is still moving.</h2>
          <div className="current-grid">
            {currentWork.map((project) => (
              <article key={project.slug}>
                <span>{project.origin}</span>
                <h3>{project.shortTitle}</h3>
                <p>{project.currentState}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionShell eyebrow="Research & academic depth" title={<>Physical systems. Computational systems. <em>Serious inquiry.</em></>} className="research-section">
        <div className="research-grid">
          {[airline, chuck, virtualED].map((project) => (
            <article key={project.slug}>
              <div className="research-meta"><span>{project.status}</span><span>{project.primaryDomain}</span></div>
              <h3>{project.shortTitle}</h3>
              <p>{project.currentState}</p>
            </article>
          ))}
        </div>
        <div className="section-action"><a className="text-link" href="/research/">Explore research →</a></div>
      </SectionShell>

      <section className="domains-section">
        <div className="section-inner">
          <p className="eyebrow light">Independent engineering</p>
          <h2>Explore the work by system.</h2>
          <div className="domain-list">
            {domainOrder.map(([label, domains]) => {
              const methodSet = new Set(independentProjects.filter((p) => (domains as string[]).includes(p.primaryDomain)).flatMap((p) => p.mathMethods));
              return (
                <a href="/projects/" key={label as string}>
                  <strong>{label as string}</strong>
                  <span>{Array.from(methodSet).slice(0, 4).join(" · ") || "Methods listed on the project record"}</span>
                  <b>→</b>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <SectionShell eyebrow="Education journey" title={<>Mechanical systems → data → <em>decisions.</em></>} className="education-section">
        <div className="education-journey">
          <article><span>01</span><p>Physical systems</p><h3>B.E. Mechanical Engineering</h3><small>College of Engineering Guindy · Anna University</small></article>
          <div className="journey-arrow">→</div>
          <article><span>02</span><p>Data & computation</p><h3>Programming & Data Science</h3><small>Indian Institute of Technology Madras</small></article>
          <div className="journey-arrow">→</div>
          <article><span>03</span><p>Operations & decisions</p><h3>M.S. Industrial Engineering</h3><small>University of Illinois Urbana-Champaign</small></article>
        </div>
        <div className="section-action"><a className="text-link" href="/education/">Education details →</a></div>
      </SectionShell>

      <SectionShell eyebrow="Technical depth" title={<>Methods should be <em>traceable to real work.</em></>} className="depth-section">
        <div className="depth-grid">
          <article><h3>Operations Research</h3><p>LP · MILP · Robust Optimization · Stochastic Optimization · Convex Optimization · Multi-objective Optimization</p></article>
          <article><h3>Simulation & Systems</h3><p>Discrete-event Simulation · Monte Carlo · Networks · Scenario Analysis · Markov / Regime Models</p></article>
          <article><h3>Data & AI</h3><p>Machine Learning · Forecasting · Classification · Information Extraction · LLM Decision Support</p></article>
          <article><h3>Industrial Engineering</h3><p>Manufacturing Systems · Quality · Reliability · Lean Six Sigma · DOE · Process Improvement</p></article>
        </div>
      </SectionShell>

      <section className="about-strip">
        <div className="section-inner about-grid">
          <p className="eyebrow">Why this combination?</p>
          <p className="about-copy">Mechanical engineering taught me to understand physical systems. Data science taught me to extract information from them. Industrial engineering and operations research gave me the tools to make better decisions inside them.</p>
          <a className="text-link" href="/about/">More about me →</a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-inner">
          <p className="eyebrow light">Get in touch</p>
          <h2>Systems are complex.<br /><em>Decisions don't have to be.</em></h2>
          <div className="footer-links">
            <a href="mailto:as273@illinois.edu">Email ↗</a>
            <a href="https://linkedin.com/in/abishek-sa-kumar" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/abishek21sa-sketch" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="/Abishek_Kumar_Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
          </div>
          <div className="footer-bottom"><strong>Abishek SA Kumar</strong><span>Industrial Engineering · Operations Research · AI</span></div>
        </div>
      </footer>
    </main>
  );
}
