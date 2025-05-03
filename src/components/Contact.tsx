import { motion } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={contactRef}
      id="contact"
      className="py-20 bg-gradient-to-br from-[#9E0059] to-[#FF0054] dark:from-[#3a0a3a] dark:to-[#6a0f48] text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="max-w-2xl mx-auto opacity-90">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-2xl p-8 shadow-xl dark:shadow-lg dark:shadow-[#3a0a3a]/50"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <motion.label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Name
                </motion.label>
                <motion.input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF0054] focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                  placeholder="Your name"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                />
              </div>
              <div>
                <motion.label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  Email
                </motion.label>
                <motion.input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF0054] focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                  placeholder="your@email.com"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.45 }}
                />
              </div>
            </div>

            <div className="mb-6">
              <motion.label
                htmlFor="subject"
                className="block text-sm font-medium mb-2 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Subject
              </motion.label>
              <motion.input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF0054] focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                placeholder="What's this about?"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
            </div>

            <div className="mb-6">
              <motion.label
                htmlFor="message"
                className="block text-sm font-medium mb-2 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                Message
              </motion.label>
              <motion.textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF0054] focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                placeholder="Tell us about your project..."
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55 }}
              ></motion.textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-[#FF0054] hover:bg-[#FF0054]/90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md dark:shadow-[#FF0054]/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
