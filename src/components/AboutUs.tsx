import { motion } from "framer-motion";
import BravaCraftDarkImage from "../assets/BravaCraftDark.png";
import BravaCraftLightImage from "../assets/BravaCraftLight.png";

export default function AboutUs() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={BravaCraftLightImage}
              alt="Brava Craft Light"
              className="rounded-2xl w-full max-w-md object-cover block dark:hidden"
            />
            <img
              src={BravaCraftDarkImage}
              alt="Brava Craft Dark"
              className="rounded-2xl w-full max-w-md object-cover hidden dark:block"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              About <span className="text-[#FF0054]">Brava Craft</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
              Brava Craft is a creative technology company dedicated to building
              custom WordPress websites for clients who demand quality, speed,
              and a strong online presence.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
              Brava Craft is where bold ideas meet beautiful execution. We’re a
              creative digital agency that helps brands grow—not just in
              visibility, but in capability. Through branding, websites, and
              AI-powered marketing systems, we transform how businesses present,
              perform, and scale.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
              With a passionate team of designers and developers, we bring
              modern, responsive, and SEO-friendly solutions to life—always
              aligned with your business goals.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              Whether you're launching a new project or upgrading your digital
              identity, we're here to help you craft a powerful online
              experience that converts and impresses.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById("");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex cursor-pointer items-center bg-[#FF0054] hover:bg-[#9E0059]/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
