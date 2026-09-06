import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import centerImage from "../assets/hero_assets/hero_center.png";

const Hero = ({ onPreloadComplete }) => {
  const [text, setText] = useState("PORTFOLIO");

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Lock scroll during animation
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    const target = "INTIYAJ...";
    const start = "PORTFOLIO";

    let iterations = 0;
    let intervalId;
    let timeoutId;
    let isMounted = true;

    // Preload center image
    const imageLoadPromise = new Promise((resolve) => {
      const img = new window.Image();

      img.src = centerImage;

      if (img.complete) {
        resolve();
      } else {
        img.onload = resolve;
        img.onerror = resolve;
      }
    });

    // Minimum animation delay
    const delayPromise = new Promise((resolve) => {
      timeoutId = setTimeout(resolve, 1000);
    });

    Promise.all([imageLoadPromise, delayPromise]).then(() => {
      if (!isMounted) return;

      intervalId = setInterval(() => {
        setText(() => {
          const newText = target
            .split("")
            .map((letter, index) => {
              if (index < Math.floor(iterations)) {
                return target[index];
              }

              if (index < start.length) {
                return start[index];
              }

              return "";
            })
            .join("");

          return newText;
        });

        if (iterations >= target.length) {
          clearInterval(intervalId);

          // GSAP Animation Sequence
          const tl = gsap.timeline({
            onComplete: () => {
              if (!isMounted) return;

              // Unlock scroll
              document.body.style.overflow = "auto";

              // Unlock rest of website
              if (onPreloadComplete) {
                onPreloadComplete();
              }
            },
          });

          // Check mobile screen
          const isMobile = window.innerWidth < 768;

          // 1. Move central text container
          tl.to(
            containerRef.current,
            {
              top: isMobile ? "20%" : "45%",
              duration: 1.5,
              ease: "power3.inOut",
            },
            "+=0.2",
          );

          // 2. Fade and slide subtitle + buttons
          tl.fromTo(
            [subtitleRef.current, buttonsRef.current],
            {
              y: 50,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              stagger: 0.2,
              ease: "power3.out",
            },
            "-=1.0",
          );

          // 3. Slide image upward
          tl.fromTo(
            imageRef.current,
            {
              y: "100vh",
            },
            {
              y: 0,
              duration: 1.5,
              ease: "power3.out",
            },
            "-=1.2",
          );
        }

        // Controls text animation speed
        iterations += 1 / 3;
      }, 50);
    });

    // Cleanup
    return () => {
      isMounted = false;

      document.body.style.overflow = "auto";

      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [onPreloadComplete]);

  return (
    <section
      className="relative min-h-screen flex items-end justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        background: "radial-gradient(circle, #222222 0%, #000000 80%)",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* Main Text Container */}
      <div
        ref={containerRef}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none flex flex-col items-center md:items-start w-max max-w-[95vw]"
      >
        {/* Main Heading */}
        <h1
          ref={textRef}
          aria-label="Intiyaj Ansari — MERN Stack Developer & WordPress Developer"
          className="text-[13vw] sm:text-[15vw] md:text-[10rem] lg:text-[14rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl pr-0 md:pr-8 leading-none uppercase text-center md:text-left"
        >
          {text}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="absolute -bottom-7 md:-bottom-12 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-8 text-white text-xs sm:text-sm md:text-2xl lg:text-4xl drop-shadow-md z-10 opacity-0 w-max text-center md:text-left tracking-wide"
        >
          <span className="font-bold">MERN Stack</span>{" "}
          <span className="font-light italic text-gray-300">Developer</span>
        </p>

        {/* Contact Buttons */}
        <div
          ref={buttonsRef}
          className="absolute -bottom-16 md:-bottom-12 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-20 flex items-center gap-2 md:gap-4 pointer-events-auto z-10 opacity-0 w-max"
        >
          {/* Arrow Button */}
          <a
            href="#contact"
            aria-label="Go to contact section"
            className="group w-8 h-8 md:w-12 md:h-12 rounded-full border border-gray-400/30 flex items-center justify-center backdrop-blur-md bg-black/40 hover:bg-white/10 hover:border-gray-400/50 transition-all duration-300 cursor-pointer"
          >
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-gray-300 transition-transform duration-300 group-hover:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 7L7 17M7 17H16M7 17V8"
              />
            </svg>
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="px-4 py-1.5 md:px-6 md:py-2.5 rounded-full border border-gray-400/30 flex items-center justify-center backdrop-blur-md bg-black/40 hover:bg-white/10 hover:border-gray-400/50 transition-all cursor-pointer"
          >
            <span className="text-gray-300 text-xs md:text-base italic font-light tracking-wider">
              Contact
            </span>
          </a>
        </div>

        {/* Screen Reader / AEO Content */}
        <p className="sr-only">
          Intiyaj Ansari is a MERN Stack Developer and WordPress Developer who
          builds modern, responsive, full-stack web applications using React.js,
          Node.js, Express.js, MongoDB and WordPress.
        </p>
      </div>

      {/* Center Image */}
      <div
        ref={imageRef}
        className="relative z-10 text-center text-white flex flex-col items-center w-full pointer-events-none translate-y-[100vh]"
      >
        <img
          src={centerImage}
          alt="Intiyaj Ansari - MERN Stack Developer and WordPress Developer"
          className="w-[80vw] max-w-xs sm:max-w-sm md:max-w-md object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        />
      </div>
    </section>
  );
};

export default Hero;
