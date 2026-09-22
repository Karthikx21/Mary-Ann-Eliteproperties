import React from 'react';
import { Phone, Mail, MessageSquare, MapPin, Clock, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import { COMPANY_INFO } from '../data/companyData';
import CtaBanner from '../components/CtaBanner';

export default function AdvisorsPage({ onOpenSiteVisit }) {
  const consultants = [
    {
      name: 'Madurai Property Advisory Desk',
      role: 'Senior Property Consultants — Madurai Headquarters',
      hub: 'Madurai, Tamil Nadu',
      address: COMPANY_INFO.offices.madurai.address,
      hours: COMPANY_INFO.offices.madurai.hours,
      specialty:
        'Hands-on expertise in Madurai real estate. Providing personalized consultations on DTCP & RERA approved layouts, soil quality, groundwater levels, and local price appreciation trends.',
      phone: COMPANY_INFO.offices.madurai.phone,
      mobile: '+91 96762 22700',
      email: COMPANY_INFO.offices.madurai.email,
      whatsappUrl: 'https://wa.me/919676222700?text=Hi%2C%20I%20would%20like%20to%20consult%20your%20Madurai%20property%20advisory%20team.'
    },
    {
      name: 'Dubai & International NRI Client Desk',
      role: 'Property Development Specialists — Dubai Hub',
      hub: 'Dubai Silicon Oasis, UAE',
      address: COMPANY_INFO.offices.dubai.address,
      hours: COMPANY_INFO.offices.dubai.hours,
      specialty:
        'Dedicated advisory for non-resident Indian families and international buyers. We coordinate live virtual video walkthroughs, transparent legal title scrutiny, remote documentation, and NRE/NRO financial transfers.',
      phone: COMPANY_INFO.offices.dubai.phonePrimary,
      mobile: COMPANY_INFO.offices.dubai.phoneSecondary,
      email: COMPANY_INFO.offices.dubai.email,
      whatsappUrl: 'https://wa.me/971569557102?text=Hi%2C%20I%20would%20like%20to%20consult%20the%20Dubai%20NRI%20desk%20regarding%20Madurai%20properties.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#F8FAFC' }}>
      <SeoHead
        title="Dedicated Property Advisors & NRI Client Desk | Madurai & Dubai"
        description="Meet our experienced property consultants in Madurai and Dubai Silicon Oasis. Direct guidance on DTCP layouts, legal title audits, virtual walkthroughs, and 70% bank loans."
        keywords="real estate advisors madurai, property consultant madurai, dubai nri real estate madurai, land purchase guidance tamil nadu, property investment consultant"
        canonicalPath="/advisors"
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
          src="/images/hero-luxury-avenue.jpg"
          alt="Mary Ann EliteProperties Advisory"
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
              <span>PROFESSIONAL REAL ESTATE ADVISORY • MADURAI & DUBAI</span>
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
              Dedicated Property Advisors
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#CBD5E1',
                lineHeight: 1.6
              }}
            >
              Whether you are in Madurai or residing in the UAE, our senior custodians provide honest guidance, transparent legal titles, and accompanied site inspections.
            </p>
          </div>
        </div>
      </section>

      {/* Advisors Grid */}
      <section style={{ padding: 'clamp(4rem, 7vw, 6.5rem) 0' }}>
        <div className="allys-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '2.5rem'
            }}
          >
            {consultants.map((c, i) => (
              <div
                key={i}
                className="allys-card"
                style={{
                  padding: 'clamp(2rem, 4vw, 2.75rem)',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '16px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: '#0F172A',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        flexShrink: 0
                      }}
                    >
                      {c.name.charAt(0)}
                    </div>
                    <div>
                      <span className="allys-badge" style={{ marginBottom: '0.25rem' }}>
                        {c.hub}
                      </span>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', lineHeight: 1.2 }}>
                        {c.name}
                      </h3>
                      <div style={{ fontSize: '0.8125rem', color: '#64748B', fontWeight: 500, marginTop: '0.2rem' }}>
                        {c.role}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                    {c.specialty}
                  </p>

                  <div style={{ padding: '1.25rem', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0', marginBottom: '1.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', marginBottom: '0.85rem' }}>
                      <MapPin size={16} color="#64748B" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                      <div style={{ fontSize: '0.85rem', color: '#334155', lineHeight: 1.5 }}>
                        {c.address}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
                      <Clock size={16} color="#64748B" />
                      <span style={{ fontSize: '0.825rem', color: '#64748B' }}>{c.hours}</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', paddingTop: '0.75rem', borderTop: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Phone size={14} color="#64748B" />
                        <span>Tel: <a href={`tel:${c.phone.replace(/[^0-9+]/g, '')}`} style={{ color: '#0F172A', fontWeight: 600, textDecoration: 'none' }}>{c.phone}</a></span>
                      </div>
                      {c.mobile && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Phone size={14} color="#64748B" />
                          <span>Direct: <a href={`tel:${c.mobile.replace(/[^0-9+]/g, '')}`} style={{ color: '#0F172A', fontWeight: 600, textDecoration: 'none' }}>{c.mobile}</a></span>
                        </div>
                      )}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Mail size={14} color="#64748B" />
                        <span>Email: <a href={`mailto:${c.email}`} style={{ color: '#0F172A', fontWeight: 600, textDecoration: 'none' }}>{c.email}</a></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={c.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="allys-btn allys-btn-outline"
                    style={{ flex: 1, borderColor: '#10B981', color: '#0F172A', gap: '0.5rem' }}
                  >
                    <MessageSquare size={16} color="#10B981" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onOpenSiteVisit()}
                    className="allys-btn allys-btn-primary"
                    style={{ flex: 1 }}
                  >
                    <Calendar size={15} />
                    <span>Schedule Visit</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onOpenSiteVisit={() => onOpenSiteVisit()} />
    </div>
  );
}
