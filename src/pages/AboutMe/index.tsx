import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePic from "../../assets/profileImage.jpg";

const AboutMe: React.FC = () => {
  const summaryText = `
    I'm a passionate Software Engineer with a focus on building efficient and scalable applications. 
    Experienced in ReactJS, TypeScript, and Material UI, I strive to create user-friendly interfaces and robust back-end solutions. 
    My goal is to continuously learn and contribute to innovative projects.
  `;

  return (
    <div id="home" className="w-screen min-h-screen bg-[#e8e3de] flex justify-center items-center p-4 pt-20">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-center text-center p-8 relative">
          <div className="w-56 h-56 sm:w-44 sm:h-44 rounded-full overflow-hidden border-black mb-5">
            <img 
              className="w-full h-full object-cover" 
              src={profilePic} 
              alt="Profile" 
            />
          </div>
          <h6 className="text-2xl font-bold whitespace-nowrap">Dhanpal Singh</h6>
          <div className="flex items-center gap-5 mt-5 absolute bottom-0">
            <a href="https://github.com/dhanpalrajpurohit" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="text-3xl hover:text-gray-600" />
            </a>
            <a href="https://x.com/DhanpalRaj1998" target="_blank" rel="noopener noreferrer">
              <XIcon className="text-3xl hover:text-gray-600" />
            </a>
            <a href="https://www.linkedin.com/in/dhanpal-rajpurohit/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="text-3xl hover:text-gray-600" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-left bg-[#e8e3de] text-black flex flex-col justify-start p-8 relative">
          <p className="leading-relaxed text-base md:text-sm sm:text-xs mb-5">
            {summaryText}
          </p>
          <a 
            href="https://drive.google.com/file/d/1iPT5YJ-IBhPV7E6DNUOAsFHrEX-i7XAe/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black text-white text-center py-2 px-6 rounded-none text-lg absolute bottom-0"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;