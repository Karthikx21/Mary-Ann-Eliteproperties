import React from 'react';
import { Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function TeamConsultants() {
  const consultants = [
    {
      name: 'Madurai Property Advisory',
      role: 'Senior Property Consultant — Madurai HQ',
      specialty: 'Specializing in DTCP & RERA approved plotted developments across Madurai with over 20 years of market heritage.',
      phone: COMPANY_INFO.offices.madurai.phone,
      mobile: '+91 96762 22700',
      email: COMPANY_INFO.offices.madurai.email,
      whatsappUrl: 'https://wa.me/919676222700?text=Hi%2C%20I%27m%20interested%20in%20your%20properties%20in%20Madurai.'
    },
    {
      name: 'Dubai & NRI Client Desk',
      role: 'Property Development Specialist — Dubai Hub',
      specialty: 'Expert in remote UAE consultations, legal title verification, video walkthroughs, and coordination for NRI buyers from Dubai Silicon Oasis.',
      phone: COMPANY_INFO.offices.dubai.phonePrimary,
      mobile: COMPANY_INFO.offices.dubai.phoneSecondary,
      email: COMPANY_INFO.offices.dubai.email,
      whatsappUrl: 'https://wa.me/971569557102?text=Hi%2C%20I%27m%20interested%20in%20your%20properties%20in%20Madurai%20from%20UAE.'
    }
  ];

  return (
    <section
      id="team"
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(4rem, 7vw, 6rem) 0',
        borderBottom: '1px solid #E2E8F0'
      }}
    >
      <div className="allys-container">
        {/* Header matching Allys.mu */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto clamp(2.5rem, 5vw, 4rem)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
              color: '#0F172A',
              marginBottom: '0.75rem'
            }}
          >
            Dedicated Professionals
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6 }}>
            Dedicated professionals ready to help you find your perfect property in Madurai or assist you directly from Dubai.
          </p>
        </div>

        {/* Consultants 2-Column Grid matching Allys.mu */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '2rem',
            maxWidth: '960px',
            margin: '0 auto'
          }}
        >
          {consultants.map((c, i) => (
            <div
              key={i}
              className="allys-card"
              style={{
                padding: '2.25rem',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: '#0F172A',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 600
                    }}
                  >
                    {c.name.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A' }}>
                      {c.name}
                    </h3>
                    <div style={{ fontSize: '0.8125rem', color: '#64748B', fontWeight: 500 }}>
                      {c.role}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                  {c.specialty}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155' }}>
                    <Phone size={15} color="#64748B" />
                    <span>Tel: <a href={`tel:${c.phone.replace(/[^0-9+]/g, '')}`} style={{ color: '#0F172A', fontWeight: 600, textDecoration: 'none' }}>{c.phone}</a></span>
                  </div>
                  {c.mobile && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155' }}>
                      <Phone size={15} color="#64748B" />
                      <span>Direct: <a href={`tel:${c.mobile.replace(/[^0-9+]/g, '')}`} style={{ color: '#0F172A', fontWeight: 600, textDecoration: 'none' }}>{c.mobile}</a></span>
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155' }}>
                    <Mail size={15} color="#64748B" />
                    <span>Email: <a href={`mailto:${c.email}`} style={{ color: '#0F172A', fontWeight: 600, textDecoration: 'none' }}>{c.email}</a></span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={c.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="allys-btn allys-btn-outline"
                  style={{ width: '100%', borderColor: '#10B981', color: '#0F172A', gap: '0.5rem' }}
                >
                  <MessageSquare size={16} color="#10B981" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
