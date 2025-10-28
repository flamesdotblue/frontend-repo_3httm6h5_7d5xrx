import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const rows = [
  { id: 'STU-1001', name: 'Aarav N.', attendance: 58, marks: 62, risk: 78, trend: 'up' },
  { id: 'STU-1002', name: 'Maya P.', attendance: 90, marks: 74, risk: 22, trend: 'down' },
  { id: 'STU-1003', name: 'Ishaan K.', attendance: 72, marks: 68, risk: 41, trend: 'down' },
  { id: 'STU-1004', name: 'Sara L.', attendance: 49, marks: 55, risk: 84, trend: 'up' },
  { id: 'STU-1005', name: 'Devika R.', attendance: 63, marks: 71, risk: 35, trend: 'down' },
];

const RiskBadge = ({ value }) => {
  let color = 'bg-emerald-500/20 text-emerald-300';
  let label = 'Low';
  if (value >= 70) { color = 'bg-rose-500/20 text-rose-300'; label = 'High'; }
  else if (value >= 40) { color = 'bg-amber-500/20 text-amber-300'; label = 'Medium'; }
  return (
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${color}`}>{label}</span>
  );
};

const StudentTable = () => {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Students — Risk Snapshot</h3>
        <a href="#" className="text-xs text-indigo-300 hover:underline">View all</a>
      </div>
      <div className="overflow-auto">
        <table className="min-w-full text-left text-sm text-white/80">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-3 py-2">ID</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Attendance</th>
              <th className="px-3 py-2">Marks</th>
              <th className="px-3 py-2">Risk</th>
              <th className="px-3 py-2">Trend</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-white/5">
                <td className="px-3 py-3 font-mono text-white/70">{r.id}</td>
                <td className="px-3 py-3 font-medium text-white">{r.name}</td>
                <td className="px-3 py-3">{r.attendance}%</td>
                <td className="px-3 py-3">{r.marks}%</td>
                <td className="px-3 py-3 flex items-center gap-2">
                  <span className="font-semibold text-white">{r.risk}%</span>
                  <RiskBadge value={r.risk} />
                </td>
                <td className="px-3 py-3">
                  {r.trend === 'up' ? (
                    <span className="inline-flex items-center gap-1 text-rose-300">
                      <ArrowUpRight className="h-4 w-4" /> rising
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-emerald-300">
                      <ArrowDownRight className="h-4 w-4" /> improving
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StudentTable;
