import React from 'react';
import { Target, Compass, Award, Users, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight, Calendar } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import StatsShowcase from '../components/StatsShowcase';
import CtaBanner from '../components/CtaBanner';

export default function AboutPage({ onOpenSiteVisit }) {
  const corePillars = [
    {
      title: 'Trusted Real Estate Expertise',
      description:
        'With years of experience in the industry, Mary Ann EliteProperties is known for delivering honest guidance, in-depth market knowledge, and expert negotiation skills — ensuring you make confident and informed property decisions.',
      icon: Award
    },
    {
      title: 'Premium Listings, Tailored For You',
      description:
        'From luxurious homes to smart investments, we curate the finest properties that suit your lifestyle and budget. Each listing is carefully selected to match your goals and exceed your expectations.',
      icon: Compass
    },
    {
      title: 'Personalized Client Care',
      description:
        'We prioritize relationships over transactions. Our dedicated team listens, understands your needs, and works tirelessly to provide a smooth, stress-free real estate journey—from start to finish.',
      icon: HeartHandshake
    },
    {
      title: 'Seamless Closings & 70% Bank Financing',
      description:
        'From paperwork to property handovers, we streamline every step. We assist with 70% pre-approved bank loans from leading institutions and guide you through legal title verification with zero surprises.',
      icon: ShieldCheck
    }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://maryanneliteproperties.com/about#webpage",
        "url": "https://maryanneliteproperties.com/about",
        "name": "About Mary Ann Elite Properties",
        "description": "Learn about Mary Ann Elite Properties, our Managing Director, 2+ Years dedicated advisory brand, and two decades of construction heritage since 2004.",
        "publisher": {
          "@id": "https://maryanneliteproperties.com/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://maryanneliteproperties.com/about#managing-director",
        "name": "Managing Director",
        "jobTitle": "Managing Director & Founder",
        "worksFor": {
          "@id": "https://maryanneliteproperties.com/#organization"
        },
        "image": "https://maryanneliteproperties.com/images/managing-director.png",
        "description": "Leader and driving force behind Mary Ann Elite Properties, constructing excellence and delivering premium plotted and gated villa communities across Madurai."
      }
    ]
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <SeoHead
        title="About Our Firm | Leadership, Heritage & Mission"
        description="Learn about Mary Ann Elite Properties: Managing Director leadership, 2+ Years dedicated advisory brand, 2004 inception heritage, 10+ delivered projects, 500+ happy families in Madurai and UAE."
        keywords="about mary ann elite properties, managing director mary ann, real estate company madurai, trusted builders madurai, 2004 real estate madurai, property developers tamil nadu"
        canonicalPath="/about"
        schemaJson={aboutSchema}
      />

      {/* 1. Cinematic Page Header with Property Visual */}
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
          src="/images/hero-luxury-estate.jpg"
          alt="Mary Ann EliteProperties Heritage"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.35
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
            <span
              className="allys-badge allys-badge-dark"
              style={{ marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.14em' }}
            >
              <span>MADURAI HEADQUARTERS & DUBAI ADVISORY HUB</span>
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
                color: '#FFFFFF',
                marginBottom: '1rem',
                lineHeight: 1.1
              }}
            >
              We Are A Company With A Mission.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                color: '#CBD5E1',
                lineHeight: 1.45
              }}
            >
              You are here because you want to find the best home deal in your area. Could we help you?
            </p>
          </div>
        </div>
      </section>

      {/* 2. FIRST PRIORITY: Prestigious Live Counter Showcase (2+ Years, 10+ Projects, 500+ Families, 4+ Awards) */}
      <StatsShowcase isDark={false} />

      {/* 3. Managing Director Feature Section with Real Portrait */}
      <section
        style={{
          padding: 'clamp(4.5rem, 8vw, 7rem) 0',
          borderBottom: '1px solid #E2E8F0',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div className="allys-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: 'clamp(2.5rem, 6vw, 4.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Managing Director Portrait Card */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '440px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 35px -10px rgba(15, 23, 42, 0.18)',
                  border: '1px solid #E2E8F0',
                  backgroundColor: '#F8FAFC'
                }}
                className="md-portrait-card"
              >
                <img
                  src="/images/managing-director.png"
                  alt="Managing Director, Mary Ann EliteProperties"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '560px',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease'
                  }}
                  className="md-portrait-img"
                />

                {/* Floating Title Plaque */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '1.25rem',
                    right: '1.25rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.92)',
                    backdropFilter: 'blur(10px)',
                    color: '#FFFFFF',
                    padding: '1.25rem 1.5rem',
                    borderRadius: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#C5A880', fontWeight: 700 }}>
                    EXECUTIVE LEADERSHIP
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#FFFFFF', marginTop: '0.2rem', fontWeight: 600 }}>
                    Managing Director
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E1', marginTop: '0.15rem' }}>
                    Mary Ann EliteProperties • Madurai & Dubai
                  </div>
                </div>
              </div>
            </div>

            {/* Managing Director Message & Vision */}
            <div>
              <span className="allys-badge" style={{ marginBottom: '0.85rem' }}>
                DIRECTOR'S STATEMENT
              </span>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: '#0F172A',
                  marginBottom: '1.25rem',
                  lineHeight: 1.15
                }}
              >
                Guiding Values & Excellence
              </h2>

              <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Team Mary Ann Eliteproperties is guided by the values and driven by the philosophy of the firm’s founder. It has been constructing the excellence that Mary Ann Eliteproperties are displaying since the company’s inception. Her consistent approach to the details makes a difference in delivering the highest quality of work regardless of the project scope.
              </p>

              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                Over the past years, she has built a family company with a reputation based on integrity and vision. Known for developing high-quality, well-designed, cutting-edge properties, Mary Ann Eliteproperties has developed, acquired, managed and leased some of the best-known homes and premises across the city.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onOpenSiteVisit()}
                  className="allys-btn allys-btn-primary"
                  style={{ padding: '0.85rem 1.65rem' }}
                >
                  <Calendar size={16} />
                  <span>Schedule Site Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Team & Exceptional Stability */}
      <section
        style={{
          backgroundColor: '#F8FAFC',
          padding: 'clamp(4.5rem, 8vw, 7rem) 0',
          borderBottom: '1px solid #E2E8F0'
        }}
      >
        <div className="allys-container">
          <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="allys-badge" style={{ marginBottom: '0.75rem' }}>
              OUR STABLE CORE
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                color: '#0F172A',
                marginBottom: '1.25rem',
                lineHeight: 1.15
              }}
            >
              The Exceptional Team Behind Our Success
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.75 }}>
              The key to the motivating force behind Mary Ann Eliteproperties ongoing success is our exceptionally stable core team of highly specialized, competent and experienced engineers, architects, administrators, marketing, crm and legal experts.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.75, marginTop: '1rem' }}>
              Each team member is an individual contributor in delivering outstanding craftsmanship, commitment and communication to each other, to our design partners and eventually, to our clients. From purchase, plans, approvals, construction and delivery, our people ensure smooth progression.
            </p>
          </div>

          {/* Vision & Mission Feature Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: '2rem'
            }}
          >
            {/* Vision Card */}
            <div
              className="allys-card"
              style={{
                padding: 'clamp(2rem, 4vw, 2.75rem)',
                backgroundColor: '#FFFFFF',
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
                    backgroundColor: '#0F172A',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <Compass size={26} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    color: '#0F172A',
                    marginBottom: '1rem'
                  }}
                >
                  Our Vision
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.75 }}>
                  We at Mary Ann Eliteproperties strive to serve our customers needs by delivering to them inspiring living spaces blended with creativity and innovation – the homes of future. We are committed to making the world a better place to live in by offering developments that are of value to the community on the whole.
                </p>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.75, marginTop: '0.75rem' }}>
                  With a strong belief in teamwork, innovation, professionalism, and long-term decision-making, we endeavor to preserve and enhance our reputation for integrity through all our actions. And to build a sustainable environment through our business activities!
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div
              className="allys-card"
              style={{
                padding: 'clamp(2rem, 4vw, 2.75rem)',
                backgroundColor: '#FFFFFF',
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
                    backgroundColor: '#0F172A',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <Target size={26} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    color: '#0F172A',
                    marginBottom: '1rem'
                  }}
                >
                  Our Mission
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.75 }}>
                  At Mary Ann Eliteproperties we are consistently committed to delivering exceptional value to our customers. We endeavour to attain a dominant market leadership by crafting luxurious, cosmopolitan and competitively priced living spaces that offer the best value for money.
                </p>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.75, marginTop: '0.75rem' }}>
                  We proudly meet the demands of today’s young and active families with a global exposure, and an attitude of no compromise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Pillars of Mary Ann EliteProperties */}
      <section
        style={{
          padding: 'clamp(4.5rem, 8vw, 7rem) 0',
          borderBottom: '1px solid #E2E8F0'
        }}
      >
        <div className="allys-container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="allys-badge" style={{ marginBottom: '0.75rem' }}>
              OUR COMMITMENTS
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                color: '#0F172A',
                marginBottom: '0.75rem',
                textTransform: 'uppercase'
              }}
            >
              Why Choose Mary Ann EliteProperties
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6 }}>
              Constructing excellence and delivering trusted guidance across Madurai and Dubai.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.5rem'
            }}
          >
            {corePillars.map((pt, idx) => {
              const IconComp = pt.icon;
              return (
                <div
                  key={idx}
                  className="allys-card"
                  style={{
                    padding: '2rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: '#0F172A',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <IconComp size={22} />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '0.65rem'
                    }}
                  >
                    {pt.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.65 }}>
                    {pt.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onOpenSiteVisit={() => onOpenSiteVisit()} />

      <style>{`
        .md-portrait-card:hover .md-portrait-img {
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
}
