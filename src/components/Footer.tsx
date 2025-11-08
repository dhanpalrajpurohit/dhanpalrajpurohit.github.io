import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-10 mt-20 relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-gradient-to-t from-blue-600/10 to-transparent blur-2xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        {/* Logo / Name */}
        <h3 className="text-white font-extrabold text-2xl mb-2 tracking-tight">
          Dhanpal<span className="text-blue-500">.</span>
        </h3>
        <p className="text-gray-400 text-sm max-w-md mb-6">
          Full-Stack Developer crafting efficient, scalable applications using
          Django, FastAPI, and React. Passionate about clean code and elegant UX.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6 mb-8">
          <a
            href="mailto:rajpurohit.dhanpal.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 my-4" />

        {/* Footer Bottom */}
        <div className="text-gray-500 text-sm flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>© {new Date().getFullYear()} Dhanpal Singh. All rights reserved.</span>
          <span className="hidden sm:inline-block">•</span>
          <a
            href="#home"
            className="text-blue-400 hover:text-blue-300 transition-all"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
