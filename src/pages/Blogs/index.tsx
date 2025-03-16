import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Blogs = () => {
  return (
    <section id="blogs" className="w-full min-h-screen bg-[#E8E3DE] flex justify-center items-center p-8 md:p-20">
      <div className="w-full max-w-5xl">
        {/* Heading */}
        <h2 className="text-left text-4xl md:text-5xl font-bold uppercase tracking-wide mb-10">
          Latest Blogs
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
            {/* Blog Cards */}
            {[
              {
                image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*GCBv5i4KEIQTtBc4",
                title: "Router in FastAPI",
                description:
                  "FastAPI is known for its speed and simplicity in building APIs. A standout feature is its ability to organize code using routers.",
              },
              {
                image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*gKmNc9Tbh9GI9bu9Fbp0Ug.png",
                title: "GraphQL with Django",
                description: "In this blog, we will learn about GraphQL in Django.",
              },
              {
                image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*CBLEFE55p0Td2O22OmZZng.jpeg",
                title: "Encrypt Django Model Field",
                description:
                  "This tutorial is about how to encrypt the Django model field and implement it in your application.",
              },
              {
                image: "https://studentprojectguide.com/wp-content/uploads/2017/11/Thumbnail.jpeg",
                title: "Draw Using OpenCV Python",
                description:
                  "In this blog, we will explore how to perform drawing on an image using OpenCV and Python.",
              },
            ].map((blog, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="w-80 min-h-[380px] bg-white shadow-lg p-6 flex flex-col items-center">
                  {/* Thumbnail Image */}
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-40 object-cover"
                  />

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-center mt-4">{blog.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-center mt-2">{blog.description}</p>

                  {/* Read More Button */}
                  <div className="w-full mt-auto">
                    <button className="w-full bg-black text-white py-2 px-4 text-sm">
                      Read More
                    </button>
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

export default Blogs;
