import React from 'react';
import { Users, UserCheck, AlertTriangle, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const kpis = [
  { label: 'Total Students', value: '12,480', icon: Users, color: 'from-sky-500 to-cyan-400' },
  { label: 'Active', value: '11,920', icon: UserCheck, color: 'from-emerald-500 to-green-400' },
  { label: 'At Risk', value: '312', icon: AlertTriangle, color: 'from-amber-500 to-orange-400' },
  { label: 'Predicted Dropouts', value: '84', icon: Activity, color: 'from-rose-500 to-pink-500' },
];

const KpiCard = ({ label, value, Icon, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur"
  >
    <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${color} opacity-20`} />
    <div className="relative flex items-center justify-between">
      <div>
        <p className="text-sm text-white/60">{label}</p>
        <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
      </div>
      <div className="rounded-xl bg-black/30 p-3 text-white">
        <Icon className="h-6 w-6" />
      </div>
    </div>
  </motion.div>
);

const KpiGrid = () => {
  return (
    <section id="analytics" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((k) => (
        <KpiCard key={k.label} label={k.label} value={k.value} Icon={k.icon} color={k.color} />)
      )}
    </section>
  );
};

export default KpiGrid;
