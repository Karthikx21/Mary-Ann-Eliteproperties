import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function MobileQuickBar({ onOpenSiteVisit }) {
  const maduraiPhone = COMPANY_INFO.offices.madurai.phone.replace(/[^0-9+]/g, '');
  const whatsappUrl = 'https://wa.me/919676222700?text=Hello%20Mary%20Ann%20EliteProperties,%20I%20would%20like%20to%20enquire%20about%20Madurai%20plots.';

  return (
    <div className="mobile-sticky-actions">
      <a
        href={`tel:${maduraiPhone}`}
        className="btn btn-secondary"
        style={{
          flex: 1,
          padding: '0.75rem 0.5rem',
          fontSize: '0.7rem',
          backgroundColor: 'var(--bg-charcoal)',
          color: 'var(--text-inverse)',
          borderColor: 'var(--border-inverse-strong)',
          gap: '0.35rem'
        }}
      >
        <Phone size={14} color="var(--brand-stone)" />
        <span>CALL</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary"
        style={{
          flex: 1,
          padding: '0.75rem 0.5rem',
          fontSize: '0.7rem',
          backgroundColor: 'var(--bg-charcoal)',
          color: 'var(--text-inverse)',
          borderColor: 'var(--border-inverse-strong)',
          gap: '0.35rem'
        }}
      >
        <MessageSquare size={14} color="#25D366" />
        <span>WHATSAPP</span>
      </a>

      <button
        onClick={onOpenSiteVisit}
        className="btn btn-primary"
        style={{
          flex: 1.3,
          padding: '0.75rem 0.5rem',
          fontSize: '0.7rem',
          backgroundColor: 'var(--bg-warm)',
          color: 'var(--text-charcoal)',
          gap: '0.35rem'
        }}
      >
        <Calendar size={14} />
        <span>SITE VISIT</span>
      </button>
    </div>
  );
}
