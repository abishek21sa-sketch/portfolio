import type { Metadata } from "next";
import { awards, leadership } from "../../data/profile";

export const metadata: Metadata = {
  title: "About",
  description: "How mechanical engineering, data science, industrial engineering, operations research, and AI come together in Abishek SA Kumar’s work.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="about-hub-page">
      <section className="about-hub-hero">
        <div className="about-hub-inner">
          <a className="back-link" href="/">← Home</a>
          <p className="eyebrow light">About</p>
          <h1>I like systems that are <em>messy enough to matter.</em></h1>
          <p className="about-deck">I’m an industrial engineering graduate student working across operations research, manufacturing, data, simulation, and AI. The common thread is not a particular technology—it is the decision hidden inside a complicated system.</p>
        </div>
      </section>

      <section className="about-story-section">
        <div className="about-hub-inner about-story-grid">
          <div><p className="eyebrow">The path</p><h2>From machines to models to decisions.</h2></div>
          <div className="about-story-copy">
            <p><strong>Mechanical Engineering</strong> taught me to reason about physical systems: mechanisms, manufacturing processes, vibration, metrology, and design.</p>
            <p><strong>Data Science</strong> added computation: programming, databases, machine learning, and the ability to extract information from operational data.</p>
            <p><strong>Industrial Engineering and Operations Research</strong> gave that work a decision layer: optimization, simulation, uncertainty, flow, quality, reliability, and system-level trade-offs.</p>
            <p>The portfolio is where those layers meet. Some projects are physical. Some are mathematical. Some are software. The goal is the same: understand enough of the system to make a better decision.</p>
          </div>
        </div>
      </section>

      <section className="about-working-section">
        <div className="about-hub-inner">
          <p className="eyebrow light">How I like to work</p>
          <div className="about-working-grid">
            <article><span>01</span><h3>Evidence before polish.</h3><p>A clean interface matters, but it should sit on top of a model, dataset, or engineering argument that can be inspected.</p></article>
            <article><span>02</span><h3>Math where math helps.</h3><p>Use optimization, simulation, statistics, and ML because they improve the decision—not because a project needs more buzzwords.</p></article>
            <article><span>03</span><h3>Build the usable layer.</h3><p>A technically correct model becomes more valuable when someone can test assumptions, compare scenarios, and understand the recommendation.</p></article>
          </div>
        </div>
      </section>

      <section className="about-leadership-section">
        <div className="about-hub-inner">
          <p className="eyebrow">Leadership</p>
          <h2>Technical work is still <em>people work.</em></h2>
          <div className="leadership-list">{leadership.map((item) => <article key={item.role}><div><strong>{item.role}</strong><span>{item.organization}</span></div><p>{item.detail}</p></article>)}</div>
        </div>
      </section>

      <section className="about-awards-section">
        <div className="about-hub-inner about-awards-grid">
          <div><p className="eyebrow light">Selected recognition</p><h2>Competition, communication, and sport.</h2></div>
          <div>{awards.map((award) => <p key={award}>{award}</p>)}</div>
        </div>
      </section>

      <section className="about-close">
        <div className="about-hub-inner about-close-grid">
          <h2>The shortest version: <em>I build decision systems for real operations.</em></h2>
          <div><a className="btn btn-primary" href="/projects/">Projects →</a><a className="btn btn-ghost" href="/Abishek_Kumar_Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a></div>
        </div>
      </section>
    </main>
  );
}
