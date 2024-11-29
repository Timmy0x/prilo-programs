import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { MobileNav } from './components/layout/MobileNav';
import { DiscoverPage } from './pages/DiscoverPage';
import { CompetitionsPage } from './pages/CompetitionsPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ScholarshipsPage } from './pages/ScholarshipsPage';
import { ProgramDetailsPage } from './pages/ProgramDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar className="hidden lg:block" />
        <MobileNav />
        <main className="lg:ml-80 pt-16 lg:pt-0">
          <Routes>
            <Route path="/" element={<DiscoverPage />} />
            <Route path="/competitions" element={<CompetitionsPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/scholarships" element={<ScholarshipsPage />} />
            <Route path="/programs/:id" element={<ProgramDetailsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;