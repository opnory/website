export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" role="contentinfo" style={{
      backgroundColor: 'var(--color-bg-elevated)',
      borderTop: '1px solid var(--color-border)',
      padding: 'var(--space-2xl) 0 var(--space-xl)',
    }}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-wordmark">Opnory</p>
            <p className="footer-description">
              AI Service Desk for modern teams. Company-aware IT support, governed access requests, and self-service automation.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Product links">
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-list">
              <li><a href="#product" className="footer-link">Capabilities</a></li>
              <li><a href="#how-it-works" className="footer-link">How it works</a></li>
              <li><a href="#security" className="footer-link">Security</a></li>
              <li><a href="#integrations" className="footer-link">Integrations</a></li>
              <li><a href="#deployment" className="footer-link">Deployment</a></li>
            </ul>
          </nav>

          <div className="footer-contact">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-list">
              <li>
                <a href="https://github.com/opnory" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:hello@opnory.com" className="footer-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  hello@opnory.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {currentYear} Opnory</p>

          <nav className="footer-legal" aria-label="Legal links">
            <a href="https://github.com/opnory/support/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="footer-link">
              Open Source License
            </a>
            <a href="https://github.com/opnory/support/blob/main/CLOUD_TERMS.md" target="_blank" rel="noopener noreferrer" className="footer-link">
              Cloud Terms
            </a>
            <a href="https://github.com/opnory/support/blob/main/PRIVACY.md" target="_blank" rel="noopener noreferrer" className="footer-link">
              Privacy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}