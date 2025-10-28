import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden rounded-2xl bg-black">
      <Spline
        scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Soft gradient overlay for readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="px-6 pb-6 md:px-12 md:pb-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            EduRisk 360 — AI-Driven Student Engagement & Dropout Risk Analytics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-3 max-w-2xl text-sm text-white/80 md:text-base"
          >
            Real-time KPIs, predictive insights, and a sleek analytics experience. Powered by
            modern ML, designed for admins, faculty, and counselors.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 flex flex-wrap gap-3"
          >
            <a
              href="#analytics"
              className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              View Dashboard
            </a>
            <a
              href="#upload"
              className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-600"
            >
              Upload Data
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
