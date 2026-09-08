"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  ["Projects", "/projects/"],
  ["Experience", "/experience/"],
  ["Research", "/research/"],
  ["Education", "/education/"],
  ["About", "/about/"],
] as const;

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  function isCurrent(href: string) {
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  }

  return (
    <header className="site-nav">
      <a className="nav-brand" href="/" aria-label="Abishek Singanur Aswan Kumar home">ASA</a>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span className="nav-toggle-label">Menu</span>
      </button>

      <nav id="primary-navigation" className={`nav-links ${open ? "is-open" : ""}`} aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} aria-current={isCurrent(href) ? "page" : undefined}>{label}</a>
        ))}
        <a className="resume-link" href="/Abishek_Kumar_Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
      </nav>
    </header>
  );
}
