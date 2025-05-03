import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Pricing() {
  const contactRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef(null);

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
      ref={pricingRef}
      id="pricing"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Simple, Transparent <span className="text-[#FF0054]">Pricing</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the package that fits your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              title: "Starter",
              price: "$999",
              description:
                "Perfect for small businesses just getting started online.",
              features: [
                "5 Page WordPress Website",
                "Mobile Responsive Design",
                "Basic SEO Setup",
                "Contact Form",
                "Social Media Integration",
                "30 Days Support",
              ],
              featured: false,
            },
            {
              title: "Business",
              price: "$1,999",
              description:
                "Ideal for growing businesses that need more features.",
              features: [
                "10 Page WordPress Website",
                "Mobile Responsive Design",
                "Advanced SEO Setup",
                "Contact Form & Newsletter",
                "Social Media Integration",
                "E-Commerce Ready (up to 50 products)",
                "90 Days Support",
                "2 Rounds of Revisions",
              ],
              featured: true,
            },
            {
              title: "Enterprise",
              price: "$3,999",
              description:
                "For established businesses requiring a comprehensive solution.",
              features: [
                "20+ Page WordPress Website",
                "Custom Design & Animations",
                "Advanced SEO & Analytics",
                "Full E-Commerce Functionality",
                "Membership Area",
                "Custom Functionality",
                "1 Year Support & Maintenance",
                "Unlimited Revisions",
              ],
              featured: false,
            },
          ].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 bg-gray-50 dark:bg-gray-800 ${
                plan.featured
                  ? "border-2 border-[#FF0054] relative"
                  : "border border-gray-200 dark:border-gray-700"
              }`}
            >
              {plan.featured && (
                <div className="bg-[#FF0054] text-white text-center py-1 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8 bg-gray-50 dark:bg-gray-800">
                <h3 className="text-2xl font-bold mb-2 dark:text-white">
                  {plan.title}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-300">
                    {" "}
                    / one-time
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-[#FF0054] mr-2" />
                      <span className="dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(contactRef);
                  }}
                  className={`block text-center py-3 px-6 rounded-full font-bold transition-colors duration-300 ${
                    plan.featured
                      ? "bg-[#FF0054] hover:bg-[#FF0054]/90 text-white"
                      : "bg-white dark:bg-gray-700 border-2 border-[#9E0059] text-[#9E0059] dark:text-white hover:bg-[#9E0059] hover:text-white"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
