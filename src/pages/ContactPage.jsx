import React from 'react';
import SeoHead from '../components/SeoHead';
import ContactSection from '../components/ContactSection';
import SiteVisitScheduler from '../components/SiteVisitScheduler';
import { COMPANY_INFO } from '../data/companyData';

export default function ContactPage({ onOpenSiteVisit }) {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Mary Ann Elite Properties",
    "description": "Reach Mary Ann Elite Properties in Madurai, Tamil Nadu, and Dubai, UAE. Book a site tour or speak directly with an advisor.",
    "url": "https://maryanneliteproperties.com/contact",
    "mainEntity": {
      "@type": "RealEstateAgent",
      "@id": "https://maryanneliteproperties.com/#organization",
      "name": "Mary Ann Elite Properties",
      "telephone": COMPANY_INFO.offices.madurai.phone,
      "email": COMPANY_INFO.offices.madurai.email
    }
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <SeoHead
        title="Contact & Schedule Site Tour | Madurai HQ & Dubai Hub"
        description="Connect with Mary Ann Elite Properties. Schedule a chauffeured site tour in Madurai or speak with our Dubai NRI advisory desk. Phone: +91 883 828 6576."
        keywords="contact mary ann elite properties, site tour booking madurai, real estate office madurai, arasaradi builders, dubai silicon oasis property advisory"
        canonicalPath="/contact"
        schemaJson={contactSchema}
      />

      {/* Header with Property Visual */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#0F172A',
          color: '#FFFFFF',
          padding: 'clamp(5rem, 9vw, 7.5rem) 0 clamp(4rem, 7vw, 5.5rem)',
          overflow: 'hidden',
          textAlign: 'center'
        }}
      >
        <img
          src="/images/hero-luxury-estate.jpg"
          alt="Mary Ann EliteProperties Contact & Concierge"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.35
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(15, 23, 42, 0.85) 100%)'
          }}
        />

        <div className="allys-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <span
              className="allys-badge allys-badge-dark"
              style={{ marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.14em' }}
            >
              <span>DUAL REGIONAL HUBS • MADURAI & DUBAI</span>
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
                color: '#FFFFFF',
                marginBottom: '1rem',
                lineHeight: 1.1
              }}
            >
              Contact & Site Inquiries
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#CBD5E1',
                lineHeight: 1.6
              }}
            >
              Connect directly with our senior property advisors in Madurai and Dubai for plot availability, legal title verification, and accompanied site tours.
            </p>
          </div>
        </div>
      </section>

      {/* Embedded Contact Section */}
      <ContactSection onOpenSiteVisit={onOpenSiteVisit} />

      {/* Embedded Accompanied Site Tour Engine */}
      <SiteVisitScheduler isModal={false} />
    </div>
  );
}
