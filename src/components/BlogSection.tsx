import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";
import BlogCard from "./BlogCard";

const blogs = [
  {
    image:"https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=60",
    title: "GraphQL with Django: A Beginner’s Guide",
    link: "https://rajpurohitdhanpal.medium.com/graphql-with-django-f3a65268dcc5",
    date: "08 Feb, 25",
    author: "Dhanpal Singh",
    comments: 12,
  },
  {
    image:"https://images.unsplash.com/photo-1740477959006-798042a324aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3270",
    title: "Encrypting Django Model Fields with Python",
    link: "https://rajpurohitdhanpal.medium.com/encrypt-django-model-field-a1e4f384824b",
    date: "15 Feb, 25",
    author: "Dhanpal Singh",
    comments: 8,
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",
    title: "Router in FastAPI",
    link: "https://rajpurohitdhanpal.medium.com/router-in-fastapi-9ac1ee2a82ff",
    date: "20 Feb, 25",
    author: "Dhanpal Singh",
    comments: 15,
  },
];

const BlogSection: React.FC = () => {
  return (
    <section id="blogs" className="py-12 bg-gray-50">
      <Container>
        {/* Heading */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <p className="text-blue-600 font-semibold uppercase text-sm mb-2">
              Blog & News
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Our Latest Blogs
            </h2>
          </div>
          <a
            href="https://rajpurohitdhanpal.medium.com/"
            className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full font-medium transition-all"
            target="_blank"
          >
            Read Our Blogs <ArrowRight size={18} />
          </a>
        </div>

        {/* Blog Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}  // 👈 add here
            viewport={{ once: true }}
          >
            <BlogCard key={index} {...blog} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default BlogSection;
