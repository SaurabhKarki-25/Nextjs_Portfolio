"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // or "swiper" if v8

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


interface TestimonialItem {
  id: number;
  name: string;
  profession: string;
  image: string;
  text: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "John Doe",
    profession: "Software Engineer",
    image: "/myPic.jpg",
    text: "This platform has completely changed the way I work. The design is clean and user-friendly!"
  },
  {
    id: 2,
    name: "Jane Smith",
    profession: "UI/UX Designer",
    image: "/about.png",
    text: "Absolutely love the features and the support from the team. Highly recommended!"
  },
  {
    id: 3,
    name: "Michael Johnson",
    profession: "Freelancer",
    image: "/about.png",
    text: "It’s so easy to use and really saves me time. Great job!"
  }
];

export default function Testimonial() {
  return (
    <section className="testimonial py-10 bg-[#292929] ">
      <div className="max-w-6xl mx-auto px-4 ">
        
       

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="bg-white pt-8"
        
        >
            
            
          {testimonials.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex flex-col md:flex-row   justify-center items-stretch "
            >
                 <h1 className="text-3xl font-bold text-center text-black mb-2 mt-2">Testimonials</h1>
        <h4 className="text-xl font-light text-center text-black ">
          What our clients say
        </h4>
              <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch w-full gap-6 p-5 md:p-10">
              {/* Image Box */}
              <div className="flex justify-center items-center w-full md:w-1/3 min-w-[100px]  bg-center bg-no-repeat"
                   style={{ backgroundImage: "url(/testimonial/imgbg.svg)" }}>
                <div
                  className="relative top-2 left-3 h-40 w-40 md:h-52 md:w-52 border-2 border-white rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
              </div>

              {/* Content Box */}
              <div className="w-full md:w-2/3 max-w-full text-gray-800 p-5 md:p-8 ">
                {/* Quote */}
                <div className="relative">
                  <p className=" md:px-10">
                    {item.text}
                  </p>
                </div>

                {/* Info */}
                <div className="mt-4 md:pl-10 flex flex-col md:items-start items-center">
                  <span className="text-[28px] md:text-[35px] font-bold capitalize mb-1">
                    {item.name}
                  </span>
                  <span className="mt-1  text-[#fa255f] text-lg md:text-xl">
                    {item.profession}
                  </span>
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
