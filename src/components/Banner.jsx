import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";

import banner1 from "../assets/bannerSlider/slider1.jpg";
import banner2 from "../assets/bannerSlider/slider2.jpg";
import banner3 from "../assets/bannerSlider/slider3.jpg";

const slides = [
  {
    img: banner1,
    title: "StyleDecor Transforming Spaces",
    paragraph:
      "Bringing modern, elegant, and vibrant designs to your home and office.",
    button: "Explore Designs",
  },
  {
    img: banner2,
    title: "StyleDecor Crafting Comfort",
    paragraph:
      "Innovative furniture and décor solutions tailored for modern lifestyles.",
    button: "Shop Now",
  },
  {
    img: banner3,
    title: "StyleDecor Elevate Your Space",
    paragraph:
      "Premium décor, lighting, and furniture to transform your living environment.",
    button: "Discover More",
  },
];

const Banner = () => {
  const [animate, setAnimate] = useState(true);

  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        onSlideChange={() => {
          setAnimate(false);
          setTimeout(() => setAnimate(true), 50);
        }}
        className="w-full h-[500px] md:h-[650px] overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={slide.img}
                alt={`banner${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <h1
                  className="text-3xl md:text-5xl font-bold mb-4 leading-tight 
                    bg-gradient-to-r from-[#0070FF] via-[#00A8FF] to-[#66CCFF] 
                    bg-clip-text text-transparent"
                >
                  {slide.title.split(" ").slice(0, 2).join(" ")}{" "}
                  <span className="font-light">
                    {slide.title.split(" ").slice(2).join(" ")}
                  </span>
                </h1>

                <p
                  key={animate ? `p-${index}` : `p-reset-${index}`}
                  className="text-lg md:text-xl text-gray-200 max-w-2xl my-6 opacity-0 -translate-y-6 animate-fadeDownFast"
                  style={{ animationDelay: "0.3s" }}
                >
                  {slide.paragraph}
                </p>

                <button
                  key={animate ? `btn-${index}` : `btn-reset-${index}`}
                  className="opacity-0 -translate-y-8 animate-fadeDownSlow
                    bg-gradient-to-r from-[#0070FF] via-[#00A8FF] to-[#66CCFF] 
                    text-white font-semibold px-6 py-3 mt-4 rounded-full shadow-md transition 
                    hover:brightness-110 cursor-pointer flex items-center gap-2"
                  style={{ animationDelay: "0.8s" }}
                >
                  {slide.button} <FaArrowRightLong />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
