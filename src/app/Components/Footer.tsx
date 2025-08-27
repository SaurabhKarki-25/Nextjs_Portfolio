import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagramSquare,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
import FooterAnimation from "./Animation/FooterAnimation";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const socials = [
    { icon: <FaGithub />, link: "https://github.com/" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com/" },
    { icon: <FaFacebookF />, link: "https://facebook.com/" },
    { icon: <FaTwitter />, link: "https://twitter.com/" },
    { icon: <FaYoutube />, link: "https://youtube.com/" },
    { icon: <FaInstagramSquare />, link: "https://instagram.com/" },
  ];

  return (
    <footer className="flex flex-col items-center justify-end relative text-[25px] h-[230px] bg-[#292929]">
      <FooterAnimation />

      {/* Content Section */}
      <div className="w-4/5 max-w-[1000px] h-4/5 pb-[10px] pt-[30px] flex flex-col justify-evenly items-center relative z-10">
        {/* Profile Image Box */}
        <div
          className="h-[80px] w-[80px] rounded-full border border-white bg-cover"
          style={{
            backgroundImage: "url(/dp.png)",
            backgroundSize: "150%",
            backgroundPosition: "47% 23%",
          }}
          aria-label="Profile picture"
        />

        {/* Name */}
        <div className="text-white font-bold italic text-[30px] my-2">
          Hari Joshi
        </div>

        {/* Social Icons */}
        <div className="flex">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-[32px] h-[32px] mx-[7px] rounded-full bg-[#e6e6e6] text-pink-500 transition-all duration-200 hover:text-white hover:bg-[#ff0062] hover:scale-125"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full border-t border-[#3c3c3c] text-center text-[#aaaaaa] text-[15px] leading-[20px] py-[5px] relative">
        <span>
          ©{year}. Designed & Developed by <b>Hari Joshi</b> with{" "}
          <span className="inline-flex justify-center items-end relative text-red-500 w-[15px]">
            <FaHeart className="absolute bottom-[-3px]" />
          </span>
          .
        </span>
      </div>
    </footer>
  );
};

export default Footer;
