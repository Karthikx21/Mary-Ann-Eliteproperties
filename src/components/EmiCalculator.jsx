import React, { useState } from 'react';
import { Calculator, Banknote, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export default function EmiCalculator({ onOpenSiteVisit }) {
  const [pricePerCent, setPricePerCent] = useState(650000); // 6.5 Lakh default (Vibul Avenue)
  const [cents, setCents] = useState(3);
  const [loanTenureYears, setLoanTenureYears] = useState(15);
  const interestRateAnnual = 8.75; // Typical land/plot loan interest rate in India

  // 1 Cent = 435.6 sq ft
  const totalSqFt = Math.round(cents * 435.6);
  const totalLandPrice = pricePerCent * cents;
  const maxLoanAmount = Math.round(totalLandPrice * 0.70); // 70% Bank Loan Facility
  const downPayment = totalLandPrice - maxLoanAmount;

  // Monthly EMI Calculation: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = interestRateAnnual / (12 * 100);
  const totalMonths = loanTenureYears * 12;
  const emi = Math.round(
    (maxLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const formatINR = (val) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <section
      id="calculator"
      style={{
        backgroundColor: 'var(--bg-surface)',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        borderBottom: '1px solid var(--border-hairline)'
      }}
    >
      <div className="editorial-container">
        <div className="grid-12" style={{ marginBottom: '3rem' }}>
          <div style={{ gridColumn: 'span 5' }}>
            <span className="editorial-kicker">FINANCIAL CLARITY</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                lineHeight: 1.08,
                color: 'var(--text-charcoal)',
                marginTop: '0.75rem'
              }}
            >
              Madurai Cent & 70% Loan Planner.
            </h2>
          </div>

          <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
              Evaluate plot values based on Tamil Nadu measurement standards (1 Cent = 435.6 Sq. Ft.).
              Because our developments feature verified DTCP & RERA approvals, buyers can leverage
              up to a 70% bank loan facility through leading financial institutions.
            </p>
          </div>
        </div>

        <div className="grid-12" style={{ alignItems: 'stretch' }}>
          {/* Controls Column */}
          <div
            style={{
              gridColumn: 'span 6',
              backgroundColor: 'var(--bg-warm)',
              border: '1px solid var(--border-hairline)',
              padding: 'clamp(1.75rem, 3vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem'
            }}
            className="calc-controls-col"
          >
            {/* Price Presets */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                Benchmark Price per Cent: {formatINR(pricePerCent)}
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
                {[
                  { label: 'Meenakshi Ngr (₹2.5L)', val: 250000 },
                  { label: 'Guru Ngr (₹3.0L)', val: 300000 },
                  { label: 'Vibul Ave (₹6.5L)', val: 650000 },
                  { label: 'Star Luxoria (₹11.2L)', val: 1120000 }
                ].map((preset) => (
                  <button
                    key={preset.val}
                    type="button"
                    onClick={() => setPricePerCent(preset.val)}
                    style={{
                      background: pricePerCent === preset.val ? 'var(--bg-charcoal)' : 'var(--bg-surface)',
                      color: pricePerCent === preset.val ? 'var(--bg-warm)' : 'var(--text-charcoal)',
                      border: '1px solid var(--border-hairline)',
                      padding: '0.4rem 0.75rem',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
              <input
                type="range"
                min={200000}
                max={1500000}
                step={25000}
                value={pricePerCent}
                onChange={(e) => setPricePerCent(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--bg-charcoal)' }}
              />
            </div>

            {/* Cents Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Plot Dimension (Cents)
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700 }}>
                  {cents} Cent{cents > 1 ? 's' : ''} ({totalSqFt.toLocaleString()} sq.ft)
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                step={0.5}
                value={cents}
                onChange={(e) => setCents(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--bg-charcoal)' }}
              />
            </div>

            {/* Loan Tenure */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Bank Loan Tenure
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700 }}>
                  {loanTenureYears} Years @ 8.75% p.a.
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[5, 10, 15, 20].map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setLoanTenureYears(yr)}
                    style={{
                      flex: 1,
                      padding: '0.6rem',
                      background: loanTenureYears === yr ? 'var(--bg-charcoal)' : 'var(--bg-surface)',
                      color: loanTenureYears === yr ? 'var(--bg-warm)' : 'var(--text-charcoal)',
                      border: '1px solid var(--border-hairline)',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      cursor: 'pointer'
                    }}
                  >
                    {yr} Yrs
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div
            style={{
              gridColumn: 'span 6',
              backgroundColor: 'var(--bg-charcoal)',
              color: 'var(--text-inverse)',
              border: '1px solid var(--border-inverse-hairline)',
              padding: 'clamp(1.75rem, 3vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            className="calc-results-col"
          >
            <div>
              <span className="badge-tag-dark" style={{ marginBottom: '1rem' }}>
                70% PRE-APPROVED FINANCING BLUEPRINT
              </span>

              <div style={{ marginBottom: '1.5rem', marginTop: '0.5rem' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--brand-stone)' }}>
                  TOTAL LAND VALUE ({cents} CENTS)
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--text-inverse)', lineHeight: 1.1 }}>
                  {formatINR(totalLandPrice)}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-inverse-muted)', marginTop: '0.25rem' }}>
                  Equivalent to {totalSqFt.toLocaleString()} Sq. Ft. of demarcated land
                </div>
              </div>

              {/* Financial Ledger Breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', padding: '1.25rem', backgroundColor: 'var(--bg-dark-card)', border: '1px solid var(--border-inverse-hairline)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-inverse-muted)' }}>Eligible 70% Bank Loan:</span>
                  <span style={{ fontWeight: 700, color: 'var(--brand-stone)' }}>{formatINR(maxLoanAmount)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-inverse-muted)' }}>Required Down Payment (30%):</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-inverse)' }}>{formatINR(downPayment)}</span>
                </div>
                <div style={{ height: '1px', backgroundColor: 'var(--border-inverse-hairline)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-inverse-muted)' }}>Estimated Monthly EMI:</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--text-inverse)' }}>
                    ₹{emi.toLocaleString('en-IN')}<span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-ui)' }}>/mo</span>
                  </span>
                </div>
              </div>
            </div>

            <div style={{ paddingTop: '1.5rem' }}>
              <button
                onClick={() => onOpenSiteVisit()}
                className="btn btn-inverse"
                style={{ width: '100%', padding: '0.95rem' }}
              >
                <span>Check Loan Eligibility On-Site</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .calc-controls-col, .calc-results-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
