import React from 'react';
import { Award, Compass, HeartHandshake, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
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
      title: 'Proven Results, Happy Clients',
      description:
        'Our track record speaks for itself. Mary Ann EliteProperties has helped hundreds of satisfied clients buy, sell, and invest in real estate with remarkable success and long-term satisfaction.',
      icon: CheckCircle2
    },
    {
      title: 'Integrity. Excellence. Results.',
      description:
        'Mary Ann EliteProperties delivers transparent service, premium quality, and results that turn your property dreams into reality.',
      icon: ShieldCheck
    }
  ];

  const stats = [
    { number: '20+', label: 'Years of Experience' },
    { number: '10+', label: 'Successful Projects' },
    { number: '500+', label: 'Happy Families' },
    { number: '43 L+', label: 'Sq. Ft. Sold' }
  ];

  return (
    <section
      id="about"
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(4rem, 7vw, 6rem) 0',
        borderBottom: '1px solid #E2E8F0'
      }}
    >
      <div className="allys-container">
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto clamp(2.5rem, 5vw, 4rem)' }}>
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
            Constructing excellence and delivering trusted guidance across Madurai and Dubai since 2004.
          </p>
        </div>

        {/* 5 Value Propositions Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem',
            marginBottom: 'clamp(3rem, 5vw, 4.5rem)'
          }}
        >
          {points.map((pt, idx) => {
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

        {/* Exact Live Counter Statistics Strip */}
        <div
          style={{
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            borderRadius: '16px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}
        >
          {stats.map((st, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  lineHeight: 1
                }}
              >
                {st.number}
              </div>
              <div
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#94A3B8',
                  marginTop: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
