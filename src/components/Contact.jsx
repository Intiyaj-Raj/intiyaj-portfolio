import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const socials = [
  {
    label: "intiyajraj786@gmail.com",
    href: "mailto:intiyajraj786@gmail.com",
    primary: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/9117392461",
  },
  {
    label: "GitHub",
    href: "https://github.com/Intiyaj-Raj",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/intiyaj-ansari/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/inti_0786/",
  },
];

const Contact = () => {
  const ref = useRef(null);

  const [activeInput, setActiveInput] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    text: "",
    type: "",
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]),
    {
      stiffness: 50,
      damping: 25,
    },
  );

  // Formspree submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const message = formData.get("message");
    const permission = formData.get("permission");

    if (!firstName || !lastName || !email || !message) {
      setStatusMessage({
        text: "Please fill in all required fields.",
        type: "error",
      });
      return;
    }

    if (!permission) {
      setStatusMessage({
        text: "Please allow permission to contact you.",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({
      text: "",
      type: "",
    });

    try {
      const response = await fetch("https://formspree.io/f/xeokyana", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatusMessage({
          text: "Message sent successfully!",
          type: "success",
        });

        form.reset();
        setActiveInput(null);
      } else {
        const data = await response.json();

        if (data.errors) {
          setStatusMessage({
            text: data.errors.map((error) => error.message).join(", "),
            type: "error",
          });
        } else {
          setStatusMessage({
            text: "Something went wrong. Please try again.",
            type: "error",
          });
        }
      }
    } catch (error) {
      console.error("Formspree error:", error);

      setStatusMessage({
        text: "Failed to send message. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative w-full min-h-screen flex flex-col bg-[#050505] text-white border-t border-white/5 overflow-hidden"
    >
      {/* Background Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Ambient Yellow/Lime Glows */}
      <div className="absolute top-0 left-0 w-[380px] h-[380px] rounded-full bg-[#ccff00]/10 blur-[140px] pointer-events-none z-0" />

      <div className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full bg-[#ccff00]/5 blur-[120px] pointer-events-none z-0" />

      {/* Decorative Watermark */}
      <motion.div
        style={{ y: smoothY }}
        aria-hidden="true"
        className="absolute inset-x-0 top-0 flex justify-center pointer-events-none z-0 overflow-hidden"
      >
        <span
          className="font-black uppercase tracking-tighter leading-none select-none mt-6"
          style={{
            fontFamily: "'Impact','Arial Black',sans-serif",
            fontSize: "clamp(80px, 20vw, 260px)",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(204,255,0,0.08)",
          }}
        >
          Contact
        </span>
      </motion.div>

      {/* Top Intro */}
      <div className="relative z-10 pt-16 pb-10 px-6 md:px-12 shrink-0">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="block w-7 h-[1.5px] bg-[#ccff00] rounded-full" />

            <span className="text-[10px] text-[#ccff00] font-bold tracking-[0.32em] uppercase">
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Let's build something{" "}
            <span className="text-[#ccff00]">extraordinary.</span>
          </motion.h2>
        </div>
      </div>

      {/* Main Contact Card */}
      <div className="relative z-10 flex-1 min-h-0 flex items-stretch justify-end">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full md:w-[90%] h-full bg-[#ccff00] text-black flex flex-col p-8 md:p-12 lg:p-14 overflow-hidden"
        >
          {/* Top Shimmer */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />

          {/* Inner Shadow */}
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

          {/* Social Pills */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="flex flex-wrap items-center justify-between gap-3 mb-8 relative z-10"
          >
            <div className="flex flex-wrap items-center gap-2.5">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.28 + i * 0.07,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className={`px-4 py-2.5 rounded-full font-bold text-xs whitespace-nowrap transition-all duration-200 ${
                    s.primary
                      ? "bg-black text-[#ccff00] hover:bg-white hover:text-black shadow-md"
                      : "bg-black/10 border border-black/30 text-black hover:bg-black hover:text-[#ccff00]"
                  }`}
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-black/20 mb-8 relative z-10" />

          {/* Contact Form */}
          <motion.form
            action="https://formspree.io/f/xeokyana"
            method="POST"
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
              delay: 0.32,
            }}
            className="flex-1 flex flex-col gap-8 relative z-10"
          >
            {/* Inputs + Message */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 flex-1">
              {/* Left Inputs */}
              <div className="flex-1 flex flex-col gap-7">
                {/* First Name */}
                <div className="relative">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    required
                    onFocus={() => setActiveInput("firstName")}
                    onBlur={() => setActiveInput(null)}
                    className="w-full bg-transparent border-b border-black/40 pb-2.5 text-sm text-black placeholder-black/60 font-medium focus:outline-none rounded-none"
                  />

                  <span
                    className="absolute bottom-0 left-0 h-[2px] bg-black rounded-full transition-all duration-300"
                    style={{
                      width: activeInput === "firstName" ? "100%" : "0%",
                    }}
                  />
                </div>

                {/* Last Name */}
                <div className="relative">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    required
                    onFocus={() => setActiveInput("lastName")}
                    onBlur={() => setActiveInput(null)}
                    className="w-full bg-transparent border-b border-black/40 pb-2.5 text-sm text-black placeholder-black/60 font-medium focus:outline-none rounded-none"
                  />

                  <span
                    className="absolute bottom-0 left-0 h-[2px] bg-black rounded-full transition-all duration-300"
                    style={{
                      width: activeInput === "lastName" ? "100%" : "0%",
                    }}
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    onFocus={() => setActiveInput("email")}
                    onBlur={() => setActiveInput(null)}
                    className="w-full bg-transparent border-b border-black/40 pb-2.5 text-sm text-black placeholder-black/60 font-medium focus:outline-none rounded-none"
                  />

                  <span
                    className="absolute bottom-0 left-0 h-[2px] bg-black rounded-full transition-all duration-300"
                    style={{
                      width: activeInput === "email" ? "100%" : "0%",
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex-1 relative flex flex-col">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  onFocus={() => setActiveInput("message")}
                  onBlur={() => setActiveInput(null)}
                  className="flex-1 w-full bg-transparent border-b border-black/40 pb-2.5 text-sm text-black placeholder-black/60 font-medium focus:outline-none resize-none rounded-none min-h-[140px]"
                />

                <span
                  className="absolute bottom-0 left-0 h-[2px] bg-black rounded-full transition-all duration-300"
                  style={{
                    width: activeInput === "message" ? "100%" : "0%",
                  }}
                />
              </div>
            </div>

            {/* Status Message */}
            {statusMessage.text && (
              <div
                className={`text-sm px-4 py-3 rounded-lg border ${
                  statusMessage.type === "success"
                    ? "bg-black/10 border-black/30 text-black"
                    : "bg-red-600/10 border-red-700/40 text-red-800"
                }`}
              >
                {statusMessage.text}
              </div>
            )}

            {/* Bottom Area */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mt-auto">
              {/* Checkbox */}
              <div className="flex flex-col gap-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id="permission"
                    name="permission"
                    value="Yes"
                    required
                    className="mt-0.5 w-3.5 h-3.5 shrink-0 cursor-pointer accent-black"
                  />

                  <span className="text-black text-sm font-semibold leading-snug">
                    I give permission to contact me at this email address.
                  </span>
                </label>

                <p className="text-black/60 text-[11px] leading-relaxed pl-6 max-w-sm">
                  Your information is used only to respond to your message.
                  Please make sure your email address is correct.
                </p>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={
                  !isSubmitting
                    ? {
                        scale: 1.05,
                        y: -2,
                      }
                    : {}
                }
                whileTap={
                  !isSubmitting
                    ? {
                        scale: 0.97,
                      }
                    : {}
                }
                className="shrink-0 flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-black text-[#ccff00] font-black text-sm hover:bg-white hover:text-black transition-all duration-250 shadow-lg hover:shadow-2xl group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
