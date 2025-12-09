import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-gray-900">
          Real<span className="text-orange-500">Trust</span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 text-gray-600 font-medium">
          <a href="#projects" className="hover:text-orange-500 transition">
            Projects
          </a>
          <a href="#clients" className="hover:text-orange-500 transition">
            Clients
          </a>
          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>

          {/* Admin Button */}
          <a
            href="/admin"
            className="bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold
            hover:bg-orange-600 transition shadow-sm"
          >
            Admin
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="block md:hidden text-3xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium animate-slideDown">
          <a onClick={() => setOpen(false)} href="#projects" className="block hover:text-orange-500">
            Projects
          </a>
          <a onClick={() => setOpen(false)} href="#clients" className="block hover:text-orange-500">
            Clients
          </a>
          <a onClick={() => setOpen(false)} href="#contact" className="block hover:text-orange-500">
            Contact
          </a>

          {/* Admin button mobile */}
          <a
            onClick={() => setOpen(false)}
            href="/admin"
            className="block bg-orange-500 text-white text-center py-2 rounded-lg font-semibold hover:bg-orange-600"
          >
            Admin
          </a>
        </div>
      )}
    </nav>
  );
}
