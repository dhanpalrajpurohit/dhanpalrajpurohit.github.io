import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "Experience", "Skills", "Projects", "Blogs", "Contact"];

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold text-gray-900">
          Dhanpal<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group text-[15px]"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300"
          >
            Hire Me
          </a>
          <button
            className="md:hidden text-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-md border-t border-gray-100 flex flex-col items-center gap-4 py-4 text-gray-700 font-medium"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="hover:text-blue-600 transition"
            >
              {item}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
