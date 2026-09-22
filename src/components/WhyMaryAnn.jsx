import React from 'react';
import { ShieldCheck, Award, Users, FileCheck, Banknote, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function WhyMaryAnn({ onOpenSiteVisit }) {
  const pillars = [
    {
      num: '01',
      title: 'Trusted Market Expertise',
      headline: 'Two Decades in Madurai Real Estate (Est. 2004)',
      description:
        'With over twenty years of continuous presence, Mary Ann EliteProperties delivers honest guidance, rigorous valuation, and empirical foresight into Madurai’s emerging transit corridors.',
      icon: Award
    },
    {
      num: '02',
      title: 'Curated DTCP & RERA Sanctions',
      headline: 'Clear Marketable Titles & Zero Speculation',
      description:
        'Every project in our portfolio undergoes exhaustive 30-year legal title scrutiny, certified boundary demarcations, and statutory layout approvals before any client presentation.',
      icon: ShieldCheck
    },
    {
      num: '03',
      title: 'Engineered Infrastructure',
      headline: '40ft Tar Roads, Solar Illumination & Sweet Water',
      description:
        'We deliver plots that are genuinely ready to build on: wide black-topped roadways, underground drainage conduits, solar streetlights, and proven drinking water tables.',
      icon: Building2
    },
    {
      num: '04',
      title: '70% Institutional Bank Financing',
      headline: 'Pre-Approved Loans with Leading Nationalized Banks',
      description:
        'Our transparent documentation enables pre-approved bank loans of up to 70% with SBI, HDFC, ICICI, and major financial institutions, backed by complete paperwork assistance.',
      icon: Banknote
    },
    {
      num: '05',
      title: 'End-to-End Handover Custody',
      headline: 'From Registration to Turnkey Villa Construction',
      description:
        'We stay beside our clients through registrar scheduling, patta mutation, fencing, and turnkey architectural duplex villa design and construction.',
      icon: FileCheck
    }
  ];

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-warm)',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        borderBottom: '1px solid var(--border-hairline)'
      }}
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="grid-12" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          <div style={{ gridColumn: 'span 5' }}>
            <span className="editorial-kicker">05 / WHY MARY ANN</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                lineHeight: 1.08,
                color: 'var(--text-charcoal)',
                marginTop: '0.75rem'
              }}
            >
              Integrity. Infrastructure. Permanence.
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
              We prioritize enduring human relationships over transactional velocity.
              Every plotted layout, every surveyed cent, and every constructed villa reflects our founder’s
              unwavering benchmark: build with materials and titles that stand the test of generations.
            </p>
          </div>
        </div>

        {/* 5 Architectural Ledger Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.num}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-hairline)',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color var(--transition-normal), transform var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--text-charcoal)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-hairline)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--brand-stone-dark)'
                      }}
                    >
                      {pillar.num}
                    </span>
                    <IconComp size={20} color="var(--brand-eucalyptus)" />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: 'var(--text-charcoal)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--brand-eucalyptus)',
                      fontWeight: 600,
                      marginBottom: '1rem'
                    }}
                  >
                    {pillar.headline}
                  </div>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.65,
                      color: 'var(--text-muted)'
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
