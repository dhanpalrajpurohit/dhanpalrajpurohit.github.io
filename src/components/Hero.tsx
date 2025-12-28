import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Container from "./Container";
import profileImage from "../assets/profileImage.jpg";

const Hero: React.FC = () => {
  const handleScroll = () => {
    const el = document.getElementById("experience");
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section id="home" className="bg-[#f8fafc] text-gray-900 overflow-hidden">
      <Container className="min-h-[85vh] flex items-center py-20">

        <div className="w-full flex flex-col-reverse md:flex-row items-center gap-14">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              Hello Mate 👋 <br />
              I’m <span className="text-blue-600">Dhanpal</span>
              <br />
              <span className="text-blue-600">
                Software Engineer
              </span>
            </h1>

            <p className="text-gray-600 text-base lg:text-lg max-w-xl mb-8">
              full-stack engineer with 4+ years of experience
              building scalable systems and cloud-native applications
              using Python, Django, FastAPI, and AWS.
            </p>

            {/* CTA */}
            <div className="flex gap-6 justify-center md:justify-start mb-10">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-md text-center"
              >
                Hire Me
              </a>

              <a
                href="#projects"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition text-center"
              >
                View Case Studies
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-6 justify-center md:justify-start mb-10">
              <a
                href="https://linkedin.com/in/YOUR-LINKEDIN"
                target="_blank"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <Linkedin size={18} /> LinkedIn
              </a>

              <a
                href="https://github.com/YOUR-GITHUB"
                target="_blank"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Github size={18} /> GitHub
              </a>
            </div>

            {/* SCROLL */}
            {/* <button
              onClick={handleScroll}
              className="hidden md:flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition"
            >
              <span className="w-9 h-9 rounded-full border-2 border-blue-500 flex items-center justify-center">
                ↓
              </span>
              Scroll to explore
            </button> */}
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-[6px] border-white shadow-2xl">
                <img
                  src={profileImage}
                  alt="Dhanpal Singh"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative accents */}
              <div className="absolute -top-8 -left-8 w-28 h-28 bg-blue-100 rounded-full blur-3xl opacity-60" />
              <div className="absolute bottom-0 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-60" />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;
