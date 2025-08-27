'use client';

import React, { forwardRef } from 'react';
import { PortfolioItem } from '../Components/CommonCard';

interface PortfolioProps {}

interface PortfolioFeature {
  id: number;
  title: string;
  desc: string;
  features: string[];
  git_link: string;
  live_demo_link: string;
}

const Portfolio = forwardRef<HTMLElement, PortfolioProps>((_props, ref) => {
  const portfolioData: PortfolioFeature[] = [
    {
      id: 1,
      title: 'My Portfolio Website',
      desc: 'A Portfolio website to showcase my work and skills.',
      features: [
        'Technologies: React, Firebase',
        'Fully Responsive',
        'Custom Animated Cursor',
        'SVG animations',
      ],
      git_link: 'https://github.com/harijoshi12/',
      live_demo_link: 'https://www.harijoshi.tech/',
    },
    {
      id: 2,
      title: 'Resume Builder',
      desc: 'A project focused on simplifying the resume building process.',
      features: [
        'Signup & Login functionality',
        'Live Edit functionality',
        'Download resume in PDF format with selectable text and clickable link',
      ],
      git_link: 'https://github.com/harijoshi12/',
      live_demo_link: 'https://www.metaresume.fun/',
    },
    {
      id: 3,
      title: 'Calculator App',
      desc: 'An Android app based on React Native.',
      features: ['React Native based Android & iOS app', 'Easy to use UI'],
      git_link: 'https://github.com/harijoshi12/',
      live_demo_link:
        'https://play.google.com/store/apps/details?id=com.hariaiandrobotics.calculator',
    },
    {
      id: 4,
      title: 'Blockchain based Polling & Voting app',
      desc: 'App where people can start polling and voting.',
      features: [
        'Technology: Blockchain, Solidity',
        'Start polling and voting',
      ],
      git_link: 'https://github.com/harijoshi12/',
      live_demo_link: '#',
    },
  ];

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative w-full px-0 py-5 text-white overflow-hidden bg-[#292929]"
    >
      {/* Ball 1 - Top Right */}
      <div className="absolute top-[20px] right-[700px] w-[140px] h-[140px] rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500" />

      {/* Ball 2 - Bottom Left */}
      <div className="absolute top-[45px] left-[310px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-400" />

      <h1 className="relative z-10 text-3xl font-bold text-center mb-8 text-[#2cb4f8]">
        My Recent Work
      </h1>

      <div className="relative z-20 flex flex-wrap justify-center max-w-5xl mx-auto">
        {portfolioData.map((data) => (
          <PortfolioItem key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
