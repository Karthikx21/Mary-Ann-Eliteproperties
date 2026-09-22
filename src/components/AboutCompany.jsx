import React from 'react';
import { Shield, Award, HeartHandshake, Users, Leaf, Target } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function AboutCompany() {
  const valueIcons = [Shield, HeartHandshake, Users, Target, Award, Leaf];

  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--bg-surface)',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        borderBottom: '1px solid var(--border-hairline)'
      }}
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="grid-12" style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div style={{ gridColumn: 'span 5' }}>
            <span className="editorial-kicker">08 / THE COMPANY STORY</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                lineHeight: 1.05,
                color: 'var(--text-charcoal)',
                marginTop: '0.75rem'
              }}
            >
              Two Decades of Building Legacy.
            </h2>
          </div>

          <div
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end'
            }}
          >
            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)'
              }}
            >
              Founded in 2004, Mary Ann EliteProperties was established with a singular conviction:
              real estate in Madurai should be characterized by absolute legal transparency,
              robust physical infrastructure, and architectural design worthy of generational pride.
            </p>
          </div>
        </div>

        {/* Founder & Managing Director Narrative Block */}
        <div
          style={{
            backgroundColor: 'var(--bg-warm)',
            border: '1px solid var(--border-hairline)',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: 'clamp(3rem, 6vw, 5rem)'
          }}
        >
          <div className="grid-12" style={{ alignItems: 'center' }}>
            <div style={{ gridColumn: 'span 7' }} className="about-narrative-col">
              <span className="badge-tag" style={{ marginBottom: '1rem' }}>
                FOUNDER'S CREED • EST. 2004
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  color: 'var(--text-charcoal)',
                  lineHeight: 1.15,
                  marginBottom: '1.25rem'
                }}
              >
                {COMPANY_INFO.leadership.philosophyHeadline}
              </h3>

              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  color: 'var(--text-charcoal)',
                  marginBottom: '1rem'
                }}
              >
                {COMPANY_INFO.leadership.statement}
              </p>

              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  color: 'var(--text-muted)'
                }}
              >
                {COMPANY_INFO.leadership.teamNote}
              </p>
            </div>

            <div style={{ gridColumn: 'span 5' }} className="about-visual-col">
              <div
                className="architectural-frame"
                style={{
                  aspectRatio: '1/1',
                  border: '1px solid var(--border-strong)'
                }}
              >
                <img
                  src="/images/jay-square.png"
                  alt="Mary Ann EliteProperties Architectural Gate and Community"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2rem'
            }}
          >
            <span className="editorial-kicker">GUIDING PILLARS</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              OUR OPERATING CODE
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {COMPANY_INFO.coreValues.map((val, idx) => {
              const IconComp = valueIcons[idx] || Shield;
              return (
                <div
                  key={val.title}
                  style={{
                    backgroundColor: 'var(--bg-warm)',
                    border: '1px solid var(--border-hairline)',
                    padding: '1.75rem 1.5rem'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <IconComp size={18} color="var(--brand-eucalyptus)" />
                    <h4
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--text-charcoal)'
                      }}
                    >
                      {val.title}
                    </h4>
                  </div>

                  <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-narrative-col, .about-visual-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
