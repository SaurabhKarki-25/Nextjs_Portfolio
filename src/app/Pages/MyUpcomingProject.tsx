"use client";

import React, { forwardRef } from "react";
import UpcommingProjectItem from "../Components/UpcomingProjectItem";

import physics from "../../../public/physics.png";
import dating from "../../../public/dating.png";
import social_media from "../../../public/social_media.png";
import blockchain from "../../../public/blockchain.png";

const UpcommingProjects = forwardRef<HTMLElement>((props, ref) => {
  const UpcommingProjecsData = [
    {
      id: 1,
      img: physics,
      title: "Physics Simulation App",
      desc: "Helping students and teachers understand physics concepts better. This app will make you fall in love with physics.",
      tech: [
        "Unity",
        "Canvas",
        "Three.js",
        "React",
        "React Native",
        "Firebase",
        "Node.js",
        "MongoDb",
      ],
    },
    {
      id: 2,
      img: dating,
      title: "Personality-based Matchmaking App",
      desc: "Helps you find like-minded friends or partners based on personality traits — the only social media with a net +ve impact.",
      tech: [
        "AI/ML",
        "React",
        "Next.js",
        "React Native",
        "Firebase",
        "Node.js",
        "MongoDb",
      ],
    },
    {
      id: 3,
      img: social_media,
      title: "Social Media App for Think Tanks",
      desc: "Uniting rational thinkers worldwide for humanity’s progress toward a Type-1 civilization (we’re at 0.7 now).",
      tech: [
        "AI/ML",
        "React",
        "Next.js",
        "React Native",
        "Firebase",
        "Node.js",
        "MongoDb",
      ],
    },
    {
      id: 4,
      img: blockchain,
      title: "Blockchain-based Polling & Voting App",
      desc: "Encourages fearless participation in social issues using anonymous, transparent blockchain-based voting.",
      tech: [
        "Blockchain",
        "Solidity",
        "React",
        "Next.js",
        "React Native",
        "Firebase",
        "Node.js",
        "MongoDb",
      ],
    },
  ];

  return (
    <section
      id="upCommingProjects"
      ref={ref}
      className="w-full flex flex-col items-center py-10 bg-[#292929] px-4"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        My Upcoming Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-15  max-w-[980px] w-full">
        {UpcommingProjecsData.map((data) => (
          <UpcommingProjectItem key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
});

UpcommingProjects.displayName = "UpcommingProjects";

export default UpcommingProjects;
