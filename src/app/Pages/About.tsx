'use client';

import React, { useState, forwardRef } from "react";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

type AboutProps = object; // ✅ fixed empty interface

const About = forwardRef<HTMLElement, AboutProps>((_props, ref) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <section
      id="about"
      ref={ref}
      className="py-4 px-4 flex flex-col items-center bg-[#292929] text-white p-4"
    >
      <div className="max-w-[1000px] w-full flex flex-wrap justify-center gap-y-5">
        {/* Left Section */}
        <div className="p-2 m-4 relative ">
          <div className="relative w-[460px] h-[600px] ml-auto">
            <Image
              src="/about.png"
              alt="About section image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute w-[105%] h-[102%] -top-[22px] -left-[22px] border-t-[10px] border-l-[10px] border-[#00ffbb]" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-grow max-w-[480px] w-[350px] m-4 -mt-1 font-sans">
          <h1 className="text-[45px] mb-12 text-[#00ffbb] font-medium">
            About Me{" "}
            <span className="inline-block mb-[10px] ml-[4px] h-[6px] w-[60px] bg-[#00ffbb]" />
          </h1>

          <h3 className="font-merriweather tracking-wide leading-[25px] font-light mb-2">
            Hi, I&apos;m Hari. I&apos;m a self-taught passionate learner with
            over 9+ years of experience in Mechanical Engineering, Teaching,
            Software Development, and entrepreneurship...
          </h3>

          <p className="text-[20px] py-2 font-light font-roboto">
            I like to define myself by the work I want to do, not by the work
            I&apos;ve done. Skills can be taught, personality is inherent...
          </p>

          <p className="text-[20px] py-2 font-light font-roboto">
            I appreciate an environment of intellectual challenge...
          </p>

          <p className="text-[20px] py-2 font-light font-roboto">
            I like to develop expertise... My personality type is{" "}
            <a
              href="https://www.16personalities.com/intj-personality"
              className="text-[#00ffbb]"
              target="_blank"
              rel="noopener noreferrer"
            >
              INTJ
            </a>
            /
            <a
              href="https://www.16personalities.com/infj-personality"
              className="text-[#00ffbb]"
              target="_blank"
              rel="noopener noreferrer"
            >
              INFJ
            </a>
            . I&apos;m currently working for Transcybernetics Private Limited.
            {!show && "....."}
          </p>

          {show && (
            <p className="text-[20px] py-2 font-light font-roboto">
              Thanks for stopping by! I&apos;m currently looking to join a new
              team of creative designers and developers. If you think we might
              be a good fit, give me a{" "}
              <a
                href="tel:+919634090498"
                className="text-[#00ffbb] inline-flex items-center gap-1"
              >
                call <IoCall />
              </a>{" "}
              or{" "}
              <a
                href="mailto:mr.hariprasadjoshi@gmail.com"
                className="text-[#00ffbb] inline-flex items-center gap-1"
              >
                email <MdEmail />
              </a>
              .
            </p>
          )}

          <button
            onClick={() => setShow(!show)}
            className="ml-1 mt-6 text-[20px] px-5 py-2 cursor-pointer rounded-none transition-all duration-300 hover:rounded-full"
          >
            Read {!show ? "more" : "less"}..
          </button>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
