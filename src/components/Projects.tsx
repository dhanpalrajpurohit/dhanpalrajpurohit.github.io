import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

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
    title: "Note Sharing",
    desc: "Effortlessly create, organize, and share notes online with a sleek, user-friendly note-sharing web application.",
    tech: ["React", "Django", "PostgreSQL"],
    demo: "#",
    github: "https://github.com/dhanpalrajpurohit/note_sharing_app",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Attendance System",
    desc: "A PyQt-based attendance system enabling efficient tracking, management, and reporting of attendance with an intuitive user interface.",
    tech: ["Python", "PyQt", "SQLite"],
    demo: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "YouTube Clone",
    desc: "A web-based YouTube clone utilizing the YouTube Data API V3 for video searching, playback, and channel browsing.",
    tech: ["React", "YouTube API", "TailwindCSS"],
    demo: "#",
    github: "https://github.com/dhanpalrajpurohit/youtube-clone",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=60",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-gray-900 mb-12"
        >
          Featured <span className="text-blue-600">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              {/* Project Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-blue-600/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center text-white p-6">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm opacity-90 mb-3">{p.desc}</p>
                <div className="flex gap-4 mt-2">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-sm px-4 py-2 rounded-full transition"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-sm px-4 py-2 rounded-full transition"
                  >
                    <Github size={16} /> GitHub
                  </a>
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
