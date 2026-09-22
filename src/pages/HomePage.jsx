import React from 'react';
import SeoHead from '../components/SeoHead';
import Hero from '../components/Hero';
import StatsShowcase from '../components/StatsShowcase';
import WhatWeOffer from '../components/WhatWeOffer';
import FeaturedProperties from '../components/FeaturedProperties';
import LocalSeoFaq from '../components/LocalSeoFaq';
import CtaBanner from '../components/CtaBanner';

export default function HomePage({ onSelectProject, onOpenSiteVisit }) {
  return (
    <div>
      <SeoHead
        title="Curated DTCP & RERA Approved Plots & Villas in Madurai"
        description="Explore premier DTCP & RERA approved plotted developments, luxury gated communities, and bespoke villas in Madurai by Mary Ann Elite Properties. 2+ Years Dedicated Advisory, 2004 Heritage, 70% Bank Loans."
        keywords="plots for sale in madurai, dtcp approved plots madurai, rera approved residential land madurai, villa plots vilangudi, star luxoria madurai, star luxor parapathi, airport road plots madurai, vibul avenue alagar kovil, meenatchi garden poonjuthi, gated community madurai, mary ann elite properties"
        canonicalPath="/"
      />

      {/* 1. Ultra-Luxury Hero Banner */}
      <Hero
        onSelectProject={onSelectProject}
        onOpenSiteVisit={onOpenSiteVisit}
      />

      {/* 2. FIRST PRIORITY: Prestigious Stats Showcase (2+ Years, 10+ Projects, 500+ Families, 4+ Awards) */}
      <StatsShowcase isDark={false} />

      {/* 3. Editorial Narrative Mission Strip */}
      <section
        style={{
          backgroundColor: '#F8FAFC',
          borderBottom: '1px solid #E2E8F0',
          padding: 'clamp(3rem, 5vw, 4.5rem) 0',
          textAlign: 'center'
        }}
      >
        <div className="allys-container">
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <span className="allys-badge" style={{ marginBottom: '1rem' }}>
              OUR PHILOSOPHY
            </span>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.2vw, 1.65rem)',
                lineHeight: 1.5,
                color: '#1E293B'
              }}
            >
              We don't just build properties—we curate lasting investments. From DTCP & RERA-approved plotted developments to bespoke villas, discover the security of buying with Madurai's trusted experts.
            </p>
          </div>
        </div>
      </section>

      {/* 4. What We Offer 4-Card Section */}
      <WhatWeOffer onOpenSiteVisit={onOpenSiteVisit} />

      {/* 5. Featured Properties Curated Selection */}
      <FeaturedProperties
        onSelectProject={onSelectProject}
        onOpenSiteVisit={onOpenSiteVisit}
      />

      {/* 6. High-Authority Madurai Real Estate & Land Buyer's FAQ Guide */}
      <LocalSeoFaq />

      {/* 7. CTA Banner */}
      <CtaBanner onOpenSiteVisit={() => onOpenSiteVisit()} />
    </div>
  );
}
