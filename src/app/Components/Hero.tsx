'use client';


import React, { forwardRef, useEffect, useRef, useState } from "react";
import Image from "next/image";

const url3 =
  "https://drive.google.com/file/d/12kPgfE6h42_WEg4sBoFcYPVPr8rmpVXO/view?usp=sharing";

const Hero = forwardRef<HTMLElement>((_, ref) => {
  const [isSmall, setIsSmall] = useState(false);
  const fnamearr = ["H", "a", "r", "i"];
  const lnamearr = ["J", "o", "s", "h", "i"];
  const fNameRef = useRef<HTMLSpanElement>(null);
  const lNameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setIsSmall(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    const fletters = fNameRef.current?.children ?? [];
    const lletters = lNameRef.current?.children ?? [];

    [...fletters, ...lletters].forEach((letter) => {
      setTimeout(() => {
        letter.classList.add("animate-rubberBand");
      }, 1000);
      setTimeout(() => {
        letter.classList.remove("animate-rubberBand");
      }, 3000);
    });
  }, []);

  useEffect(() => {
    const fletters = fNameRef.current?.children ?? [];
    const lletters = lNameRef.current?.children ?? [];

    [...fletters, ...lletters].forEach((letter) => {
      const fun1 = () => letter.classList.add("animate-rubberBand");
      const fun2 = () => letter.classList.remove("animate-rubberBand");
      letter.addEventListener("mouseover", fun1);
      letter.addEventListener("mouseleave", fun2);
    });

    return () => {
      [...fletters, ...lletters].forEach((letter) => {
        letter.removeEventListener("mouseover", () => {});
        letter.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden bg-[#292929] text-white p-4 "
    >
      {/* Overlay */}
      <div className="absolute inset-0  z-0"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between pt-50">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h4
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-lg font-medium"
          >
            Hi! I am <span></span>{" "}
          </h4>

          <h1
            data-aos={isSmall ? "fade-right" : "fade-left"}
            data-aos-delay="300"
            className="text-5xl font-bold flex gap-2"
          >
            <span ref={fNameRef} className="flex gap-1">
              {fnamearr.map((letter, idx) => (
                <span key={idx}>{letter}</span>
              ))}
            </span>
            <span ref={lNameRef} className="flex gap-1">
              {lnamearr.map((letter, idx) => (
                <span key={idx}>{letter}</span>
              ))}
            </span>
          </h1>

          <h2
            data-aos="fade-right"
            data-aos-delay={isSmall ? "0" : "400"}
            data-aos-offset="30"
            className="text-2xl font-semibold"
          >
            I design & build digital products
          </h2>

          <p
            data-aos={isSmall ? "fade-right" : "fade-left"}
            data-aos-delay={isSmall ? "0" : "500"}
            data-aos-offset="30"
            className="text-base text-gray-300 max-w-xl"
          >
            UI/UX Designer, Frontend & Backend Developer, Blockchain/Web3
            Developer
          </p>

          {/* Buttons */}
          <div
            data-aos={!isSmall ? "fade-right" : "fade-left"}
            data-aos-delay={isSmall ? "0" : "550"}
            data-aos-offset="30"
            className="flex gap-4 mt-6"
          >
            <button
              onClick={() => console.log("resume downloaded")}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              <a
                href={url3}
                rel="noopener noreferrer"
                target="_blank"
                id="nav_resumeMaker"
              >
                Download Resume
              </a>
            </button>

            <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
              <a href="#contact">Let's Talk</a>
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="flex-1 flex justify-center items-center mt-10 md:mt-0"
        >
          
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-2 " style={{ borderColor: 'rgb(0,255,187)'}}>
  {/* Base image */}
  <Image
    src="/myPic.jpg"
    alt="Base Image"
    width={128}
    height={128}
    className="absolute top-0 left-0 w-full h-full object-cover rounded-full scale-x-[-1]"
  />

  {/* Overlay image */}
  <Image
    src="/myPic1.png"
    alt="Overlay"
    width={128}
    height={128}
    className="absolute top-0 left-0 w-full h-full object-cover rounded-full pointer-events-none scale-x-[-1]"
  />
</div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;