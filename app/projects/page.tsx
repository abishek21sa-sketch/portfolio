import type { Metadata } from "next";
import ProjectExplorer from "../../components/ProjectExplorer";
import { flagshipProjects, supportingProjects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore flagship systems and supporting research, industry, course, and undergraduate work by domain, methods, technology, AI/data approach, origin, and maturity.",
};

const spotlight = flagshipProjects.slice(0, 5);

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <section className="projects-hero">
        <div className="project-detail-inner">
          <p className="eyebrow light">Work, organized by what matters</p>
          <h1>Projects</h1>
          <p className="projects-hero-copy">{flagshipProjects.length} flagship systems lead the portfolio. Supporting research, industry, course, and physical-systems work stays available below—kept distinct by origin, then cross-explored by domain, mathematics, technology, data/AI, and maturity.</p>
          <div className="projects-lens-line"><span>DOMAIN</span><b>·</b><span>METHODS</span><b>·</b><span>TECH STACK</span><b>·</b><span>AI & DATA</span><b>·</b><span>ORIGIN</span><b>·</b><span>MATURITY</span></div>
        </div>
      </section>

      <section className="project-section projects-spotlight">
        <div className="project-detail-inner">
          <p className="eyebrow">Start with the strongest evidence</p>
          <h2>Different origins. Different systems. Real technical depth.</h2>
          <div className="spotlight-list">
            {spotlight.map((project, index) => <a href={`/projects/${project.slug}/`} key={project.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><small>{project.origin} · {project.primaryDomain}</small><h3>{project.shortTitle}</h3><p>{project.decision || project.problem}</p></div>
              <div className="spotlight-proof">{project.strongestEvidence ? <><strong>{project.strongestEvidence.value}</strong><small>{project.strongestEvidence.label}</small></> : <strong>{project.status}</strong>}</div>
              <b>→</b>
            </a>)}
          </div>
        </div>
      </section>

      <section className="project-section explorer-section">
        <div className="project-detail-inner">
          <p className="eyebrow">Project explorer</p>
          <h2>Flagship systems first. Supporting work stays in the record.</h2>
          <ProjectExplorer projects={[...flagshipProjects, ...supportingProjects]} flagshipSlugs={flagshipProjects.map((project) => project.slug)} />
        </div>
      </section>
    </main>
  );
}
