import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Testimonials.css'
const Testimonials = () => {
    const testimonials = [
        {
            name: "Maura Wilkins",
            position: "Postman",
            image: "/assets/profile1.jpeg",
            quote:
                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.",
        },
        {
            name: "Markus Wallberg",
            position: "Fashion Designer",
            image: "/assets/profile2.jpeg",
            quote:
                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.",
        },
        {
            name: "Elisa Cooper",
            position: "Writer",
            image: "/assets/profile3.jpeg",
            quote:
                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.",
        },
    ];

    const slideVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 100 },
        visible: { opacity: 1, scale: 1, y: 0 },
    };

    return (
        <div className="bg-black text-white py-16">
            <div className="text-container heading-container  relative ">
                <span className="sub-title uppercase">Stories That Matter</span>
                <h1 className="text-5xl text-white font-bold mt-2">Testimonials</h1>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={1}
                slidesPerView={1}
                loop
                autoplay={{ delay: 7000 }}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                breakpoints={{
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                }}
                className="w-full max-w-7xl mx-auto mt-10 relative"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center swiper-slide ">
                        <motion.div
                            variants={slideVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative slide-container  w-1/2 p-8 shadow-lg flex flex-col justify-center items-center  border-2 border-gray-700"
                        >
                            <span className="text-3xl text-custom-gold absolute -top-0 -left-0 transform -translate-x-1/2 -translate-y-1/2"><i className='bx bx-plus' ></i></span>
                            <span className="text-3xl text-custom-gold absolute right-0 -top-0 transform translate-x-1/2 -translate-y-1/2"><i className='bx bx-plus' ></i></span>

                            <span className="text-3xl absolute text-custom-gold -bottom-8 left-0 transform -translate-x-1/2 -translate-y-1/2 "><i className='bx bx-plus' ></i></span>

                            <span className="text-3xl absolute -bottom-8 text-custom-gold right-0 translate-x-1/2 -translate-y-1/2"><i className='bx bx-plus' ></i></span>

                            <div className="w-24 h-24 mb-6 rounded-full border-white border-2  overflow-hidden">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover "
                                />
                            </div>
                            <p className="text-center text-lg italic mb-4">
                                "{testimonial.quote}"
                            </p>
                            <h3 className="text-custom-gold font-bold text-xl">
                                {testimonial.name}
                            </h3>
                            <p className="text-sm uppercase">{testimonial.position}</p>
                        </motion.div>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-next text-yellow-500 hover:text-yellow-600"></div>
                <div className="swiper-button-prev text-yellow-500 hover:text-yellow-600"></div>
            </Swiper>
        </div>
    );
};

export default Testimonials;
