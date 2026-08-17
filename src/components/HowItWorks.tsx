export function HowItWorks() {
  const steps = [
    { label: 'Employee asks Opnory', description: 'A question or request in Slack' },
    { label: 'Understand request', description: 'Parse intent and context' },
    { label: 'Company knowledge first', description: 'Search internal docs and policies' },
    { label: 'Approved external sources', description: 'Vendor docs, APIs when needed' },
    { label: 'Answer or identify action', description: 'Resolve, guide, or prepare request' },
    { label: 'Policy / identity validation', description: 'Check permissions, approvals required' },
    { label: 'Resolve, request, or escalate', description: 'Complete the loop with audit trail' },
  ]

  return (
    <section id="how-it-works" className="section" aria-labelledby="how-it-works-title" style={{ backgroundColor: 'var(--color-bg-elevated)' }}>
      <div className="container">
        <header className="section-header">
          <span className="section-badge">How It Works</span>
          <h2 id="how-it-works-title" className="section-title">From question to resolution</h2>
          <p className="section-description">A streamlined flow that respects your organization's policies and identity systems at every step.</p>
        </header>

        <div className="workflow">
          {steps.map((step, idx) => (
            <div key={step.label} className="workflow-step animate-fade-in-up" style={{ animationDelay: `${idx * 0.08}s` }}>
              <div className="step-content">
                <div className="step-number">{idx + 1}</div>
                <div className="step-text">
                  <p className="step-label">{step.label}</p>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="step-connector" />
              )}
            </div>
          ))}

          <p className="workflow-note">Each step is auditable. Your identity and policy systems remain the authority.</p>
        </div>
      </div>
    </section>
  )
}