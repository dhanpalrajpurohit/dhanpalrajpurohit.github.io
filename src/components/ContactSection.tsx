// src/components/ContactSection.tsx
import React from "react";
import { Mail, Phone, MapPin, FileText } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative -mt-16 md:-mt-20 lg:-mt-24 z-10 py-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Let’s Build Something Together
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Feel free to reach out via the form or contact info below. I’ll get
              back to you as soon as possible.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <FileText className="text-blue-600 w-5 h-5" />,
                  title: "Documentation",
                  info: "dhanpal.dev/docs",
                },
                {
                  icon: <Mail className="text-blue-600 w-5 h-5" />,
                  title: "Our Email",
                  info: "rajpurohit.dhanpal.dev@gmail.com",
                },
                {
                  icon: <Phone className="text-blue-600 w-5 h-5" />,
                  title: "Phone",
                  info: "+91 98765 43210",
                },
                {
                  icon: <MapPin className="text-blue-600 w-5 h-5" />,
                  title: "Visit Us",
                  info: "Acumen Tech Park, Bangalore, IN",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-gray-50 hover:bg-gray-100 p-4 rounded-xl transition-all"
                >
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {item.title}
                    </h4>
                    <p
                      className="
                        text-gray-600 text-xs 
                        break-words whitespace-normal
                        max-w-[200px] sm:max-w-none
                      "
                    >
                      {item.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                About Your Inquiry
              </label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full mt-2 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
