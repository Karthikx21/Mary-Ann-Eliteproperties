import React from 'react';
import { ArrowRight, Compass, ShieldCheck, HardHat, Home, FileCheck2, Footprints } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function BrandPositioning({ onOpenSiteVisit }) {
  const journeySteps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'Carefully vetted micro-locations matching your family timeline and budget.',
      icon: Compass
    },
    {
      num: '02',
      title: 'Site Visit',
      desc: 'Chauffeured, accompanied walk across the land to inspect soil, survey stones, and roads.',
      icon: Footprints
    },
    {
      num: '03',
      title: 'Decision',
      desc: 'Transparent valuation, unencumbered 30-year title proof, and Vastu alignment.',
      icon: ShieldCheck
    },
    {
      num: '04',
      title: 'Purchase',
      desc: 'Pre-approved 70% bank loan processing and clean registration at the Sub-Registrar.',
      icon: FileCheck2
    },
    {
      num: '05',
      title: 'Construction',
      desc: 'Turnkey architectural villa design, structural engineering, and branded materials.',
      icon: HardHat
    },
    {
      num: '06',
      title: 'Home',
      desc: 'A permanent sanctuary of generational pride in Madurai’s flourishing landscape.',
      icon: Home
    }
  ];

  return (
    <section
      id="positioning"
      style={{
        backgroundColor: 'var(--bg-surface)',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        borderBottom: '1px solid var(--border-hairline)'
      }}
    >
      <div className="editorial-container">
        {/* Editorial Narrative Header */}
        <div className="grid-12" style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div style={{ gridColumn: 'span 4' }}>
            <span className="editorial-kicker">THE PHILOSOPHY</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                lineHeight: 1.08,
                marginTop: '1rem',
                color: 'var(--text-charcoal)'
              }}
            >
              Property Felt as a Considered Human Journey.
            </h2>
          </div>

          <div
            style={{
              gridColumn: 'span 8',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              paddingLeft: 'clamp(0rem, 3vw, 2.5rem)'
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif-body)',
                fontSize: 'clamp(1.15rem, 1.8vw, 1.5rem)',
                lineHeight: 1.5,
                color: 'var(--text-charcoal)',
                marginBottom: '1.5rem'
              }}
            >
              "We do not merely sell plots. Land is where memories root, where children grow, and where families secure their future against inflation and uncertainty."
            </p>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'var(--text-muted)'
              }}
            >
              Since our founding in 2004, Mary Ann EliteProperties has rejected transactional speculation in favour of infrastructural permanence. Every plotted development is planned with wide black-topped tar roads, solar-powered night illumination, sweet ground water, and uncompromising DTCP and RERA statutory approvals.
            </p>
          </div>
        </div>

        {/* The 6-Step Journey */}
        <div
          style={{
            borderTop: '1px solid var(--border-hairline)',
            borderBottom: '1px solid var(--border-hairline)',
            padding: 'clamp(2rem, 4vw, 3.5rem) 0'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2.5rem'
            }}
          >
            <span className="editorial-kicker">SIX STAGES OF OWNERSHIP</span>
            <span
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text-muted)'
              }}
            >
              FROM DISCOVERY TO HANDOVER
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '2rem 1.5rem'
            }}
          >
            {journeySteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.num}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--brand-stone-dark)'
                      }}
                    >
                      {step.num}
                    </span>
                    <IconComponent size={18} color="var(--brand-eucalyptus)" />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '1.0625rem',
                      fontWeight: 700,
                      color: 'var(--text-charcoal)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.85rem',
                      lineHeight: 1.6,
                      color: 'var(--text-muted)'
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestone Statistics Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            paddingTop: 'clamp(2rem, 4vw, 3.5rem)'
          }}
          className="positioning-stats-strip"
        >
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} style={{ borderLeft: '1px solid var(--border-hairline)', paddingLeft: '1.5rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                  lineHeight: 1,
                  color: 'var(--text-charcoal)',
                  marginBottom: '0.5rem'
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-charcoal)'
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.2rem'
                }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .positioning-stats-strip {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 550px) {
          .positioning-stats-strip {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
