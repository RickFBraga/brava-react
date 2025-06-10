import { motion } from "framer-motion";
import { Briefcase, Code, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-[#FF0054]" />,
      title: "Web Development",
      description:
        "Creating modern, responsive, and optimized websites focused on performance and usability.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-[#FF0054]" />,
      title: "Mobile Apps",
      description:
        "Development of hybrid apps delivering excellent performance and user experience.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-[#FF0054]" />,
      title: "Technical Consulting",
      description:
        "Technical support for decision making, software architecture, and idea validation.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Our <span className="text-[#FF0054]">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tailored digital solutions to transform your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
