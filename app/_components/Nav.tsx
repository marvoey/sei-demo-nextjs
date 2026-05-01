const NAV_LINKS = ['Solutions', 'Investments', 'Who We Serve', 'Our Insights', 'About SEI']

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo"><img src="/logo.svg" alt="SEI" style={{ height: '28px', width: 'auto' }} /></a>
        <div className="nav-links">
          {NAV_LINKS.map(link => <a key={link} href="#">{link}</a>)}
        </div>
        <div className="nav-utility">
          <a href="#" className="nav-login">Client Login</a>
          <span className="nav-sep">/</span>
          <a href="#" className="nav-contact">Contact Us</a>
        </div>
      </div>
    </nav>
  )
}
