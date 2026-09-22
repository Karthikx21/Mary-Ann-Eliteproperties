import React, { useEffect } from 'react';
import { X, MapPin, CheckCircle2, FileText, Phone, MessageSquare, Calendar, ExternalLink, ShieldCheck, Banknote } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function ProjectDetailModal({ project, onClose, onOpenSiteVisit }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  const whatsappUrl = `https://wa.me/919676222700?text=${encodeURIComponent(project.whatsappText || `I need details on ${project.name}`)}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Top Sticky Header */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 20,
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid #E2E8F0',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backdropFilter: 'blur(8px)'
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#64748B',
                fontWeight: 700
              }}
            >
              PROJECT SPECIFICATIONS
            </span>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                color: '#0F172A',
                lineHeight: 1.15
              }}
            >
              {project.name}
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            style={{
              background: '#F1F5F9',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              color: '#0F172A',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E2E8F0')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F1F5F9')}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div style={{ padding: 'clamp(1.25rem, 3vw, 2.25rem)' }}>
          {/* Hero Banner Visual */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '1.75rem',
              border: '1px solid #E2E8F0'
            }}
          >
            <img
              src={project.heroImage}
              alt={`${project.name} in ${project.location}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <span className="allys-badge allys-badge-dark" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                {project.propertyType}
              </span>
              <span className="allys-badge allys-badge-dark" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                • {project.status}
              </span>
            </div>
          </div>

          {/* Location & Title */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#64748B',
                marginBottom: '0.4rem'
              }}
            >
              <MapPin size={16} color="#0F172A" />
              <span>{project.location} • {project.microLocation}</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                lineHeight: 1.1,
                color: '#0F172A',
                marginBottom: '0.5rem'
              }}
            >
              {project.name}
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#475569',
                lineHeight: 1.5
              }}
            >
              {project.tagline}
            </p>
          </div>

          {/* KEY SPECS GRID */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
              gap: '1rem',
              padding: '1.5rem',
              backgroundColor: '#F8FAFC',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              marginBottom: '2rem'
            }}
          >
            <div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748B', fontWeight: 600 }}>
                PLOT SIZES
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#0F172A', marginTop: '0.2rem' }}>
                {project.plotSizes}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#967444', fontWeight: 600 }}>
                Demarcated layouts
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748B', fontWeight: 600 }}>
                PRICE RANGE
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#0F172A', marginTop: '0.2rem' }}>
                {project.price}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                {project.priceUnit}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748B', fontWeight: 600 }}>
                APPROVAL STATUS
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginTop: '0.35rem' }}>
                {project.approvals[0]}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#967444', fontWeight: 600 }}>
                {project.approvals[1] || 'RERA Compliant'}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748B', fontWeight: 600 }}>
                BANK FINANCING
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#0F172A', marginTop: '0.2rem' }}>
                70% LOAN
              </div>
              <div style={{ fontSize: '0.75rem', color: '#967444', fontWeight: 600 }}>
                {project.bankLoanFacility}
              </div>
            </div>
          </div>

          {/* PROJECT DESCRIPTION */}
          <div style={{ marginBottom: '2rem' }}>
            <span className="allys-badge" style={{ marginBottom: '0.5rem' }}>
              OVERVIEW
            </span>
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#0F172A',
                marginTop: '0.5rem',
                marginBottom: '0.75rem'
              }}
            >
              The Land and Development Context
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#475569' }}>
              {project.description}
            </p>
          </div>

          {/* FEATURES & INFRASTRUCTURE */}
          <div style={{ marginBottom: '2rem' }}>
            <span className="allys-badge" style={{ marginBottom: '0.5rem' }}>
              INFRASTRUCTURE
            </span>
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#0F172A',
                marginTop: '0.5rem',
                marginBottom: '1rem'
              }}
            >
              Layout Specifications & Amenities
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '0.75rem'
              }}
            >
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

          {/* VERIFIED MADURAI CONNECTIVITY */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.85rem'
              }}
            >
              <span className="allys-badge">
                KEY CONNECTIVITY
              </span>
              <span style={{ fontSize: '0.75rem', color: '#967444', fontWeight: 600 }}>
                VERIFIED TRAVEL TIMES
              </span>
            </div>

            <div
              style={{
                border: '1px solid #E2E8F0',
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF'
              }}
            >
              {project.verifiedConnectivity.map((conn, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1.25rem',
                    borderBottom: idx === project.verifiedConnectivity.length - 1 ? 'none' : '1px solid #F1F5F9',
                    backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.5rem',
                        backgroundColor: '#E2E8F0',
                        color: '#475569',
                        borderRadius: '4px',
                        minWidth: '70px',
                        textAlign: 'center'
                      }}
                    >
                      {conn.type}
                    </span>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#0F172A' }}>
                      {conn.place}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: '#64748B'
                    }}
                  >
                    {conn.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ACTION STRIP */}
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              borderRadius: '12px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem'
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', lineHeight: 1.15, color: '#FFFFFF' }}>
                Ready to Experience {project.name}?
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#94A3B8', marginTop: '0.25rem' }}>
                Walk the site, inspect the soil, and verify survey stones in person.
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              {project.brochure && (
                <a
                  href={project.brochure.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="allys-btn allys-btn-outline"
                  style={{ backgroundColor: '#FFFFFF', color: '#0F172A', padding: '0.65rem 1.15rem' }}
                >
                  <FileText size={15} />
                  <span>Brochure</span>
                </a>
              )}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="allys-btn"
                style={{ backgroundColor: '#10B981', color: '#FFFFFF', padding: '0.65rem 1.15rem' }}
              >
                <MessageSquare size={15} />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenSiteVisit(project.name);
                }}
                className="allys-btn allys-btn-lime"
                style={{ padding: '0.65rem 1.25rem' }}
              >
                <Calendar size={15} />
                <span>Book Visit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
