'use client'
import { useState } from 'react'

const NAV_LINKS: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: 'Solutions', href: '#' },
  { label: 'Investments', href: '#' },
  { label: 'Who We Serve', href: '#' },
  { label: 'Our Insights', href: '#' },
  { label: 'About SEI', href: '#' },
  {
    label: 'Journey 2',
    href: '/2-bd-breakaway',
    children: [
      { label: 'Recommendations', href: '/2-bd-breakaway/recommendations' },
    ],
  },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo"><img src="/logo.svg" alt="SEI" style={{ height: '28px', width: 'auto' }} /></a>
        <div className={`nav-links${open ? ' nav-links--open' : ''}`}>
          {NAV_LINKS.map(link =>
            link.children ? (
              <div key={link.label} className="nav-item">
                <a href={link.href} className="nav-item-trigger">{link.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M1 1l4 4 4-4" />
                  </svg>
                </a>
                <div className="nav-dropdown">
                  <div className="nav-dropdown-inner">
                    {link.children.map(child => (
                      <a key={child.label} href={child.href} className="nav-dropdown-item">{child.label}</a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={link.label} href={link.href}>{link.label}</a>
            )
          )}
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
