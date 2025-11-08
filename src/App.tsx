import "./styles.css";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, FileText } from "lucide-react";

import AppLayout from "./components/AppLayout";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import BlogSection from "./components/BlogSection";
import Skills from "./components/Skills";
import ContactSection from "./components/ContactSection";
import MainLayout from "./layout/MainLayout";
import {fadeInUp} from "./utils/motion";

const App = () => {
  return (
    <MainLayout>
      <motion.div
        variants={fadeInUp(0.2)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <BlogSection />

        {/* Smooth transition gradient */}
        <div className="relative w-full h-20 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

        {/* Contact slightly overlaps upward */}
        <ContactSection />
      </motion.div>
    </MainLayout>
  );
};
export default App;
