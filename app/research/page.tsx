import type { Metadata } from "next";
import { researchRecords } from "../../data/research";

export const metadata: Metadata = {
  title: "Research",
  description: "Formal research in airline operations and mechanical engineering, with independent study kept explicitly separate.",
};

const formalResearch = researchRecords.filter((item) => item.type !== "Independent Study");
const independentStudy = researchRecords.find((item) => item.type === "Independent Study")!;

export default function ResearchPage() {
  return (
    <main id="main-content" className="research-hub-page">
      <section className="research-hub-hero">
        <div className="research-hub-inner">
          <a className="back-link" href="/">← Home</a>
          <p className="eyebrow light">Research</p>
          <h1>Questions first. <em>Methods second.</em></h1>
          <p className="research-hub-deck">My formal research spans computational transportation systems and mechanical engineering. Independent study is shown separately so academic provenance stays explicit.</p>
        </div>
      </section>

      <section className="research-hub-section">
        <div className="research-hub-inner">
          <p className="eyebrow">Formal research</p>
          <div className="research-hub-grid">
            {formalResearch.map((record, index) => (
              <article className={`research-record research-record-${index + 1}`} key={record.slug}>
                <div className="research-record-meta"><span>{record.type}</span><span>{record.period}</span><span>{record.domain}</span></div>
                <h2>{record.title}</h2>
                <div className="research-question"><span>Research question</span><strong>{record.question}</strong></div>
                <p>{record.summary}</p>
                {record.evidence.length > 0 && <div className="research-evidence">{record.evidence.map((metric) => <div key={metric.value + metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>}
                <div className="research-methods">{record.methods.map((method) => <span key={method}>{method}</span>)}</div>
                <div className="research-actions"><a href={record.projectHref}>Open research page →</a>{record.externalHref && <a href={record.externalHref} target="_blank" rel="noreferrer">Publication DOI ↗</a>}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="independent-study-band">
        <div className="research-hub-inner independent-study-grid">
          <div><p className="eyebrow light">Independent study · UIUC</p><h2>{independentStudy.title}</h2></div>
          <div><p>{independentStudy.summary}</p><div className="research-question light-question"><span>Current framing</span><strong>{independentStudy.question}</strong></div><p className="study-state">{independentStudy.currentState}</p><a className="btn btn-primary" href={independentStudy.projectHref}>Open independent study →</a></div>
        </div>
      </section>

      <section className="research-philosophy">
        <div className="research-hub-inner">
          <p className="eyebrow">Research approach</p>
          <h2>Model the system. <em>Interrogate the assumptions.</em></h2>
          <div className="research-philosophy-grid">
            <article><span>01</span><h3>Ground the question.</h3><p>Start from an operational or engineering question rather than a preferred algorithm.</p></article>
            <article><span>02</span><h3>Preserve the evidence.</h3><p>Keep data provenance, assumptions, limitations, and validation visible instead of hiding them behind an interface.</p></article>
            <article><span>03</span><h3>Make results inspectable.</h3><p>Use models, simulations, and software as instruments for reasoning—not substitutes for it.</p></article>
          </div>
        </div>
      </section>
    </main>
  );
}