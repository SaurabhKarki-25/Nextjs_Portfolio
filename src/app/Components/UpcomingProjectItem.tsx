"use client";

import React from "react";

export interface UpcommingProjectItemProps {
  id: number;
  img: any;
  title: string;
  desc: string;
  tech: string[];
}

const UpcommingProjectItem: React.FC<UpcommingProjectItemProps> = ({
  img,
  title,
  desc,
  tech,
}) => {
  return (
    <div
      className="bg-[#130f40] bg-gradient-to-br from-[#130f40] to-black 
                 flex flex-col  justify-between items-center 
                 p-6 rounded-lg  max-w-[480px] w-full shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
    >
      {/* image box */}
      <div
        className="h-[100px] w-[450px] sm:h-[80px]  bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${img.src})` }}
      />

      {/* title */}
      <h2 className="w-full text-center py-5 text-[25px] text-[#e282ff] font-semibold">
        {title}
      </h2>

      {/* description */}
      <p className="text-gray-200 text-center">{desc}</p>

      {/* tech stack */}
      <h5 className="w-full text-center italic text-gray-300 text-base py-2">
        Tech Stack
      </h5>
      <div className="flex justify-center flex-wrap w-full gap-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className="inline-flex justify-center bg-gray-800 text-white 
                       px-3 py-1 rounded-md text-sm capitalize"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UpcommingProjectItem;
