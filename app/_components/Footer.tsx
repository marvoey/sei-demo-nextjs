const COLUMNS = [
  { heading: 'Investments', links: ['Investment solutions', 'Core investment beliefs', 'Explore investment strategies'] },
  { heading: 'Solutions', links: ['Technology', 'Custody', 'Advisor services'] },
  { heading: 'Our Insights', links: ['Thought leadership', 'Events', 'SEI Growth Lab'] },
  { heading: 'Contact Us', links: ['Our team', 'Contact us'] },
  { heading: 'Overview', links: ['About SEI', 'Client login', 'Locations', 'Newsroom', 'Investor relations', 'Careers'] },
]

const LEGAL = ['Cookies Settings', 'Cookie policy', 'Privacy notice', 'Accessibility statement', 'Terms of use', 'Fund documents', 'Corporate governance']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {COLUMNS.map(col => (
            <div key={col.heading}>
              <div className="footer-col-head">{col.heading}</div>
              <div className="footer-col-links">
                {col.links.map(link => <a key={link} href="#">{link}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div className="footer-legal">
          <div className="footer-legal-links">
            {LEGAL.map(l => <a key={l} href="#">{l}</a>)}
          </div>
          <div className="footer-copyright">&copy;2026 SEI All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
