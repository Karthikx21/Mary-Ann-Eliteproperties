import React from 'react';
import { ArrowRight, MapPin, Check, ShieldCheck, Banknote, Navigation, Calendar } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';

export default function FeaturedProject({ onSelectProject, onOpenSiteVisit }) {
  const featured = PROJECTS.find((p) => p.id === 'star-luxoria-vilangudi') || PROJECTS[0];

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-warm)',
        paddingTop: 'clamp(3.5rem, 7vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 6rem)',
        borderBottom: '1px solid var(--border-hairline)'
      }}
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: 'clamp(2rem, 4vw, 3.5rem)'
          }}
        >
          <div>
            <span className="editorial-kicker">03 / ARCHITECTURAL SPOTLIGHT</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                lineHeight: 1.05,
                color: 'var(--text-charcoal)',
                marginTop: '0.75rem'
              }}
            >
              Star Luxoria • Vilangudi
            </h2>
          </div>

          <button
            onClick={() => onSelectProject(featured)}
            className="btn btn-secondary"
          >
            <span>View Full Specification</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Bilateral Spotlight Composition */}
        <div className="grid-12" style={{ alignItems: 'stretch' }}>
          {/* Visual Column */}
          <div
            style={{
              gridColumn: 'span 7',
              position: 'relative'
            }}
            className="featured-image-col"
          >
            <div
              className="architectural-frame"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '440px',
                border: '1px solid var(--border-strong)'
              }}
            >
              <img
                src={featured.heroImage}
                alt="Star Luxoria Vilangudi Grand Arch and Residential Layout"
              />

              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  left: '1.25rem',
                  display: 'flex',
                  gap: '0.5rem'
                }}
              >
                <span className="badge-tag" style={{ backgroundColor: 'var(--bg-charcoal)', color: 'var(--bg-warm)' }}>
                  PRIME URBAN ZONE
                </span>
                <span className="badge-tag">
                  DTCP & RERA APPROVED
                </span>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div
            style={{
              gridColumn: 'span 5',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-hairline)',
              padding: 'clamp(1.75rem, 3vw, 2.75rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            className="featured-info-col"
          >
            <div>
              {/* Location Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.78rem',
                  color: 'var(--brand-eucalyptus)',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}
              >
                <MapPin size={15} />
                <span>Opposite HP Petrol Station, Vilangudi, Madurai</span>
              </div>

              {/* Price Callout */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    color: 'var(--text-charcoal)',
                    lineHeight: 1
                  }}
                >
                  {featured.price}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'var(--text-muted)',
                    marginTop: '0.35rem'
                  }}
                >
                  PER CENT • 1 TO 9 CENT AVAILABLE
                </div>
              </div>

              <p
                style={{
                  fontSize: '0.925rem',
                  lineHeight: 1.65,
                  color: 'var(--text-muted)',
                  marginBottom: '1.75rem'
                }}
              >
                {featured.description}
              </p>

              {/* Key Highlights List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-charcoal)' }}>
                  <Check size={16} color="var(--brand-eucalyptus)" />
                  <span>40ft, 33ft, 30ft & 24ft Wide Tar Avenues</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-charcoal)' }}>
                  <Check size={16} color="var(--brand-eucalyptus)" />
                  <span>5 Minutes to Fatima College & Arapalayam Bus Stand</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-charcoal)' }}>
                  <Check size={16} color="var(--brand-eucalyptus)" />
                  <span>24×7 CCTV Surveillance & Solar Street Lighting</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-charcoal)' }}>
                  <Check size={16} color="var(--brand-eucalyptus)" />
                  <span>70% Pre-Approved Bank Loan Facility Available</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-hairline)'
              }}
            >
              <button
                onClick={() => onOpenSiteVisit(featured.name)}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <Calendar size={15} />
                <span>Book Site Tour</span>
              </button>

              <button
                onClick={() => onSelectProject(featured)}
                className="btn btn-secondary"
              >
                <span>Full Details</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .featured-image-col {
            grid-column: span 12 !important;
            min-height: 320px;
          }
          .featured-info-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
