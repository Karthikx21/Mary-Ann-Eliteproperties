import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3v6Z"/>
  </svg>
);

export default function Footer({ onOpenSiteVisit, onOpenPrivacy }) {
  return (
    <footer
      style={{
        backgroundColor: '#0F172A',
        color: '#FFFFFF',
        paddingTop: 'clamp(4rem, 7vw, 6rem)',
        paddingBottom: '2.5rem',
        borderTop: '1px solid #1E293B'
      }}
    >
      <div className="allys-container">
        {/* Main 4-Column Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid #1E293B'
          }}
        >
          {/* Brand & Mission with Extracted Logo */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <img
                src="/images/maryann-logo.png"
                alt="Mary Ann Elite Properties Logo"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    letterSpacing: '0.02em',
                    lineHeight: 1,
                    color: '#FFFFFF'
                  }}
                >
                  MARY ANN
                </div>
                <div
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#C5A880',
                    marginTop: '0.2rem'
                  }}
                >
                  ELITEPROPERTIES • EST. 2004
                </div>
              </div>
            </Link>

            <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Your trusted partner in Madurai real estate. Curating DTCP & RERA approved plotted developments, gated villa communities, and investment advisory across Tamil Nadu and Dubai.
            </p>

            {/* Social Media External Icons (Instagram, Facebook, YouTube, WhatsApp) */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={18} />
              </a>

              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Facebook Page"
              >
                <FacebookIcon size={18} />
              </a>

              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="YouTube Channel"
              >
                <YoutubeIcon size={18} />
              </a>

              <a
                href="https://wa.me/919676222700"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Direct WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Pages */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: '#94A3B8' }}>
              <li><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-nav-link">Home</Link></li>
              <li><Link to="/properties" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-nav-link">Curated Properties</Link></li>
              <li><Link to="/what-we-offer" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-nav-link">What We Offer</Link></li>
              <li><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-nav-link">About Our Firm</Link></li>
              <li><Link to="/advisors" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-nav-link">Dedicated Advisors</Link></li>
              <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-nav-link">Contact & Site Visit</Link></li>
            </ul>
          </div>

          {/* Madurai Growth Corridors */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Madurai Corridors
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: '#94A3B8' }}>
              <li><Link to="/properties" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-nav-link">Vilangudi (Star Luxoria)</Link></li>
              <li><Link to="/properties" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-nav-link">Parapathi & Airport (Star Luxor)</Link></li>
              <li><Link to="/properties" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-nav-link">Alagar Kovil (Vibul Avenue)</Link></li>
              <li><Link to="/properties" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-nav-link">Kunnathur (Guru Nagar)</Link></li>
              <li><Link to="/properties" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-nav-link">Naattarmangalam (Meenakshi Nagar)</Link></li>
              <li><Link to="/properties" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-nav-link">Poonjuthi (Meenatchi Garden)</Link></li>
              <li><Link to="/properties" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-nav-link">Melapanagadi (Vaigai Enclave)</Link></li>
            </ul>
          </div>

          {/* Regional Desks */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Regional Desks
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem', color: '#94A3B8' }}>
              <div>
                <div style={{ color: '#FFFFFF', fontWeight: 600 }}>Madurai Headquarters</div>
                <div style={{ fontSize: '0.78rem', marginTop: '0.2rem', lineHeight: 1.4 }}>
                  {COMPANY_INFO.offices.madurai.address}
                </div>
                <div style={{ marginTop: '0.35rem' }}>
                  <a href={`tel:${COMPANY_INFO.offices.madurai.phone.replace(/[^0-9+]/g, '')}`} style={{ color: '#C5A880', textDecoration: 'none', fontWeight: 600 }}>
                    {COMPANY_INFO.offices.madurai.phone}
                  </a>
                </div>
              </div>

              <div>
                <div style={{ color: '#FFFFFF', fontWeight: 600 }}>Dubai Advisory Desk</div>
                <div style={{ fontSize: '0.78rem', marginTop: '0.2rem', lineHeight: 1.4 }}>
                  {COMPANY_INFO.offices.dubai.address}
                </div>
                <div style={{ marginTop: '0.35rem' }}>
                  <a href={`tel:${COMPANY_INFO.offices.dubai.phonePrimary.replace(/[^0-9+]/g, '')}`} style={{ color: '#C5A880', textDecoration: 'none', fontWeight: 600 }}>
                    {COMPANY_INFO.offices.dubai.phonePrimary}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '2rem',
            fontSize: '0.8125rem',
            color: '#64748B'
          }}
        >
          <div>
            © 2026 Mary Ann EliteProperties. All rights reserved. Your trusted partner in Madurai real estate.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button
              onClick={onOpenPrivacy}
              style={{
                background: 'none',
                border: 'none',
                color: '#94A3B8',
                cursor: 'pointer',
                fontSize: '0.8125rem'
              }}
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenPrivacy}
              style={{
                background: 'none',
                border: 'none',
                color: '#94A3B8',
                cursor: 'pointer',
                fontSize: '0.8125rem'
              }}
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .footer-nav-link:hover {
          color: #C5A880 !important;
          padding-left: 4px;
          transition: all 0.2s ease;
        }
      `}</style>
    </footer>
  );
}
