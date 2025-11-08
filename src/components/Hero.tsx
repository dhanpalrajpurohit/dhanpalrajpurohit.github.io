import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import profileImage from "../assets/profileImage.jpg"

const Hero: React.FC = () => {
  return (
    <section
    id="home"
    className="relative min-h-[100vh] flex items-center justify-center bg-[#f8fafc] overflow-hidden text-gray-900"
  >
      <Container className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl text-center md:text-left"
        >
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug md:leading-tight mb-4">
            Hello Mate 👋 <br />
            I’m{" "}
            <span className="text-blue-600">Dhanpal</span>
            <br /> a{" "}
            <span className="text-blue-600">Software Developer</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-base sm:text-lg md:text-[17px] mb-8 leading-relaxed">
            I’m a developer with over 3 years of experience specializing in
            Django, FastAPI, and React. I build scalable backend systems and
            beautiful frontends — passionate about clean code and cloud
            deployment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-md text-sm sm:text-base"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1iPT5YJ-IBhPV7E6DNUOAsFHrEX-i7XAe/view"
              className="border-2 border-blue-600 text-blue-600 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 text-sm sm:text-base"
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 relative rounded-full overflow-hidden shadow-2xl border-[6px] sm:border-[8px] border-white mx-auto md:mx-0">
            <img
              src={profileImage}
              alt="Dhanpal Singh"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Accent Circles */}
          <div className="absolute -top-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full blur-2xl opacity-60"></div>
          <div className="absolute bottom-0 -right-6 sm:-right-8 w-20 h-20 sm:w-24 sm:h-24 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        </motion.div>
      </Container>
      <motion.button
  onClick={() =>
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
  }
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="group absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center focus:outline-none"
>
  <div className="relative w-12 h-12 rounded-full flex items-center justify-center">
    {/* Glow ring */}
    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse" />
    {/* Circle border */}
    <div className="relative w-10 h-10 border-2 border-blue-500 rounded-full flex items-center justify-center">
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        className="text-blue-600 text-lg font-bold"
      >
        ↓
      </motion.div>
    </div>
  </div>
  <span className="mt-3 text-gray-600 text-sm group-hover:text-blue-600 transition-colors">
    Scroll to explore
  </span>
</motion.button>

    </section>
  );
};

export default Hero;
