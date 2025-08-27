'use client';

import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { progLangs, techSkills } from '../../Data';

interface SkillProps {
  id: number;
  title: string;
  level: number;
}

// Horizontal bar for Programming Languages
const ProgLang: React.FC<SkillProps> = ({ title, level }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.width = `${Math.min(10, Math.max(0, level)) * 10}%`;
    }
  }, [level]);

  return (
    <div className="flex items-center justify-between mb-4">
      <span className="text-white text-lg w-[120px]">{title}</span>
      <div className="w-full max-w-[300px] h-[12px] bg-gray-800 rounded-full overflow-hidden ml-4">
        <div
          ref={barRef}
          className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-[#2cb4f8] to-[#ac46e7]"
        />
      </div>
    </div>
  );
};

// Circular progress for Tools & Frameworks
const TechSkill: React.FC<SkillProps> = ({ title, level }) => {
  const [percent, setPercent] = useState(0);
  const circleRef = useRef<SVGPathElement>(null);
  const strokeLength = 330;
  const safeLevel = Math.min(10, Math.max(0, level));
  const offset = strokeLength - safeLevel * 33;

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset = `${offset}`;
    }

    let counter = 0;
    const interval = setInterval(() => {
      if (counter >= safeLevel * 10) {
        clearInterval(interval);
      } else {
        counter += 1;
        setPercent(counter);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [safeLevel, offset]);

  return (
    <div className="relative w-[120px] h-[120px] m-2 flex flex-col items-center justify-center text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="absolute top-0 left-0"
      >
        <path
          ref={circleRef}
          d="M115 60C115 87.2136 90.7941 110 60 110C29.2059 110 5 87.2136 5 60C5 32.7864 29.2059 10 60 10C90.7941 10 115 32.7864 115 60Z"
          fill="none"
          stroke="url(#circleGrad)"
          strokeWidth="10"
          strokeDasharray={strokeLength}
          strokeDashoffset={strokeLength}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="circleGrad" x1="60" y1="0" x2="60" y2="120">
            <stop stopColor="#2cb4f8" />
            <stop offset="1" stopColor="#ac46e7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <span className="text-white text-sm">{title}</span>
        <span className="text-white text-xs mt-1">{percent}%</span>
      </div>
    </div>
  );
};

// Main Skills Section
const Skills = forwardRef<HTMLElement, Record<string, never>>((_props, ref) => {
  return (
    <section
      ref={ref}
      id="skills"
      className="w-full px-4 py-10 bg-[#292929] text-white flex flex-col items-center"
    >
      <h1 className="text-3xl font-bold text-[#2cb4f8] mb-8">My Skills</h1>

      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl justify-center items-stretch">
        {/* Programming Languages */}
        <div className="bg-[#2c2c2c] p-6 rounded-xl border border-[#3a3a3a] shadow-[0_-6px_24px_rgba(0,0,0,0.5)] w-full lg:w-[48%] flex flex-col justify-center min-h-[400px] transition-all duration-300 hover:scale-[1.02]">
          <h2 className="text-xl font-semibold text-center mb-6">
            Programming Languages
          </h2>
          {progLangs.map((lang) => (
            <ProgLang key={lang.id} {...lang} />
          ))}
        </div>

        {/* Tools & Frameworks */}
        <div className="bg-[#2c2c2c] p-6 rounded-xl border border-[#3a3a3a] shadow-[0_-6px_24px_rgba(0,0,0,0.5)] w-full lg:w-[48%] flex flex-col justify-center min-h-[400px] transition-all duration-300 hover:scale-[1.02]">
          <h2 className="text-xl font-semibold text-center mb-6">
            Tools & Frameworks
          </h2>
          <div className="flex flex-wrap justify-center">
            {techSkills.map((skill) => (
              <TechSkill key={skill.id} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
export default Skills;
