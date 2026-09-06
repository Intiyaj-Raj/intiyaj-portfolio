import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

const TagCard = ({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const cardTopRelativeToContainer = cardRect.top - containerRect.top;

    const containerHeight = containerRect.height;

    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <article
      ref={ref}
      data-aos={aosType || "fade-up"}
      data-aos-delay={aosDelay}
      aria-label={`${number} ${title} development process`}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${
        className
      } ${
        isActive
          ? "bg-[#ccff00] border border-[#ccff00] shadow-[0_20px_50px_rgba(204,255,0,0.25)]"
          : "bg-[#050505] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:border-white/20"
      }`}
    >
      {/* Hole Punch */}
      <div
        aria-hidden="true"
        className="w-5 h-5 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] absolute top-4 border border-white/20 z-10 flex items-center justify-center"
      >
        <div
          className={`w-2 h-2 rounded-full opacity-60 ${
            isActive ? "bg-black" : "bg-[#ccff00]"
          }`}
        />
      </div>

      {/* Inner Container */}
      <div
        className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
          isActive ? "bg-black/10" : "bg-white/5"
        }`}
      >
        {/* Number */}
        <span
          aria-hidden="true"
          className={`text-3xl font-black mb-3 tracking-tight transition-colors duration-700 ${
            isActive ? "text-black" : "text-[#ccff00]"
          }`}
        >
          {number}
        </span>

        {/* Title */}
        <h3
          className={`text-xl md:text-2xl font-black uppercase mb-2 tracking-tight leading-tight transition-colors duration-700 ${
            isActive ? "text-black" : "text-white"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm md:text-base font-light leading-relaxed transition-colors duration-700 ${
            isActive ? "text-black/80" : "text-gray-400"
          }`}
        >
          {text}
        </p>
      </div>
    </article>
  );
};

const Services = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section
      id="services"
      ref={containerRef}
      aria-labelledby="services-heading"
      className="bg-[#050505] text-white pt-12 pb-12 md:pb-24 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full relative overflow-hidden font-sans border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto relative md:h-[1350px]">
        {/* SEO + AEO Header */}
        <header
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0"
        >
          {/* Label */}
          <div className="inline-block border border-[#ccff00]/30 rounded-full px-5 py-1.5 text-xs text-[#ccff00] font-bold tracking-widest uppercase mb-8 bg-[#ccff00]/10">
            Development Workflow
          </div>

          {/* Main Heading */}
          <div className="w-full lg:w-12/12 overflow-visible">
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-2 sm:gap-3 flex-wrap"
            >
              How We
              <span className="font-light italic text-gray-300 lowercase font-serif pr-2 pt-1 md:pt-4">
                Build
              </span>
            </h2>
          </div>

          {/* SEO/AEO Description */}
          <p className="text-gray-400 text-sm md:text-base max-w-sm font-light leading-relaxed">
            Intiyaj Ansari follows a structured web development workflow to
            create scalable, fast, accessible, and user-focused MERN Stack and
            WordPress web applications.
          </p>
        </header>

        {/* Desktop SVG Animated Dashed Line */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          <mask id="path-mask">
            <motion.path
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="#ccff00"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
            className="drop-shadow-sm"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="4"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>

          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#ccff00"
            strokeWidth="4"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Development Process */}
        <div
          className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0"
          aria-label="Intiyaj Ansari web development process"
        >
          {/* Card 01 */}
          <TagCard
            number="01"
            title="Define"
            text="Intiyaj Ansari starts every web development project by understanding business goals, user requirements, SEO needs, and technical constraints."
            className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Card 02 */}
          <TagCard
            number="02"
            title="Design"
            text="Creating intuitive, responsive, accessible, and pixel-perfect interfaces that provide a fast and engaging user experience."
            className="md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Card 03 */}
          <TagCard
            number="03"
            title="Build"
            text="Building scalable frontend and backend systems using modern technologies such as React.js, Node.js, Express.js, MongoDB, MERN Stack, and WordPress."
            className="md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3"
            aosType="fade-left"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Card 04 */}
          <TagCard
            number="04"
            title="Launch"
            text="Testing, performance optimization, SEO optimization, accessibility improvements, and deployment to reliable cloud hosting platforms."
            className="md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3"
            aosType="fade-right"
            aosDelay="400"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* AEO Supporting Content */}
          <div
            className="hidden md:block absolute top-[1250px] left-[60%] font-sans text-3xl text-gray-600 rotate-6"
            aria-label="Web development by Intiyaj Ansari"
          >
            Ready to be delivered!
          </div>
        </div>

        {/* AEO FAQ Content */}
        <div className="sr-only">
          <h2>How does Intiyaj Ansari build websites?</h2>

          <p>
            Intiyaj Ansari follows four main steps: define, design, build, and
            launch. This process helps create responsive, scalable,
            SEO-friendly, and user-focused websites.
          </p>

          <h3>What technologies does Intiyaj Ansari use?</h3>

          <p>
            Intiyaj Ansari works with modern web technologies including
            React.js, JavaScript, TypeScript, Node.js, Express.js, MongoDB, MERN
            Stack, Tailwind CSS, and WordPress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
