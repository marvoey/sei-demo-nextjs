const TOOLS = [
  {
    title: 'Portfolio Analysis',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua portfolios.',
  },
  {
    title: 'Model Portfolio Center',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat portfolios.',
  },
  {
    title: 'Retirement Planner',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur portfolios.',
  },
  {
    title: 'Fund Screener',
    body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum portfolios.',
  },
]

export default function AdvisorTools() {
  return (
    <section className="advisor-tools section">
      <div className="container">
        <div className="advisor-tools-header">
          <div className="advisor-tools-eyebrow">Advisor Tools</div>
          <h2 className="advisor-tools-headline">Lorem ipsum dolor portfolios</h2>
        </div>
        <div className="advisor-tools-grid">
          {TOOLS.map(tool => (
            <div key={tool.title} className="advisor-tool-card">
              <div className="advisor-tool-bar" aria-hidden="true" />
              <div className="advisor-tool-title">{tool.title}</div>
              <p className="advisor-tool-body">{tool.body}</p>
              <a href="#" className="advisor-tool-cta">
                Launch Tool
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
