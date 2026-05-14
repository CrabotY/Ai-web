import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Возможности', href: '#capabilities' },
    { label: 'Инструменты', href: '#tools' },
    { label: 'Тарифы', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(5, 5, 16, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Neuro<span className="gradient-text">AI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="btn-secondary text-white text-sm font-medium px-4 py-2 rounded-lg">
              Войти
            </button>
            <button className="btn-primary text-white text-sm font-semibold px-5 py-2 rounded-lg">
              Начать бесплатно
            </button>
          </div>

          {/* Mobile Burger */}
          <button
            className="md:hidden text-slate-400 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-5 space-y-1">
              <span
                className="block h-0.5 bg-current transition-all duration-300"
                style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '' }}
              />
              <span
                className="block h-0.5 bg-current transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block h-0.5 bg-current transition-all duration-300"
                style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '' }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden pb-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                <button className="btn-secondary text-white text-sm font-medium px-4 py-2.5 rounded-lg w-full">
                  Войти
                </button>
                <button className="btn-primary text-white text-sm font-semibold px-4 py-2.5 rounded-lg w-full">
                  Начать бесплатно
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
