import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Navbar({ onOpenSiteVisit }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Properties', path: '/properties' },
    { label: 'What We Offer', path: '/what-we-offer' },
    { label: 'About Us', path: '/about' },
    { label: 'Advisors', path: '/advisors' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 990,
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        transition: 'box-shadow 0.2s ease',
        boxShadow: isScrolled ? '0 4px 10px -2px rgba(15, 23, 42, 0.06)' : 'none'
      }}
    >
      <div
        className="allys-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '78px'
        }}
      >
        {/* Brand Lockup with Official Extracted Logo */}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#0F172A',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem'
          }}
        >
          <img
            src="/images/maryann-logo.png"
            alt="Mary Ann Elite Properties Logo"
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.45rem',
                letterSpacing: '0.02em',
                fontWeight: 600,
                lineHeight: 1,
                color: '#0F172A'
              }}
            >
              MARY ANN
            </span>
            <span
              style={{
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#967444',
                marginTop: '0.2rem'
              }}
            >
              ELITEPROPERTIES • EST. 2004
            </span>
          </div>
        </Link>

        {/* Desktop Nav with Luxury Gold Active Indicators */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem'
          }}
          className="desktop-nav"
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.path === '/'}
              style={({ isActive }) => ({
                fontSize: '0.875rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? '#0F172A' : '#475569',
                textDecoration: 'none',
                position: 'relative',
                paddingBottom: '0.35rem',
                borderBottom: isActive ? '2px solid #C5A880' : '2px solid transparent',
                transition: 'all 0.15s ease'
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
          className="desktop-actions"
        >
          <a
            href={`tel:${COMPANY_INFO.offices.madurai.phone.replace(/[^0-9+]/g, '')}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: '#475569',
              textDecoration: 'none'
            }}
          >
            <Phone size={14} color="#C5A880" />
            <span>+91 883 828 6576</span>
          </a>

          <button
            onClick={onOpenSiteVisit}
            className="allys-btn allys-btn-luxury"
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.8125rem' }}
          >
            <span>Schedule Visit</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#0F172A',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-hamburger"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #E2E8F0',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                fontSize: '1rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? '#967444' : '#0F172A',
                textDecoration: 'none',
                padding: '0.4rem 0'
              })}
            >
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSiteVisit();
            }}
            className="allys-btn allys-btn-lime"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            <span>Schedule A Site Visit</span>
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav, .desktop-actions {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
