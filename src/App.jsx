import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppChatWidget from './components/WhatsAppChatWidget';
import ProjectDetailModal from './components/ProjectDetailModal';
import SiteVisitScheduler from './components/SiteVisitScheduler';
import PrivacyModal from './components/PrivacyModal';

// Dedicated Pages
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import WhatWeOfferPage from './pages/WhatWeOfferPage';
import AboutPage from './pages/AboutPage';
import AdvisorsPage from './pages/AdvisorsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [siteVisitModalOpen, setSiteVisitModalOpen] = useState(false);
  const [siteVisitInitialProject, setSiteVisitInitialProject] = useState('');
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleOpenSiteVisit = (projectName = '') => {
    setSiteVisitInitialProject(projectName);
    setSiteVisitModalOpen(true);
  };

  return (
    <>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
        {/* Allys.mu Sticky Navigation */}
        <Navbar onOpenSiteVisit={() => handleOpenSiteVisit()} />

        {/* Multi-Page Routes */}
        <main id="main-content" role="main" tabIndex="-1" style={{ flexGrow: 1, outline: 'none' }}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onSelectProject={(project) => setSelectedProject(project)}
                  onOpenSiteVisit={handleOpenSiteVisit}
                />
              }
            />

            <Route
              path="/properties"
              element={
                <PropertiesPage
                  onSelectProject={(project) => setSelectedProject(project)}
                  onOpenSiteVisit={handleOpenSiteVisit}
                />
              }
            />

            <Route
              path="/properties/:id"
              element={
                <PropertyDetailPage
                  onOpenSiteVisit={handleOpenSiteVisit}
                />
              }
            />

            <Route
              path="/what-we-offer"
              element={
                <WhatWeOfferPage
                  onOpenSiteVisit={handleOpenSiteVisit}
                />
              }
            />

            <Route
              path="/about"
              element={
                <AboutPage
                  onOpenSiteVisit={handleOpenSiteVisit}
                />
              }
            />

            <Route
              path="/advisors"
              element={
                <AdvisorsPage
                  onOpenSiteVisit={handleOpenSiteVisit}
                />
              }
            />

            <Route
              path="/contact"
              element={
                <ContactPage
                  onOpenSiteVisit={handleOpenSiteVisit}
                />
              }
            />

            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Allys.mu Luxury Footer */}
        <Footer
          onOpenSiteVisit={() => handleOpenSiteVisit()}
          onOpenPrivacy={() => setPrivacyModalOpen(true)}
        />

        {/* Allys.mu Floating Multi-Consultant WhatsApp Chat Widget */}
        <WhatsAppChatWidget />

        {/* Global Modals */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onOpenSiteVisit={handleOpenSiteVisit}
          />
        )}

        {siteVisitModalOpen && (
          <SiteVisitScheduler
            initialProjectName={siteVisitInitialProject}
            isModal={true}
            onClose={() => setSiteVisitModalOpen(false)}
          />
        )}

        {privacyModalOpen && (
          <PrivacyModal onClose={() => setPrivacyModalOpen(false)} />
        )}
      </div>
    </>
  );
}
