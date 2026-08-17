export function Deployment() {
  const concepts = [
    'Customer-controlled integrations',
    'Explicit permissions',
    'Configurable knowledge sources',
    'Auditable actions',
    'Enterprise deployment options',
  ]

  return (
    <section id="deployment" className="section" aria-labelledby="deployment-title" style={{ backgroundColor: 'var(--color-bg-elevated)' }}>
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Deployment & Ownership</span>
          <h2 id="deployment-title" className="section-title">Built for your environment</h2>
          <p className="section-description">Opnory is designed to run in your infrastructure, under your control, with your policies.</p>
        </header>

        <div className="deployment-grid">
          {concepts.map((concept, idx) => (
            <article key={concept} className="card deployment-card animate-fade-in-up" style={{ animationDelay: `${idx * 0.08}s` }}>
              <div className="deployment-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="deployment-concept">{concept}</h3>
              <p className="deployment-note">Implementation details to be finalized</p>
            </article>
          ))}
        </div>

        <p className="deployment-disclaimer">Deployment models have not been finalized. This section reflects design intent.</p>
      </div>
    </section>
  )
}