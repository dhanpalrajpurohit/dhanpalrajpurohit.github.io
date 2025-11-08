// src/components/Experience.tsx
import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Web Developer",
    company: "LA NET Team Solution Pvt Ltd, Surat",
    duration: "Dec 2021 - Present",
    description:
      "Built scalable applications using Django, FastAPI, ReactJS, and PostgreSQL. Deployed cloud solutions on GCP and Dockerized services for efficient deployment.",
  },
  {
    role: "Backend Developer",
    company: "IT Futurz Solution, Surat",
    duration: "July 2020 - Dec 2020",
    description:
      "Developed REST APIs with Node.js and Express, integrated AWS EC2 and MongoDB, and maintained CI/CD workflows using GitHub Actions.",
  },
  {
    role: "Python Developer",
    company: "Pixel Beget Pvt Ltd, Delhi",
    duration: "June 2019 - June 2020",
    description:
      "Developed Flask-based REST APIs and Python GUI tools for data analysis and computer vision tasks using OpenCV.",
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-16"
        >
          Work Experience
        </motion.h2>

        <div className="relative sm:pl-12 md:pl-16">
          <div className="hidden sm:block absolute left-4 sm:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 via-blue-300 to-transparent rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative mb-10 sm:mb-16"
            >
              <div className="hidden sm:block absolute left-[5px] top-8 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-[3px] border-white shadow-lg"></div>

              <div className="ml-0 sm:ml-10 bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <Briefcase className="text-blue-600 w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <p className="text-sm text-gray-500">{exp.company}</p>
                  <span className="text-xs sm:text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full shadow-sm self-start sm:self-auto">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed text-[14px] sm:text-[15px]">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
