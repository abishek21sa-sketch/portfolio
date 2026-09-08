export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page">
      <div className="not-found-inner">
        <p className="eyebrow">404 · Not found</p>
        <h1>This route does not exist.</h1>
        <p>The portfolio is still evolving, but this URL is not part of the current site.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="/projects/">Explore projects</a>
          <a className="btn btn-dark" href="/">Return home</a>
        </div>
      </div>
    </main>
  );
}
