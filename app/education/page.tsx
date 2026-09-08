import type { Metadata } from "next";
import { completedCredentials, education } from "../../data/education";

export const metadata: Metadata = {
  title: "Education",
  description: "Mechanical engineering, data science, and industrial engineering education connecting physical systems, computation, and decisions.",
};

export default function EducationPage() {
  return (
    <main id="main-content" className="education-hub-page">
      <section className="education-hub-hero">
        <div className="education-hub-inner">
          <a className="back-link" href="/">← Home</a>
          <p className="eyebrow light">Education</p>
          <h1>Physical systems → data → <em>decisions.</em></h1>
          <p>My education is less a sequence of unrelated degrees than a progression in how I understand systems: first physically, then computationally, then operationally.</p>
        </div>
      </section>

      <section className="education-path-section">
        <div className="education-hub-inner">
          <div className="education-path">
            {education.map((item, index) => (
              <article key={item.institution}>
                <div className="education-stage"><span>0{index + 1}</span><strong>{item.stage}</strong></div>
                <p className="education-period">{item.period}</p>
                <h2>{item.institution}</h2>
                <h3>{item.degree}</h3>
                {item.gpa && <div className="education-gpa"><span>GPA</span><strong>{item.gpa}</strong></div>}
                <p className="education-story">{item.story}</p>
                {item.coursework && <div className="education-coursework"><span>Relevant graduate coursework</span>{item.coursework.map((course) => <p key={course}>{course}</p>)}</div>}
                {item.notes && <div className="education-notes">{item.notes.map((note) => <p key={note}>{note}</p>)}</div>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="education-bridge">
        <div className="education-hub-inner education-bridge-grid">
          <div><p className="eyebrow light">The bridge</p><h2>Mechanical engineering gave me the system. Data science gave me the signal. Industrial engineering gave me the <em>decision.</em></h2></div>
          <div><p>That progression is why the portfolio moves comfortably between machine tools, manufacturing flow, supply chains, healthcare operations, optimization, simulation, and AI-assisted systems.</p><a className="btn btn-primary" href="/projects/">See the work →</a></div>
        </div>
      </section>

      <section className="education-credential-section">
        <div className="education-hub-inner">
          <p className="eyebrow">Completed credentials</p>
          <div className="credential-list">{completedCredentials.map((credential) => <article key={credential}><strong>{credential}</strong><span>Completed</span></article>)}</div>
          <p className="credential-note">Planned certifications are intentionally not presented as earned credentials.</p>
        </div>
      </section>
    </main>
  );
}