Build the initial production-ready marketing website for **Opnory**.

## Product

**Opnory** is an AI-powered IT service desk designed primarily for Slack.

It helps employees:

- Get answers from their company's internal knowledge base.
- Troubleshoot common IT problems.
- Retrieve current information from approved online/vendor sources when internal documentation is insufficient.
- Request application, role, and entitlement access through governed RBAC workflows.
- Perform approved self-service IT actions.
- Escalate unresolved problems to the company's helpdesk.

The long-term product is broader than Slack, so do not make the brand identity overly dependent on Slack.

Primary positioning:

> **Opnory**  
> AI Service Desk for modern teams.

Alternative supporting copy:

> Company-aware IT support, governed access requests, and self-service automation.

## Goal

Create a polished **one-page launch/coming-soon website** for:

`https://opnory.com`

The site should make Opnory look like a credible enterprise software product even though it is pre-launch.

Do not pretend the product is generally available yet.

The primary CTA should be:

**Get Early Access**

For now, clicking it can scroll to or open a simple contact/interest section rather than requiring a backend.

Also include a secondary CTA:

**View on GitHub**

Point this to:

`https://github.com/opnory`

## Technical requirements

Build this as a static site suitable for **Cloudflare Pages**.

Use:

- TypeScript
- React
- Vite
- Modern CSS
- No backend
- No database
- No paid services
- No unnecessary framework dependencies

The project should build with:

```bash
npm install
npm run build
```

Cloudflare Pages should be able to publish the resulting `dist` directory.

Use a clean repository structure.

Include:

- `README.md`
- `.gitignore`
- `package.json`
- TypeScript configuration
- Vite configuration
- All required source files
- Semantic HTML
- Accessible navigation and controls
- Responsive design

Do not use external stock imagery.

Do not depend on a proprietary UI library.

Use simple SVG/CSS graphics where visual elements are needed.

## Design direction

The website should feel:

- Enterprise
- Technical
- Security-conscious
- Modern
- Minimal
- Calm
- Premium
- Developer-friendly

Avoid:

- Generic AI gradients everywhere
- Chatbot mascots
- Cartoon robots
- Excessive animation
- Huge blobs
- Fake customer logos
- Fake testimonials
- Fake usage numbers
- Fake security certifications
- Fake integrations
- Claims such as "trusted by thousands"

Use strong typography, generous spacing, subtle borders, restrained visual effects, and excellent information hierarchy.

Dark mode may be the default if it looks stronger for the brand.

The brand should communicate:

**knowledge + support + access + action**

## Navigation

Use a compact header containing:

- Opnory wordmark
- Product
- How it works
- Security
- GitHub
- Get Early Access

The navigation items should scroll to their relevant sections.

Use a text-based **Opnory** wordmark for now. Do not invent a complex permanent logo.

## Hero

The hero should immediately explain what Opnory does.

Suggested direction:

### Headline

**Your IT service desk, where your team already works.**

### Supporting text

Opnory gives employees instant, company-aware IT support, guides self-service troubleshooting, and turns access requests into governed workflows.

### CTAs

**Get Early Access**

**View on GitHub**

Include a visual representation of a realistic support interaction.

For example:

```text
You
I need access to the engineering GitHub organization.

Opnory
I found the Engineering Contributor entitlement.

This provides:
• Access to approved engineering repositories
• Standard contributor permissions
• 90-day access period

Manager approval is required.

[Request access]
```

The UI example should clearly be illustrative rather than pretending to be a live integration.

## Product section

Introduce four core capabilities.

### Knowledge

**Answers grounded in your company**

Opnory searches internal documentation first, helping employees get answers based on the way their organization actually works.

### Support

**Resolve issues before they become tickets**

Guide employees through troubleshooting and self-service steps while escalating problems that need human support.

### Access

**Make access requests conversational**

Employees can request applications, groups, roles, and entitlements without navigating complicated access catalogs.

### Actions

**Automate without giving AI the keys**

Opnory can initiate approved IT actions while authorization remains with the organization's identity and policy systems.

Use four polished cards or a similarly strong layout.

## How it works

Show a simple workflow:

```text
Employee asks Opnory
        ↓
Understand request
        ↓
Company knowledge first
        ↓
Approved external sources when needed
        ↓
Answer or identify an action
        ↓
Policy / identity validation
        ↓
Resolve, request, or escalate
```

Visually present this without making it overly complicated.

## Example interactions

Include three realistic examples.

### IT support

**Employee:**  
"Why won't GlobalProtect connect on my Mac?"

**Opnory:**  
"I found your organization's macOS VPN procedure. Let's check the system extension first..."

### Knowledge

**Employee:**  
"What's our process for getting a replacement laptop?"

**Opnory:**  
"According to the IT equipment policy, replacements require..."

### Access

**Employee:**  
"I need Figma Editor access."

**Opnory:**  
"I found the Figma Editor entitlement. Manager approval is required. Would you like me to submit the request?"

These should look like tasteful product UI previews.

## Security section

This section is important.

Headline:

**AI assists. Your policies decide.**

Explain that Opnory is designed so the AI does not become the authorization system.

Highlight principles such as:

- Identity-aware requests
- Policy-controlled actions
- Human approval for sensitive operations
- Audit trails
- Permission-aware knowledge retrieval
- Least-privilege integrations

Include a concise architecture illustration along these lines:

```text
Employee
   ↓
Opnory
   ↓
Intent + context
   ↓
Policy / identity system
   ↓
Authorized integration
```

Include this statement prominently:

> Opnory can recommend and initiate actions. Your identity and policy systems remain the authority.

Do not claim compliance certifications that do not exist.

## Integrations section

Show the kinds of systems Opnory is being designed to work with rather than claiming all are already supported.

Use categories:

**Communication**
- Slack

**Identity**
- Microsoft Entra ID
- Okta

**Service Management**
- Jira Service Management
- ServiceNow

**Developer**
- GitHub

**Cloud & SaaS**
- AWS
- Google Workspace
- Other approved internal systems

Use wording such as:

> Designed for the systems your IT team already operates.

Add a small note:

> Integration availability will vary during early access.

Do not use vendor logos unless using them legally and appropriately. Text labels are sufficient.

## Deployment / ownership section

Because Opnory is intended to eventually be sold as enterprise software rather than a lightweight consumer SaaS, include a section conveying operational ownership.

Headline:

**Built for your environment.**

Supporting concepts:

- Customer-controlled integrations
- Explicit permissions
- Configurable knowledge sources
- Auditable actions
- Enterprise deployment options

Do not commit to deployment models that have not yet been finalized.

## Early access section

Create a strong closing CTA.

Suggested copy:

### Bring self-service IT into the conversation.

Opnory is currently in development. We're looking for teams interested in simplifying internal support and access requests.

CTA:

**Get Early Access**

For the initial static site, clicking this may reveal:

`hello@opnory.com`

and a mailto link.

Do not build a fake form that doesn't send anywhere.

## Footer

Include:

- Opnory
- `© 2026 Opnory`
- GitHub
- `hello@opnory.com`
- Privacy — mark as "Coming soon" if no page exists
- Terms — mark as "Coming soon" if no page exists

Do not invent a street address or legal entity name.

## SEO

Include good metadata:

Title:

`Opnory — AI Service Desk for Modern Teams`

Description:

`Opnory provides company-aware IT support, governed access requests, and self-service automation where employees already work.`

Include:

- Open Graph metadata
- Twitter/social metadata
- Canonical URL for `https://opnory.com`
- Favicon or simple generated mark
- `robots.txt`
- `sitemap.xml`

## Performance

Optimize for excellent Lighthouse performance.

Avoid:

- Large JavaScript bundles
- Large images
- Unnecessary dependencies
- Heavy animation libraries
- Render-blocking third-party resources

Use CSS transitions and lightweight interaction where possible.

## Accessibility

Meet good WCAG practices:

- Proper heading hierarchy
- Keyboard navigation
- Visible focus states
- Adequate contrast
- ARIA only where appropriate
- Respect `prefers-reduced-motion`
- Meaningful link/button labels

## Responsive behavior

The site must look polished on:

- Phone
- Tablet
- Laptop
- Large desktop

Pay particular attention to mobile navigation, cards, conversation previews, and architecture diagrams.

## Content constraints

Do not fabricate:

- Customers
- Revenue
- Employees
- Testimonials
- Case studies
- Availability dates
- Pricing
- Certifications
- Partnerships
- Product statistics

If information is not known, leave it out.

## Deliverable

Create the complete website in the current repository.

Before considering the task complete:

1. Run the build.
2. Fix all TypeScript/build errors.
3. Check for obvious responsive-layout issues.
4. Check accessibility basics.
5. Ensure all navigation links work.
6. Ensure the GitHub link points to `https://github.com/opnory`.
7. Ensure email links use `hello@opnory.com`.
8. Ensure there are no fake claims or placeholder lorem ipsum.
9. Ensure Cloudflare Pages can deploy it using:
   - Build command: `npm run build`
   - Build output: `dist`
10. Update the README with concise instructions for local development and Cloudflare Pages deployment.

Favor a **small, exceptionally polished initial site** over unnecessary features.
