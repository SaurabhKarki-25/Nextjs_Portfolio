"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "service", label: "Service" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
  { id: "footer", label: "Footer" },
];

export default function RightNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              setActiveSection(section.id);
            }
          },
          { threshold: 0.6 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <>
      {/* Desktop Right Nav */}
      <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col space-y-4">
        {sections.map((s) => {
          const isActive = s.id === activeSection;

          return (
            <motion.div
              key={s.id}
              onClick={() => {
                const target = document.getElementById(s.id);
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer flex items-center justify-end"
            >
              <motion.div
                initial={false}
                animate={{
                  width: isActive ? "120px" : "12px",
                  height: "12px",
                  borderRadius: isActive ? "20px" : "50%",
                  backgroundColor: isActive ? "#00FFC8" : "transparent",
                  border: isActive ? "1px solid #00FFC8" : "2px solid #fff",
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center shadow-lg overflow-hidden"
              >
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-3 text-black font-semibold text-sm"
                  >
                    {s.label}
                  </motion.span>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Floating Toggle */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowMobileNav(!showMobileNav)}
          className="bg-[#00FFC8] text-black p-3 rounded-full shadow-lg"
        >
          <HiOutlineMenuAlt3 size={24} />
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {showMobileNav && (
        <div className="md:hidden fixed bottom-20 right-6 z-50 bg-black p-4 rounded-lg shadow-xl space-y-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                const target = document.getElementById(s.id);
                if (target) target.scrollIntoView({ behavior: "smooth" });
                setShowMobileNav(false);
              }}
              className={`block text-white text-sm px-3 py-1 rounded hover:bg-[#00FFC8] hover:text-black ${
                activeSection === s.id ? "bg-[#00FFC8] text-black" : ""
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}