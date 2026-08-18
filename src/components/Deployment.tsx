export function Deployment() {
  return (
    <section id="deployment" className="section" aria-labelledby="deployment-title" style={{ backgroundColor: 'var(--color-bg-elevated)' }}>
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Two Editions</span>
          <h2 id="deployment-title" className="section-title">Choose how you run Opnory</h2>
          <p className="section-description">Same product, different operational models. Pick the one that fits your team.</p>
        </header>

        <div className="editions-grid">
          {/* Opnory Open Source */}
          <article className="card edition-card edition-opensource" style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid var(--color-border)',
          }}>
            <div className="edition-header" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-md)',
              marginBottom: 'var(--space-lg)',
              paddingBottom: 'var(--space-md)',
              borderBottom: '1px solid var(--color-border)',
            }}>
              <div className="edition-badge edition-badge-opensource" style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: 'var(--space-xs) var(--space-sm)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 600,
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-accent-muted)',
                color: 'var(--color-accent)',
                border: '1px solid var(--color-accent-border)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                Open Source
              </div>
              <span className="edition-license" style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-mono)',
              }}>
                BSD-2-Clause
              </span>
            </div>

            <h3 className="edition-name" style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-md)',
            }}>
              Opnory Open Source
            </h3>

            <p className="edition-description" style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-relaxed)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-lg)',
              flex: 1,
            }}>
              Self-host Opnory in your own infrastructure. Full control over deployment, data, and operations.
            </p>

            <ul className="edition-features" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-sm)',
              marginBottom: 'var(--space-xl)',
            }}>
              <li className="edition-feature" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-sm)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-secondary)',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Run on your infrastructure (VM, Kubernetes, bare metal)
              </li>
              <li className="edition-feature" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-sm)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-secondary)',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Your data never leaves your environment
              </li>
              <li className="edition-feature" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-sm)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-secondary)',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                BSD-2-Clause — permissive, commercial-friendly
              </li>
              <li className="edition-feature" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-sm)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-secondary)',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Community support via GitHub
              </li>
            </ul>

            <a
              href="https://github.com/opnory"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary edition-link"
              style={{
                textAlign: 'center',
                alignSelf: 'stretch',
              }}
            >
              View on GitHub
            </a>
          </article>

          {/* Opnory Cloud */}
          <article className="card edition-card edition-cloud" style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid var(--color-accent-border)',
            background: 'linear-gradient(180deg, var(--color-accent-muted) 0%, var(--color-bg-elevated) 100%)',
          }}>
            <div className="edition-header" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-md)',
              marginBottom: 'var(--space-lg)',
              paddingBottom: 'var(--space-md)',
              borderBottom: '1px solid var(--color-accent-border)',
            }}>
              <div className="edition-badge edition-badge-cloud" style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: 'var(--space-xs) var(--space-sm)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 600,
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-bg)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                Early Access
              </div>
              <span className="edition-license" style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-mono)',
              }}>
                Subscription
              </span>
            </div>

            <h3 className="edition-name" style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-md)',
            }}>
              Opnory Cloud
            </h3>

            <p className="edition-description" style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-relaxed)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-lg)',
              flex: 1,
            }}>
              Managed Opnory hosted on third-party cloud infrastructure. We operate it; you use it.
            </p>

            <ul className="edition-features" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-sm)',
              marginBottom: 'var(--space-xl)',
            }}>
              <li className="edition-feature" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-sm)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-secondary)',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Zero operational overhead — we run it
              </li>
              <li className="edition-feature" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-sm)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-secondary)',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Automatic updates and security patches
              </li>
              <li className="edition-feature" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-sm)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-secondary)',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Managed integrations and API maintenance
              </li>
              <li className="edition-feature" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-sm)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-secondary)',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Email support included during early access
              </li>
            </ul>

            <button
              className="btn btn-primary edition-link"
              style={{
                textAlign: 'center',
                alignSelf: 'stretch',
              }}
              onClick={() => window.location.href = 'mailto:hello@opnory.com?subject=Opnory%20Cloud%20Early%20Access'}
            >
              Request Early Access
            </button>

            <p className="edition-note" style={{
              marginTop: 'var(--space-md)',
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-text-muted)',
              textAlign: 'center',
            }}>
              Early access — limited availability
            </p>
          </article>
        </div>

        <p className="editions-summary" style={{
          marginTop: 'var(--space-2xl)',
          textAlign: 'center',
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-text-secondary)',
          maxWidth: '700px',
          margin: 'var(--space-2xl) auto 0',
          lineHeight: 'var(--line-height-relaxed)',
        }}>
          Both editions share the same core product. Open Source gives you operational control.
          Cloud gives you operational freedom. Choose per environment or migrate between them.
        </p>
      </div>
    </section>
  )
}