import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Booking from "./components/Booking";
import Testimonials from "./components/Testimonials";
import Sponsors from "./components/Sponsors";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  const [isTopOfThePage, setIsTopOfThePage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfThePage(true);
      }

      if (window.scrollY !== 0) setIsTopOfThePage(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <div className="bg_wrapper z-0 min-h-full bg-hero-bg bg-cover bg-top bg-no-repeat font-medium">
        <Navbar isTopOfThePage={isTopOfThePage} />
        <Hero />
        <Services />
        <Destinations />
        <Booking />
        <Testimonials />
        <Sponsors />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default App;
