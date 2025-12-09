import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Realtor from "./components/Realtor";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Newsletter from "./sections/Newsletter";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Realtor />
      <WhyChooseUs />
      <AboutUs />
      <Projects />
      <Clients />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
}
