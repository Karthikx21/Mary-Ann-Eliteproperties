import React from 'react';
import { Link } from 'react-router-dom';
import { Home, TrendingUp, HardHat, FileCheck2, ArrowRight, CheckCircle2, ShieldCheck, Banknote } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import CtaBanner from '../components/CtaBanner';

export default function WhatWeOfferPage({ onOpenSiteVisit }) {
  const detailedServices = [
    {
      id: 'plotted-developments',
      icon: Home,
      title: 'Plotted Developments & Land Guidance',
      badge: 'CORE EXPERTISE',
      lead: 'Navigate your land purchase with confidence — from first inspection to final walkthrough.',
      description:
        'We develop and curate DTCP & RERA-approved residential layouts in prime Madurai growth corridors. Every layout features demarcated survey stones, wide bitumen tar roads (30 to 40 feet), underground or dedicated drainage, solar street illumination, and abundant potable sweet groundwater.',
      deliverables: [
        '100% DTCP & RERA statutory sanctions verified',
        'Clear parent document titles dating back 30+ years',
        'Blacktop tar roads, avenue plantations, and compound fencing',
        'Individual patta assistance and immediate registration readiness'
      ],
      ctaText: 'View Available Plots',
      ctaHref: '/properties'
    },
    {
      id: 'investment-advisory',
      icon: TrendingUp,
      title: 'Investment Advisory & Land Acquisition',
      badge: 'STRATEGIC FORESIGHT',
      lead: 'Unlock long-term appreciation with two decades of local market knowledge.',
      description:
        'Our team guides investors, NRIs, and families in identifying strategic high-appreciation zones across Madurai and southern Tamil Nadu. We evaluate infrastructure roadmaps, Ring Road expansions, airport growth corridors, and industrial corridors to ensure your capital grows securely.',
      deliverables: [
        'Data-backed micro-market appreciation projections',
        'Comparative rental yield and capital appreciation analysis',
        'Transparent title verification and Encumbrance Certificate (EC) audit',
        'Dedicated advisory for NRI and international buyers'
      ],
      ctaText: 'Consult Our Advisors',
      ctaHref: '/advisors'
    },
    {
      id: 'villa-construction',
      icon: HardHat,
      title: 'Villa & Bespoke Construction',
      badge: 'TURNKEY EXECUTION',
      lead: 'From blueprint to keys: crafted living spaces with zero compromise on quality.',
      description:
        'Beyond the land, we build your sanctuary. Our architectural and civil construction wing delivers custom 1, 2, and 3 BHK duplex villas designed with 100% Vastu compliance, branded construction materials (Tata Steel, UltraTech Cement), structural warranty, and fixed delivery timelines.',
      deliverables: [
        'Customized 2D architectural blueprints and 3D elevation renders',
        'Premium branded structural materials and fittings',
        '100% Vastu-compliant room layouts and solar provisions',
        'Weekly milestone photo and video updates for remote owners'
      ],
      ctaText: 'Discuss Construction',
      ctaHref: '/contact'
    },
    {
      id: 'loan-documentation',
      icon: FileCheck2,
      title: 'Loan & Transaction Management',
      badge: 'FINANCIAL SECURITY',
      lead: 'Stress-free closings with pre-approved bank loans and transparent documentation.',
      description:
        'Purchasing property shouldn’t feel complicated. We facilitate 70% pre-approved bank loans through leading financial institutions (SBI, HDFC, ICICI, Canara Bank), and manage the entire registration process from draft deed preparation to sub-registrar scheduling.',
      deliverables: [
        'Pre-approved bank loans of up to 70% with nationalized banks',
        'Complete legal scrutiny pack with 30-year link documents',
        'Sub-registrar escort, stamp duty calculation, and document registration',
        'Post-purchase patta transfer and name mutation assistance'
      ],
      ctaText: 'Inquire About Loans',
      ctaHref: '/contact'
    }
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Real Estate Development and Plotted Land Advisory",
    "provider": {
      "@id": "https://maryanneliteproperties.com/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Madurai"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mary Ann Elite Properties Services",
      "itemListElement": detailedServices.map((s) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.description
        }
      }))
    }
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <SeoHead
        title="Comprehensive Real Estate & Villa Construction Services in Madurai"
        description="End-to-end real estate services in Madurai: DTCP & RERA approved plotted developments, turnkey architectural duplex villa construction, 70% bank loan processing, and legal documentation advisory."
        keywords="real estate services madurai, villa construction madurai, dtcp approval verification madurai, property loan assistance madurai, patta assistance madurai, turnkey duplex villa madurai"
        canonicalPath="/what-we-offer"
        schemaJson={servicesSchema}
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
          src="/images/vibul-avenue-thumb.png"
          alt="Mary Ann EliteProperties Offerings"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.3
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
              <span>END-TO-END PROPERTY & VILLA SERVICES</span>
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
              What We Offer?
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#CBD5E1',
                lineHeight: 1.6
              }}
            >
              Buying or developing property in Madurai can be overwhelming — our hands-on expertise makes it seamless, secure, and rewarding.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section style={{ padding: 'clamp(4rem, 7vw, 6.5rem) 0' }}>
        <div className="allys-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {detailedServices.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="allys-card"
                  style={{
                    padding: 'clamp(2rem, 4vw, 3rem)',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px'
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
                      gap: '2.5rem',
                      alignItems: 'center'
                    }}
                  >
                    {/* Left: Description & Lead */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <div
                          style={{
                            width: '46px',
                            height: '46px',
                            borderRadius: '10px',
                            backgroundColor: '#0F172A',
                            color: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <IconComp size={22} />
                        </div>
                        <span className="allys-badge">
                          {srv.badge}
                        </span>
                      </div>

                      <h2
                        style={{
                          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '0.75rem',
                          lineHeight: 1.2
                        }}
                      >
                        {srv.title}
                      </h2>

                      <p
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 500,
                          color: '#0F172A',
                          lineHeight: 1.5,
                          marginBottom: '1rem'
                        }}
                      >
                        {srv.lead}
                      </p>

                      <p
                        style={{
                          fontSize: '0.95rem',
                          color: '#475569',
                          lineHeight: 1.7,
                          marginBottom: '1.75rem'
                        }}
                      >
                        {srv.description}
                      </p>

                      <Link
                        to={srv.ctaHref}
                        className="allys-btn allys-btn-primary"
                        style={{ padding: '0.75rem 1.5rem' }}
                      >
                        <span>{srv.ctaText}</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>

                    {/* Right: Deliverables Checklist */}
                    <div
                      style={{
                        backgroundColor: '#F8FAFC',
                        padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                        borderRadius: '12px',
                        border: '1px solid #E2E8F0'
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: '#64748B',
                          marginBottom: '1.25rem'
                        }}
                      >
                        WHAT WE DELIVER
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {srv.deliverables.map((item, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                            <CheckCircle2 size={18} color="#C5A880" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                            <span style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5 }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onOpenSiteVisit={() => onOpenSiteVisit()} />
    </div>
  );
}
