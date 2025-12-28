// src/components/Experience.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";

type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Engineer (Backend-Focused)",
    company: "LA NET Team Solution Pvt Ltd, Surat",
    duration: "Dec 2021 – Present",
    description: [
      "Designed and developed scalable backend systems using Django, FastAPI, and PostgreSQL",
      "Built and optimized REST APIs for production workloads with a strong focus on performance and security",
      "Implemented asynchronous task processing using Celery and Redis to handle background jobs",
      "Containerized applications using Docker and deployed cloud-ready solutions on AWS / GCP",
      "Collaborated with frontend, product, and QA teams to deliver features end-to-end",
    ],
  },
  {
    role: "Backend Developer",
    company: "IT Futurz Solution, Surat",
    duration: "Jul 2020 – Dec 2020",
    description: [
      "Developed RESTful APIs using Node.js and Express for web-based applications",
      "Integrated AWS EC2 services and MongoDB for scalable backend infrastructure",
      "Implemented CI/CD pipelines using GitHub Actions to automate builds and deployments",
      "Worked closely with frontend developers to ensure seamless API integrations",
    ],
  },
  {
    role: "Python Developer",
    company: "Pixel Beget Pvt Ltd, Delhi",
    duration: "Jun 2019 – Jun 2020",
    description: [
      "Developed Flask-based REST APIs for internal tools and client-facing applications",
      "Built Python GUI utilities for data analysis and automation workflows",
      "Worked on computer vision features using OpenCV for image processing tasks",
      "Gained strong fundamentals in backend architecture and clean coding practices",
    ],
  },
];

const ExperienceCard: React.FC<{ exp: ExperienceItem; index: number }> = ({
  exp,
  index,
}) => {
  const [expanded, setExpanded] = useState(false);

  const visiblePoints = expanded
    ? exp.description
    : exp.description.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative mb-10 sm:mb-16"
    >
      {/* Timeline dot */}
      <div className="hidden sm:block absolute left-[5px] top-8 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-[3px] border-white shadow-lg" />

      <div className="ml-0 sm:ml-10 bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-blue-50 p-2 rounded-lg">
            <Briefcase className="text-blue-600 w-5 h-5" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            {exp.role}
          </h3>
        </div>

        {/* Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
          <p className="text-sm text-gray-500">{exp.company}</p>
          <span className="text-xs sm:text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full self-start sm:self-auto">
            {exp.duration}
          </span>
        </div>

        {/* Description */}
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed">
          {visiblePoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        {/* View More (Mobile-first UX) */}
        {exp.description.length > 3 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition sm:hidden"
          >
            {expanded ? (
              <>
                View less <ChevronUp size={16} />
              </>
            ) : (
              <>
                View more <ChevronDown size={16} />
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-14"
        >
          Work Experience
        </motion.h2>

        <div className="relative sm:pl-12 md:pl-16">
          {/* Timeline line */}
          <div className="hidden sm:block absolute left-4 sm:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 via-blue-300 to-transparent rounded-full" />

          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
