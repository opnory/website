import { useEffect, useState } from 'react'

export function Hero({ onCtaClick }: { onCtaClick?: (section: string) => void }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s var(--transition-slow), transform 0.8s var(--transition-slow)',
        }}>
          <span className="section-badge" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.6s var(--transition-slow) 0.1s, transform 0.6s var(--transition-slow) 0.1s',
          }}>
            AI Service Desk for Modern Teams
          </span>

          <h1 id="hero-title" className="hero-title" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.6s var(--transition-slow) 0.2s, transform 0.6s var(--transition-slow) 0.2s',
          }}>
            Your IT service desk, where your team already works.
          </h1>

          <p className="hero-description" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.6s var(--transition-slow) 0.3s, transform 0.6s var(--transition-slow) 0.3s',
          }}>
            Opnory gives employees instant, company-aware IT support, guides self-service troubleshooting, and turns access requests into governed workflows.
          </p>

          <div className="hero-ctas" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.6s var(--transition-slow) 0.4s, transform 0.6s var(--transition-slow) 0.4s',
          }}>
            <button
              className="btn btn-primary hero-cta"
              onClick={() => onCtaClick?.('early-access')}
            >
              Get Early Access
            </button>
            <a
              href="https://github.com/opnory"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary hero-cta"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>

          <ChatPreview />
        </div>
      </div>

      <div className="hero-background" aria-hidden="true" />
    </section>
  )
}

function ChatPreview() {
  return (
    <div className="chat-preview card">
      <div className="chat-header">
        <div className="chat-avatar">O</div>
        <div>
          <p style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>Opnory</p>
          <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>AI Service Desk</p>
        </div>
      </div>

      <div className="chat-messages">
        <div className="chat-message">
          <div className="message-avatar user">U</div>
          <div className="message-content user">
            I need access to the engineering GitHub organization.
          </div>
        </div>

        <div className="chat-message">
          <div className="message-avatar assistant">O</div>
          <div className="message-content assistant">
            <p style={{ marginBottom: 'var(--space-sm)' }}>I found the <strong>Engineering Contributor</strong> entitlement.</p>
            <p style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-text-secondary)' }}>This provides:</p>
            <ul style={{ marginBottom: 'var(--space-sm)', paddingLeft: 'var(--space-lg)', color: 'var(--color-text-secondary)' }}>
              <li>Access to approved engineering repositories</li>
              <li>Standard contributor permissions</li>
              <li>90-day access period</li>
            </ul>
            <p style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>Manager approval is required.</p>
            <button className="btn btn-primary" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-xs) var(--space-md)' }}>
              Request access
            </button>
          </div>
        </div>
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Ask Opnory..."
          className="chat-input"
          aria-label="Ask Opnory"
        />
        <button className="btn btn-primary" style={{ padding: 'var(--space-sm) var(--space-md)' }} disabled>
          Send
        </button>
      </div>

      <p className="chat-disclaimer">Illustrative example — not a live integration</p>
    </div>
  )
}