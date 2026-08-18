export function Examples() {
  const examples = [
    {
      category: 'IT Support',
      status: 'Planned',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 8v4M12 16h.01"></path>
        </svg>
      ),
      messages: [
        { role: 'user', content: '"Why won\'t GlobalProtect connect on my Mac?"' },
        { role: 'assistant', content: 'I found your organization\'s macOS VPN procedure. Let\'s check the system extension first...' },
      ],
    },
    {
      category: 'Knowledge',
      status: 'Planned',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      messages: [
        { role: 'user', content: '"What\'s our process for getting a replacement laptop?"' },
        { role: 'assistant', content: 'According to the IT equipment policy, replacements require manager approval and a ticket in Jira Service Management. Would you like me to start the request?' },
      ],
    },
    {
      category: 'Access',
      status: 'Planned',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      messages: [
        { role: 'user', content: '"I need Figma Editor access."' },
        { role: 'assistant', content: 'I found the Figma Editor entitlement. Manager approval is required. Would you like me to submit the request?' },
      ],
    },
  ]

  return (
    <section id="examples" className="section" aria-labelledby="examples-title" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Example Interactions</span>
          <h2 id="examples-title" className="section-title">Example conversations. Intended outcomes.</h2>
          <p className="section-description">Illustrative examples of how Opnory is designed to work for common scenarios.</p>
        </header>

        <div className="examples-grid">
          {examples.map((example, idx) => (
            <article key={example.category} className="card example-card animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="example-header">
                <div className="example-icon">
                  {example.icon}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                  <h3 className="example-category">{example.category}</h3>
                  <span className="example-status">{example.status}</span>
                </div>
              </div>

              <div className="example-conversation">
                {example.messages.map((msg, msgIdx) => (
                  <div key={msgIdx} className="example-message">
                    <div className={`message-avatar ${msg.role}`}>
                      {msg.role === 'user' ? 'E' : 'O'}
                    </div>
                    <div className={`message-bubble ${msg.role}`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>

              <p className="example-disclaimer">Illustrative — not a live integration</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}