import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import YoutubeSVG from "../../components/SVG/YoutubeSVG";
import ProjectSVG from "../../components/SVG/ProjectSVG";
import NoteSVG from "../../components/SVG/NoteSVG";

const Projects = () => {
  return (
    <section id="projects" className="w-full min-h-screen bg-[#E8E3DE] flex justify-center items-center px-8 md:px-20 py-20">
      <div className="w-full max-w-5xl">
        {/* Heading */}
        <h2 className="text-left text-4xl md:text-5xl font-bold uppercase tracking-wide mb-10">
          Projects
        </h2>

        {/* Swiper Container */}
        <div className="w-full">
          <Swiper
            loop={true}
            navigation={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              980: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {/* Project Cards */}
            {[
              {
                icon: <YoutubeSVG />,
                title: "Tuber",
                description:
                  "A web-based project designed to streamline YouTuber management, offering tools for analytics, collaborations, scheduling, and growth tracking.",
                demo: "https://youtubers-6o45.vercel.app/",
                github: "https://github.com/dhanpalrajpurohit/Youtubers",
              },
              {
                icon: <NoteSVG />,
                title: "Note Sharing",
                description:
                  "Effortlessly create, organize, and share notes online with a sleek, user-friendly note-sharing web application.",
                demo: "https://github.com/dhanpalrajpurohit/note_sharing_app",
                github: "https://github.com/dhanpalrajpurohit/note_sharing_app",
              },
              {
                icon: <ProjectSVG />,
                title: "Attendance System",
                description:
                  "A PyQt-based attendance system enabling efficient tracking, management, and reporting of attendance with an intuitive user interface.",
                demo: "https://youtu.be/YT3v5eYDuQQ",
                github: "https://github.com/dhanpalrajpurohit/Attendance-System-Using-Face-Recognition",
              },
              {
                icon: <YoutubeSVG />,
                title: "YouTube Clone",
                description:
                  "A web-based YouTube clone utilizing the YouTube Data API V3 for video searching, playback, and channel browsing.",
                demo: "https://youtube-clone-i5wlq7q84-dhanpal-singhs-projects.vercel.app/",
                github: "https://github.com/dhanpalrajpurohit/youtube-clone",
              },
            ].map((project, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="w-76 min-h-[380px] bg-white shadow-lg p-6 flex flex-col items-center">
                  {/* Icon */}
                  <div className="mb-4">{project.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-center">{project.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-center mt-2">{project.description}</p>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white py-2 px-4 text-sm"
                    >
                      Demo Link
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white py-2 px-4 text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
