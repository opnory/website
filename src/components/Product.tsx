export function Product() {
  const capabilities = [
    {
      icon: 'knowledge',
      title: 'Knowledge',
      subtitle: 'Answers grounded in your company',
      description: 'Opnory searches internal documentation first, helping employees get answers based on the way their organization actually works.',
    },
    {
      icon: 'support',
      title: 'Support',
      subtitle: 'Resolve issues before they become tickets',
      description: 'Guide employees through troubleshooting and self-service steps while escalating problems that need human support.',
    },
    {
      icon: 'access',
      title: 'Access',
      subtitle: 'Make access requests conversational',
      description: 'Employees can request applications, groups, roles, and entitlements without navigating complicated access catalogs.',
    },
    {
      icon: 'actions',
      title: 'Actions',
      subtitle: 'Automate without giving AI the keys',
      description: 'Opnory can initiate approved IT actions while authorization remains with the organization\'s identity and policy systems.',
    },
  ]

  const icons = {
    knowledge: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
    support: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 8v4M12 16h.01"></path>
      </svg>
    ),
    access: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    actions: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
        <line x1="19" y1="12" x2="19" y2="12"></line>
      </svg>
    ),
  }

  return (
    <section id="product" className="section" aria-labelledby="product-title" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Core Capabilities</span>
          <h2 id="product-title" className="section-title">Four ways Opnory helps your team</h2>
          <p className="section-description">Each capability works together to reduce ticket volume, accelerate resolution, and keep access governed.</p>
        </header>

        <div className="capabilities-grid">
          {capabilities.map((capability, idx) => (
            <article key={capability.title} className="card capability-card animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="capability-icon">
                {icons[capability.icon as keyof typeof icons]}
              </div>
              <h3 className="capability-title">{capability.title}</h3>
              <p className="capability-subtitle">{capability.subtitle}</p>
              <p className="capability-description">{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}