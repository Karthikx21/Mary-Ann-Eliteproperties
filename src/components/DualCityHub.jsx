import React from 'react';
import { Phone, Mail, MapPin, Globe, Compass, ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function DualCityHub({ onOpenSiteVisit }) {
  const { madurai, dubai } = COMPANY_INFO.offices;

  return (
    <section
      id="dual-hub"
      style={{
        backgroundColor: 'var(--bg-warm)',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        borderBottom: '1px solid var(--border-hairline)'
      }}
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(3rem, 6vw, 4.5rem)' }}>
          <span className="editorial-kicker" style={{ justifyContent: 'center' }}>
            07 / BILATERAL PRESENCE
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              lineHeight: 1.04,
              color: 'var(--text-charcoal)',
              marginTop: '0.75rem',
              textTransform: 'uppercase'
            }}
          >
            Two Cities. <br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--brand-eucalyptus)' }}>
              One Property
            </span>{' '}
            Journey.
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)', marginTop: '1.25rem' }}>
            Bridging on-ground development in Madurai with an international advisory presence in Dubai.
            Whether you reside in Tamil Nadu or the United Arab Emirates, your property acquisition is managed with local accountability.
          </p>
        </div>

        {/* Bilateral Geographic Architecture */}
        <div className="grid-12" style={{ alignItems: 'stretch' }}>
          {/* Madurai Hub Card */}
          <div
            style={{
              gridColumn: 'span 6',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-hairline)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
            className="dual-city-card"
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border-hairline)'
                }}
              >
                <div>
                  <span className="badge-tag" style={{ backgroundColor: 'var(--bg-charcoal)', color: 'var(--bg-warm)' }}>
                    HEADQUARTERS & OPERATIONS
                  </span>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.35rem'
                    }}
                  >
                    9°55'N, 78°07'E • TAMIL NADU
                  </div>
                </div>

                <Building2 size={24} color="var(--brand-eucalyptus)" />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  color: 'var(--text-charcoal)',
                  marginBottom: '0.5rem'
                }}
              >
                Madurai
              </h3>

              <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                Our operations centre coordinates land acquisition, statutory DTCP/RERA approvals,
                infrastructure civil engineering, chauffeured family site tours, and sub-registrar deeds.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <CheckCircle2 size={16} color="var(--brand-eucalyptus)" />
                  <span>On-Ground Plotted Township Development</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <CheckCircle2 size={16} color="var(--brand-eucalyptus)" />
                  <span>Personal Guided Site Tours & Soil Review</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <CheckCircle2 size={16} color="var(--brand-eucalyptus)" />
                  <span>In-House Duplex Villa Architectural Construction</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <CheckCircle2 size={16} color="var(--brand-eucalyptus)" />
                  <span>Direct Sub-Registrar & Patta Handover Support</span>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-warm)',
                border: '1px solid var(--border-hairline)',
                padding: '1.25rem'
              }}
            >
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-stone-dark)', fontWeight: 700, marginBottom: '0.5rem' }}>
                MADURAI DESK DETAILS
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-charcoal)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                {madurai.address}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', fontWeight: 600 }}>
                <a href={`tel:${madurai.phone.replace(/[^0-9+]/g, '')}`} style={{ color: 'var(--text-charcoal)', textDecoration: 'none' }}>
                  📞 {madurai.phone}
                </a>
                <span style={{ color: 'var(--text-muted)' }}>✉️ {madurai.email}</span>
              </div>
            </div>
          </div>

          {/* Dubai Hub Card */}
          <div
            style={{
              gridColumn: 'span 6',
              backgroundColor: 'var(--bg-charcoal)',
              color: 'var(--text-inverse)',
              border: '1px solid var(--border-inverse-hairline)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
            className="dual-city-card"
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border-inverse-hairline)'
                }}
              >
                <div>
                  <span className="badge-tag-dark">
                    INTERNATIONAL ADVISORY HUB
                  </span>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-inverse-muted)',
                      marginTop: '0.35rem'
                    }}
                  >
                    25°07'N, 55°22'E • DUBAI SILICON OASIS
                  </div>
                </div>

                <Globe size={24} color="var(--brand-stone)" />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  color: 'var(--text-inverse)',
                  marginBottom: '0.5rem'
                }}
              >
                Dubai
              </h3>

              <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--text-inverse-muted)', marginBottom: '1.75rem' }}>
                Located in Dubai Digital Park, our UAE desk caters exclusively to NRIs and overseas investors,
                delivering legal document verification, satellite layout proofs, and family site visit coordination in Madurai.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <CheckCircle2 size={16} color="var(--brand-stone)" />
                  <span>In-Person Consultations at Dubai Silicon Oasis</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <CheckCircle2 size={16} color="var(--brand-stone)" />
                  <span>High-Definition Drone Walkthroughs & Layout Inspections</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <CheckCircle2 size={16} color="var(--brand-stone)" />
                  <span>Seamless Madurai Site Visit Arrangements for Your Family</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <CheckCircle2 size={16} color="var(--brand-stone)" />
                  <span>Power of Attorney & Foreign Remittance Guidance</span>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-dark-secondary)',
                border: '1px solid var(--border-inverse-hairline)',
                padding: '1.25rem'
              }}
            >
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-stone)', fontWeight: 700, marginBottom: '0.5rem' }}>
                DUBAI DESK DETAILS
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-inverse-muted)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                {dubai.address}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', fontWeight: 600 }}>
                <a href={`tel:${dubai.phonePrimary.replace(/[^0-9+]/g, '')}`} style={{ color: 'var(--text-inverse)', textDecoration: 'none' }}>
                  📞 {dubai.phonePrimary}
                </a>
                <a href={`tel:${dubai.phoneSecondary.replace(/[^0-9+]/g, '')}`} style={{ color: 'var(--text-inverse)', textDecoration: 'none' }}>
                  📞 {dubai.phoneSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dual-city-card {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
