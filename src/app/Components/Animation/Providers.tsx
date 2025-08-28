"use client";

import PreLoader from"./Preloader";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PreLoader />
      <div className="invisible" id="main-content">
        {children}
      </div>
    </>
  );
}
