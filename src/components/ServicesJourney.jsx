import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Check, ExternalLink } from 'lucide-react';
import { SERVICES } from '../data/servicesData';

export default function ServicesJourney({ onOpenSiteVisit, onOpenCalculator, onSelectProjectByService }) {
  const [expandedId, setExpandedId] = useState('01');

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      style={{
        backgroundColor: 'var(--bg-charcoal)',
        color: 'var(--text-inverse)',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        borderBottom: '1px solid var(--border-inverse-hairline)'
      }}
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="grid-12" style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div style={{ gridColumn: 'span 5' }}>
            <span
              className="editorial-kicker"
              style={{ color: 'var(--brand-stone)' }}
            >
              06 / CAPABILITIES & SERVICES
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                lineHeight: 1.05,
                color: 'var(--text-inverse)',
                marginTop: '0.75rem'
              }}
            >
              The Integrated Property Ledger.
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
                color: 'var(--text-inverse-muted)'
              }}
            >
              From surveying raw earth in Madurai’s emerging infrastructure zones to coordinating
              with our Dubai advisory desk, we oversee every phase of acquisition, statutory sanction,
              and turnkey villa realization with meticulous precision.
            </p>
          </div>
        </div>

        {/* Editorial Numbered List (Not identical cards!) */}
        <div style={{ borderTop: '1px solid var(--border-inverse-hairline)' }}>
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                style={{
                  borderBottom: '1px solid var(--border-inverse-hairline)',
                  transition: 'background-color var(--transition-normal)'
                }}
              >
                {/* Clickable Header Row */}
                <button
                  onClick={() => toggleExpand(service.id)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: 'clamp(1.5rem, 3vw, 2.25rem) 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    color: 'inherit',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(1rem, 3vw, 2.5rem)' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: isExpanded ? 'var(--brand-stone)' : 'var(--text-light-muted)',
                        minWidth: '2.5rem'
                      }}
                    >
                      {service.number}
                    </span>

                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.5rem, 3vw, 2.35rem)',
                          lineHeight: 1.15,
                          color: isExpanded ? 'var(--text-inverse)' : 'var(--text-inverse-muted)',
                          transition: 'color var(--transition-fast)'
                        }}
                      >
                        {service.title}
                      </h3>
                      <div
                        style={{
                          fontFamily: 'var(--font-ui)',
                          fontSize: '0.8rem',
                          color: 'var(--brand-stone)',
                          marginTop: '0.35rem'
                        }}
                      >
                        {service.headline}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: isExpanded ? 'var(--brand-stone)' : 'var(--text-inverse-muted)'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        display: 'none'
                      }}
                      className="explore-text-desktop"
                    >
                      {isExpanded ? 'Collapse' : 'Inspect'}
                    </span>
                    {isExpanded ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                  </div>
                </button>

                {/* Expandable Architectural Details Drawer */}
                {isExpanded && (
                  <div
                    style={{
                      paddingBottom: 'clamp(2rem, 4vw, 3rem)',
                      paddingLeft: 'clamp(0rem, 3vw, 4rem)',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(12, 1fr)',
                      gap: '2rem',
                      animation: 'fadeIn 0.3s var(--ease-editorial)'
                    }}
                  >
                    <div style={{ gridColumn: 'span 7' }} className="service-desc-col">
                      <p
                        style={{
                          fontSize: '0.985rem',
                          lineHeight: 1.75,
                          color: 'var(--text-inverse-muted)',
                          marginBottom: '1.75rem'
                        }}
                      >
                        {service.description}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        {service.id === '03' ? (
                          <button onClick={onOpenSiteVisit} className="btn btn-inverse">
                            <span>Schedule Guided Site Visit</span>
                            <ArrowRight size={14} />
                          </button>
                        ) : service.id === '05' ? (
                          <button onClick={onOpenCalculator} className="btn btn-inverse">
                            <span>Calculate Land Loan & EMI</span>
                            <ArrowRight size={14} />
                          </button>
                        ) : (
                          <a href={service.ctaTarget} className="btn btn-inverse">
                            <span>{service.ctaLabel}</span>
                            <ArrowRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div style={{ gridColumn: 'span 5' }} className="service-deliverables-col">
                      <div
                        style={{
                          backgroundColor: 'var(--bg-dark-card)',
                          border: '1px solid var(--border-inverse-hairline)',
                          padding: '1.5rem'
                        }}
                      >
                        <div
                          style={{
                            fontFamily: 'var(--font-ui)',
                            fontSize: '0.6875rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.14em',
                            color: 'var(--brand-stone)',
                            marginBottom: '1rem',
                            fontWeight: 700
                          }}
                        >
                          CORE DELIVERABLES
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {service.deliverables.map((del, dIdx) => (
                            <div key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8125rem' }}>
                              <Check size={15} color="var(--brand-stone)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                              <span style={{ color: 'var(--text-inverse)' }}>{del}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .explore-text-desktop {
            display: inline !important;
          }
        }
        @media (max-width: 900px) {
          .service-desc-col, .service-deliverables-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
