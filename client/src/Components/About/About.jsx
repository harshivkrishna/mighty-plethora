import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import './About.css'

const About = () => {
  const [selectedSection, setSelectedSection] = useState("services");

  const sections = {
    services: {
      content: (
        <motion.div
          key="services-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="mb-6 font-extralight text-blue-100">
            As important as strategy is, we have to execute to win. Execution
            involves every employee and every relation we have with customers.
            We must operate quickly on problems, drive results, not just
            activities.
          </p>
          <div className="about-title-container grid grid-cols-2 gap-4 gap-y-5">
            <div className="flex gap-2">
              <h3 className="text-4xl  text-custom-gold font-semibold">132</h3>
              <p className="text-custom-grey font-extrabold">Pounds of Equipment</p>
            </div>
            <div className="flex gap-2">
              <img src="" alt="" />
              <h3 className="text-4xl text-custom-gold font-semibold">280</h3>
              <p className="text-custom-grey font-extrabold">Finished Photosessions</p>
            </div>
            <div className="flex gap-2">
              <h3 className="text-4xl text-custom-gold font-semibold">195</h3>
              <p className="text-custom-grey font-extrabold">Studio Sessions</p>
            </div>
            <div className="flex mx-2 gap-2">
              <h3 className="text-4xl text-custom-gold font-semibold">253</h3>
              <p className="text-custom-grey font-extrabold">Happy Clients</p>
            </div>
          </div>
        </motion.div>
      ),
      image: "/assets/bg-side3.jpeg",
    },
    skills: {
      content: (
        <motion.div
          key="skills-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Our Skills</h2>
          <p className="mb-6">
            Execution involves every employee and every relation we have with
            customers. We must operate quickly on problems, drive results, not
            just activities.
          </p>
          <div className="space-y-4">
            <div>
              <div className="skills-container px-2">
                <h3 className="text-xl font-semibold">Camerawork</h3>
                <h3 className="text-xl font-semibold">85%</h3>
              </div>
              <div className="bg-white h-1.5 w-full rounded-full my-2 overflow-hidden">
                <div className="skills-line h-full w-[85%]"></div>
              </div>
            </div>
            <div>
              <div className="skills-container px-2">
                <h3 className="text-xl font-semibold">Video Editing</h3>
                <h3 className="text-xl font-semibold">87%</h3>
              </div>
              <div className="bg-white h-1.5 w-full my-2 rounded-full overflow-hidden">
                <div className="skills-line h-full w-[87%]"></div>
              </div>
            </div>
            <div>
              <div className="skills-container px-2">
                <h3 className="text-xl font-semibold">Directing</h3>
                <h3 className="text-xl font-semibold">95%</h3>
              </div>
              <div className="bg-white h-1.5 w-full my-2 rounded-full overflow-hidden">
                <div className="skills-line h-full w-[95%]"></div>
              </div>
            </div>
            <div>
              <div className="skills-container px-2">
                <h3 className="text-xl font-semibold">Postproduction</h3>
                <h3 className="text-xl font-semibold">97%</h3>
              </div>
              <div className="bg-white h-1.5 w-full my-2 rounded-full overflow-hidden">
                <div className="skills-line h-full w-[97%]"></div>
              </div>
            </div>
          </div>
        </motion.div>
      ),
      image: "/assets/bg-side4.jpeg",
    },
    team: {
      content: (
        <motion.div
          key="team-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-white team-container"
        >
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={{ delay: '3000' }}
            modules={[Navigation, Autoplay]}
            className="mt-6 w-full"
          >
            <SwiperSlide>
              <div className="text-center flex flex-col justify-center">
                <img
                  src="/assets/profile1.jpeg"
                  alt="Clifford Rock"
                  className="mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl text-white font-semibold">Clifford Rock</h3>
                <p>Founder</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <img
                  src="/assets/profile2.jpeg"
                  alt="Marketa Laznova"
                  className="mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl text-white font-semibold">Marketa Laznova</h3>
                <p>Videographer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="z-20">
              <div className="text-center">
                <img
                  src="/assets/profile3.jpeg"
                  alt="Elisa Rashford"
                  className="mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl text-white font-semibold">Elisa Rashford</h3>
                <p>Postproduction</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      ),
      image: "/assets/bg-side5.jpeg",
    },
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">

      <div className="text-container heading-container  relative ">
        <span className="sub-title">WHO WE ARE</span>
        <h1 className="text-5xl text-white font-bold mt-2">About Us</h1>
      </div>

      <div className="flex space-x-4 mb-6">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            onClick={() => setSelectedSection(section)}
            className={`px-4 py-2 font-semibold text-white border-b-2 transition-all ${selectedSection === section
              ? "border-custom-gold"
              : "border-transparent"
              }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
      <div className="relative content-wrap-container flex w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
          className="content-container w-2/3 p-6">
          {sections[selectedSection].content}
        </motion.div>
        <motion.div
          key={selectedSection}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.8 }}
          viewport={{ once: false, amount: 0.5, }}
          className="w-1/3 image-container"
        >
          <img
            src={sections[selectedSection].image}
            alt={`${selectedSection} Icon`}
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
