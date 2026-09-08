"use client";

import { useMemo, useState } from "react";
import type { ProjectRecord } from "../types/project";

type Lens = "Domain" | "Methods" | "Tech Stack" | "AI & Data" | "Origin" | "Maturity";

const lenses: Lens[] = ["Domain", "Methods", "Tech Stack", "AI & Data", "Origin", "Maturity"];

function valuesFor(project: ProjectRecord, lens: Lens): string[] {
  switch (lens) {
    case "Domain": return [project.primaryDomain, ...project.secondaryDomains];
    case "Methods": return [...project.methods, ...project.ieConcepts, ...project.mathMethods];
    case "Tech Stack": return project.techStack;
    case "AI & Data": return project.aiData;
    case "Origin": return [project.origin];
    case "Maturity": return [project.status];
  }
}

function uniqueValues(projects: ProjectRecord[], lens: Lens) {
  const counts = new Map<string, number>();
  projects.forEach((project) => {
    [...new Set(valuesFor(project, lens))].forEach((value) => {
      if (!value) return;
      counts.set(value, (counts.get(value) || 0) + 1);
    });
  });
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([value]) => value);
}

export default function ProjectExplorer({ projects, flagshipSlugs }: { projects: ProjectRecord[]; flagshipSlugs?: string[] }) {
  const [lens, setLens] = useState<Lens>("Domain");
  const [active, setActive] = useState<string>("All");
  const options = useMemo(() => uniqueValues(projects, lens), [projects, lens]);
  const visible = useMemo(() => active === "All" ? projects : projects.filter((p) => valuesFor(p, lens).includes(active)), [projects, lens, active]);
  const flagshipSet = useMemo(() => new Set(flagshipSlugs || []), [flagshipSlugs]);
  const flagshipVisible = visible.filter((project) => flagshipSet.has(project.slug));
  const supportingVisible = visible.filter((project) => !flagshipSet.has(project.slug));

  function chooseLens(next: Lens) {
    setLens(next);
    setActive("All");
  }

  function renderCard(project: ProjectRecord) {
    return (
      <a href={`/projects/${project.slug}/`} className="project-index-card" key={project.slug}>
        <div className="project-index-meta">
          <span>{project.origin}</span>
          <b>{project.status}</b>
        </div>
        <h3>{project.shortTitle}</h3>
        <p>{project.problem}</p>
        <div className="project-index-proof">
          {project.strongestEvidence ? (
            <><strong>{project.strongestEvidence.value}</strong><span>{project.strongestEvidence.label}</span></>
          ) : (
            <><strong>{project.primaryDomain}</strong><span>{project.currentState}</span></>
          )}
        </div>
        <div className="project-index-methods">{project.methods.slice(0, 4).join(" · ") || "Scope being defined"}</div>
        {project.githubLinks?.length ? <span className="project-index-repo">GitHub code available</span> : null}
        <span className="project-open">Open project →</span>
      </a>
    );
  }

  return (
    <div className="project-explorer">
      <div className="lens-tabs" role="group" aria-label="Project exploration lens">
        {lenses.map((item) => (
          <button key={item} className={item === lens ? "active" : ""} aria-pressed={item === lens} onClick={() => chooseLens(item)} type="button">
            {item}
          </button>
        ))}
      </div>

      <div className="filter-rail" role="group" aria-label={`${lens} filters`}>
        <button type="button" className={active === "All" ? "active" : ""} aria-pressed={active === "All"} onClick={() => setActive("All")}>All work</button>
        {options.map((option) => (
          <button type="button" key={option} className={active === option ? "active" : ""} aria-pressed={active === option} onClick={() => setActive(option)}>{option}</button>
        ))}
      </div>

      <div className="explorer-readout" aria-live="polite">
        <span>{lens}</span>
        <strong>{active === "All" ? "All work" : active}</strong>
        <p>{visible.length} {visible.length === 1 ? "project" : "projects"} shown. Origin and maturity stay visible even when the collection is reorganized by another lens.</p>
      </div>

      {flagshipSlugs ? (
        <>
          {flagshipVisible.length > 0 && <><div className="project-index-group-label">Flagship systems · {flagshipVisible.length}</div><div className="project-index-grid">{flagshipVisible.map(renderCard)}</div></>}
          {supportingVisible.length > 0 && <><div className="project-index-group-label">Supporting work · {supportingVisible.length}</div><div className="project-index-grid">{supportingVisible.map(renderCard)}</div></>}
        </>
      ) : (
        <div className="project-index-grid">{visible.map(renderCard)}</div>
      )}
    </div>
  );
}
