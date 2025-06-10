import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import "./index.css";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import AboutUs from "@/components/AboutUs";
import Services from "./components/Services";

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
        className={`fixed top-5 right-4 z-[999] p-2 rounded-full transition-all cursor-pointer ${
          darkMode
            ? "text-white hover:bg-white/10"
            : "text-white hover:bg-black/10"
        }`}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      <Header />
      <AboutUs />
      <Services />
      <Pricing />
      <Footer />
    </main>
  );
}

export default App;
