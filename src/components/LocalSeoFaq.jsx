import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export default function LocalSeoFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Which areas in Madurai does Mary Ann Elite Properties have plots for sale?',
      a: 'Mary Ann Elite Properties curates plotted developments across prime growth corridors in Madurai, including Vilangudi (Star Luxoria), Parapathi near Madurai Airport along the 4-lane Ring Road (Star Luxor), Alagar Kovil / Kidaripatti (Vibul Avenue), Kunnathur (Guru Nagar), Naattarmangalam (Meenakshi Nagar), Poonjuthi (Meenatchi Garden), Melapanagadi (Vaigai Enclave), Thirumanjolai (Jay Square), and Paravai (Ananthajith).'
    },
    {
      q: 'Are all plots and residential layouts DTCP and RERA approved?',
      a: 'Yes, 100% of our residential plotted communities are executed with DTCP and RERA statutory approvals, ensuring clear parent titles dating back 30+ years, verified layout boundaries, wide bitumen tar roads (30 to 40 feet), underground drainage conduits, solar illumination, and complete legal immunity.'
    },
    {
      q: 'Is bank loan facility available for land purchase in Madurai?',
      a: 'Yes, up to 70% pre-approved bank loan facilities are available on our residential plots through leading nationalized and private banks including State Bank of India (SBI), HDFC Bank, ICICI Bank, Canara Bank, and Axis Bank. Our advisory desk handles all paperwork and title documentation.'
    },
    {
      q: 'How can NRI buyers in Dubai and the UAE purchase property in Madurai?',
      a: 'We operate a dedicated international advisory desk at IFZA Business Park, Dubai Digital Park (Building A1, #56660-001, Dubai Silicon Oasis, UAE). NRI clients can access personalized virtual property consultations, live video site tours, document legal scrutiny, chauffeured family site visits in Madurai, and seamless NRE/NRO transaction support.'
    },
    {
      q: 'Does Mary Ann Elite Properties construct villas on purchased plots?',
      a: 'Yes, we provide end-to-end architectural design and turnkey construction services for 1, 2, and 3 BHK duplex villas with 100% Vastu compliance, branded construction materials (Tata Steel, UltraTech Cement), structural warranty, and fixed-schedule handovers.'
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      id="faq"
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(4rem, 7vw, 6.5rem) 0',
        borderBottom: '1px solid #E2E8F0'
      }}
      aria-label="Frequently Asked Questions about Madurai Real Estate and Plots"
    >
      <div className="allys-container">
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            <span className="allys-badge" style={{ marginBottom: '0.85rem' }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                color: '#0F172A',
                marginBottom: '1rem',
                lineHeight: 1.15
              }}
            >
              Madurai Real Estate & Land Buyer's Guide
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6 }}>
              Key answers regarding DTCP & RERA approvals, 70% bank loan facilities, groundwater quality, and NRI property purchases in Madurai.
            </p>
          </div>

          {/* Accordion List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    border: `1px solid ${isOpen ? '#C5A880' : '#E2E8F0'}`,
                    borderRadius: '12px',
                    backgroundColor: isOpen ? '#FAF8F5' : '#FFFFFF',
                    transition: 'all 0.25s ease',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: isOpen ? '#967444' : '#0F172A',
                        lineHeight: 1.4
                      }}
                    >
                      {faq.q}
                    </span>
                    <div
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        color: isOpen ? '#967444' : '#64748B',
                        flexShrink: 0
                      }}
                    >
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.5rem 1.5rem',
                        fontSize: '0.95rem',
                        color: '#475569',
                        lineHeight: 1.7,
                        borderTop: '1px solid #E8DFD0',
                        paddingTop: '1rem'
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
