import { useState, useEffect } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("");

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`Element with id ${id} not found.`);
      return;
    }

    setActiveTab(id);

    const offset = window.innerHeight / 2 - element.offsetHeight / 2;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold to control when a section becomes active
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="bg-white fixed top-0 left-0 w-full z-50 py-4 min-w-[320px] max-w-full shadow-md">
      <nav className="flex justify-center items-center w-full">
        <ul className="flex list-none p-0 text-base md:text-xs">
          {[
            { id: "home", label: "Home", hiddenOnMobile: true },
            { id: "home", label: "About Me", hiddenOnDesktop: true },
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "blogs", label: "Blog" },
          ].map(({ id, label, hiddenOnMobile, hiddenOnDesktop }) => (
            <li
              key={id}
              className={`${hiddenOnMobile ? "hidden md:block" : ""} ${
                hiddenOnDesktop ? "md:hidden" : ""
              }`}
            >
              <a
                className={`block px-4 py-2 transition-colors duration-300 rounded-lg font-light ${
                  activeTab === id
                    ? "bg-black text-white"
                    : "text-gray-800 hover:bg-black hover:text-white"
                }`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Index;
