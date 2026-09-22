import React, { useState } from 'react';
import { ArrowRight, MapPin, Check, Banknote, ShieldCheck, Download, ExternalLink, Calendar } from 'lucide-react';
import { PROJECTS, PROPERTY_CATEGORIES } from '../data/projectsData';

export default function ProjectIndex({ onSelectProject, onOpenSiteVisit }) {
  const [activeCategory, setActiveCategory] = useState('All Developments');

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === 'All Developments') return true;
    if (activeCategory === 'Gated Communities') {
      return project.propertyType.includes('Gated') || project.category.includes('Gated');
    }
    if (activeCategory === 'Villa Plots') {
      return project.propertyType.includes('Villa') || project.category.includes('Plots');
    }
    if (activeCategory === 'Airport Corridor') {
      return project.location.includes('Parapathi') || project.id === 'star-luxor-parapathi';
    }
    if (activeCategory === 'High Appreciation') {
      return project.category.includes('Appreciation') || project.category.includes('Highway');
    }
    return true;
  });

  return (
    <section
      id="projects"
      style={{
        backgroundColor: 'var(--bg-warm)',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
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
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}
        >
          <div>
            <span className="editorial-kicker">04 / CURATED DEVELOPMENTS</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                lineHeight: 1.05,
                color: 'var(--text-charcoal)',
                marginTop: '0.75rem'
              }}
            >
              The Madurai Portfolio.
            </h2>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.925rem',
              color: 'var(--text-muted)',
              maxWidth: '420px',
              lineHeight: 1.6
            }}
          >
            Every property in our index is strictly verified for DTCP/RERA sanctions,
            authentic Madurai road access, and clear individual marketable titles.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-hairline)',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)'
          }}
        >
          {PROPERTY_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: isActive ? 'var(--bg-charcoal)' : 'transparent',
                  color: isActive ? 'var(--bg-warm)' : 'var(--text-charcoal)',
                  border: `1px solid ${isActive ? 'var(--bg-charcoal)' : 'var(--border-hairline)'}`,
                  padding: '0.55rem 1.15rem',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* NON-REPETITIVE EDITORIAL CARDS COMPOSITIONS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 6vw, 5rem)' }}>
          {filteredProjects.map((project, index) => {
            // Editorial variation based on modulo to ensure zero template fatigue
            const variant = index % 3;

            // VARIANT 0: WIDE ASYMMETRICAL SPLIT (Hero visual on left, deep architectural spec tray on right)
            if (variant === 0) {
              return (
                <article
                  key={project.id}
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-hairline)',
                    overflow: 'hidden'
                  }}
                >
                  <div className="grid-12" style={{ alignItems: 'stretch' }}>
                    <div
                      style={{ gridColumn: 'span 7', position: 'relative' }}
                      className="card-media-col"
                    >
                      <div
                        className="architectural-frame"
                        style={{ height: '100%', minHeight: '380px' }}
                      >
                        <img
                          src={project.featuredImage || project.heroImage}
                          alt={`${project.name} in ${project.location}`}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            top: '1rem',
                            left: '1rem',
                            display: 'flex',
                            gap: '0.5rem'
                          }}
                        >
                          <span className="badge-tag" style={{ backgroundColor: 'var(--bg-charcoal)', color: 'var(--bg-warm)' }}>
                            {project.category}
                          </span>
                          <span className="badge-tag">
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        gridColumn: 'span 5',
                        padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                      className="card-content-col"
                    >
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: 'var(--brand-eucalyptus)',
                            marginBottom: '0.5rem'
                          }}
                        >
                          <MapPin size={14} />
                          <span>{project.location}</span>
                        </div>

                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(1.85rem, 3vw, 2.35rem)',
                            lineHeight: 1.1,
                            color: 'var(--text-charcoal)',
                            marginBottom: '0.75rem'
                          }}
                        >
                          {project.name}
                        </h3>

                        <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                          {project.description.slice(0, 180)}...
                        </p>

                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '1rem',
                            padding: '1rem',
                            backgroundColor: 'var(--bg-warm)',
                            border: '1px solid var(--border-hairline)',
                            marginBottom: '1.5rem'
                          }}
                        >
                          <div>
                            <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                              PRICING
                            </div>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--text-charcoal)' }}>
                              {project.price}
                            </div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                              {project.priceUnit}
                            </div>
                          </div>

                          <div>
                            <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                              PLOT DIMENSIONS
                            </div>
                            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-charcoal)', marginTop: '0.2rem' }}>
                              {project.plotSizes}
                            </div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--brand-eucalyptus)', marginTop: '0.2rem' }}>
                              {project.bankLoanFacility}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <button
                          onClick={() => onSelectProject(project)}
                          className="btn btn-primary"
                          style={{ flex: 1 }}
                        >
                          <span>Explore Layout</span>
                          <ArrowRight size={14} />
                        </button>
                        <button
                          onClick={() => onOpenSiteVisit(project.name)}
                          className="btn btn-secondary"
                          title="Book Visit"
                        >
                          <Calendar size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }

            // VARIANT 1: INVERTED ASYMMETRIC (Text details on left, portrait visual on right)
            if (variant === 1) {
              return (
                <article
                  key={project.id}
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-hairline)',
                    overflow: 'hidden'
                  }}
                >
                  <div className="grid-12" style={{ alignItems: 'stretch' }}>
                    <div
                      style={{
                        gridColumn: 'span 5',
                        padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                      className="card-content-col"
                    >
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: 'var(--brand-eucalyptus)',
                            marginBottom: '0.5rem'
                          }}
                        >
                          <MapPin size={14} />
                          <span>{project.location}</span>
                        </div>

                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(1.85rem, 3vw, 2.35rem)',
                            lineHeight: 1.1,
                            color: 'var(--text-charcoal)',
                            marginBottom: '0.75rem'
                          }}
                        >
                          {project.name}
                        </h3>

                        <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                          {project.description.slice(0, 180)}...
                        </p>

                        {/* Verified Proximity Tag List */}
                        <div style={{ marginBottom: '1.5rem' }}>
                          <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--brand-stone-dark)', marginBottom: '0.5rem' }}>
                            VERIFIED CONNECTIVITY
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            {project.verifiedConnectivity.slice(0, 3).map((conn, i) => (
                              <span key={i} className="badge-tag" style={{ fontSize: '0.6875rem' }}>
                                {conn.place} • {conn.time}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div
                          style={{
                            padding: '0.85rem 1rem',
                            backgroundColor: 'var(--bg-warm)',
                            border: '1px solid var(--border-hairline)',
                            marginBottom: '1.5rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <div>
                            <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>PRICE</div>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-charcoal)' }}>
                              {project.price}
                            </div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>APPROVALS</div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-charcoal)' }}>
                              {project.approvals[0]}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <button
                          onClick={() => onSelectProject(project)}
                          className="btn btn-primary"
                          style={{ flex: 1 }}
                        >
                          <span>Explore Project</span>
                          <ArrowRight size={14} />
                        </button>
                        <button
                          onClick={() => onOpenSiteVisit(project.name)}
                          className="btn btn-secondary"
                          title="Book Visit"
                        >
                          <Calendar size={15} />
                        </button>
                      </div>
                    </div>

                    <div
                      style={{ gridColumn: 'span 7', position: 'relative' }}
                      className="card-media-col"
                    >
                      <div
                        className="architectural-frame"
                        style={{ height: '100%', minHeight: '380px' }}
                      >
                        <img
                          src={project.featuredImage || project.heroImage}
                          alt={`${project.name} gated entrance`}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            display: 'flex',
                            gap: '0.5rem'
                          }}
                        >
                          <span className="badge-tag" style={{ backgroundColor: 'var(--bg-charcoal)', color: 'var(--bg-warm)' }}>
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }

            // VARIANT 2: PANORAMIC FOCAL CARD (Full-width top landscape + tripartite metadata tray below)
            return (
              <article
                key={project.id}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-hairline)',
                  overflow: 'hidden'
                }}
              >
                <div
                  className="architectural-frame"
                  style={{
                    width: '100%',
                    height: '320px'
                  }}
                >
                  <img
                    src={project.featuredImage || project.heroImage}
                    alt={`${project.name} panoramic layout`}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      display: 'flex',
                      gap: '0.5rem'
                    }}
                  >
                    <span className="badge-tag" style={{ backgroundColor: 'var(--bg-charcoal)', color: 'var(--bg-warm)' }}>
                      {project.propertyType}
                    </span>
                    <span className="badge-tag">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: 'var(--brand-eucalyptus)',
                          marginBottom: '0.25rem'
                        }}
                      >
                        <MapPin size={14} />
                        <span>{project.location}</span>
                      </div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                          color: 'var(--text-charcoal)'
                        }}
                      >
                        {project.name}
                      </h3>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--text-charcoal)' }}>
                        {project.price}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        {project.priceUnit}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '850px' }}>
                    {project.description}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid var(--border-hairline)'
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.features.slice(0, 3).map((feat, fi) => (
                        <span key={fi} className="badge-tag" style={{ fontSize: '0.7rem' }}>
                          ✓ {feat}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <button
                        onClick={() => onSelectProject(project)}
                        className="btn btn-primary"
                      >
                        <span>Inspect Full Specs</span>
                        <ArrowRight size={14} />
                      </button>
                      <button
                        onClick={() => onOpenSiteVisit(project.name)}
                        className="btn btn-secondary"
                      >
                        <Calendar size={14} />
                        <span>Schedule Visit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .card-media-col, .card-content-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
