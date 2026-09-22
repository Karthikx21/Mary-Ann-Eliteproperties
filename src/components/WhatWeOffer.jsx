import React from 'react';
import { Link } from 'react-router-dom';
import { Home, TrendingUp, HardHat, FileCheck2, ArrowRight } from 'lucide-react';

export default function WhatWeOffer({ onOpenSiteVisit }) {
  const offerings = [
    {
      icon: Home,
      title: 'Plotted Developments & Land Guidance',
      description:
        'Navigate your land purchase with confidence — from first inspection to final walkthrough, we curate DTCP & RERA-approved plots with wide tar roads, solar streetlights, and rainwater drainage.',
      actionText: 'Explore Developments',
      actionHref: '/properties'
    },
    {
      icon: TrendingUp,
      title: 'Investment & Property Advisory',
      description:
        'Unlock long-term appreciation with two decades of local market knowledge. We analyze upcoming highway expansions, airport corridor growth, water tables, and neighbourhood trends.',
      actionText: 'Consult Advisory Team',
      actionHref: '/advisors'
    },
    {
      icon: HardHat,
      title: 'Villa & Bespoke Construction',
      description:
        'Beyond the land, we provide end-to-end design-to-construction capabilities for duplex 1, 2 & 3 BHK villas, planned with 100% Vastu benefits and branded construction materials.',
      actionText: 'Discuss Construction',
      actionHref: '/contact'
    },
    {
      icon: FileCheck2,
      title: 'Loan & Transaction Management',
      description:
        'Experience stress-free closings with pre-approved 70% bank loan facilities through leading nationalized institutions, complete title documentation, and smooth registration.',
      actionText: 'Inquire Loan Guidance',
      actionHref: '/contact'
    }
  ];

  return (
    <section
      id="what-we-offer"
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(4rem, 7vw, 6rem) 0',
        borderBottom: '1px solid #E2E8F0'
      }}
    >
      <div className="allys-container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="editorial-kicker">
            OUR SERVICES
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
              color: '#0F172A',
              marginBottom: '0.75rem'
            }}
          >
            What We Offer?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6 }}>
            Buying or developing property can be overwhelming — we make it effortless and secure.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '1.5rem'
          }}
        >
          {offerings.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="allys-card"
                style={{
                  padding: '2.25rem 1.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '16px'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: '#FAF8F5',
                      border: '1px solid #E8DFD0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      color: '#967444'
                    }}
                  >
                    <IconComp size={24} />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '0.75rem',
                      lineHeight: 1.3
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#64748B',
                      lineHeight: 1.65,
                      marginBottom: '1.75rem'
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <Link
                  to={item.actionHref}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#967444',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = '0.65rem';
                    e.currentTarget.style.color = '#B38F4D';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = '0.4rem';
                    e.currentTarget.style.color = '#967444';
                  }}
                >
                  <span>{item.actionText}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
