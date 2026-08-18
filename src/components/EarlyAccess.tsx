export function EarlyAccess() {

  return (
    <section id="early-access" className="section" aria-labelledby="early-access-title" style={{
      backgroundColor: 'var(--color-bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container">
        <div className="early-access-content">
          <header style={{ marginBottom: 'var(--space-2xl)' }}>
            <span className="section-badge animate-fade-in-up">Early Access</span>
            <h2 id="early-access-title" className="section-title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Bring self-service IT into the conversation.
            </h2>
            <p className="section-description animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Opnory is currently in development. We're looking for teams interested in simplifying internal support and access requests.
            </p>
          </header>

          <div className="early-access-cta animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="mailto:hello@opnory.com?subject=Opnory%20Early%20Access"
              className="btn btn-primary"
            >
              Get Early Access
            </a>
          </div>

          <p className="early-access-note animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            No forms that go nowhere. Just a direct line to the team building Opnory.
          </p>
        </div>

        <div className="early-access-background" aria-hidden="true" />
      </div>
    </section>
  )
}