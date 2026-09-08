import type { ProjectRecord } from "../types/project";
import type { ProjectDetailContent } from "../types/projectDetail";
import ProjectSnapshot from "./ProjectSnapshot";

function framing(project: ProjectRecord) {
  switch (project.origin) {
    case "Research": return { kicker: "Research", problem: "Research question / problem", approach: "Methodology", state: "Research state" };
    case "Independent Study": return { kicker: "Independent Study", problem: "Study context", approach: "Study workflow", state: "Study state" };
    case "Industry": return { kicker: "Industry Work", problem: "Operational problem", approach: "What I did", state: "Work state" };
    case "UIUC Course":
    case "IIT Madras Course": return { kicker: "Academic Project", problem: "Course problem", approach: "Method", state: "Project state" };
    case "Undergraduate Engineering": return { kicker: "Engineering Project", problem: "Engineering problem", approach: "Design / test path", state: "Project state" };
    default: return { kicker: "Independent Engineering", problem: "Decision problem", approach: "System logic", state: "Current state" };
  }
}

export default function ProjectDetailPage({ project, detail }: { project: ProjectRecord; detail?: ProjectDetailContent }) {
  const frame = framing(project);
  const evidence = detail?.evidence?.length ? detail.evidence : project.strongestEvidence ? [project.strongestEvidence] : [];
  const architecture = detail?.architecture?.length ? detail.architecture : project.methods.slice(0, 6);

  return (
    <main id="main-content" className={`project-detail origin-${project.origin.toLowerCase().replaceAll(" ", "-")}`}>
      <section className="project-hero-detail">
        <div className="project-detail-inner">
          <a className="back-link" href="/projects/">← Projects</a>
          <div className="project-hero-meta"><span>{frame.kicker}</span><span>{project.primaryDomain}</span><span>{project.status}</span></div>
          <h1>{project.shortTitle}</h1>
          <p className="project-deck">{detail?.intro || project.problem}</p>
          <div className="project-hero-facts">
            <div><span>Origin</span><strong>{project.origin}</strong></div>
            <div><span>Context</span><strong>{project.institutionOrCompany || "Independent"}</strong></div>
            <div><span>Period</span><strong>{project.period || "Portfolio project"}</strong></div>
            <div><span>Maturity</span><strong>{project.status}</strong></div>
          </div>
        </div>
      </section>

      <section className="project-section project-problem-section">
        <div className="project-detail-inner project-two-col">
          <div><p className="eyebrow">{frame.problem}</p><h2>{project.problem}</h2></div>
          <div className="project-side-copy">
            {detail?.context && <p>{detail.context}</p>}
            {(detail?.decisionQuestion || project.decision) && <div className="decision-question"><span>Decision</span><strong>{detail?.decisionQuestion || project.decision}</strong></div>}
            {project.whyItMatters && <p>{project.whyItMatters}</p>}
          </div>
        </div>
      </section>

      {evidence.length > 0 && (
        <section className="project-proof-strip">
          <div className="project-detail-inner">
            <p className="eyebrow light">Evidence available now</p>
            <div className="project-proof-grid">
              {evidence.map((item, i) => <div key={`${item.value}-${i}`}><strong>{item.value}</strong><p>{item.label}</p><span>{item.confidence}</span></div>)}
            </div>
          </div>
        </section>
      )}

      <ProjectSnapshot project={project} detail={detail} />

      <section className="project-section">
        <div className="project-detail-inner">
          <p className="eyebrow">{frame.approach}</p>
          <h2>How the work is structured.</h2>
          {detail?.approach?.length ? (
            <div className="project-approach-grid">{detail.approach.map((step, i) => <article key={step.title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
          ) : (
            <div className="project-approach-grid">{project.methods.map((method, i) => <article key={method}><span>{String(i + 1).padStart(2, "0")}</span><h3>{method}</h3><p>This method is part of the current project scope. More implementation evidence will be added from the latest runnable repository.</p></article>)}</div>
          )}
        </div>
      </section>

      {architecture.length > 0 && (
        <section className="project-section project-architecture-section">
          <div className="project-detail-inner">
            <p className="eyebrow">System / analytical flow</p>
            <div className="architecture-flow">{architecture.map((step, i) => <div key={`${step}-${i}`}><span>{String(i + 1).padStart(2, "0")}</span><strong>{step}</strong>{i < architecture.length - 1 && <b>→</b>}</div>)}</div>
          </div>
        </section>
      )}

      <section className="project-section technical-ledger-section">
        <div className="project-detail-inner">
          <p className="eyebrow">Technical ledger</p>
          <h2>What sits underneath the story.</h2>
          <div className="technical-ledger">
            <article><span>Methods</span><p>{project.methods.join(" · ") || "To be finalized from the implementation."}</p></article>
            <article><span>IE / systems</span><p>{project.ieConcepts.join(" · ") || "To be finalized from the implementation."}</p></article>
            <article><span>Math / OR</span><p>{project.mathMethods.join(" · ") || "No separate mathematical-programming claim is currently made."}</p></article>
            <article><span>Technology</span><p>{project.techStack.join(" · ") || "Stack will be published after implementation is frozen."}</p></article>
            <article><span>AI & data</span><p>{project.aiData.join(" · ") || "No AI-specific claim is currently made."}</p></article>
            <article><span>Data</span><p>{project.dataProfile ? [project.dataProfile.type, project.dataProfile.source, project.dataProfile.scale].filter(Boolean).join(" · ") : "Data provenance will be added from the latest verified project artifacts."}</p></article>
          </div>
        </div>
      </section>

      {detail?.contribution?.length ? <section className="project-section"><div className="project-detail-inner project-two-col"><div><p className="eyebrow">My contribution</p><h2>What I personally owned.</h2></div><ul className="project-list">{detail.contribution.map(x => <li key={x}>{x}</li>)}</ul></div></section> : null}

      {detail?.validation?.length ? <section className="project-section validation-section"><div className="project-detail-inner project-two-col"><div><p className="eyebrow">Validation</p><h2>What the current evidence supports.</h2></div><ul className="project-list">{detail.validation.map(x => <li key={x}>{x}</li>)}</ul></div></section> : null}

      {(project.liveLinks?.length || project.githubLinks?.length) ? <section className="project-section project-repository-section"><div className="project-detail-inner project-two-col"><div><p className="eyebrow">{project.liveLinks?.length ? "Live build + repository" : "Code / repository"}</p><h2>{project.liveLinks?.length ? "See it working. Read the implementation." : "Read the implementation."}</h2><p className="project-repository-note">Public links are included where the matching live build or project repository is available.</p></div><div className="project-link-groups">
        {project.liveLinks?.length ? <div className="project-live-links"><span className="project-link-label">Live frontend</span>{project.liveLinks.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer"><span>{link.label}</span><strong>↗</strong></a>)}</div> : null}
        {project.githubLinks?.length ? <div className="project-repository-links"><span className="project-link-label">Source code</span>{project.githubLinks.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer"><span>{link.label}</span><strong>↗</strong></a>)}</div> : null}
      </div></div></section> : null}

      {detail?.publication && <section className="project-publication"><div className="project-detail-inner"><p className="eyebrow light">Publication</p><h2>{detail.publication.venue}</h2><div><strong>{detail.publication.year}</strong>{detail.publication.doi && <a href={`https://doi.org/${detail.publication.doi}`} target="_blank" rel="noreferrer">DOI {detail.publication.doi} ↗</a>}</div></div></section>}

      <section className="project-section project-state-section">
        <div className="project-detail-inner project-state-grid">
          <article><p className="eyebrow">{frame.state}</p><h2>{project.status}</h2><p>{project.currentState}</p></article>
          <article><p className="eyebrow">What I am not claiming</p><ul className="project-list compact">{(detail?.limitations?.length ? detail.limitations : ["The page does not claim results, deployment, validation, or data provenance beyond what is currently documented."]).map(x => <li key={x}>{x}</li>)}</ul></article>
          <article><p className="eyebrow">Next evidence update</p><ul className="project-list compact">{(detail?.nextUpdates?.length ? detail.nextUpdates : ["Re-run the latest repository.", "Add reproducible evidence, screenshots, and current metrics.", "Upgrade maturity only when the new evidence supports it."]).map(x => <li key={x}>{x}</li>)}</ul></article>
        </div>
      </section>

      <section className="project-update-ready"><div className="project-detail-inner"><span>UPDATE-READY PAGE</span><p>This page is driven by the canonical project registry. New repository runs can replace metrics, status, architecture, screenshots and evidence without changing the page URL or rebuilding its information architecture.</p><a href="/projects/">Explore all work →</a></div></section>
    </main>
  );
}
