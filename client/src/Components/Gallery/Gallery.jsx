import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "/assets/gallery/gallery1.jpg",
    "/assets/gallery/gallery2.jpg",
    "/assets/gallery/gallery3.jpg",
    "/assets/gallery/gallery4.jpeg",
    "/assets/gallery/gallery4.jpeg",
    "/assets/gallery/gallery2.jpg",
    "/assets/gallery/gallery1.jpg",
    "/assets/gallery/gallery3.jpg",
  ];

  return (
    <section id="gallery" className="gallery min-h-screen bg-black py-12">
      <div className="text-container heading-container relative">
        <span className="sub-title">GALLERY</span>
        <h1 className="text-5xl text-white font-bold mt-2">Some Photos from Our Studio</h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 mt-9 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group gallery-group"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              viewport={{ amount: 0.5 }}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
                className="w-full h-auto rounded-lg cursor-pointer transform transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
