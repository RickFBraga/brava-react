import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function submitForm() {
    if (!firstName || lastName || !email || !phone || !message) {
      toast("Por favor, preencha todos os campos!");
      return;
    }

    const formData = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    const endpoint = "http://localhost:3000/contact";

    try {
      await axios.post(endpoint, formData);
      toast.success("Cadastro feito com sucesso!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao fazer o cadastro.");
    }
  }

  return (
    <div ref={contactRef} className="w-full">
      <ToastContainer position="top-center" autoClose={3000} />

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6 shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <motion.h2
          className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Contact Us
        </motion.h2>

        {/* Grid responsivo para nomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-xs md:text-sm font-medium text-white/80 mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 text-sm md:text-base bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-[#FF0054]"
              placeholder="First name"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-xs md:text-sm font-medium text-white/80 mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 text-sm md:text-base bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-[#FF0054]"
              placeholder="Last name"
            />
          </div>
        </div>

        {/* Campos individuais */}
        <div className="space-y-3 md:space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-xs md:text-sm font-medium text-white/80 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-sm md:text-base bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-[#FF0054]"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs md:text-sm font-medium text-white/80 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 text-sm md:text-base bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-[#FF0054]"
              placeholder="(123) 456-7890"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs md:text-sm font-medium text-white/80 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 text-sm md:text-base bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-[#FF0054]"
              placeholder="Tell us about your project..."
            />
          </div>
        </div>

        {/* Botão de submit */}
        <motion.button
          type="submit"
          className="w-full mt-4 md:mt-6 bg-gradient-to-r from-[#FF0054] to-[#FF3366] text-white text-sm md:text-base font-medium py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}
