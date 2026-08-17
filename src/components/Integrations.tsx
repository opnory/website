export function Integrations() {
  const categories = [
    {
      title: 'Communication',
      items: ['Slack'],
    },
    {
      title: 'Identity',
      items: ['Microsoft Entra ID', 'Okta'],
    },
    {
      title: 'Service Management',
      items: ['Jira Service Management', 'ServiceNow'],
    },
    {
      title: 'Developer',
      items: ['GitHub'],
    },
    {
      title: 'Cloud & SaaS',
      items: ['AWS', 'Google Workspace', 'Other approved internal systems'],
    },
  ]

  return (
    <section id="integrations" className="section" aria-labelledby="integrations-title" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Integrations</span>
          <h2 id="integrations-title" className="section-title">Designed for the systems your IT team already operates</h2>
          <p className="section-description">Opnory integrates with your existing stack — not a separate platform to manage.</p>
        </header>

        <div className="integrations-grid">
          {categories.map((category, idx) => (
            <div key={category.title} className="card integration-category animate-fade-in-up" style={{ animationDelay: `${idx * 0.08}s` }}>
              <h3 className="integration-category-title">{category.title}</h3>
              <ul className="integration-items">
                {category.items.map((item) => (
                  <li key={item} className="integration-item">
                    <svg className="integration-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="integrations-note">Integration availability will vary during early access.</p>
      </div>
    </section>
  )
}