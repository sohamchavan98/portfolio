'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  // Opacities for different sections based on EXACT scroll progress of the 500vh container
  // Section 1: visible from start, fades out before Section 2
  const opacity1 = useTransform(progress, [0, 0.25, 0.3], [1, 1, 0]);
  // Section 2: fades in after Section 1, fades out before Section 3
  const opacity2 = useTransform(progress, [0.35, 0.4, 0.6, 0.65], [0, 1, 1, 0]);
  // Section 3: fades in after Section 2, visible till the end of the scroll container
  const opacity3 = useTransform(progress, [0.7, 0.75, 0.95, 1], [0, 1, 1, 0]);

  // Parallax Y movement for a subtle floating effect
  const y1 = useTransform(progress, [0, 0.3], [0, -100]);
  const y2 = useTransform(progress, [0.35, 0.65], [100, -100]);
  const y3 = useTransform(progress, [0.7, 1], [100, -100]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex h-full w-full flex-col font-sans">
      
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-start justify-center p-8 pl-8 md:pl-24 lg:pl-32 text-left"
      >
        <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          Soham Chavan.
        </h1>
        <p className="mt-4 text-xl font-medium text-white/80 md:text-2xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          Data Scientist & Analytics Leader.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-end justify-center p-8 pr-8 md:pr-24 lg:pr-32 text-right"
      >
        <h2 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-6xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          Turning data into revenue & strategy.
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
      >
        <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          Specializing in ML, GenAI, and Analytics.
        </h2>
      </motion.div>

    </div>
  );
}
