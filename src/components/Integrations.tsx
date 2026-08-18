interface IntegrationItem {
  name: string;
  status: string;
  note?: string;
}

interface IntegrationCategory {
  title: string;
  items: IntegrationItem[];
}

export function Integrations() {
  const categories: IntegrationCategory[] = [
    {
      title: 'Communication',
      items: [
        { name: 'Slack', status: 'Planned', note: 'Primary workplace interface' },
      ],
    },
    {
      title: 'Identity',
      items: [
        { name: 'Microsoft Entra ID', status: 'Planned' },
        { name: 'Okta', status: 'Planned' },
      ],
    },
    {
      title: 'Service Management',
      items: [
        { name: 'Jira Service Management', status: 'Planned' },
        { name: 'ServiceNow', status: 'Planned' },
      ],
    },
    {
      title: 'Developer',
      items: [
        { name: 'GitHub', status: 'Planned' },
      ],
    },
    {
      title: 'Cloud & SaaS',
      items: [
        { name: 'AWS', status: 'Planned' },
        { name: 'Google Workspace', status: 'Planned' },
        { name: 'Other approved internal systems', status: 'Planned' },
      ],
    },
  ]

  return (
    <section id="integrations" className="section" aria-labelledby="integrations-title" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Integrations</span>
          <h2 id="integrations-title" className="section-title">Designed to connect with the systems your IT team already operates</h2>
          <p className="section-description">Opnory is being built to integrate with your existing stack — not a separate platform to manage.</p>
        </header>

        <div className="integrations-grid">
          {categories.map((category, idx) => (
            <div key={category.title} className="card integration-category animate-fade-in-up" style={{ animationDelay: `${idx * 0.08}s` }}>
              <h3 className="integration-category-title">{category.title}</h3>
              <ul className="integration-items">
                {category.items.map((item) => (
                  <li key={item.name} className="integration-item">
                    <span className="integration-name">{item.name}</span>
                    {item.note && <span className="integration-note">{item.note}</span>}
                    <span className={`integration-status integration-status-${item.status.toLowerCase()}`}>{item.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="integrations-note">All integrations listed are planned or in early development. Availability and scope will vary during early access.</p>
      </div>
    </section>
  )
}