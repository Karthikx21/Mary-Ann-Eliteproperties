import React, { useState } from 'react';
import { MapPin, ArrowRight, Calendar } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import { PROJECTS, PROPERTY_CATEGORIES } from '../data/projectsData';
import CtaBanner from '../components/CtaBanner';

export default function PropertiesPage({ onSelectProject, onOpenSiteVisit }) {
  const [activeCategory, setActiveCategory] = useState('All Developments');

  const filtered = PROJECTS.filter((p) => {
    if (activeCategory === 'All Developments') return true;
    if (activeCategory === 'Gated Communities') {
      return p.propertyType.includes('Gated') || p.category.includes('Gated');
    }
    if (activeCategory === 'Villa Plots') {
      return p.propertyType.includes('Villa') || p.category.includes('Plots');
    }
    if (activeCategory === 'Airport Corridor') {
      return p.location.includes('Parapathi') || p.id === 'star-luxor-parapathi';
    }
    if (activeCategory === 'High Appreciation') {
      return p.category.includes('Appreciation') || p.category.includes('Highway');
    }
    return true;
  });

  const propertiesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Curated Plotted Developments & Villas in Madurai",
    "description": "Portfolio of DTCP and RERA approved residential plotted communities across Madurai.",
    "itemListElement": PROJECTS.map((p, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": p.name,
      "url": `https://maryanneliteproperties.com/properties/${p.id}`,
      "image": `https://maryanneliteproperties.com${p.heroImage}`
    }))
  };

  return (
    <div style={{ backgroundColor: '#F8FAFC' }}>
      <SeoHead
        title="Curated DTCP & RERA Approved Plots & Layouts in Madurai"
        description="Browse 9 verified DTCP & RERA approved residential layouts and villa plots across Madurai's growth corridors: Vilangudi, Parapathi Airport Road, Alagar Kovil, and Paravai."
        keywords="plots for sale madurai, buy land madurai, dtcp approved layouts, rera plots madurai, star luxoria, star luxor, vibul avenue, gated community land madurai, villa plots madurai"
        canonicalPath="/properties"
        schemaJson={propertiesSchema}
      />

      {/* Cinematic Header with Property Visual (NO ROUNDED BOX, NO STARS) */}
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
          src="/images/hero-star-luxoria.jpg"
          alt="Mary Ann EliteProperties Portfolio"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.3
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
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                color: '#C5A880',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}
            >
              <span>DTCP & RERA APPROVED PORTFOLIO • MADURAI</span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
                color: '#FFFFFF',
                marginBottom: '1rem',
                lineHeight: 1.1
              }}
            >
              Curated Plotted Developments
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                color: '#CBD5E1',
                lineHeight: 1.6,
                fontWeight: 300
              }}
            >
              Each project is hand-vetted for clean title provenance, strategic growth connectivity, robust perimeter infrastructure, and abundant sweet groundwater.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section style={{ padding: 'clamp(3.5rem, 6vw, 5.5rem) 0' }}>
        <div className="allys-container">
          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.65rem',
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
                    padding: '0.65rem 1.35rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    borderRadius: '8px',
                    border: `1px solid ${isActive ? '#0F172A' : '#E2E8F0'}`,
                    backgroundColor: isActive ? '#0F172A' : '#FFFFFF',
                    color: isActive ? '#C5A880' : '#475569',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive ? '0 4px 12px rgba(15, 23, 42, 0.15)' : 'none'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 3-Column Responsive Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
              gap: '2rem'
            }}
          >
            {filtered.map((project) => (
              <article
                key={project.id}
                className="allys-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px'
                }}
              >
                <div>
                  {/* Image Container with Sharp Corner Tags (NO ROUNDED PILLS) */}
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img
                      src={project.featuredImage || project.heroImage}
                      alt={`${project.name} - DTCP & RERA Approved Layout in ${project.location}, Madurai`}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />

                    {/* Sharp Tags (NO rounded box over words) */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.85rem',
                        left: '0.85rem',
                        display: 'flex',
                        gap: '0.35rem',
                        flexWrap: 'wrap'
                      }}
                    >
                      <span
                        style={{
                          padding: '0.3rem 0.6rem',
                          fontSize: '0.68rem',
                          fontWeight: 800,
                          backgroundColor: '#0F172A',
                          color: '#C5A880',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em'
                        }}
                      >
                        {project.propertyType.split(' ')[0]}
                      </span>
                      <span
                        style={{
                          padding: '0.3rem 0.6rem',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          color: '#0F172A',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em'
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.5rem 1.5rem 1rem' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#967444',
                        marginBottom: '0.4rem'
                      }}
                    >
                      <MapPin size={14} color="#967444" />
                      <span>{project.location}</span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#0F172A',
                        marginBottom: '0.65rem',
                        lineHeight: 1.25
                      }}
                    >
                      {project.name}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: '#64748B',
                        lineHeight: 1.6,
                        marginBottom: '1.25rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Specs Strip */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 0.85rem',
                        backgroundColor: '#F8FAFC',
                        borderRadius: '8px',
                        border: '1px solid #E2E8F0',
                        fontSize: '0.75rem',
                        color: '#475569',
                        fontWeight: 600
                      }}
                    >
                      <span>Plots: {project.plotSizes.split(' ')[0]} {project.plotSizes.split(' ')[1] || 'Cents'}</span>
                      <span style={{ color: '#967444' }}>{project.approvals[0]}</span>
                      <span style={{ color: '#0F172A' }}>70% Loan</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Price & Actions */}
                <div
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderTop: '1px solid #F1F5F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                      PRICE
                    </div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A' }}>
                      {project.price} <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 400 }}>{project.priceUnit}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => onSelectProject(project)}
                      className="allys-btn allys-btn-primary"
                      style={{ padding: '0.6rem 1rem', fontSize: '0.8125rem' }}
                    >
                      <span>View Details</span>
                    </button>
                    <button
                      onClick={() => onOpenSiteVisit(project.name)}
                      className="allys-btn allys-btn-outline"
                      style={{ padding: '0.6rem 0.75rem' }}
                      title={`Book Accompanied Visit for ${project.name}`}
                      aria-label={`Book Accompanied Visit for ${project.name}`}
                    >
                      <Calendar size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onOpenSiteVisit={() => onOpenSiteVisit()} />
    </div>
  );
}
