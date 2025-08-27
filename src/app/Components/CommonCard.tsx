'use client';

import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface PortfolioItemProps {
  id: number;
  title: string;
  desc: string;
  features: string[];
  git_link: string;
  live_demo_link: string;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  id,
  title,
  desc,
  features,
  git_link,
  live_demo_link,
}) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tiltNode = tiltRef.current; // ✅ cache the current ref

    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        max: 35,
        speed: 300,
        glare: true,
        'max-glare': 0.7,
        gyroscope: false,
      });
    }

    return () => {
      const node = tiltNode as (HTMLDivElement & {
        vanillaTilt?: { destroy: () => void };
      }) | null;

      if (node?.vanillaTilt) {
        node.vanillaTilt.destroy(); // ✅ cleanup using cached node
      }
    };
  }, []);

  return (
    <div
      ref={tiltRef}
      className="relative overflow-hidden p-10 w-full max-w-md mx-auto my-10 rounded-2xl border border-white/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col items-center text-center bg-white/5"
      data-aos={id % 2 === 0 ? 'zoom-in-left' : 'zoom-in-right'}
      data-aos-delay={id % 2 === 0 ? 100 : 0}
    >
      {/* Glowing Gradient Background */}
      <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-radial from-orange-400 via-yellow-500 to-transparent opacity-30 blur-2xl" />

      {/* Background Number */}
      <span className="absolute top-4 right-6 text-[100px] font-bold text-white/5 z-0 select-none pointer-events-none leading-none">
        {String(id).padStart(2, '0')}
      </span>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <h3 className="text-white text-2xl font-semibold">{title}</h3>
        <p className="text-white/80 italic">&quot;{desc}&quot;</p>

        <div className="space-y-2">
          <h4 className="text-white font-semibold underline underline-offset-4">
            Features
          </h4>
          {features.map((f, idx) => (
            <p key={idx} className="text-white/70">
              <span className="text-yellow-400">&#xBB;</span> {f}
            </p>
          ))}
        </div>

        <div className="flex justify-center gap-8 pt-6">
          <a
            href={git_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Github
          </a>
          <a
            href={live_demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

PortfolioItem.displayName = 'PortfolioItem';
