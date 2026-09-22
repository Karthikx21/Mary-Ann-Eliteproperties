import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowRight, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { PROJECTS } from '../data/projectsData';

export default function ContactSection({ onOpenSiteVisit }) {
  const [activeOffice, setActiveOffice] = useState('madurai');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState(PROJECTS[0].name);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const currentOffice = COMPANY_INFO.offices[activeOffice];

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#F8FAFC',
        padding: 'clamp(4rem, 7vw, 6rem) 0',
        borderBottom: '1px solid #E2E8F0'
      }}
    >
      <div className="allys-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="editorial-kicker">
            DIRECT ADVISORY
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
              color: '#0F172A',
              marginBottom: '0.75rem'
            }}
          >
            Direct Inquiries & Advisory
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6 }}>
            Direct access to our senior property advisors in Madurai and Dubai. Connect for plot availability, chauffeured site visits, or title documentation.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {/* Left Column: Office Details */}
          <div
            className="allys-card"
            style={{
              padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.75rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px'
            }}
          >
            <div>
              {/* Office Switcher Tabs */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  padding: '0.35rem',
                  backgroundColor: '#F1F5F9',
                  borderRadius: '12px',
                  marginBottom: '1.75rem'
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveOffice('madurai')}
                  style={{
                    flex: 1,
                    padding: '0.65rem 1rem',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backgroundColor: activeOffice === 'madurai' ? '#C5A880' : 'transparent',
                    color: activeOffice === 'madurai' ? '#0F172A' : '#475569',
                    boxShadow: activeOffice === 'madurai' ? '0 2px 8px rgba(197, 168, 128, 0.35)' : 'none'
                  }}
                >
                  Madurai HQ
                </button>

                <button
                  type="button"
                  onClick={() => setActiveOffice('dubai')}
                  style={{
                    flex: 1,
                    padding: '0.65rem 1rem',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backgroundColor: activeOffice === 'dubai' ? '#C5A880' : 'transparent',
                    color: activeOffice === 'dubai' ? '#0F172A' : '#475569',
                    boxShadow: activeOffice === 'dubai' ? '0 2px 8px rgba(197, 168, 128, 0.35)' : 'none'
                  }}
                >
                  Dubai Advisory Hub
                </button>
              </div>

              {/* Office Location & Info */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div className="editorial-kicker" style={{ marginBottom: '0.4rem' }}>
                  {currentOffice.role}
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginTop: '0.2rem', marginBottom: '1rem' }}>
                  {currentOffice.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                  <MapPin size={18} color="#967444" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>
                    {currentOffice.address}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <Clock size={16} color="#967444" />
                  <span style={{ fontSize: '0.85rem', color: '#64748B' }}>{currentOffice.hours}</span>
                </div>
              </div>

              {/* Contact Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href={`tel:${(currentOffice.phone || currentOffice.phonePrimary).replace(/[^0-9+]/g, '')}`}
                  className="allys-btn allys-btn-outline"
                  style={{ justifyContent: 'flex-start', padding: '0.75rem 1rem' }}
                >
                  <Phone size={15} color="#967444" />
                  <span>Call: {currentOffice.phone || currentOffice.phonePrimary}</span>
                </a>

                {currentOffice.phoneSecondary && (
                  <a
                    href={`tel:${currentOffice.phoneSecondary.replace(/[^0-9+]/g, '')}`}
                    className="allys-btn allys-btn-outline"
                    style={{ justifyContent: 'flex-start', padding: '0.75rem 1rem' }}
                  >
                    <Phone size={15} color="#967444" />
                    <span>Secondary: {currentOffice.phoneSecondary}</span>
                  </a>
                )}

                <a
                  href={`https://wa.me/${(currentOffice.whatsapp || '919676222700').replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="allys-btn allys-btn-outline"
                  style={{ justifyContent: 'flex-start', padding: '0.75rem 1rem', borderColor: '#E8DFD0' }}
                >
                  <MessageSquare size={15} color="#25D366" />
                  <span>WhatsApp: {currentOffice.whatsapp}</span>
                </a>

                <a
                  href={`mailto:${currentOffice.email}`}
                  className="allys-btn allys-btn-outline"
                  style={{ justifyContent: 'flex-start', padding: '0.75rem 1rem' }}
                >
                  <Mail size={15} color="#967444" />
                  <span>Email: {currentOffice.email}</span>
                </a>
              </div>
            </div>

            <button
              onClick={onOpenSiteVisit}
              className="allys-btn allys-btn-lime"
              style={{ width: '100%', padding: '0.9rem 1.5rem', marginTop: '1.5rem' }}
            >
              <Calendar size={16} />
              <span>Schedule Accompanied Site Visit</span>
            </button>
          </div>

          {/* Right Column: Direct Inquiries Form */}
          <div
            className="allys-card"
            style={{
              padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '16px'
            }}
          >
            <div>
              <div style={{ marginBottom: '1.75rem' }}>
                <div className="editorial-kicker" style={{ marginBottom: '0.35rem' }}>
                  DIRECT INQUIRY
                </div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#0F172A', marginTop: '0.2rem' }}>
                  Connect With Property Advisory
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748B', marginTop: '0.25rem' }}>
                  Fill in your details below and a senior advisor will get in touch shortly.
                </p>
              </div>

              {submitted ? (
                <div style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}>
                  <CheckCircle2 size={46} color="#C5A880" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', marginBottom: '0.5rem', color: '#0F172A' }}>
                    Inquiry Dispatched Successfully.
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: '#64748B', maxWidth: '420px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                    Thank you, <strong>{name}</strong>. A dedicated property custodian from our {activeOffice === 'madurai' ? 'Madurai' : 'Dubai'} office will contact you at <strong>{phone}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="allys-btn allys-btn-outline"
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label className="allys-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Sundaram"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="allys-input"
                    />
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                      gap: '1rem'
                    }}
                  >
                    <div>
                      <label className="allys-label">
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 or +971 number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="allys-input"
                      />
                    </div>

                    <div>
                      <label className="allys-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="allys-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="allys-label">
                      Interested Development
                    </label>
                    <select
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                      className="allys-select"
                    >
                      {PROJECTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.location})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="allys-label">
                      Message / Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your requirements (plot cent size, budget, villa construction, or NRI advisory)..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="allys-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="allys-btn allys-btn-lime"
                    style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem' }}
                  >
                    <span>Submit Property Inquiry</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
