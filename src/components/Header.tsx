import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [init, setInit] = useState(false);
  const heroRef = useRef(null);

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
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#9E0059] to-black dark:from-[#3a0a3a] dark:to-[#6a0f48] "
    >
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          options={particlesOptions}
        />
      )}
      <div className="absolute inset-0 bg-opacity-50"></div>
      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-4 z-10 text-center"
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
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 flex flex-wrap justify-center"
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
          className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
        >
          Elevate your online presence with our premium WordPress solutions.
          Custom-designed websites that capture your brand's essence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
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
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
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
