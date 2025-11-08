import React from "react";
import { MessageSquare } from "lucide-react";

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  author: string;
  comments: number;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  date,
  author,
  comments,
  link,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Blog Image */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Blog Content */}
      <div className="p-6">
        <p className="text-gray-500 text-sm mb-1">{date}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-3 cursor-pointer">
            {title}
          </h3>
        </a>
        <div className="flex items-center justify-between text-sm text-gray-500 mt-3">
          <div className="flex items-center gap-2">
            <img
              src="https://dhanpalrajpurohit.vercel.app/assets/profileImage-CneR84hj.jpg"
              alt={author}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare size={16} />
            <span>{comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
