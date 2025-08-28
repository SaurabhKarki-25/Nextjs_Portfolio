"use client";

import { useEffect, useState } from "react";

export default function PreLoader({ children }: { children?: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 12000); // 12s
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
        {/* Animated Border Box */}
        <div className="relative inline-block">
          {/* Four borders */}
          <span className="absolute top-0 left-0 w-0 h-[3px] bg-white animate-draw-top"></span>
          <span className="absolute top-0 right-0 w-[3px] h-0 bg-white animate-draw-right"></span>
          <span className="absolute bottom-0 right-0 w-0 h-[3px] bg-white animate-draw-bottom"></span>
          <span className="absolute bottom-0 left-0 w-[3px] h-0 bg-white animate-draw-left"></span>

          {/* Name inside */}
          <h1 className="px-8 py-4 text-5xl md:text-7xl font-extrabold">
            Hari Joshi
          </h1>
        </div>

        {/* Typing Effect */}
        <p className="mt-8 text-xl md:text-2xl text-gray-300 typing">
          Full Stack Developer
        </p>
      </div>
    );
  }

  // after 12s → show real portfolio
  return <>{children}</>;
}
