import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import "./index.css";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutUs from "@/components/AboutUs";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("darkMode") === "true" ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <main className="min-h-screen">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed right-4 top-4 z-[999] p-2 rounded-full transition-transform duration-300 cursor-pointer"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <Sun className="h-6 w-6 text-yellow-400" fill="currentColor" />
        ) : (
          <Moon className="h-6 w-6 text-gray-50" fill="currentColor" />
        )}
      </button>
      <Header />
      <AboutUs />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
