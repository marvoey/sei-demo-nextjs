'use client'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Solutions', href: '#' },
  { label: 'Investments', href: '#' },
  { label: 'Who We Serve', href: '#' },
  { label: 'Our Insights', href: '#' },
  { label: 'About SEI', href: '#' },
  { label: 'Journey 2', href: '/2-bd-breakaway' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo"><img src="/logo.svg" alt="SEI" style={{ height: '28px', width: 'auto' }} /></a>
        <div className={`nav-links${open ? ' nav-links--open' : ''}`}>
          {NAV_LINKS.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}
          <div className="nav-utility nav-utility--mobile">
            <a href="#" className="nav-login">Client Login</a>
            <span className="nav-sep">/</span>
            <a href="#" className="nav-contact">Contact Us</a>
          </div>
        </div>
        <div className="nav-utility nav-utility--desktop">
          <a href="#" className="nav-login">Client Login</a>
          <span className="nav-sep">/</span>
          <a href="#" className="nav-contact">Contact Us</a>
        </div>
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={`hamburger-line${open ? ' hamburger-line--1-open' : ''}`} />
          <span className={`hamburger-line${open ? ' hamburger-line--2-open' : ''}`} />
          <span className={`hamburger-line${open ? ' hamburger-line--3-open' : ''}`} />
        </button>
      </div>
    </nav>
  )
}
