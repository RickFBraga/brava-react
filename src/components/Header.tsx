import Contact from "@/components/Contact";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  Headset,
  LayoutDashboard,
  Menu,
  ThumbsUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo.png";

export default function Header() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const [init, setInit] = useState(false);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);

  const menuItems = [
    { name: "About Us", href: "#aboutus" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];
  const features = [
    {
      icon: <ThumbsUp className="text-[#FF0054]" size={32} />,
      title: "Commitment to Quality",
      description:
        "Every project is crafted with dedication and attention to detail.",
    },
    {
      icon: <Headset className="text-[#FF0054]" size={32} />,
      title: "Personalized Support",
      description:
        "We're always available to understand and meet your specific needs.",
    },
    {
      icon: <LayoutDashboard className="text-[#FF0054]" size={32} />,
      title: "User-Centered Design",
      description:
        "We design intuitive and enjoyable experiences that truly work.",
    },
  ];
  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#FF0054",
      },
      links: {
        color: "#9E0059",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: 0,
        enable: true,
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <section
      ref={heroRef}
      id="contact"
      className="relative h-screen overflow-hidden md:mt-0 pt-10 bg-gradient-to-br from-[#9E0059] to-black dark:from-[#3a0a3a] dark:to-[#6a0f48]"
    >
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={{
            ...particlesOptions,
            particles: {
              ...particlesOptions.particles,
              color: {
                value: ["#FF0054", "#FFFFFF", "#9E0059"],
              },
              move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: true,
                straight: false,
                outModes: "out",
              },
            },
          }}
        />
      )}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-radial-gradient from-[#FF0054]/20 via-transparent to-transparent opacity-70 animate-pulse-slow"></div>
      </div>

      <nav className="fixed w-full top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="px-6 py-4 flex justify-between items-center">
          <motion.a
            href="#home"
            className="text-3xl flex items-center gap-3 font-bold text-[#FF0054] group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={Logo}
                alt="BravaCraft Logo"
                className="w-9 h-9 rounded-full group-hover:shadow-[0_0_20px_#FF0054] transition-all"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
              />
            </motion.div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF0054] to-[#FF8A9E]">
              BravaCraft
            </span>
          </motion.a>

          <div className="hidden md:flex space-x-8 mr-16 items-center">
            {menuItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-[#FF0054] transition-colors font-medium relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF0054] to-[#FF8A9E]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-[#FF0054] to-[#FF3366] rounded-full text-white font-medium shadow-lg hover:shadow-[#FF0054]/50 transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255, 0, 84, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>

          <motion.button
            className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label="Menu"
          >
            <Menu size={28} />
          </motion.button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gradient-to-b from-black/95 to-[#1a001a] px-6 py-4 border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {menuItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="block py-3 text-white/90 hover:text-[#FF0054] transition-colors border-b border-white/5 last:border-0 group"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1 + i * 0.05,
                  duration: 0.3,
                }}
              >
                <div className="flex items-center">
                  <motion.span
                    className="w-2 h-2 bg-[#FF0054] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  {item.name}
                </div>
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              className="block mt-4 py-3 px-4 text-center bg-gradient-to-r from-[#FF0054] to-[#FF3366] rounded-full text-white font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + menuItems.length * 0.05 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        )}
      </nav>

      <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-6 relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className="z-10 w-full lg:w-1/2 py-12 lg:py-0"
        >
          <motion.div className="overflow-hidden">
            <motion.h1
              initial={{
                opacity: 0,
                y: -50,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.1,
              }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 flex flex-wrap justify-center lg:justify-start leading-tight"
            >
              {["B", "r", "a", "v", "a"].map((letter, i) => (
                <motion.span
                  key={`brava-${i}`}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-[#FF0054] transition-colors cursor-default"
                >
                  {letter}
                </motion.span>
              ))}

              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.87, 0, 0.13, 1],
                }}
                className="inline-block mx-2 w-0 overflow-hidden"
              >
                {" "}
              </motion.span>

              {["C", "r", "a", "f", "t"].map((letter, i) => (
                <motion.span
                  key={`craft-${i}`}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="transition-colors cursor-default"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
          >
            Elevate your brand with{" "}
            <span className="text-[#FF0054] font-semibold">
              seamless digital experiences
            </span>
            . We design and build beautiful, intuitive websites using WordPress
            and React - crafted to engage and convert. Backed by strategic
            marketing, we ensure your message reaches the right audience with
            precision.
          </motion.p>

          <motion.div
            className="flex flex-wrap md:flex-nowrap justify-center gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 w-full max-w-xs"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-xl font-bold text-white mb-1">
                  {item.title}
                </div>
                <div className="text-white/80 text-sm">{item.description}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          ></motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
          className="w-full lg:w-[45%] rounded-2xl flex items-center justify-center lg:justify-end relative z-10 mt-12 lg:mt-18"
        >
          <motion.div
            className="bg-gradient-to-br from-white/5 to-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-5 w-full max-w-md shadow-xl"
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Ready to <span className="text-[#FF0054]">Elevate</span> Your
              Brand?
            </motion.h2>

            <Contact />

            <motion.div
              className="mt-6 text-center text-white/70 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              We'll get back to you within 24 hours
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center text-white/80 hover:text-white cursor-pointer"
          onClick={() =>
            window.scrollBy({
              top: window.innerHeight - 100,
              behavior: "smooth",
            })
          }
        >
          <div className="text-sm mb-2">Explore More</div>
          <motion.div
            className="h-8 w-8 rounded-full border-2 border-white/50 flex items-center justify-center"
            whileHover={{
              borderColor: "#FF0054",
              scale: 1.1,
            }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-[#FF0054] opacity-20 blur-[100px] pointer-events-none"></div>
    </section>
  );
}
