import type { Metadata } from "next";
import { experiences } from "../../data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Teaching, recruitment analytics and AI systems, manufacturing engineering, and operational work experience.",
};

const primary = experiences.filter((experience) => experience.prominence === "primary");
const secondary = experiences.filter((experience) => experience.prominence === "secondary");

export default function ExperiencePage() {
  return (
    <main id="main-content" className="experience-page">
      <section className="experience-hero">
        <div className="experience-inner">
          <a className="back-link" href="/">← Home</a>
          <p className="eyebrow light">Experience</p>
          <div className="experience-hero-grid">
            <div>
              <h1>Work where <em>models meet operations.</em></h1>
            </div>
            <div className="experience-hero-copy">
              <p>
                Teaching, data systems, and factory operations have given me different views of the same problem:
                how to understand a system well enough to improve the decisions inside it.
              </p>
              <div className="experience-axis">
                <span>TEACH</span><b>→</b><span>BUILD</span><b>→</b><span>ANALYZE</span><b>→</b><span>IMPROVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-principles">
        <div className="experience-inner">
          <div className="experience-principle-grid">
            <article><span>01</span><h2>Explain clearly.</h2><p>Translate technical ideas, assumptions, and tools into reasoning another person can use.</p></article>
            <article><span>02</span><h2>Structure the mess.</h2><p>Turn fragmented operational information into validated data, systems, and workflows.</p></article>
            <article><span>03</span><h2>Quantify impact.</h2><p>Connect engineering changes to throughput, material use, reliability, and operational outcomes.</p></article>
          </div>
        </div>
      </section>

      <section className="experience-timeline-section">
        <div className="experience-inner">
          <p className="eyebrow">Primary experience</p>
          <h2 className="experience-section-title">Different environments. <em>One engineering mindset.</em></h2>
          <div className="experience-timeline">
            {primary.map((experience, index) => (
              <article className={`experience-story experience-story-${index + 1}`} key={experience.slug}>
                <div className="experience-story-rail">
                  <span>{experience.period}</span>
                  <strong>{experience.kind}</strong>
                  <small>{experience.location}</small>
                </div>
                <div className="experience-story-main">
                  <p className="experience-org">{experience.organization}</p>
                  <h3>{experience.role}</h3>
                  <p className="experience-headline">{experience.headline}</p>
                  <p className="experience-summary">{experience.summary}</p>
                  <div className="experience-focus">
                    {experience.focus.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
                <div className="experience-contrib">
                  <span className="mini-label">What I did</span>
                  <ul>
                    {experience.contributions.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="experience-methods">
                    {experience.methods.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  {experience.confidentiality && <p className="experience-confidentiality">{experience.confidentiality}</p>}
                </div>
                {experience.metrics && (
                  <div className="experience-impact-wall">
                    {experience.metrics.map((metric) => (
                      <div key={metric.value + metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                        {metric.note && <small>{metric.note}</small>}
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-secondary-section">
        <div className="experience-inner">
          <div className="experience-secondary-head">
            <p className="eyebrow">Additional experience</p>
            <h2>Operations also means <em>showing up inside the system.</em></h2>
          </div>
          {secondary.map((experience) => (
            <article className="experience-secondary" key={experience.slug}>
              <div><span>{experience.period}</span><strong>{experience.organization}</strong></div>
              <div><h3>{experience.role}</h3><p>{experience.summary}</p></div>
              <div className="experience-methods">{experience.methods.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-close">
        <div className="experience-inner experience-close-grid">
          <div>
            <p className="eyebrow light">See the technical work</p>
            <h2>Experience tells you where I worked. <em>Projects show how I think.</em></h2>
          </div>
          <div className="experience-close-actions">
            <a className="btn btn-primary" href="/projects/">Explore projects →</a>
            <a className="btn btn-ghost" href="/Abishek_Kumar_Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
          </div>
        </div>
      </section>
    </main>
  );
}