import { useState } from 'react'
import './Header.css'

function Header({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState('EN')

  const menuItems = [
    { id: 'home', label: 'Home', page: 'home' },
    { id: 'about', label: 'About Us', page: 'about' },
    { id: 'products', label: 'Products', page: 'products' },
    { id: 'exports-imports', label: 'Exports / Imports', page: 'exports-imports' },
    { id: 'quality', label: 'Quality', page: 'quality' },
    { id: 'contact', label: 'Contact Us', page: 'contact' }
  ]

  const handleQuoteClick = () => {
    setCurrentPage('contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header-top-bar">
        <div className="container">
          <div className="header-top-content">
            <div className="header-contact-info">
              <a href="tel:+913322811396" className="contact-link">
                <span className="contact-icon">📞</span>
                <span>+91-33-22811396/97</span>
              </a>
              <a href="mailto:info@umaexports.net.in" className="contact-link">
                <span className="contact-icon">✉️</span>
                <span>info@umaexports.net.in</span>
              </a>
            </div>
            <div className="header-language-selector">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="language-select"
              >
                <option value="EN">EN</option>
                <option value="HI">HI</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <div className="header-logo" onClick={() => setCurrentPage('home')}>
              <div className="logo-placeholder">
                <span className="logo-text">SANGATH GLOBAL EXIM</span>
              </div>
            </div>

            <nav className={`header-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <ul className="nav-menu">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      className={currentPage === item.page ? 'active' : ''}
                      onClick={() => {
                        setCurrentPage(item.page)
                        setMobileMenuOpen(false)
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions">
              <button className="btn-quote" onClick={handleQuoteClick}>
                Request a Quote
              </button>
              <button 
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

