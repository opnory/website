import { useState } from 'react'

export function EarlyAccess({ onCtaClick }: { onCtaClick?: (section: string) => void }) {
  const [showContact, setShowContact] = useState(false)

  const handleCtaClick = () => {
    setShowContact(true)
    onCtaClick?.('early-access')
  }

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
            <button
              className="btn btn-primary"
              onClick={handleCtaClick}
            >
              Get Early Access
            </button>
          </div>

          {showContact && (
            <div className="contact-reveal animate-fade-in">
              <h3>Ready to learn more?</h3>
              <p>Reach out directly — we'd love to hear about your use case.</p>
              <a
                href="mailto:hello@opnory.com"
                className="btn btn-secondary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                hello@opnory.com
              </a>
            </div>
          )}

          <p className="early-access-note animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            No forms that go nowhere. Just a direct line to the team building Opnory.
          </p>
        </div>

        <div className="early-access-background" aria-hidden="true" />
      </div>
    </section>
  )
}