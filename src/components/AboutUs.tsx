import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="aboutus">
      <div className="container mx-auto px-4 max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 dark:text-white">
            About <span className="text-[#FF0054]">Brava Craft</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            At Brava Craft, we don’t just build websites — we craft{" "}
            <span className="text-[#FF0054] font-semibold">
              digital experiences
            </span>{" "}
            that resonate, inspire, and deliver measurable results. Specializing
            in custom WordPress and React solutions, our team fuses cutting-edge
            technology with design excellence to elevate your brand’s presence
            online.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-3 text-[#FF0054]">
              Innovative Solutions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We push boundaries with custom-built websites and apps that are
              fast, scalable, and tailored to your exact needs.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-3 text-[#FF0054]">
              User-Centered Design
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our designs prioritize your users — intuitive interfaces that
              captivate and convert seamlessly across devices.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-3 text-[#FF0054]">
              Data-Driven Marketing
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              From SEO to AI-powered campaigns, we help your business grow by
              reaching the right audience with precision and creativity.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you’re launching a new project or revitalizing your digital
            presence, Brava Craft is your dedicated partner in creating
            experiences that impress, engage, and convert.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
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
    </section>
  );
}
