export function Security() {
  const principles = [
    'Identity-aware requests',
    'Policy-controlled actions',
    'Human approval for sensitive operations',
    'Audit trails',
    'Permission-aware knowledge retrieval',
    'Least-privilege integrations',
  ]

  const architectureSteps = [
    { label: 'Employee', icon: 'user', highlight: false },
    { label: 'Opnory', icon: 'opnory', highlight: true },
    { label: 'Intent + context', icon: 'context', highlight: false },
    { label: 'Policy / identity system', icon: 'policy', highlight: false },
    { label: 'Authorized integration', icon: 'integration', highlight: false },
  ]

  const icons = {
    user: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    opnory: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 8v4M12 16h.01"></path>
      </svg>
    ),
    context: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    ),
    policy: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    integration: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    ),
  }

  return (
    <section id="security" className="section" aria-labelledby="security-title" style={{ backgroundColor: 'var(--color-bg-elevated)' }}>
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Security & Governance</span>
          <h2 id="security-title" className="section-title">AI assists. Your policies decide.</h2>
          <p className="section-description">Opnory is designed so the AI never becomes the authorization system. Opnory is designed so privileged actions flow through your identity and policy infrastructure.</p>
        </header>

        <div className="security-content">
          <div className="security-principles">
            <h3>Design Principles</h3>
            <ul className="principles-list">
              {principles.map((principle, idx) => (
                <li key={principle} className="principle-item animate-slide-in" style={{ animationDelay: `${idx * 0.08}s` }}>
                  <div className="principle-check">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="principle-text">{principle}</span>
                </li>
              ))}
            </ul>

            <blockquote className="security-quote">
              <p>&ldquo;Opnory can recommend and initiate actions. Your identity and policy systems remain the authority.&rdquo;</p>
            </blockquote>
          </div>

          <div className="security-architecture">
            <h3>Architecture Overview</h3>
            <div className="architecture-flow">
              {architectureSteps.map((step, idx) => (
                <div key={step.label} className={`architecture-step ${step.highlight ? 'is-opnory' : ''}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="architecture-icon">
                    {icons[step.icon as keyof typeof icons]}
                  </div>
                  <span className="architecture-label">{step.label}</span>
                  {idx < architectureSteps.length - 1 && (
                    <div className="architecture-arrow">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="architecture-note">No compliance certifications claimed. Security posture evolves with the product.</p>
          </div>
        </div>
      </div>
    </section>
  )
}