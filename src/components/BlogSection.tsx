import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";

const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=60",
    title: "GraphQL with Django: A Beginner’s Guide",
    link: "https://rajpurohitdhanpal.medium.com/graphql-with-django-f3a65268dcc5",
    date: "08 Feb, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1740477959006-798042a324aa?auto=format&fit=crop&w=900&q=60",
    title: "Encrypting Django Model Fields with Python",
    link: "https://rajpurohitdhanpal.medium.com/encrypt-django-model-field-a1e4f384824b",
    date: "15 Feb, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",
    title: "Router in FastAPI",
    link: "https://rajpurohitdhanpal.medium.com/router-in-fastapi-9ac1ee2a82ff",
    date: "20 Feb, 2025",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section id="blogs" className="py-20 bg-gray-50">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-14 gap-6">
          <div>
            <p className="text-blue-600 font-semibold uppercase text-sm mb-2">
              Blog & News
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Latest <span className="text-blue-600">Articles</span>
            </h2>
          </div>

          <a
            href="https://rajpurohitdhanpal.medium.com/"
            target="_blank"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Read All Blogs <ArrowRight size={18} />
          </a>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.a
              key={index}
              href={blog.link}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition block"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">{blog.date}</p>
                <h3 className="text-lg font-semibold leading-snug mb-2">
                  {blog.title}
                </h3>
                <span className="text-sm font-medium text-blue-600 flex items-center gap-1">
                  Read article <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
