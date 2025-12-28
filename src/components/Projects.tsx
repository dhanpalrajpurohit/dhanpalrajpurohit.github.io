import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  tech: string[];
  demo?: string;
  github?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Note Sharing Platform",
    desc: "Create, organize, and share notes securely with role-based access and cloud-ready APIs.",
    tech: ["React", "Django", "PostgreSQL"],
    github: "https://github.com/dhanpalrajpurohit/note_sharing_app",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Attendance Management System",
    desc: "Desktop-based attendance tracking system with reporting and export features.",
    tech: ["Python", "PyQt", "SQLite"],
    github: "#",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "YouTube Clone",
    desc: "Video search and playback platform using YouTube Data API with modern UI.",
    tech: ["React", "YouTube API", "TailwindCSS"],
    github: "https://github.com/dhanpalrajpurohit/youtube-clone",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=60",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-14"
        >
          Featured <span className="text-blue-600">Projects</span>
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={p.image}
                alt={p.title}
                className="h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{p.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <a
                    href={p.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-black"
                  >
                    <Github size={16} /> GitHub
                  </a>

                  <span className="flex items-center gap-1 text-sm text-blue-600 font-medium">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
