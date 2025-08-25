'use client';

import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaFigma, FaDatabase, FaChrome } from 'react-icons/fa';

interface IconItem {
  id: number;
  icon: React.ReactNode;
}

interface ServiceItemProps {
  id: number;
  icons: IconItem[];
  title: string;
  desc: string;
}

const colorMap: Record<number, {
  border: string;
  iconStyles: string[];
  accentColor: string;
}> = {
  1: {
    border: 'border-[rgb(252,0,200)]',
    iconStyles: ['text-[rgb(252,0,200)] bg-[rgba(255,0,200,0.4)]'],
    accentColor: 'rgb(252,0,200)',
  },
  2: {
    border: 'border-[#00d8ff]',
    iconStyles: ['text-[#00d8ff] bg-[hsla(189,100%,50%,0.4)]'],
    accentColor: '#00d8ff',
  },
  3: {
    border: 'border-[#2aa45f]',
    iconStyles: [
      'text-[#2aa473] bg-[rgba(41,163,114,0.4)]',
      'text-[#2aa45f]',
      'text-[#5caa45] bg-[rgba(93,170,69,0.4)]',
    ],
    accentColor: '#2aa45f',
  },
  4: {
    border: 'border-[#2089b8]',
    iconStyles: ['text-[#2089b8] bg-[rgba(33,136,184,0.4)]'],
    accentColor: '#2089b8',
  },
  5: {
    border: 'border-[#777b9d]',
    iconStyles: ['text-[#777b9d] bg-[rgba(119,123,157,0.4)]'],
    accentColor: '#777b9d',
  },
  6: {
    border: 'border-[rgb(162,177,111)]',
    iconStyles: [
      'text-[#a4c639] bg-[rgba(165,198,57,0.4)]',
      'text-[rgb(162,177,111)]',
      'text-[silver] bg-[rgba(192,192,192,0.5)]',
    ],
    accentColor: 'rgb(162,177,111)',
  },
};

const ServiceItem: React.FC<ServiceItemProps> = ({ id, icons, title, desc }) => {
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * -8;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease-out',
      transformStyle: 'preserve-3d',
      perspective: '2000px',
    });
  };

  const resetStyle = () => {
    setStyle({
      transform: 'rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.3s ease-in-out',
    });
  };

  const { border, iconStyles, accentColor } = colorMap[id] || {
    border: 'border-blue-500',
    iconStyles: ['text-blue-500 bg-[rgba(165,42,42,0.7)]'],
    accentColor: 'blue',
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-xl ${border}
  backdrop-blur-md bg-white/5
  shadow-[0_4px_20px_rgba(0,0,0,0.4)]
  hover:shadow-[0_8px_40px_rgba(44,193,255,0.5)] hover:-translate-y-2 hover:scale-[1.02] hover:z-20
  transition-all duration-300 ease-out overflow-hidden`}
      style={{
        ...style,
        backgroundColor: '',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetStyle}
    >
      {/* Icon Row */}
      <div className="flex justify-center items-center gap-[-200px] pt-5 mb-12 iconbox   ">
        {icons.map((iconObj, index) => (
          <span
            key={iconObj.id}
            className={`text-[60px] font-bold p-5 rounded-full flex items-center justify-center z-10 ${
              iconStyles[index] || 'text-blue-500 bg-[rgba(165,42,42,0.7)]'
            } ${index === 1 ? 'bg-transparent p-0 m-0' : ''}`}
          >
            {iconObj.icon}
          </span>
        ))}
      </div>

      {/* Title & Description */}
      <h2 className="text-center text-xl font-semibold p-5">{title}</h2>
      <p className="text-[16px] p-5 font-light leading-[22px] text-[rgb(240,240,240)] text-center font-sans">
        {desc}
      </p>

      {/* Bottom Accent Strip */}
      <div
        className="w-full h-[6px] mt-6 rounded-b-xl"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
};

const serviceItems: ServiceItemProps[] = [
  {
    id: 2,
    icons: [
      { id: 1, icon: <FaReact /> },
      { id: 2, icon: <FaNodeJs /> },
    ],
    title: 'Full-Stack Development',
    desc: 'Build scalable web apps using React, Node.js, and modern tooling.',
  },
  {
    id: 3,
    icons: [
      { id: 1, icon: <FaChrome /> },
      { id: 2, icon: <FaDatabase /> },
    ],
    title: 'Chrome Extension & Automation',
    desc: 'Automate workflows and enhance browser capabilities with custom extensions.',
  },
  {
    id: 5,
    icons: [{ id: 1, icon: <FaFigma /> }],
    title: 'UI/UX Design',
    desc: 'Design intuitive interfaces and user flows with Figma and Tailwind.',
  },
  
];

const ServicesSection = () => {
  return (
    <section className="relative w-full px-4 py-15 bg-[#292929] text-white flex flex-col items-center">
      <div className="absolute inset-0 bg-[#292929] z-0" />
      <h1 className="text-3xl font-bold text-[#2cb4f8] mb-8 z-10">My Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 bg-[#292929] max-w-7xl  z-8 perspective-[300px]">
        {serviceItems.map((item) => (
          <ServiceItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;