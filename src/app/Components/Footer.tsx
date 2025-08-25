import React from "react";
import { FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedinIn, FaYoutube, FaTwitter, FaHeart } from "react-icons/fa";
import FooterAnimation from "./Animation/FooterAnimation";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-end relative text-[25px] h-[230px] bg-[#292929]">
      <FooterAnimation />

      {/* Content Section */}
      <div className="w-4/5 max-w-[1000px] h-4/5 pb-[10px] pt-[30px] flex flex-col justify-evenly items-center relative z-10">
        {/* Profile Image Box */}
        <div
          className="h-[80px] w-[80px] rounded-full border border-white bg-cover bg-[length:150%] bg-[47%_23%]"
          style={{ backgroundImage: "url(/dp.png)" }}
        ></div>

        {/* Name */}
        <div className="text-white font-bold italic text-[30px] my-2">Hari Joshi</div>

        {/* Social Icons */}
        <div className="flex">
          {[
            <FaGithub key="gh" />,
            <FaLinkedinIn key="li" />,
            <FaFacebookF key="fb" />,
            <FaTwitter key="tw" />,
            <FaYoutube key="yt" />,
            <FaInstagramSquare key="ig" />,
          ].map((icon, i) => (
            <span
              key={i}
              className="flex justify-center items-center w-[32px] h-[32px] mx-[7px] rounded-full bg-[#e6e6e6] text-pink-500 transition-all duration-200 hover:text-white hover:bg-[#ff0062] hover:scale-125"
            >
              {icon}
            </span>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full border-t border-[#3c3c3c] text-center text-[#aaaaaa] text-[15px] leading-[20px] py-[5px] relative">
        <span>
          ©2022. Designed & Developed by 'me' with{" "}
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
