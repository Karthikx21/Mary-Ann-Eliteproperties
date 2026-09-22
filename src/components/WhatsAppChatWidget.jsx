import React, { useState } from 'react';
import { MessageSquare, X, ChevronRight, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function WhatsAppChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const team = [
    {
      name: 'Madurai Property Advisory',
      role: 'Senior Property Consultant — Madurai HQ',
      status: 'Typically replies within 1 hour',
      number: '+91 96762 22700',
      whatsappUrl: 'https://wa.me/919676222700?text=Hi%2C%20I%27m%20interested%20in%20your%20properties%20in%20Madurai.'
    },
    {
      name: 'Dubai & NRI Client Desk',
      role: 'Property Development Specialist — Dubai Office',
      status: 'Typically replies within 1 hour',
      number: '+971 56 955 7102',
      whatsappUrl: 'https://wa.me/971569557102?text=Hi%2C%20I%27m%20interested%20in%20your%20properties%20in%20Madurai%20from%20UAE.'
    }
  ];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.75rem',
        right: '1.75rem',
        zIndex: 9999
      }}
    >
      {/* Popover Card */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '4.5rem',
            right: 0,
            width: '320px',
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #E2E8F0',
            overflow: 'hidden',
            animation: 'slideUp 0.25s ease'
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Start a Conversation</div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.15rem' }}>
                Select a team member to start chatting
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              style={{
                background: 'none',
                border: 'none',
                color: '#94A3B8',
                cursor: 'pointer',
                padding: '0.25rem'
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Consultants List */}
          <div style={{ padding: '0.75rem' }}>
            {team.map((member, i) => (
              <a
                key={i}
                href={member.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.85rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'background-color 0.15s ease',
                  borderBottom: i === 0 ? '1px solid #F1F5F9' : 'none'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F8FAFC')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                {/* Avatar with online dot */}
                <div style={{ position: 'relative' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: '#E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      color: '#475569',
                      fontSize: '0.9rem'
                    }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1px',
                      right: '1px',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#10B981',
                      border: '2px solid #FFFFFF'
                    }}
                  />
                </div>

                <div style={{ flexGrow: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#0F172A' }}>
                    {member.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {member.role}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#10B981', marginTop: '0.15rem' }}>
                    {member.status}
                  </div>
                </div>

                <ChevronRight size={16} color="#94A3B8" />
              </a>
            ))}
          </div>

          {/* Footer */}
          <div
            style={{
              padding: '0.65rem',
              backgroundColor: '#F8FAFC',
              borderTop: '1px solid #E2E8F0',
              textAlign: 'center',
              fontSize: '0.7rem',
              color: '#64748B'
            }}
          >
            Powered by WhatsApp
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp team chat"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          border: 'none',
          boxShadow: '0 10px 15px -3px rgba(37, 211, 102, 0.4), 0 4px 6px -4px rgba(37, 211, 102, 0.2)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        {isOpen ? <X size={26} /> : <MessageSquare size={26} fill="currentColor" />}
      </button>
    </div>
  );
}
