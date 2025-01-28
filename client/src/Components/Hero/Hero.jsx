import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Hero.css";
import 'boxicons';

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "/assets/slider/img1.jpeg",
      title: "Gorgeous & Eternal Beauty",
      subtitle: "Featuring",
    },
    {
      id: 2,
      image: "/assets/slider/img2.jpeg",
      title: "Elegant & Timeless Style",
      subtitle: "Highlighting",
    },
    {
      id: 3,
      image: "/assets/slider/img3.jpeg",
      title: "Modern & Captivating Looks",
      subtitle: "Showcasing",
    },
    {
      id: 4,
      image: "/assets/slider/img1.jpeg",
      title: "Gorgeous & Eternal Beauty",
      subtitle: "Featuring",
    },
    {
      id: 5,
      image: "/assets/slider/img2.jpeg",
      title: "Elegant & Timeless Style",
      subtitle: "Highlighting",
    },
    {
      id: 6,
      image: "/assets/slider/img3.jpeg",
      title: "Modern & Captivating Looks",
      subtitle: "Showcasing",
    },
    {
      id: 7,
      image: "/assets/slider/img3.jpeg",
      title: "Modern & Captivating Looks",
      subtitle: "Showcasing",
    },
    {
      id: 8,
      image: "/assets/slider/img1.jpeg",
      title: "Gorgeous & Eternal Beauty",
      subtitle: "Featuring",
    },
    {
      id: 9,
      image: "/assets/slider/img2.jpeg",
      title: "Elegant & Timeless Style",
      subtitle: "Highlighting",
    },
    {
      id: 10,
      image: "/assets/slider/img3.jpeg",
      title: "Modern & Captivating Looks",
      subtitle: "Showcasing",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(1);
  const [loaderProgress, setLoaderProgress] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setLoaderProgress((prev) => {
        if (prev >= 100) {
          return 100; 
        }
        return prev + 1;
      });
    }, 50); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loaderProgress === 100) {
      if (currentSlide === totalSlides) {
        return;
      }
      document.querySelector(".next-arrow")?.click(); // Move to the next slide when loader reaches 100%
    }
  }, [loaderProgress, currentSlide]);

  const handleSlideChange = (swiper) => {
    let newSlide = swiper.activeIndex + 1; // activeIndex starts from 0, so add 1
    if (newSlide > totalSlides) {
      newSlide = 1; 
    }
    setCurrentSlide(newSlide); // Update the current slide state
  };

  const resetLoader = () => {
    setLoaderProgress(0); 
  };

  return (
    <section className="hero-section relative w-full h-screen bg-black text-white">
        <div className="social-links">
            <a href="">
            <i className='bx bxl-facebook'></i>
            <p>FACEBOOK</p>
            </a>
            <span>-</span>
            <a href="">
            <i className='bx bxl-youtube' ></i>
            <p>YOUTUBE</p>
            </a>
            <span>-</span>
            <a href="">
            <i className='bx bxl-instagram' ></i>
            <p>INSTAGRAM</p>
            </a>
            
        </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".prev-arrow",
          nextEl: ".next-arrow",
        }}
        onSlideChange={handleSlideChange} // Update slide counter on slide change
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
              <div className="text-wrap-container absolute inset-0 flex flex-col justify-center items-start px-10 sm:px-20">
                <div className="text-container relative p-3">
                  <span className="sub-title">{slide.subtitle}</span>
                  <h1 className="text-5xl font-bold mt-2">{slide.title}</h1>
                </div>
                <button className="view-project-btn">
                  View Project
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls and Progress */}
      <div className="control-container absolute z-10 bottom-10 left-0 w-1/3 flex items-center justify-center px-10">
        {/* Slide Counter */}
        <div className="slide-number text-lg font-medium">
          {currentSlide} / {totalSlides}
        </div>

        {/* Progress Bar */}
        <div className="progress flex-1 mx-5 h-1 bg-gray-700 relative">
          <div
            className="load-bar h-1 transition-all"
            style={{
              width: `${loaderProgress}%`,
            }}
          ></div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="prev-arrow text-lg p-2 mx-2"
          onClick={resetLoader}
          disabled={currentSlide === 1} 
        >
          <i className='bx bx-chevron-left'></i>
        </button>
        <button
          className="next-arrow text-lg p-2 mx-2"
          onClick={resetLoader}
          disabled={currentSlide === totalSlides} 
        >
          <i className='bx bx-chevron-right'></i>
        </button>
      </div>
    </section>
  );
};

export default Hero;
