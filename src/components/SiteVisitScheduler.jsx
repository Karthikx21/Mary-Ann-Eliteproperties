import React, { useState } from 'react';
import { Calendar, Clock, Car, MapPin, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, X } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';
import { COMPANY_INFO } from '../data/companyData';

export default function SiteVisitScheduler({ initialProjectName, isModal, onClose }) {
  const [selectedProject, setSelectedProject] = useState(initialProjectName || PROJECTS[0].name);
  const [visitDate, setVisitDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (10:00 AM – 12:30 PM)');
  const [transportPreference, setTransportPreference] = useState('Complimentary Madurai Pickup');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setSubmitted(true);
  };

  const formattedWhatsappMsg = encodeURIComponent(
    `Hello Mary Ann EliteProperties team,\n\nI would like to schedule a site visit:\n• Project: ${selectedProject}\n• Preferred Date: ${visitDate || 'This Weekend'}\n• Time Slot: ${timeSlot}\n• Transport: ${transportPreference}\n• Name: ${fullName}\n• Phone: ${phone}\n${notes ? `• Notes: ${notes}` : ''}`
  );

  const content = (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
        borderRadius: isModal ? '0' : '16px',
        border: isModal ? 'none' : '1px solid #E2E8F0'
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '1.75rem',
          borderBottom: '1px solid #E2E8F0',
          paddingBottom: '1.25rem'
        }}
      >
        <div>
          <div className="editorial-kicker">
            ON-SITE VERIFICATION
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
              lineHeight: 1.1,
              color: '#0F172A',
              marginTop: '0.25rem'
            }}
          >
            Schedule Accompanied Site Visit
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#64748B', marginTop: '0.35rem', maxWidth: '620px' }}>
            Inspect boundary survey stones, soil depth, groundwater, and approach roads with an experienced property advisor.
          </p>
        </div>

        {isModal && (
          <button
            onClick={onClose}
            aria-label="Close modal"
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
        )}
      </div>

      {submitted ? (
        /* Success State */
        <div
          style={{
            padding: '2.5rem 1.5rem',
            textAlign: 'center',
            backgroundColor: '#FAF8F5',
            borderRadius: '12px',
            border: '1px solid #E8DFD0'
          }}
        >
          <CheckCircle2 size={46} color="#C5A880" style={{ margin: '0 auto 1.25rem' }} />
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.85rem',
              color: '#0F172A',
              marginBottom: '0.5rem'
            }}
          >
            Site Tour Request Registered.
          </h3>
          <p
            style={{
              fontSize: '0.95rem',
              color: '#475569',
              maxWidth: '520px',
              margin: '0 auto 1.75rem',
              lineHeight: 1.6
            }}
          >
            Thank you, <strong>{fullName}</strong>. Our Madurai operations desk has received your request for{' '}
            <strong>{selectedProject}</strong> ({transportPreference}). We will call you on <strong>{phone}</strong> to confirm timing.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            <a
              href={`https://wa.me/919676222700?text=${formattedWhatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="allys-btn allys-btn-lime"
            >
              <MessageSquare size={16} />
              <span>Confirm Instantly on WhatsApp</span>
            </a>

            <button
              onClick={() => setSubmitted(false)}
              className="allys-btn allys-btn-outline"
            >
              <span>Modify Details</span>
            </button>
          </div>
        </div>
      ) : (
        /* The Booking Form */
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '1rem'
            }}
          >
            {/* Project Selection */}
            <div>
              <label className="allys-label">
                Select Development *
              </label>
              <select
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="allys-select"
              >
                {PROJECTS.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name} — {p.location} ({p.price})
                  </option>
                ))}
              </select>
            </div>

            {/* Date Picker */}
            <div>
              <label className="allys-label">
                Preferred Date *
              </label>
              <input
                type="date"
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                className="allys-input"
                required
              />
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '1rem'
            }}
          >
            {/* Preferred Time Slot */}
            <div>
              <label className="allys-label">
                Time Window
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="allys-select"
              >
                <option value="Morning (9:30 AM – 12:00 PM)">Morning (9:30 AM – 12:00 PM)</option>
                <option value="Afternoon (2:00 PM – 4:30 PM)">Afternoon (2:00 PM – 4:30 PM)</option>
                <option value="Evening (4:30 PM – 6:30 PM)">Evening (4:30 PM – 6:30 PM)</option>
              </select>
            </div>

            {/* Transport Option */}
            <div>
              <label className="allys-label">
                Transportation Preference
              </label>
              <select
                value={transportPreference}
                onChange={(e) => setTransportPreference(e.target.value)}
                className="allys-select"
              >
                <option value="Complimentary Madurai Pickup">Complimentary Madurai Pickup (Airport/Junction)</option>
                <option value="Meet Directly at Site">Meet Directly at Project Location</option>
                <option value="Virtual Live Video Tour">Virtual Video Walkthrough (For NRIs & Remote Buyers)</option>
              </select>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
              gap: '1rem'
            }}
          >
            {/* Full Name */}
            <div>
              <label className="allys-label">
                Your Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh Sundaram"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="allys-input"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="allys-label">
                Contact Number *
              </label>
              <input
                type="tel"
                placeholder="+91 or +971 phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="allys-input"
              />
            </div>

            {/* Email */}
            <div>
              <label className="allys-label">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="allys-input"
              />
            </div>
          </div>

          {/* Submit Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid #E2E8F0',
              marginTop: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#64748B' }}>
              <ShieldCheck size={16} color="#C5A880" />
              <span>Complimentary chauffeured pickup & transparent documentation verification.</span>
            </div>

            <button
              type="submit"
              className="allys-btn allys-btn-lime"
              style={{ padding: '0.85rem 1.75rem' }}
            >
              <span>Confirm Site Tour</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section
      id="schedule-visit"
      style={{
        backgroundColor: '#F8FAFC',
        padding: 'clamp(4rem, 7vw, 6rem) 0',
        borderBottom: '1px solid #E2E8F0'
      }}
    >
      <div className="allys-container-narrow">
        {content}
      </div>
    </section>
  );
}
