import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    console.log("Scroll Position:", scrollPosition);
    if (scrollPosition > 100) {
      setBgColor("white");
    } else {
      setBgColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`navbar flex justify-between items-center p-5`}
      style={{ backgroundColor: bgColor, transition: "background-color 0.3s ease" }}
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1, ease: "easeIn" }}
        className="text-2xl flex font-bold logo-container"
      >
        <img src="/assets/logo.png" className="logo-img" alt="Logo" />
      </motion.div>

      <motion.ul
        className="hidden md:flex space-x-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1, ease: "easeIn" }}
      >
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/#gallery">Gallery</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/careers">Careers</a></li>
      </motion.ul>

      <div className="md:hidden">
        <motion.button
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
          className="text-3xl"
        >
          {isMobile ? (
            <i className="bx bx-x text-white" />
          ) : (
            <i className="bx bx-menu text-white" />
          )}
        </motion.button>
      </div>

      {isMobile && (
        <motion.ul
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mobile-nav absolute top-0 left-0 bg-gray-800 text-white p-6 space-y-4 w-2/3 h-screen"
        >
          <li><a href="/" className="text-lg">Home</a></li>
          <li><a href="/about" className="text-lg">About</a></li>
          <li><a href="/menu" className="text-lg">Menu</a></li>
          <li><a href="#gallery" className="text-lg">Gallery</a></li>
          <li><a href="/contact" className="text-lg">Contact</a></li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
