import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Newsletter from "./sections/Newsletter";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Clients />
      <Newsletter />
      <Contact />
    </>
  );
}
