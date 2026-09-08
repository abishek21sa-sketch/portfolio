import { ReactNode } from "react";

export function SectionShell({ eyebrow, title, children, className = "" }: { eyebrow?: string; title: ReactNode; children: ReactNode; className?: string; }) {
  return (
    <section className={`section ${className}`}>
      <div className="section-inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
