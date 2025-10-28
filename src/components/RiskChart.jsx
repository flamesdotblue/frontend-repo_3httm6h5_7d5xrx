import React from 'react';
import { motion } from 'framer-motion';

// Simple inline SVG area chart to avoid extra chart libraries
const sampleData = [
  { week: 1, risk: 22 },
  { week: 2, risk: 28 },
  { week: 3, risk: 31 },
  { week: 4, risk: 29 },
  { week: 5, risk: 35 },
  { week: 6, risk: 40 },
  { week: 7, risk: 38 },
  { week: 8, risk: 44 },
];

const width = 640;
const height = 240;
const padding = 28;

function toPath(data) {
  const xScale = (i) => padding + (i * (width - padding * 2)) / (data.length - 1);
  const yScale = (v) => height - padding - (v * (height - padding * 2)) / 100;
  let d = `M ${xScale(0)} ${yScale(data[0].risk)}`;
  for (let i = 1; i < data.length; i++) {
    d += ` L ${xScale(i)} ${yScale(data[i].risk)}`;
  }
  return d;
}

function toArea(data) {
  const xScale = (i) => padding + (i * (width - padding * 2)) / (data.length - 1);
  const yScale = (v) => height - padding - (v * (height - padding * 2)) / 100;
  let d = `M ${xScale(0)} ${height - padding} L ${xScale(0)} ${yScale(data[0].risk)}`;
  for (let i = 1; i < data.length; i++) {
    d += ` L ${xScale(i)} ${yScale(data[i].risk)}`;
  }
  d += ` L ${xScale(data.length - 1)} ${height - padding} Z`;
  return d;
}

const RiskChart = () => {
  const path = toPath(sampleData);
  const area = toArea(sampleData);

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Attendance vs Dropout Risk</h3>
        <p className="text-xs text-white/60">Last 8 weeks</p>
      </div>
      <div className="overflow-auto">
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewBox={`0 0 ${width} ${height}`}
          className="h-60 w-[40rem] min-w-full"
        >
          <defs>
            <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Axes */}
          <g stroke="rgba(255,255,255,0.12)" strokeWidth="1">
            <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} />
            <line x1={padding} y1={padding} x2={padding} y2={height - padding} />
          </g>
          {/* Area */}
          <path d={area} fill="url(#riskGradient)" />
          {/* Line */}
          <path d={path} fill="none" stroke="#ef4444" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
          {/* Points */}
          {sampleData.map((d, i) => {
            const x = padding + (i * (width - padding * 2)) / (sampleData.length - 1);
            const y = height - padding - (d.risk * (height - padding * 2)) / 100;
            return <circle key={i} cx={x} cy={y} r={4} fill="#fff" />;
          })}
        </motion.svg>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-white/70 md:grid-cols-4">
        <div className="rounded-lg bg-white/5 p-2">Avg Attendance: 82%</div>
        <div className="rounded-lg bg-white/5 p-2">Avg Risk: 34%</div>
        <div className="rounded-lg bg-white/5 p-2">High Risk (≥70%): 12</div>
        <div className="rounded-lg bg-white/5 p-2">Improving: 40</div>
      </div>
    </section>
  );
};

export default RiskChart;
