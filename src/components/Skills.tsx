import React from "react";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiVercel,
  SiGithub,
  SiFigma,
  SiFramer,
  SiThreedotjs,
  SiPython,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiFlask,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";


const skills = [
  { name: "Python", icon: <SiPython color="#3776AB" /> },
  { name: "Django", icon: <SiDjango color="#092E20" /> },
  { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
  { name: "Flask", icon: <SiFlask color="#000000" /> },
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "Docker", icon: <SiDocker color="#0db7ed" /> },
  { name: "AWS", icon: <FaAws color="#FF9900" /> },
  { name: "Supabase", icon: <SiSupabase color="#3ECF8E" /> },
  { name: "GitHub", icon: <SiGithub color="#181717" /> },
  { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
  { name: "Vercel", icon: <SiVercel color="#000000" /> },
  { name: "Framer Motion", icon: <SiFramer color="#E0234E" /> },
  { name: "Three.js", icon: <SiThreedotjs color="#000000" /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12"
        >
          Skills
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.05 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-sm border border-gray-100 hover:border-blue-500 hover:shadow-md hover:shadow-blue-100 transition-all duration-300 text-gray-700 font-medium cursor-default"
            >
              <span className="text-xl">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
