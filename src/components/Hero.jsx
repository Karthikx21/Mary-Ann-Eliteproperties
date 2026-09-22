import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';

export default function Hero({ onSelectProject, onOpenSiteVisit }) {
  const slides = [
    {
      project: PROJECTS[0], // Star Luxoria
      image: '/images/hero-star-luxoria.jpg',
      kicker: 'FLAGSHIP DEVELOPMENT • VILANGUDI',
      tagline: 'Ultra-Luxurious Gated Villa Community in Prime Growth Corridor'
    },
    {
      project: PROJECTS[1], // Star Luxor
      image: '/images/hero-luxury-estate.jpg',
      kicker: 'AIRPORT CORRIDOR • PARAPATHI',
      tagline: 'Exclusive DTCP & RERA Gated Enclave 15 Mins to Madurai Airport'
    },
    {
      project: PROJECTS[5], // Meenatchi Garden
      image: '/images/hero-luxury-villas.jpg',
      kicker: 'HIGH APPRECIATION • POONJUTHI',
      tagline: '40-Acre Nature Gated Community with Sweet Groundwater'
    },
    {
      project: PROJECTS[2], // Vibul Avenue
      image: '/images/hero-luxury-avenue.jpg',
      kicker: 'HILLSIDE RESIDENCES • ALAGAR KOVIL',
      tagline: 'Scenic Hill View Plotted Development on Alagar Kovil Main Road'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const active = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      style={{ position: 'relative', backgroundColor: '#0F172A', overflow: 'hidden' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Auto-Scrolling Slides Container */}
      <div
        style={{
          position: 'relative',
          height: 'clamp(540px, 75vh, 700px)',
          width: '100%',
          overflow: 'hidden'
        }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: idx === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              pointerEvents: idx === currentSlide ? 'auto' : 'none'
            }}
          >
            <img
              src={slide.image}
              alt={`${slide.project.name} - DTCP & RERA Approved Plotted Gated Community in ${slide.project.location}, Madurai`}
              loading={idx === 0 ? "eager" : "lazy"}
              fetchPriority={idx === 0 ? "high" : "low"}
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transform: idx === currentSlide ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 6s ease-out'
              }}
            />

            {/* Cinematic Gradient Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.94) 0%, rgba(15, 23, 42, 0.45) 50%, rgba(15, 23, 42, 0.5) 100%)'
              }}
            />

            {/* Ambient Luxury Accent Glow */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at bottom left, rgba(197, 168, 128, 0.16) 0%, transparent 60%)',
                pointerEvents: 'none'
              }}
            />
          </div>
        ))}

        {/* Hero Content Showcase */}
        <div
          className="allys-container"
          style={{
            position: 'absolute',
            bottom: 'clamp(3rem, 6vw, 5rem)',
            left: 0,
            right: 0,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2rem',
            zIndex: 10
          }}
        >
          {/* Property Narrative Text (NO ROUNDED BOXES, NO STARS) */}
          <div style={{ maxWidth: '680px', color: '#FFFFFF' }}>
            {/* Clean Typographic Kicker */}
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                color: '#C5A880',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '0.75rem'
              }}
            >
              <span>{active.kicker}</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>•</span>
              <span style={{ color: '#F1F5F9' }}>{active.project.approvals[0]}</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
                lineHeight: 1.05,
                color: '#FFFFFF',
                marginBottom: '0.65rem',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.5)'
              }}
            >
              {active.project.name}
              <span className="sr-only"> — DTCP & RERA Approved Plots & Villas in Madurai</span>
            </h1>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#E2E8F0',
                lineHeight: 1.5,
                marginBottom: '0.85rem',
                maxWidth: '580px'
              }}
            >
              {active.tagline}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.95rem',
                color: '#CBD5E1',
                marginBottom: '1rem'
              }}
            >
              <MapPin size={16} color="#C5A880" />
              <span>{active.project.location}</span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.1rem',
                color: '#FFFFFF',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.5rem'
              }}
            >
              <span>{active.project.price}</span>
              <span style={{ fontSize: '0.95rem', fontFamily: 'var(--font-sans)', color: '#CBD5E1', fontWeight: 400 }}>
                {active.project.priceUnit}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onSelectProject(active.project)}
              className="allys-btn allys-btn-lime"
              style={{ padding: '0.95rem 1.85rem', fontSize: '0.95rem' }}
            >
              <span>View Property Details</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => onOpenSiteVisit(active.project.name)}
              className="allys-btn allys-btn-white"
              style={{ padding: '0.95rem 1.65rem', fontSize: '0.95rem' }}
            >
              <span>Book Site Visit</span>
            </button>
          </div>
        </div>

        {/* Carousel Arrow Controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous property"
          style={{
            position: 'absolute',
            left: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 20,
            transition: 'all 0.2s ease'
          }}
          className="carousel-nav-btn"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next property"
          style={{
            position: 'absolute',
            right: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 20,
            transition: 'all 0.2s ease'
          }}
          className="carousel-nav-btn"
        >
          <ChevronRight size={22} />
        </button>

        {/* Slide Progress Indicators */}
        <div
          style={{
            position: 'absolute',
            bottom: '1.25rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            zIndex: 20
          }}
        >
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: idx === currentSlide ? '36px' : '10px',
                height: '5px',
                borderRadius: '4px',
                backgroundColor: idx === currentSlide ? '#C5A880' : 'rgba(255, 255, 255, 0.35)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        .carousel-nav-btn:hover {
          background-color: #C5A880 !important;
          color: #0F172A !important;
          border-color: #C5A880 !important;
          transform: translateY(-50%) scale(1.08) !important;
        }
      `}</style>
    </section>
  );
}
