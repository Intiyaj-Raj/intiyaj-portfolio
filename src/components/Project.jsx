import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import shopbagImg from "../assets/images/projects/shopbag.svg";
import nestivoImg from "../assets/images/projects/nestivo.svg";
import ybroImg from "../assets/images/projects/ybro.svg";
import onlineImg from "../assets/images/projects/online.svg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "ShopBag",
    title: (
      <>
        SHOP <br />
        <span className="font-light italic text-gray-300 font-serif">Bag</span>
      </>
    ),
    category: "Full-Stack MERN E-commerce Web App",
    tools: "React.js, Node.js, Express.js, MongoDB, REST APIs",
    description:
      "ShopBag is a full-stack MERN e-commerce web application built with React.js, Node.js, Express.js and MongoDB. It features product listings, a shopping cart, user authentication, and REST API-driven checkout, showcasing full-stack web development with the MERN stack.",
    image: shopbagImg,
    githubLink: "https://github.com/Intiyaj-Raj",
  },
  {
    name: "Nestivo",
    title: (
      <>
        NESTI <br />
        <span className="font-light italic text-gray-300 font-serif">Vo</span>
      </>
    ),
    category: "Property Listing & Booking Platform",
    tools: "React.js, Node.js, Express.js, MongoDB",
    description:
      "Nestivo is an Airbnb-style property listing and booking platform developed with React.js, Node.js, Express.js and MongoDB. It allows users to browse listings, view property details, and manage bookings through a responsive, full-stack MERN architecture.",
    image: nestivoImg,
    githubLink: "https://github.com/Intiyaj-Raj",
  },
  {
    name: "Ybro",
    title: (
      <>
        YBRO <br />
        <span className="font-light italic text-gray-300 font-serif">
          Social
        </span>
      </>
    ),
    category: "Full-Stack Social Media Web App",
    tools: "React.js, Node.js, Express.js, MongoDB, Authentication",
    description:
      "Ybro is a full-stack social media web application featuring user authentication, posts, likes, and an interactive feed. Built with React.js, Node.js, Express.js and MongoDB, it demonstrates real-world MERN Stack Developer skills in building social platforms.",
    image: ybroImg,
    githubLink: "https://github.com/Intiyaj-Raj",
  },
  {
    name: "Online",
    title: (
      <>
        ONLINE <br />
        <span className="font-light italic text-gray-300 font-serif">
          Booking
        </span>
      </>
    ),
    category: "Movie Ticket Booking Application",
    tools: "JavaScript, HTML5, CSS3, EmailJS, Local Storage",
    description:
      "Online is a movie ticket booking application built with JavaScript, HTML5 and CSS3, using EmailJS for booking confirmations and Local Storage for persisting seat selections and user data on the frontend.",
    image: onlineImg,
    githubLink: "https://github.com/Intiyaj-Raj",
  },
];

const Project = ({ onCtaClick }) => {
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    cardRefs.current.forEach((card) => {
      if (card) {
        const imageBox = card.querySelector(".project-image-box");
        const img = card.querySelector(".project-image");
        const textBox = card.querySelector(".project-text-box");

        if (imageBox) {
          gsap.fromTo(
            imageBox,
            { y: 50, opacity: 0, scale: 0.96 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

        if (img) {
          gsap.to(img, {
            y: -25,
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (textBox) {
          gsap.fromTo(
            textBox,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              delay: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      }
    });
  }, []);

  return (
    <div
      id="project"
      className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16"
    >
      {/* Top Header Section */}
      <div
        ref={headerRef}
        className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-8 lg:gap-0 mb-16 lg:mb-32"
      >
        {/* Left Giant Title */}
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-2 sm:gap-3 flex-wrap">
            Selected
            <span className="font-light italic text-gray-300 lowercase font-serif pr-2 pt-1 md:pt-4">
              work
            </span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6 md:mb-8">
            As a MERN Stack Developer, Intiyaj Ansari builds full-stack web
            applications with React.js, Node.js, Express.js and MongoDB, focused
            on clean code, responsive UI, and real-world functionality.
          </p>
          <button
            onClick={onCtaClick}
            className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-medium text-xs md:text-sm hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center gap-2"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects List - Alternating Layout */}
      <div className="flex flex-col gap-16 md:gap-24 lg:gap-40 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={proj.name}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center justify-between gap-8 md:gap-12 lg:gap-16 w-full group`}
            >
              {/* Image Side */}
              <div className="project-image-box w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-lg">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="project-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Text Side */}
              <div className="project-text-box w-full lg:w-5/12 flex flex-col items-start">
                <span className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-3 md:mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-4 md:mb-6">
                  {proj.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#ccff00]/10 text-[#ccff00] text-xs font-semibold px-3 py-1 rounded-full border border-[#ccff00]/20">
                    {proj.category}
                  </span>
                  <span className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full border border-white/10">
                    {proj.tools}
                  </span>
                </div>

                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-6 md:mb-8">
                  {proj.description}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                  <a
                    href={proj.liveDemoLink || proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer px-6 py-3 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-medium hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center justify-center gap-2 text-center"
                  >
                    {proj.liveDemoLink ? "Live Demo" : "Live Repository"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer px-6 py-3 rounded-full border border-white/30 text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 text-center"
                  >
                    GitHub Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
