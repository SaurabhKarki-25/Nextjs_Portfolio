'use client'

import { useState } from 'react'
import Image from 'next/image'

const SocialLinks = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-[1000]">
      {/* Toggle Button */}
      <div
        className={`cursor-pointer h-[27px] ${
          toggle ? 'w-[40px]' : 'w-[27px]'
        } pr-[5px] bg-white border border-black border-l-0 border-b-0 rounded-r-[10px] p-[2px] flex items-center justify-center animate-inOut`}
        onClick={() => setToggle(!toggle)}
      >
        <div
          className={`transition-all duration-300 ease-in-out ${
            toggle ? 'rotate-[-180deg]' : ''
          }`}
        >
          <Image
            src="/arrow.svg"
            alt="Toggle"
            width={20}
            height={20}
            className={`${toggle ? 'mr-0' : 'mr-[7px]'}`}
          />
        </div>
      </div>

      {/* Social Icons */}
      <div
        className={`relative pt-[2px] bg-white flex flex-col justify-center w-[29px] border border-black border-t-0 border-l-0 transition-all duration-200 ease-linear ${
          toggle ? 'left-0' : '-left-[30px]'
        }`}
      >
        {[
          {
            href: 'https://github.com/harijoshi12/',
            img: 'github.svg',
            label: 'GitHub',
          },
          {
            href: 'https://www.linkedin.com/in/harijoshi123/',
            img: 'linkedin.svg',
            label: 'LinkedIn',
          },
          {
            href: 'https://www.facebook.com/Mr.Hariprasadjoshi/',
            img: 'facebook.svg',
            label: 'Facebook',
          },
          {
            href: 'https://twitter.com/harijoshi123',
            img: 'twitter.svg',
            label: 'Twitter',
          },
          {
            href: 'https://www.youtube.com/harijoshi',
            img: 'youtube.svg',
            label: 'YouTube',
          },
          {
            href: 'https://www.instagram.com/harijoshi123/',
            img: 'instagram.svg',
            label: 'Instagram',
          },
          {
            href: 'https://in.pinterest.com/haricoachingclasses/',
            img: 'pinterest.svg',
            label: 'Pinterest',
          },
        ].map(({ href, img, label }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex transition-all duration-200 ease-linear hover:translate-x-[3px] hover:scale-[1.3]"
          >
            <Image
              src={`/${img}`}
              alt={label}
              width={30}
              height={30}
              className="h-[30px] p-[1px] outline-none animate-zoomInOut"
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialLinks
