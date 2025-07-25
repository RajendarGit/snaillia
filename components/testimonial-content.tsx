'use client'
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "@/data/testimonials";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TestimonialContent = () => {
  return (
    <Slider {...sliderSettings}>
      {testimonials.map((testimonial, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center text-center px-6 py-8"
        >
          <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-[#b8cabd] shadow-lg">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-gray-600 italic mb-4">
            &ldquo;{testimonial.text}&rdquo;
          </p>
          <span className="font-semibold text-[#7fa68d]">
            {testimonial.name}
          </span>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialContent;
