import React from 'react';
import { Calendar, Building2, Users, Award } from 'lucide-react';

export default function StatsShowcase({ isDark = false }) {
  const stats = [
    {
      icon: Calendar,
      number: '2+',
      label: 'Years of Experience',
      sublabel: 'Dedicated Madurai & Dubai Advisory'
    },
    {
      icon: Building2,
      number: '10+',
      label: 'Successful Projects',
      sublabel: 'DTCP & RERA Approved Developments'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Happy Families',
      sublabel: 'Thriving Gated Communities'
    },
    {
      icon: Award,
      number: '4+',
      label: 'Excellence Awards',
      sublabel: 'Quality & Delivery Recognitions'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: isDark ? '#0F172A' : '#FFFFFF',
        borderBottom: `1px solid ${isDark ? '#1E293B' : '#E2E8F0'}`,
        padding: 'clamp(2.5rem, 5vw, 4rem) 0',
        position: 'relative',
        zIndex: 10
      }}
      className="stats-showcase-section"
    >
      <div className="allys-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch'
          }}
        >
          {stats.map((st, i) => {
            const IconComp = st.icon;
            return (
              <div
                key={i}
                className="stat-card-luxury"
                style={{
                  backgroundColor: isDark ? '#1E293B' : '#FAF8F5',
                  border: `1px solid ${isDark ? '#334155' : '#E8DFD0'}`,
                  borderRadius: '16px',
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative'
                }}
              >
                {/* Icon Container */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    backgroundColor: isDark ? 'rgba(197, 168, 128, 0.15)' : '#FFFFFF',
                    border: `1px solid ${isDark ? 'rgba(197, 168, 128, 0.35)' : '#E2D5C3'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isDark ? '#D8B88C' : '#967444',
                    marginBottom: '1.25rem',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform 0.3s ease'
                  }}
                  className="stat-icon-wrapper"
                >
                  <IconComp size={28} strokeWidth={2} />
                </div>

                {/* Big Metric Number */}
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                    color: isDark ? '#FFFFFF' : '#0F172A',
                    fontWeight: 600,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    marginBottom: '0.35rem'
                  }}
                >
                  {st.number}
                </div>

                {/* Metric Label */}
                <div
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: isDark ? '#F1F5F9' : '#0F172A',
                    marginBottom: '0.25rem'
                  }}
                >
                  {st.label}
                </div>

                {/* Sub-label */}
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: isDark ? '#94A3B8' : '#64748B',
                    lineHeight: 1.4
                  }}
                >
                  {st.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .stat-card-luxury:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px -6px rgba(197, 168, 128, 0.25);
          border-color: #C5A880;
        }
        .stat-card-luxury:hover .stat-icon-wrapper {
          transform: scale(1.08);
          border-color: #C5A880;
        }
      `}</style>
    </section>
  );
}
