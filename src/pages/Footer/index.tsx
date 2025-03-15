import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[black] text-[white] py-6 px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left - Navigation Links */}
        <nav className="flex flex-wrap gap-6 text-sm">
          <a href="#about" className="hover:text-[#f1c40f] transition">About</a>
          <a href="#experience" className="hover:text-[#f1c40f] transition">Experience</a>
          <a href="#projects" className="hover:text-[#f1c40f] transition">Projects</a>
          <a href="#contact" className="hover:text-[#f1c40f] transition">Contact</a>
        </nav>

        {/* Center - Social Icons */}
        <div className="flex gap-5">
          <a href="https://github.com/dhanpalrajpurohit" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="text-2xl hover:text-[#f1c40f] transition" />
          </a>
          <a href="https://x.com/DhanpalRaj1998" target="_blank" rel="noopener noreferrer">
            <XIcon className="text-2xl hover:text-[#f1c40f] transition" />
          </a>
          <a href="https://www.linkedin.com/in/dhanpal-rajpurohit/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="text-2xl hover:text-[#f1c40f] transition" />
          </a>
        </div>

        {/* Right - Copyright */}
        <p className="text-sm text-[white] text-center md:text-right">
          © {new Date().getFullYear()} Dhanpal Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
