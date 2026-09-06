import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiencesData = [
  {
    id: "01",
    title: "FRONTEND DEVELOPER — SPRINGER CAPITAL",
    date: "AUG 05, 2026 — PRESENT",
    description:
      "Intiyaj Ansari is currently working as a Frontend Developer at Springer Capital. He focuses on building responsive, modern, and user-friendly web interfaces using frontend technologies. His work includes responsive UI development, reusable components, performance optimization, and creating consistent digital experiences across devices.",
    capabilities: [
      "Frontend Development with React.js, JavaScript, HTML5 & CSS3",
      "Responsive and Mobile-First Web Interfaces",
      "Reusable UI Components & Clean Frontend Architecture",
      "Cross-Browser Compatibility & Performance Optimization",
      "Git & GitHub Based Development Workflow",
    ],
    buttonText: "VIEW PROJECTS",
    buttonHref: "https://github.com/Intiyaj-Raj",
  },
  {
    id: "02",
    title: "MERN STACK DEVELOPER — INFORAG TECHNOLOGY",
    date: "JUNE 2026 — PRESENT",
    description:
      "Intiyaj Ansari has 3 months of hands-on MERN Stack development experience at Inforag Technology, Indore. He works on responsive React.js interfaces, reusable UI components, cross-browser compatibility, and application performance while using modern JavaScript and Git-based development workflows.",
    capabilities: [
      "MERN Stack Development with React.js, Node.js, Express.js & MongoDB",
      "Responsive React.js Interfaces & Reusable UI Components",
      "REST API Integration & CRUD Operations",
      "Cross-Browser Compatibility & Application Performance",
      "JavaScript, HTML5, CSS3, Git & GitHub",
    ],
    buttonText: "VIEW PROJECTS",
    buttonHref: "https://github.com/Intiyaj-Raj",
  },
  {
    id: "03",
    title: "FRONTEND WEB DEVELOPMENT INTERN — CODTECH",
    date: "MAR 2025 — APR 2025",
    description:
      "Intiyaj Ansari gained practical frontend development experience at CODTECH IT Solutions Pvt. Ltd. He developed responsive web applications using React.js, integrated RESTful APIs, and created reusable components while working in an agile development environment.",
    capabilities: [
      "React.js Frontend Development",
      "RESTful API Integration",
      "Reusable React Components",
      "Responsive Web Application Development",
      "JavaScript, HTML5, CSS3 & Git",
    ],
    buttonText: "VIEW PROJECTS",
    buttonHref: "https://github.com/Intiyaj-Raj",
  },
  {
    id: "04",
    title: "WEB DEVELOPMENT INTERN — OCTANET",
    date: "MAR 2025 — APR 2025",
    description:
      "During his Web Development internship at OctaNet Services Pvt. Ltd., Intiyaj Ansari worked on practical web development tasks including CRUD operations, API integration, and responsive frontend development for desktop and mobile devices.",
    capabilities: [
      "JavaScript Web Development",
      "CRUD Operations & API Integration",
      "Responsive Frontend Development",
      "Desktop & Mobile UI Optimization",
      "HTML5, CSS3, JavaScript & Git",
    ],
    buttonText: "VIEW PROJECTS",
    buttonHref: "https://github.com/Intiyaj-Raj",
  },
];

const Experiences = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const itemRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            y: -80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="experience"
      className="md:min-h-screen bg-[#050505] text-white pt-12 pb-12 md:pb-24 px-6 md:px-16 flex flex-col relative overflow-hidden"
      aria-labelledby="experience-heading"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-end md:items-start justify-end w-full pb-12">
        <div className="flex flex-col md:flex-row items-start justify-end gap-2 md:gap-4 lg:gap-8 pr-2 md:pr-0 text-right">
          <h2
            ref={titleRef}
            id="experience-heading"
            className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[1.1] md:leading-[0.9] text-right pb-6"
          >
            My <br /> Experience
          </h2>
        </div>
      </div>

      {/* Experience Accordion */}
      <div className="z-10 relative mt-0 -mx-6 md:-mx-16 border-t border-white/20">
        {experiencesData.map((experience, index) => {
          const isActive = activeIndex === index;

          const isHighlighted =
            isActive || (!isMobile && hoveredIndex === index);

          return (
            <article
              key={experience.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              data-index={index}
              className={`border-b border-white/20 py-5 md:py-7 px-6 md:px-16 cursor-pointer transition-all duration-300 ease-in-out ${
                isHighlighted ? "bg-[#ccff00]" : ""
              }`}
              onClick={() => setActiveIndex(isActive ? null : index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-expanded={isActive}
            >
              <div className="flex flex-col lg:flex-row justify-between items-start">
                {/* Left Side */}
                <div className="flex items-start justify-between w-full lg:w-1/2 gap-2">
                  <div className="flex items-start gap-3 md:gap-16 w-full min-w-0">
                    {/* Number */}
                    <div className="h-7 flex items-center md:h-10 flex-shrink-0">
                      <span
                        className={`text-lg md:text-3xl font-medium transition-colors duration-300 ease-in-out leading-none ${
                          isHighlighted ? "text-black" : "text-white"
                        }`}
                      >
                        {experience.id}
                      </span>
                    </div>

                    {/* Title + Date + Capabilities */}
                    <div className="flex flex-col w-full min-w-0">
                      <div className="min-h-7 flex flex-col justify-center md:min-h-10">
                        <h3
                          className={`text-[11px] sm:text-sm md:text-xl lg:text-2xl font-black uppercase tracking-wide leading-tight transition-colors duration-300 ease-in-out whitespace-nowrap overflow-hidden text-ellipsis ${
                            isHighlighted ? "text-black" : "text-white"
                          }`}
                        >
                          {experience.title}
                        </h3>

                        <span
                          className={`text-[9px] md:text-xs font-medium tracking-widest mt-1 transition-colors duration-300 ${
                            isHighlighted ? "text-black/70" : "text-gray-500"
                          }`}
                        >
                          {experience.date}
                        </span>
                      </div>

                      {/* Expanded Capabilities */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${
                          isActive
                            ? "max-h-[800px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pt-6 lg:pt-8 flex flex-col gap-3">
                          <ul
                            className={`transition-colors duration-300 ease-in-out text-sm md:text-base font-light space-y-2 flex flex-col ${
                              isHighlighted ? "text-black/80" : "text-gray-300"
                            }`}
                          >
                            {experience.capabilities.map(
                              (capability, capabilityIndex) => (
                                <li
                                  key={capabilityIndex}
                                  className="flex items-start gap-3"
                                >
                                  <span
                                    className={`transition-colors duration-300 ease-in-out mt-1.5 opacity-70 text-[10px] ${
                                      isHighlighted
                                        ? "text-black"
                                        : "text-[#ccff00]"
                                    }`}
                                  >
                                    ■
                                  </span>

                                  <span>{capability}</span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Arrow */}
                  <div className="h-7 flex items-center flex-shrink-0 lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 transition-all duration-300 ${
                        isHighlighted ? "text-black" : "text-[#ccff00]"
                      } ${isActive ? "-rotate-45" : "rotate-45"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-row gap-6 w-full lg:w-1/2 justify-between lg:justify-end relative items-start">
                  {/* Description */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out flex flex-col items-start w-full ${
                      isActive
                        ? "max-h-[800px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-4 md:pt-6 lg:pt-[72px] flex flex-col gap-6 w-full pr-0 lg:pr-12">
                      <p
                        className={`transition-colors duration-300 ease-in-out text-base md:text-lg leading-relaxed max-w-lg font-light ${
                          isHighlighted ? "text-black/80" : "text-gray-300"
                        }`}
                      >
                        {experience.description}
                      </p>

                      {/* Button */}
                      {experience.buttonText && (
                        <a
                          href={experience.buttonHref || "#project"}
                          target={
                            experience.buttonHref?.startsWith("http")
                              ? "_blank"
                              : "_self"
                          }
                          rel={
                            experience.buttonHref?.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          onClick={(event) => event.stopPropagation()}
                          className={`font-bold uppercase tracking-wider text-xs md:text-sm px-6 py-3 border transition-colors duration-300 ease-in-out inline-flex items-center gap-2 mt-4 cursor-pointer ${
                            isHighlighted
                              ? "bg-black text-[#ccff00] border-black hover:bg-black/90"
                              : "bg-[#ccff00] text-black border-[#ccff00] hover:bg-[#b3e600]"
                          }`}
                        >
                          <span className="w-2 h-2 border-t border-l border-current"></span>

                          {experience.buttonText}

                          <span className="w-2 h-2 border-b border-r border-current"></span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Desktop Arrow */}
                  <div className="hidden lg:flex flex-shrink-0 h-10 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-10 h-10 transition-all duration-300 ${
                        isHighlighted ? "text-black" : "text-[#ccff00]"
                      } ${isActive ? "-rotate-45" : "rotate-45"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Experiences;
