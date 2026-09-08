import type { ProjectRecord } from "../types/project";
import type { ProjectDetailContent } from "../types/projectDetail";

export default function ProjectSnapshot({ project, detail }: { project: ProjectRecord; detail?: ProjectDetailContent }) {
  const evidence = detail?.evidence?.length ? detail.evidence : project.strongestEvidence ? [project.strongestEvidence] : [];
  const architecture = detail?.architecture?.length ? detail.architecture : project.methods;
  const evidenceType = project.dataProfile?.type || project.origin;
  const evidenceSource = project.dataProfile?.source || "Project evidence record";

  return (
    <section className="project-snapshot-section">
      <div className="project-detail-inner">
        <div className="snapshot-heading">
          <div>
            <p className="eyebrow">Visual proof</p>
            <h2>Signals that make the system real.</h2>
          </div>
          <span>DATA + DECISION BOARD / {project.slug}</span>
        </div>

        {project.screenshot ? <figure className="project-screenshot"><img src={project.screenshot.src} alt={project.screenshot.alt} /><figcaption><span>{project.screenshot.label}</span><strong>{project.screenshot.caption}</strong></figcaption></figure> : null}

        <div className="project-snapshot-board">
          <div className="snapshot-board-head">
            <span>PROJECT SNAPSHOT</span>
            <strong>{project.primaryDomain}</strong>
          </div>

          <div className="snapshot-board-grid">
            <div className="snapshot-board-title">
              <span>Decision surface</span>
              <h3>{project.shortTitle}</h3>
              <p>{project.decision || project.problem}</p>
              <b>{project.status}</b>
            </div>
            <div className="snapshot-board-metrics">
              {evidence.slice(0, 4).map((item) => (
                <div key={`${item.value}-${item.label}`}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  <small>{item.confidence}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="snapshot-board-flow">
            <span>System flow</span>
            <div>
              {architecture.slice(0, 6).map((step, index) => (
                <strong key={`${step}-${index}`}><i>{String(index + 1).padStart(2, "0")}</i>{step}</strong>
              ))}
            </div>
          </div>

          <div className="snapshot-board-footer">
            <span>{evidenceType}</span>
            <strong>{evidenceSource}</strong>
            <small>Portfolio evidence is labeled by confidence and kept separate from modeled or future claims.</small>
          </div>
        </div>
      </div>
    </section>
  );
}
