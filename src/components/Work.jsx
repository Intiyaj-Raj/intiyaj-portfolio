import shopBag from "../assets/images/projects/shopBag.webp";
import nestivo from "../assets/images/projects/nestivo.webp";
import iNotebook from "../assets/images/projects/inotebook.webp";
import weather from "../assets/images/projects/weather.webp";
import iTyping from "../assets/images/projects/iTyping.webp";

const works = [
  {
    id: "shopBag",
    href: "https://shopbag-ecommerce-webapp.vercel.app/",
    github: "https://github.com/Intiyaj-Raj/Full-Stack-Project",
    image: shopBag,
    name: "ShopBag",
    role: "(MERN Stack E-Commerce)",
    description:
      "A full-stack MERN e-commerce web application built with React.js, Node.js, Express.js, and MongoDB. Includes product catalog, shopping cart, user authentication, admin product management, REST APIs, and responsive design.",
    color: "#459bd5",
    textOnBadge: "white",
    imageSide: "left",
    imageAlt: "ShopBag MERN stack e-commerce project by Intiyaj Ansari",
  },
  {
    id: "nestivo",
    href: "https://nestivo-2y2o.onrender.com/",
    github: "https://github.com/Intiyaj-Raj/Nestivo",
    image: nestivo,
    name: "Nestivo",
    role: "(MERN Stack Booking Platform)",
    description:
      "An Airbnb-style property listing and booking platform built with React.js, Node.js, Express.js, and MongoDB. Includes authentication, property listings, booking workflows, RESTful APIs, and structured MongoDB data models.",
    color: "#ffe578",
    textOnBadge: "black",
    imageSide: "right",
    imageAlt: "Nestivo MERN stack booking platform project by Intiyaj Ansari",
  },
  {
    id: "iNotebook",
    href: "https://inotebook-by-intiyaj.vercel.app/",
    github: "https://github.com/Intiyaj-Raj/Notebook",
    image: iNotebook,
    name: "iNotebook",
    role: "(MERN Stack Web App)",
    description:
      "A full-stack web application built using the MERN stack with a focus on modern React.js interfaces, backend API integration, database management, authentication, and responsive user experiences.",
    color: "#fc815c",
    textOnBadge: "white",
    imageSide: "left",
    imageAlt: "iNotebook MERN stack web application project by Intiyaj Ansari",
  },
  {
    id: "weather",
    href: "https://intiyajweatherapp.netlify.app/",
    github:
      "https://github.com/Intiyaj-Raj/ReactJS-Project/tree/main/Weather/weatherApp",
    image: weather,
    name: "Weather App",
    role: "(React.js Weather Application)",
    description:
      "A responsive weather application built with React.js that uses a weather API to fetch and display real-time weather information based on the selected location. Designed with a clean interface and responsive layout for a smooth experience across devices.",
    color: "#47afa1",
    textOnBadge: "white",
    imageSide: "right",
    imageAlt: "React.js weather application project by Intiyaj Ansari",
  },
  {
    id: "iTyping",
    href: "https://ityping-webapp.vercel.app/",
    github: "",
    image: iTyping,
    name: "iTyping",
    role: "(React + TypeScript)",
    description:
      "A modern typing practice web application built with React and TypeScript, designed to provide a responsive and interactive typing experience with a clean user interface and smooth frontend interactions.",
    color: "#fc815c",
    textOnBadge: "white",
    imageSide: "left",
    imageAlt: "iTyping React TypeScript typing application by Intiyaj Ansari",
  },
];

const tags = [
  "react.js",
  "express.js",
  "node.js",
  "mongoDB",
  "mongoose",
  "css",
  "javascript",
  "tailwindCSS",
];

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function TagList() {
  return (
    <ul className="flex flex-wrap gap-2 mt-2" aria-label="Technologies used">
      {tags.map((tag) => (
        <li
          key={tag}
          className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
        >
          #{tag}
        </li>
      ))}
    </ul>
  );
}

function WorkItem({ work }) {
  const isImageLeft = work.imageSide === "left";

  const imageBlock = (
    <a
      href={work.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${work.name} project by Intiyaj Ansari`}
      title={`${work.name} - Project by Intiyaj Ansari`}
      className={`relative flex justify-center w-full sm:justify-start ${
        isImageLeft ? "" : "order-1 sm:order-2"
      }`}
    >
      <div
        className={`relative flex flex-col items-center duration-200 ease-in-out group sm:hover:scale-105 ${
          isImageLeft ? "" : "sm:ml-auto"
        }`}
      >
        <img
          className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
          src={work.image}
          alt={work.imageAlt}
          loading="lazy"
          decoding="async"
          width="400"
          height="300"
        />

        <span
          className="flex group-hover:-top-14 ease-jump duration-200 sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
          style={{
            backgroundColor: work.color,
            color: work.textOnBadge === "black" ? "#000" : "#fff",
          }}
          aria-hidden="true"
        >
          {work.name}
          <ExternalLinkIcon />
        </span>
      </div>
    </a>
  );

  const textBlock = (
    <div className={`w-full ${isImageLeft ? "" : "order-2 sm:order-1"}`}>
      <h3
        className="font-bold text-2xl md:text-4xl"
        style={{ color: work.color }}
      >
        {work.name}
      </h3>

      <span className="text-base md:text-lg" style={{ color: work.color }}>
        {work.role}
      </span>

      <p className="mt-2 text-sm text-justify md:text-base">
        {work.description}
      </p>

      <TagList />
      <a
        href={work.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full
             border border-[#1788ae] text-[#1788ae] font-semibold
             text-sm md:text-base
             transition-all duration-300
             hover:bg-[#1788ae] hover:text-white hover:scale-105"
        aria-label={`View ${work.name} source code`}
      >
        Source Code
        <ExternalLinkIcon />
      </a>
    </div>
  );

  return (
    <article
      className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative first:mt-8 first:sm:mt-20"
      aria-labelledby={`${work.id}-title`}
    >
      {/* Horizontal Line */}
      <div
        className={`h-[1px] absolute top-1/2 hidden sm:block bg-[#1788ae] ${
          isImageLeft ? "left-1/4 right-1/2" : "left-1/2 right-1/4"
        }`}
        aria-hidden="true"
      />

      {/* Center Dot */}
      <div
        className="w-4 h-4 rounded-full border-[3px] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        style={{ borderColor: work.color }}
        aria-hidden="true"
      />

      {isImageLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </article>
  );
}

export default function LatestWorks() {
  return (
    <section
      id="latest-works"
      aria-labelledby="latest-works-heading"
      className="relative w-full bg-[#050505] px-4 sm:px-8 md:px-16 lg:px-24 pb-8 sm:pb-16 text-white"
    >
      <div className="relative z-20 flex flex-col items-center justify-center w-full pb-10">
        <h2
          id="latest-works-heading"
          className="relative px-6 py-3 rounded-xl bg-[#050505] text-center"
        >
          <span
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter 
            text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-700 
            drop-shadow-2xl leading-tight"
          >
            Latest Works
          </span>
        </h2>

        {/* SEO supporting text - visually hidden */}
        <p className="sr-only">
          Explore the latest web development projects by Intiyaj Ansari,
          including MERN stack, React.js, TypeScript, e-commerce, booking,
          weather, and typing applications.
        </p>
      </div>

      {works.map((work) => (
        <WorkItem key={work.id} work={work} />
      ))}
      {/* View All Projects Button */}
      <div className="flex justify-center mt-12 sm:mt-16 relative z-20">
        <a
          href="https://intiyajansarifullstackdeveloper.netlify.app/work/work.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full
               bg-[#1788ae] text-white font-semibold
               text-sm sm:text-base
               transition-all duration-300
               hover:scale-105 hover:bg-[#126b8a]
               shadow-[0_0_20px_rgba(23,136,174,0.35)]"
          aria-label="View all projects by Intiyaj Ansari"
        >
          View All Projects
          <ExternalLinkIcon />
        </a>
      </div>
      {/* Vertical Center Line */}
      <div
        className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      />
    </section>
  );
}
