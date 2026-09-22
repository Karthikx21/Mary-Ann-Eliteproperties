import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CtaBanner({ onOpenSiteVisit }) {
  return (
    <section
      style={{
        backgroundColor: '#0F172A',
        color: '#FFFFFF',
        padding: 'clamp(4rem, 7vw, 6rem) 0',
        borderTop: '1px solid #1E293B',
        borderBottom: '1px solid #1E293B',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="allys-container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              color: '#FFFFFF',
              marginBottom: '1rem',
              lineHeight: 1.15
            }}
          >
            Join hundreds of satisfied families and let us help you find the perfect property in Madurai.
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#CBD5E1',
              lineHeight: 1.65,
              marginBottom: '2.25rem'
            }}
          >
            From DTCP and RERA-approved plotted developments to bespoke villa construction, our team provides honest guidance, transparent documentation, and 70% bank loan support.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem'
            }}
          >
            <Link
              to="/properties"
              className="allys-btn allys-btn-lime"
              style={{ padding: '0.95rem 1.85rem' }}
            >
              <span>Explore All Properties</span>
              <ArrowRight size={16} />
            </Link>

            <button
              onClick={onOpenSiteVisit}
              className="allys-btn"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                padding: '0.95rem 1.75rem'
              }}
            >
              <Calendar size={16} />
              <span>Schedule A Site Visit</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
