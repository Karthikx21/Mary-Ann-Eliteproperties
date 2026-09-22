import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, CheckCircle2, FileText, MessageSquare, Calendar, ArrowLeft, ShieldCheck } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import { PROJECTS } from '../data/projectsData';

export default function PropertyDetailPage({ onOpenSiteVisit }) {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id) || PROJECTS[0];

  const whatsappUrl = `https://wa.me/919676222700?text=${encodeURIComponent(project.whatsappText || `I need details on ${project.name}`)}`;

  const propertySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["RealEstateListing", "SingleFamilyResidence"],
        "@id": `https://maryanneliteproperties.com/properties/${project.id}#listing`,
        "name": project.name,
        "description": project.description,
        "url": `https://maryanneliteproperties.com/properties/${project.id}`,
        "image": `https://maryanneliteproperties.com${project.heroImage}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": project.location.split(',')[0].trim(),
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": project.price.replace(/[^0-9.]/g, '') || "1500000",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@id": "https://maryanneliteproperties.com/#organization"
          }
        },
        "amenityFeature": project.features.map((feat) => ({
          "@type": "LocationFeatureSpecification",
          "name": feat,
          "value": true
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://maryanneliteproperties.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Curated Properties",
            "item": "https://maryanneliteproperties.com/properties"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.name,
            "item": `https://maryanneliteproperties.com/properties/${project.id}`
          }
        ]
      }
    ]
  };

  return (
    <div style={{ backgroundColor: '#F8FAFC', paddingBottom: '5rem' }}>
      <SeoHead
        title={`${project.name} | ${project.location} Plots & Villas`}
        description={`${project.name} in ${project.location}, Madurai: ${project.tagline}. Plot sizes: ${project.plotSizes}. ${project.approvals.join(', ')}. 70% bank loan available.`}
        keywords={`${project.name}, ${project.location} plots for sale, ${project.microLocation} real estate, dtcp approved plots ${project.location}, rera plots madurai`}
        canonicalPath={`/properties/${project.id}`}
        ogImage={`https://maryanneliteproperties.com${project.heroImage}`}
        schemaJson={propertySchema}
      />

      {/* Top Breadcrumb & Title Bar */}
      <section style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '3.5rem 0 2.5rem' }}>
        <div className="allys-container">
          <Link
            to="/properties"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#94A3B8',
              fontSize: '0.85rem',
              textDecoration: 'none',
              marginBottom: '1.25rem',
              fontWeight: 500
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Properties</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="allys-badge allys-badge-dark">
              {project.propertyType}
            </span>
            <span className="allys-badge allys-badge-dark">
              {project.status}
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginBottom: '0.5rem'
            }}
          >
            {project.name}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#CBD5E1', fontSize: '1rem' }}>
            <MapPin size={16} color="#94A3B8" />
            <span>{project.location} • {project.microLocation}</span>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="allys-container" style={{ marginTop: '2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Visual & Description */}
          <div>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #E2E8F0',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '2rem'
              }}
            >
              <img
                src={project.heroImage}
                alt={project.name}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            <div className="allys-card" style={{ padding: '2rem', backgroundColor: '#FFFFFF', marginBottom: '2rem' }}>
              <span className="allys-badge" style={{ marginBottom: '0.5rem' }}>
                OVERVIEW
              </span>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#0F172A', marginTop: '0.35rem', marginBottom: '1rem' }}>
                The Development Story
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#475569' }}>
                {project.description}
              </p>
            </div>

            {/* Layout Features & Infrastructure */}
            <div className="allys-card" style={{ padding: '2rem', backgroundColor: '#FFFFFF' }}>
              <span className="allys-badge" style={{ marginBottom: '0.5rem' }}>
                INFRASTRUCTURE
              </span>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#0F172A', marginTop: '0.35rem', marginBottom: '1.25rem' }}>
                Layout Specifications & Amenities
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '0.85rem' }}>
                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      padding: '0.85rem 1rem',
                      backgroundColor: '#F8FAFC',
                      borderRadius: '8px',
                      border: '1px solid #E2E8F0'
                    }}
                  >
                    <CheckCircle2 size={18} color="#C5A880" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.5, fontWeight: 500 }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Specs, Pricing, Connectivity & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Pricing & Key Numbers Card */}
            <div className="allys-card" style={{ padding: '2rem', backgroundColor: '#FFFFFF' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748B', fontWeight: 700 }}>
                BENCHMARK INVESTMENT
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', color: '#0F172A', marginTop: '0.25rem' }}>
                {project.price} <span style={{ fontSize: '0.95rem', fontFamily: 'var(--font-sans)', color: '#64748B', fontWeight: 400 }}>{project.priceUnit}</span>
              </div>

              <div style={{ height: '1px', backgroundColor: '#F1F5F9', margin: '1.5rem 0' }} />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Plot Dimensions</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginTop: '0.2rem' }}>{project.plotSizes}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Bank Facility</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#967444', marginTop: '0.2rem' }}>70% Approved</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Approvals</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A', marginTop: '0.2rem' }}>{project.approvals[0]}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Compliance</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A', marginTop: '0.2rem' }}>{project.approvals[1] || 'RERA Compliant'}</div>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={() => onOpenSiteVisit(project.name)}
                  className="allys-btn allys-btn-lime"
                  style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem' }}
                >
                  <Calendar size={16} />
                  <span>Schedule Accompanied Visit</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="allys-btn"
                  style={{ width: '100%', backgroundColor: '#25D366', color: '#FFFFFF', padding: '0.9rem', fontSize: '0.95rem' }}
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Project Custodian</span>
                </a>

                {project.brochure && (
                  <a
                    href={project.brochure.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="allys-btn allys-btn-outline"
                    style={{ width: '100%', padding: '0.85rem' }}
                  >
                    <FileText size={16} />
                    <span>Download Official Brochure</span>
                  </a>
                )}
              </div>
            </div>

            {/* Verified Connectivity */}
            <div className="allys-card" style={{ padding: '2rem', backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span className="allys-badge">KEY CONNECTIVITY</span>
                <span style={{ fontSize: '0.75rem', color: '#967444', fontWeight: 600 }}>VERIFIED TRAVEL TIMES</span>
              </div>

              <div style={{ border: '1px solid #E2E8F0', borderRadius: '10px', overflow: 'hidden' }}>
                {project.verifiedConnectivity.map((conn, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1rem',
                      borderBottom: idx === project.verifiedConnectivity.length - 1 ? 'none' : '1px solid #F1F5F9',
                      backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <span
                        style={{
                          fontSize: '0.6875rem',
                          fontWeight: 700,
                          padding: '0.2rem 0.45rem',
                          backgroundColor: '#E2E8F0',
                          color: '#475569',
                          borderRadius: '4px',
                          minWidth: '65px',
                          textAlign: 'center'
                        }}
                      >
                        {conn.type}
                      </span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#0F172A' }}>
                        {conn.place}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#64748B' }}>
                      {conn.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
