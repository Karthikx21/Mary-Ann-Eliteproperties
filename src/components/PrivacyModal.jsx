import React from 'react';
import { X, ShieldCheck, Lock, FileText } from 'lucide-react';

export default function PrivacyModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-sheet"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '750px', padding: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #E2E8F0',
            paddingBottom: '1rem',
            marginBottom: '1.5rem'
          }}
        >
          <div>
            <span className="allys-badge" style={{ marginBottom: '0.35rem' }}>
              DATA PROTECTION & TRANSPARENCY
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                color: '#0F172A',
                marginTop: '0.25rem'
              }}
            >
              Privacy Policy & Client Data Charter
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: '#F1F5F9',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              color: '#0F172A',
              padding: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.9rem', lineHeight: 1.7, color: '#475569' }}>
          <p>
            This Privacy Charter outlines how <strong>Mary Ann EliteProperties</strong> (with offices in Madurai, Tamil Nadu, India, and Dubai Silicon Oasis, UAE) collects, utilizes, and safeguards personal information provided through our digital channels.
          </p>

          <div>
            <h4 style={{ fontWeight: 700, color: '#0F172A', marginBottom: '0.35rem' }}>
              1. Information We Collect
            </h4>
            <p>
              When you submit a site visit request or property inquiry, we collect your full name, telephone number, email address, preferred development, and scheduling notes. We do not sell, rent, or trade your contact records to third-party telemarketers.
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: 700, color: '#0F172A', marginBottom: '0.35rem' }}>
              2. Purpose of Processing
            </h4>
            <p>
              Your contact details are strictly utilized to:
            </p>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '0.35rem' }}>
              <li>Coordinate chauffeured or accompanied site tours across Madurai developments.</li>
              <li>Provide verified legal documentation, DTCP/RERA sanctions, and layout master plans.</li>
              <li>Assist eligible buyers with 70% bank loan profiling with authorized nationalized institutions.</li>
              <li>Coordinate remote documentation for UAE / NRI clients through our Dubai Silicon Oasis desk.</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: 700, color: '#0F172A', marginBottom: '0.35rem' }}>
              3. Data Security & Retention
            </h4>
            <p>
              We maintain strict organizational security controls to protect client information. You may request the deletion or correction of your enquiry data at any time by writing to <code>contact@maryanneliteproperties.com</code>.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0', textAlign: 'right' }}>
          <button onClick={onClose} className="allys-btn allys-btn-primary">
            <span>Acknowledge & Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}
