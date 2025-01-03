import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './Services.css'
const Services = () => {
  const sectionRef = useRef(null);

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  const imageAnimation = useAnimation();
  const textAnimation = useAnimation();

  if (inView) {
    imageAnimation.start({
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.2 },
    });

    textAnimation.start({
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.6 },
    });
  }

  return (
    <div
      ref={ref}
      className="service-div flex items-center justify-center bg-black text-white"
    >
      <div className="services-container mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Images Container */}
        <motion.div
          className="service-image-grid grid grid-cols-2 h-fit"
          initial={{ x: -200, opacity: 0 }}
          animate={imageAnimation}
        >
          <div className="relative group">
            <img
              src="/assets/services4.jpeg"
              alt="Make Up"
              className="rounded-lg w-full h-fit object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-lg font-bold opacity-0 group-hover:opacity-100 transition">
              MAKE UP
            </div>
          </div>
          <div className="relative group">
            <img
              src="/assets/services3.jpeg"
              alt="Photography"
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-lg font-bold opacity-0 group-hover:opacity-100 transition">
              PHOTOGRAPHY
            </div>
          </div>
          <div className="relative group">
            <img
              src="/assets/services1.jpeg"
              alt="Hairstyling"
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-lg font-bold opacity-0 group-hover:opacity-100 transition">
              HAIRSTYLING
            </div>
          </div>
          <div className="relative group">
            <img
              src="/assets/services2.jpeg"
              alt="Screenwriting"
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-lg font-bold opacity-0 group-hover:opacity-100 transition">
              SCREENWRITING
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="space-y-6"
          initial={{ x: 200, opacity: 0 }}
          animate={textAnimation}
        >
          <div className="text-invert-container text-end  relative ">
            <span className="sub-title">WHAT WE DO</span>
            <h1 className="text-5xl text-white font-bold mt-2">Our Services</h1>
        </div>
          <p className="text-end font-extralight service-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>

          {/* Progress Bars */}
          <div className="space-y-4">
            <div>
              <div className="flex px-3 justify-between text-sm">
                <span>90%</span>
                <span>PHOTOGRAPHY</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-custom-gold h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex px-3 justify-between text-sm">
                <span>95%</span>
                <span>MAKE UP</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-custom-gold h-2 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex px-3 justify-between text-sm">
                <span>92%</span>
                <span>HAIRSTYLING</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-custom-gold h-2 rounded-full"
                  style={{ width: "92%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between px-3 text-sm">
                <span>98%</span>
                <span>SCREENWRITING</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-custom-gold h-2 rounded-full"
                  style={{ width: "98%" }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
