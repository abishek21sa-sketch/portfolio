import { ProjectRecord } from "../types/project";

export function ProjectFeature({ project, index }: { project: ProjectRecord; index: number }) {
  return (
    <article className={`feature feature-${index + 1}`}>
      <div className="feature-meta">
        <span>{project.origin}</span>
        <span>{project.primaryDomain}</span>
      </div>
      <h3>{project.shortTitle}</h3>
      <p className="feature-problem">{project.problem}</p>
      {project.strongestEvidence && (
        <div className="feature-evidence">
          <strong>{project.strongestEvidence.value}</strong>
          <span>{project.strongestEvidence.label}</span>
        </div>
      )}
      <div className="method-line">{project.methods.slice(0, 4).join(" · ")}</div>
      <a href={`/projects/${project.slug}/`} className="text-link">Explore work →</a>
    </article>
  );
}
