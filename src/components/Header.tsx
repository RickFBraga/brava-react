import Contact from "@/components/Contact";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo.png";

export default function Header() {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [init, setInit] = useState(false);
  const heroRef = useRef(null);
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

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

  const scrollToSection = (
    elementRef: React.RefObject<HTMLElement | null>
  ): void => {
    if (elementRef?.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    } else {
      console.warn("Element reference not available");
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-[#9E0059] to-black dark:from-[#3a0a3a] dark:to-[#6a0f48]"
    >
      <nav className="absolute top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
        <div className="px-4 py-4 flex justify-between items-center">
          {/* Logo com animação */}
          <motion.a
            href="#home"
            className="text-3xl flex items-center gap-3 font-bold text-[#FF0054]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.img
              src={Logo}
              alt=""
              className="w-9 h-9 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            />
            BravaCraft
          </motion.a>

          {/* Itens de navegação com animação em cascata */}
          <div className="hidden md:flex space-x-8 mr-16">
            {menuItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#FF0054] transition-colors font-medium relative"
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
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0054]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Botão mobile com animação */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Menu size={24} />
          </motion.button>
        </div>

        {/* Menu mobile com animação */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-black/90 px-4 py-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="block py-2 text-white hover:text-[#FF0054] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1 + i * 0.05,
                  duration: 0.3,
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </nav>
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          options={particlesOptions}
        />
      )}
      <div className="absolute inset-0 bg-opacity-50"></div>

      <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-4">
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
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 flex flex-wrap justify-center lg:justify-start"
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
                  className="text-[#FF0054]"
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
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto lg:mx-0"
          >
            Elevate your online presence with our premium WordPress solutions.
            Custom-designed websites that capture your brand's essence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(portfolioRef);
              }}
              className="bg-[#FF0054] hover:bg-[#FF0054]/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(contactRef);
              }}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full rounded-md flex items-center justify-center lg:justify-end relative z-10 "
        >
          <div className=" bg-transparent p-2 ml-40 rounded-2xl mt-20 w-full">
            <Contact />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 lg:hidden">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="text-white"
        >
          <ArrowRight className="h-8 w-8 rotate-90" />
        </motion.div>
      </div>
    </section>
  );
}
