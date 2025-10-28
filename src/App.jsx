import React from 'react';
import Hero from './components/Hero';
import KpiGrid from './components/KpiGrid';
import RiskChart from './components/RiskChart';
import StudentTable from './components/StudentTable';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b12] via-[#0b0b12] to-[#0f1224] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-10">
        <Hero />

        <div className="mt-8 grid gap-6">
          <KpiGrid />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <RiskChart />
            <StudentTable />
          </div>
        </div>

        <section id="upload" className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
          <h3 className="text-lg font-semibold">Data Upload</h3>
          <p className="mt-1 text-sm text-white/70">Upload CSV, Excel, or PDF. Real-time validation and preview coming soon.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <label className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
              <input type="file" className="hidden" />
              Choose File
            </label>
            <button className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-600">
              Upload
            </button>
          </div>
        </section>

        <footer className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
          <p>EduRisk 360 — AI-Driven Student Engagement Platform</p>
          <p>© {new Date().getFullYear()} Flames • Built with React & Tailwind</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
